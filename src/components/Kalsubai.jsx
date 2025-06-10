import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/Location.module.css";
import {
  FaHotel, FaUsersCog, FaUsers, FaMountain, FaHiking, FaBinoculars,
  FaCloudSun, FaDumbbell, FaArrowUp
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Ratangad = () => {
  const topRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) spinner.classList.remove("show");
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1500, smooth: "easeInOutQuart" });
  };

  return (
    <div className="container-xxl bg-white p-0" ref={topRef}>
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
                  <Link to="/" className="nav-item nav-link active"> Home </Link>
                  <Link to="/Explore" className="nav-item nav-link"> Explore </Link>
                  <Link to="/Login" className="nav-item nav-link"> Log Out </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div className="container-fluid p-0 mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/treks/kalsubai/kl1.webp" alt="Kalsubai" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Kalsubai Trek
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About</h6>
              <h1 className="mb-4">Kalsubai Peak Trek</h1>
              <p className="mb-4">
                Embark on a thrilling adventure to the highest peak in Maharashtra – Kalsubai, located at 5,400 feet in the Sahyadri range.
                This overnight trek offers scenic views, thrilling climbs via ladders and rocky patches, and a sunrise experience like no other.
                Explore the Kalsubai temple at the summit and bask in the views of surrounding forts like Alang, Madan, and Kulang.
                <br /><br />
                <strong>How to Reach:</strong><br />
                From Mumbai/Pune: Take a train to Kasara or Igatpuri, then local transport to Bari village – the trek’s base point.
              </p>
              <div className="row g-3 pb-4">
                {[FaMountain, FaHiking, FaBinoculars].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={[5400, 8, 350][i]} duration={2} /></h2>
                        <p className="mb-0">{["Feet Elevation", "Trek Distance (km)", "Trekkers per Week"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["kl8.jpg", "kl4.jpeg", "kl5.jpeg", "kl6.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={i}>
                    <motion.img
                      className={`img-fluid rounded ${i === 0 || i === 3 ? "w-75" : "w-100"}`}
                      src={`/treks/kalsubai/${img}`}
                      alt={`kalsubai-${i}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 * i }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-white text-uppercase mb-3">Kalsubai Trek</h6>
              <h1 className="text-white mb-4">Challenge Yourself, Conquer Kalsubai</h1>
              <p className="text-white mb-4">
                Kalsubai trek is perfect for thrill-seekers and nature lovers alike. Enjoy starry nights at the base camp and witness surreal sunrises above the clouds.
              </p>
              <Link to="/BookNow" className="btn btn-light py-md-3 px-md-5">
                Book Now
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.326542160269!2d73.69901387519242!3d19.601145682729994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b08a38d25867%3A0x2f1db82b10c6d319!2sKalsubai%20Peak!5e0!3m2!1sen!2sin!4v1749494830121!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kalsubai Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Why Choose <span className="text-primary">Our Trek?</span></h1>
          <div className="row g-4">
            {[
              { icon: FaHiking, title: "Guided Trek" },
              { icon: FaCloudSun, title: "Sunrise View" },
              { icon: FaHotel, title: "Base Camp Stay" },
              { icon: FaDumbbell, title: "Moderate Difficulty" },
              { icon: FaUsers, title: "Group Friendly" },
              { icon: FaBinoculars, title: "Scenic Views" },
            ].map((s, i) => (
              <motion.div
                className="col-lg-4 col-md-6"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="service-item custom-card">
                  <div className="service-icon">
                    <s.icon className="icon" />
                  </div>
                  <h5 className="mb-3">{s.title}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div align="right">
        <button
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p> &copy; <a className="border-bottom text-white" href="#">Vagabond Inc.</a> All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Ratangad;
