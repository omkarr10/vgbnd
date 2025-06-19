import React, { useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import styles from '../assets/css/BookNow.module.css';
import { FaPaypal } from 'react-icons/fa';
import { SiApplepay, SiGooglepay } from 'react-icons/si';
import html2pdf from 'html2pdf.js';

const BookNow = () => {
  const { state } = useLocation();
  const selectedLocation = state?.location || "";

  const [guests, setGuests] = useState(1);
  const [total, setTotal] = useState(2500);
  const [receiptData, setReceiptData] = useState(null);
  const receiptRef = useRef(null);

  const handleGuestChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setGuests(value);
    setTotal(value * 2500);
  };

  const isValidAge = (dobStr) => {
    const today = new Date();
    const dob = new Date(dobStr);
    const age = today.getFullYear() - dob.getFullYear() -
      (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) ? 1 : 0);
    return age >= 18;
  };

  const isValidDates = (arrivalStr, leavingStr) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const arrival = new Date(arrivalStr);
    const leaving = new Date(leavingStr);
    return arrival >= today && leaving >= arrival;
  };

  const isValidID = (type, number) => {
    const idValidation = {
      "aadhaar card": /^\d{12}$/,
      "pan card": /^[A-Z]{5}[0-9]{4}[A-Z]$/,
      "voter id": /^[A-Z]{3}[0-9]{7}$/
    };
    const key = type.trim().toLowerCase();
    return idValidation[key] && idValidation[key].test(number.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.guests = guests;
    data.total = total;
    data.location = selectedLocation;

    if (!isValidAge(data.dob)) {
      return alert("Booking failed: You must be at least 18 years old.");
    }

    if (!isValidDates(data.arrival, data.leaving)) {
      return alert("Booking failed: Invalid arrival or leaving dates.");
    }

    if (!isValidID(data.id_type, data.id_number)) {
      return alert(`Booking failed: Invalid format for ${data.id_type}.`);
    }

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setReceiptData(data);
        setTimeout(() => {
          if (receiptRef.current) receiptRef.current.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        alert("Failed to book. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the booking.");
    }
  };

  const handleDownload = () => {
    if (!receiptRef.current || !receiptData) return;
    html2pdf().set({
      margin: 0.5,
      filename: `Booking_Receipt_${receiptData.name.replace(/\s+/g, "_")}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(receiptRef.current).save();
  };

  if (receiptData) {
    return (
      <div className={styles.receiptWrapper}>
        <div ref={receiptRef} className={styles.receipt}>
          <h2>Vagabond Inc. - Booking Receipt</h2>
          <p><strong>Name:</strong> {receiptData.name}</p>
          <p><strong>Email:</strong> {receiptData.email}</p>
          <p><strong>Phone:</strong> {receiptData.phone}</p>
          <p><strong>Gender:</strong> {receiptData.gender}</p>
          <p><strong>Location:</strong> {receiptData.location}</p>
          <p><strong>Arrival:</strong> {receiptData.arrival}</p>
          <p><strong>Leaving:</strong> {receiptData.leaving}</p>
          <p><strong>Guests:</strong> {receiptData.guests}</p>
          <p><strong>Total:</strong> ₹{receiptData.total}</p>
          <p><strong>ID Type:</strong> {receiptData.id_type}</p>
          <p><strong>ID Number:</strong> {receiptData.id_number}</p>
          <p>✅ Thank you for booking with us!</p>
        </div>
        <div align="center">
          <button onClick={handleDownload} className={styles['purchase--btn']} style={{ marginTop: '20px' }}>
            Download Receipt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['booknow-wrapper']}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
          <div className={styles['payment--options']}>
            <button type="button" className={styles.paymentBtn}><FaPaypal className={styles.icon} /></button>
            <button type="button" className={styles.paymentBtn}><SiApplepay className={styles.icon} /></button>
            <button type="button" className={styles.paymentBtn}><SiGooglepay className={styles.icon} /></button>
          </div>

          <div className={styles.separator}>
            <hr className={styles.line} /><p>or book using form</p><hr className={styles.line} />
          </div>

          <div className={styles['credit-card-info--form']}>
            <InputField label="Full Name" name="name" type="text" />
            <InputField label="Date of Birth" name="dob" type="date" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Phone" name="phone" type="tel" />
            <SelectField label="Gender" name="gender" options={["Male", "Female", "Others"]} />

            {/* ✅ Replaced SelectField with read-only input field */}
            <div className={styles.input_container}>
              <label htmlFor="location" className={styles.input_label}>Where to</label>
              <input
                type="text"
                name="location"
                className={styles.input_field}
                value={selectedLocation}
                readOnly
              />
            </div>

            <InputField label="Arrival Date" name="arrival" type="date" />
            <InputField label="Leaving Date" name="leaving" type="date" />

            <div className={styles.input_container}>
              <label htmlFor="guests" className={styles.input_label}>Number of People</label>
              <input
                type="number"
                name="guests"
                min="1"
                value={guests}
                onChange={handleGuestChange}
                className={styles.input_field}
                required
              />
            </div>

            <div className={styles.input_container}>
              <label className={styles.input_label}>Total Price (₹)</label>
              <input
                type="text"
                value={`₹${total}`}
                className={styles.input_field}
                readOnly
              />
            </div>

            <SelectField label="ID Type" name="id_type" options={["Aadhaar Card", "PAN Card", "Voter ID"]} />
            <InputField label="ID Number" name="id_number" type="text" />
          </div>

          <button type="submit" className={styles['purchase--btn']}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type }) => (
  <div className={styles.input_container}>
    <label htmlFor={name} className={styles.input_label}>{label}</label>
    <input type={type} name={name} className={styles.input_field} required />
  </div>
);

const SelectField = ({ label, name, options }) => (
  <div className={styles.input_container}>
    <label htmlFor={name} className={styles.input_label}>{label}</label>
    <select name={name} className={styles.input_field} required>
      <option value="" hidden>Select {label}</option>
      {options.map(option => (
        <option key={option} value={option.toLowerCase()}>{option}</option>
      ))}
    </select>
  </div>
);

export default BookNow;
