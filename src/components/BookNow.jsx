import React, { useState } from 'react';
import styles from '../assets/css/BookNow.module.css';
import { FaPaypal } from 'react-icons/fa';
import { SiApplepay, SiGooglepay } from 'react-icons/si';

const BookNow = () => {
  const [guests, setGuests] = useState(1);
  const [total, setTotal] = useState(2500);

  const handleGuestChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setGuests(value);
    setTotal(value * 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className={styles['booknow-wrapper']}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
          <div className={styles['payment--options']}>
            <button type="button" name="paypal" className={styles.paymentBtn}>
              <FaPaypal className={styles.icon} /> 
            </button>
            <button type="button" name="apple-pay" className={styles.paymentBtn}>
              <SiApplepay className={styles.icon} /> 
            </button>
            <button type="button" name="google-pay" className={styles.paymentBtn}>
              <SiGooglepay className={styles.icon} /> 
            </button>
          </div>

          <div className={styles.separator}>
            <hr className={styles.line} />
            <p>or book using form</p>
            <hr className={styles.line} />
          </div>

          <div className={styles['credit-card-info--form']}>
            {/* All input fields remain unchanged */}
            {/* Full Name */}
            <div className={styles.input_container}>
              <label htmlFor="name" className={styles.input_label}>Full Name</label>
              <input type="text" id="name" name="name" className={styles.input_field} placeholder="Enter your name" required autoComplete="name" />
            </div>

            {/* DOB */}
            <div className={styles.input_container}>
              <label htmlFor="dob" className={styles.input_label}>Date of Birth</label>
              <input type="date" id="dob" name="dob" className={styles.input_field} required autoComplete="bday" />
            </div>

            {/* Email */}
            <div className={styles.input_container}>
              <label htmlFor="email" className={styles.input_label}>Email</label>
              <input type="email" id="email" name="email" className={styles.input_field} placeholder="Enter your email" required autoComplete="email" />
            </div>

            {/* Phone */}
            <div className={styles.input_container}>
              <label htmlFor="phone" className={styles.input_label}>Phone Number</label>
              <input type="tel" id="phone" name="phone" className={styles.input_field} placeholder="Enter phone number" required autoComplete="tel" />
            </div>

            {/* Gender */}
            <div className={styles.input_container}>
              <label htmlFor="gender" className={styles.input_label}>Gender</label>
              <select id="gender" name="gender" className={styles.input_field} required>
                <option value="" disabled hidden>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            {/* Location */}
            <div className={styles.input_container}>
              <label htmlFor="location" className={styles.input_label}>Where to</label>
              <select id="location" name="location" className={styles.input_field} required>
                <option value="" disabled hidden>Select Location</option>
                <option>Alibaug Beach Camping</option>
                <option>Bhandardara Camping</option>
                <option>Camping And Rafting At Kolad</option>
                <option>Forest Camping In Matheran</option>
                <option>Karjat Lakeside Camping</option>
                <option>Pawna Lake Camping</option>
                <option>Revdanda Beach Camping</option>
                <option>Devkund Trek</option>
                <option>Harishchandragad Trek</option>
                <option>Kalsubai Trek</option>
                <option>Rajmachi Fort Trek</option>
                <option>Ratangad Trek</option>
                <option>Sandhan Valley Trek</option>
                <option>Vasota Fort Jungle Trek</option>
              </select>
            </div>

            {/* Arrival Date */}
            <div className={styles.input_container}>
              <label htmlFor="arrival" className={styles.input_label}>Arrival Date</label>
              <input type="date" id="arrival" name="arrival" className={styles.input_field} required />
            </div>

            {/* Leaving Date */}
            <div className={styles.input_container}>
              <label htmlFor="leaving" className={styles.input_label}>Leaving Date</label>
              <input type="date" id="leaving" name="leaving" className={styles.input_field} required />
            </div>

            {/* Guests */}
            <div className={styles.input_container}>
              <label htmlFor="guests" className={styles.input_label}>Number of People</label>
              <input type="number" id="guests" name="guests" min="1" value={guests} onChange={handleGuestChange} className={styles.input_field} required />
            </div>

            {/* Total */}
            <div className={styles.input_container}>
              <label htmlFor="total" className={styles.input_label}>Total Price (₹)</label>
              <input type="text" id="total" value={`₹${total}`} className={styles.input_field} readOnly />
            </div>

            {/* ID Type */}
            <div className={styles.input_container}>
              <label htmlFor="id_type" className={styles.input_label}>ID Type</label>
              <input type="text" id="id_type" name="id_type" className={styles.input_field} placeholder="Enter ID type" required />
            </div>

            {/* ID Number */}
            <div className={styles.input_container}>
              <label htmlFor="id_number" className={styles.input_label}>ID Number</label>
              <input type="text" id="id_number" name="id_number" className={styles.input_field} placeholder="Enter ID number" required />
            </div>
          </div>

          <button type="submit" className={styles['purchase--btn']}>Submit & Print</button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
