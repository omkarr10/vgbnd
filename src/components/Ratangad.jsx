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
            <img className="w-100" src="/treks/ratangad/rt6.jpg" alt="Ratangad" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Ratangad Trek
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
              <h1 className="mb-4">Ratangad Fort Trek</h1>
              <p className="mb-4">
                Nestled in the Western Ghats, Ratangad is a 400-year-old fort located at an elevation of 4,255 feet.
                Known for its natural rock peak with a cavity at the top called 'Nedhe' or 'Eye of the Needle',
                the fort offers panoramic views of Bhandardara dam, AMK forts, and lush valleys.
                <br /><br />
                <strong>How to Reach:</strong><br />
                From Mumbai/Pune: Reach Igatpuri or Kasara by train, then take a jeep to Ratanwadi village via Bhandardara.
              </p>
              <div className="row g-3 pb-4">
                {[FaMountain, FaHiking, FaBinoculars].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={[4255, 6, 250][i]} duration={2} /></h2>
                        <p className="mb-0">{["Feet Elevation", "Trek Distance (km)", "Trekkers per Week"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["rt2.jpg", "rt3.jpg", "rt4.jpg", "rt5.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={i}>
                    <motion.img
                      className={`img-fluid rounded ${i === 0 || i === 3 ? "w-75" : "w-100"}`}
                      src={`/treks/ratangad/${img}`}
                      alt={`ratangad-${i}`}
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
              <h6 className="section-title text-white text-uppercase mb-3">Ratangad Trek</h6>
              <h1 className="text-white mb-4">Explore the Eye of the Needle</h1>
              <p className="text-white mb-4">
                From rugged rock cut steps to a mystical cave temple, Ratangad offers a unique blend of natural beauty and historic significance.
                Witness the famous 'Nedhe' and enjoy misty sunrise views over the Sahyadris.
              </p>
              <Link to="/BookNow" className="btn btn-light py-md-3 px-md-5">
                Book Now
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15043.860958334393!2d73.69196526366798!3d19.50013125869775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd76d8ed204b65%3A0x8e836742ce67ced1!2sRatangad!5e0!3m2!1sen!2sin!4v1749498799442!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ratangad Map"
            />
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
              { icon: FaHiking, title: "Guided Fort Climb" },
              { icon: FaCloudSun, title: "Sunrise Over Valleys" },
              { icon: FaHotel, title: "Cave Stay Option" },
              { icon: FaDumbbell, title: "Moderate Trek Level" },
              { icon: FaUsers, title: "Group Trekking Friendly" },
              { icon: FaBinoculars, title: "Historic Fort Views" },
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
