import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/Location.module.css";
import {
  FaCampground, FaHiking, FaWater, FaUtensils, FaUsers,
  FaMapMarkedAlt, FaArrowUp, FaTimes
} from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Devkund = () => {
  const topRef = useRef(null);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50); // slight delay lets motion animations load first
}, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) spinner.classList.remove("show");
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-xxl bg-white p-0" ref={topRef}>
      {/* Header */}
      <header className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <div className="navbar-brand w-100 h-100 d-flex align-items-center justify-content-center">
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
                  <Link to="/Explore" className="nav-item nav-link">Explore</Link>
                  <Link to="/Login" className="nav-item nav-link">Log Out</Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="container-fluid p-0 mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/treks/devkund/de4.webp" alt="Devkund" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Devkund Trek
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <motion.section className="container-xxl py-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About</h6>
              <h1 className="mb-4">Devkund Waterfall Trek</h1>
              <p className="mb-4">
                Devkund is a hidden gem nestled in the forests near Bhira village. This 1-day trek offers an adventurous trail with river crossings and a majestic bluish-green plunge waterfall.
              </p>
              <p className="mb-4">
                <strong>How to Reach:</strong> From Mumbai or Pune, take a bus/car to Bhira village. Parking available. From there, it’s a 3-4 hour round trek.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaWater, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={[50, 1, 200][i]} duration={2} /></h2>
                        <p className="mb-0">{["Campers", "Waterfall", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                {["de5.jpg", "de8.jpg", "de1.jpg", "de2.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={i}>
                    <motion.img
                      className={`img-fluid rounded ${i === 2 ? "w-50" : "w-75"}`}
                      src={`/treks/devkund/${img}`}
                      alt={`devkund-${i}`}
                      onClick={() => setModalImg(`/treks/devkund/${img}`)}
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

      {/* Experience Section */}
      <section className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-white text-uppercase mb-3">Adventure Awaits</h6>
              <h1 className="text-white mb-4">Discover Devkund's Hidden Beauty</h1>
              <p className="text-white mb-4">
                Reconnect with nature as you trek through scenic forests and rivers to reach the majestic Devkund waterfall.
              </p>
              <Link to="/BookNow" state={{ location: "Devkund Trek" }} className="btn btn-light py-md-3 px-md-5">Book Your Trek</Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8371960591243!2d73.29651891486915!3d18.471875687435315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be83a1c23ffcb7f%3A0x2d05f7ac97da6d69!2sDevkund%20Waterfall!5e0!3m2!1sen!2sin!4v1749494447689!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              title="Devkund Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">What's Included in <span className="text-primary">Your Trek</span></h1>
          <div className="row g-4">
            {[
              { icon: FaUtensils, title: "Breakfast & Lunch" },
              { icon: FaUsers, title: "Guided Trek" },
              { icon: FaMapMarkedAlt, title: "Scenic Trails" },
              { icon: FaWater, title: "Waterfall Access" },
              { icon: FaHiking, title: "Trekking Gear " },
              { icon: FaCampground, title: "Optional Camping" },
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

export default Devkund;
