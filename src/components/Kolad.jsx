// src/components/Kolad.jsx
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Location.module.css";
import {
  FaHotel, FaUsers, FaUtensils, FaSpa,FaArrowUp,
  FaSwimmer, FaGlassCheers, FaCampground,
  FaFire, FaHiking
} from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Kolad = () => {
  const [modalImg, setModalImg] = useState(null);
  const openModal = (imgSrc) => setModalImg(imgSrc);
  const closeModal = () => setModalImg(null);

  useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50); 
}, []);


  return (
    <div className="container-xxl bg-white p-0">
      
      {/* Header */}
      <header className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <div className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
              <h1 className="m-0 text-primary text-uppercase">Vagabond Inc.</h1>
            </div>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <div className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-primary text-uppercase">Vagabond Inc.</h1>
              </div>
              <div className="collapse navbar-collapse justify-content-between">
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
                  <Link to="/explore" className="nav-item nav-link">Explore</Link>
                  <Link to="/login" className="nav-item nav-link">Log Out</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="container-fluid p-0 mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/camps/kolad/ko8.jpg" alt="Kolad" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Kolad River Rafting
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <motion.section className="container-xxl py-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About</h6>
              <h1 className="mb-4">Kolad Adventure Camping</h1>
              <p className="mb-4">
                Kolad, on the banks of the Kundalika River, is Maharashtra’s top destination for white-water rafting and adventure camping. This 2-day, 1-night trip includes rafting, kayaking, ziplining, and starry night camping with music and meals.
                <br /><br />
                <strong>Nearby Attractions:</strong> Devkund Waterfall, Bhira Dam, Tamhini Ghat.
                <br /><br />
                <strong>How to Reach:</strong><br />
                - From Mumbai/Pune: Drive via the Mumbai-Goa highway or take a train to Kolad station and then a rickshaw to the campsite.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={160 + i * 30} duration={2} /></h2>
                        <p className="mb-0">{["Campsites", "Bonfires", "Treks"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                {["ko1.jpeg", "ko2.jpeg", "ko3.jpeg", "ko4.jpeg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={img}>
                    <motion.img
                      className={`img-fluid rounded ${i === 0 ? "w-75" : i === 1 ? "w-100" : i === 2 ? "w-50" : "w-75"}`}
                      src={`/camps/kolad/${img}`}
                      alt={`kolad-${i}`}
                      whileHover={{ scale: 1.03 }}
                      style={{ cursor: "pointer", marginTop: i === 0 ? "25%" : 0 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

        {/* Modal Image */}
      {modalImg && (
        <div className="modal d-flex align-items-center justify-content-center" onClick={() => setModalImg(null)} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.8)", zIndex: 9999
        }}>
          <div className="position-relative">
            <img src={modalImg} alt="modal" className="img-fluid rounded" style={{ maxHeight: "90vh" }} />
            <button onClick={() => setModalImg(null)} className="btn btn-danger position-absolute top-0 end-0 m-2">
              <FaTimes />
            </button>
          </div>
        </div>
      )}


      {/* Booking Section */}
      <section className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-white text-uppercase mb-3">Kolad Camping</h6>
              <h1 className="text-white mb-4">Thrill Meets Tranquility</h1>
              <p className="text-white mb-4">
                Unplug from routine and immerse yourself in rafting, kayaking, and riverbank stargazing. Kolad is made for thrill-seekers and nature lovers alike.
              </p>
              <Link to="/BookNow" state={{ location: "Camping and Rafting At Kolad" }} className="btn btn-light py-md-3 px-md-5">Book Your Tent</Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60417.93811625264!2d73.18804717146643!3d18.419409784340267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84d067bd616af%3A0x18047b31c496b3e5!2sKolad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1749493100000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: "450px" }} allowFullScreen="" loading="lazy"
              title="Kolad Camping Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Kolad <span className="text-primary">Camp Features</span></h1>
          <div className="row g-4">
            {[
              { icon: FaUtensils, title: "Delicious Meals" },
              { icon: FaGlassCheers, title: "Campfire Fun" },
              { icon: FaSwimmer, title: "River Activities" },
              { icon: FaHotel, title: "Tent Stays" },
              { icon: FaUsers, title: "Team Games" },
              { icon: FaSpa, title: "Nature Therapy" },
            ].map((s, i) => (
              <motion.div
                className="col-lg-4 col-md-6"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="service-item custom-card shadow-sm p-4 rounded">
                  <div className="service-icon mb-3">
                    <s.icon className="icon text-primary" size={32} />
                  </div>
                  <h5>{s.title}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div align="right">
        <button className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; <a className="border-bottom text-white" href="#">Vagabond Inc.</a> All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Kolad;
