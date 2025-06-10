import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/Location.module.css";
import { FaHotel, FaUsersCog, FaUsers, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers, FaDumbbell, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaCampground, FaFire, FaHiking } from "react-icons/fa";

const Karjat = () => {
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
                  <Link to="/" className="nav-item nav-link active">Home </Link>
                  <Link to="/explore" className="nav-item nav-link">Explore</Link>
                  <Link to="/login" className="nav-item nav-link">Log Out</Link>
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
            <img className="w-100" src="/camps/karjat/ka8.webp" alt="Karjat" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Karjat Riverside Camping
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">About</h6>
              <h1 className="mb-4">Karjat Riverside Camping</h1>
              <p className="mb-4">
                Escape to nature with our riverside camping experience in Karjat. Spend 2 days and 1 night surrounded by mountains, lush greenery, and the soothing Ulhas River. Enjoy riverside tents, BBQ, live music, kayaking, swimming, and more.
                <br /><br />
                <strong>Nearby Attractions:</strong> Kondana Caves, Ulhas Valley, Peth Fort, and Bhivpuri Waterfalls.
                <br /><br />
                <strong>How to Reach:</strong><br />
                - From Mumbai: Local train to Karjat Station, then take a rickshaw to the campsite.<br />
                - From Pune: Bus/train to Karjat, then a local auto or cab.<br />
              </p>

              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={150 + i * 20} duration={2} /></h2>
                        <p className="mb-0">{["Tents", "Campfires", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Images */}
            <div className="col-lg-6">
              <div className="row g-3">
                {["ka6.jpg", "ka7.jpg", "ka2.jpeg", "ka11.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={i}>
                    <motion.img
                      className="img-fluid rounded"
                      style={{ width: i === 2 ? "50%" : "75%", marginTop: i === 0 ? "25%" : 0 }}
                      src={`camps/karjat/${img}`}
                      alt={`karjat-${i}`}
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

      {/* Split Section */}
      <section className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-white text-uppercase mb-3">River Camping</h6>
              <h1 className="text-white mb-4">Unwind in Karjat’s Wilderness</h1>
              <p className="text-white mb-4">
                Pitch your tent beside the river, breathe fresh air, enjoy a BBQ by the fire, and fall asleep under a sky full of stars. Karjat offers the perfect mix of nature and thrill.
              </p>
              <Link to="/BookNow" className="btn btn-light py-md-3 px-md-5">Book Your Tent</Link>
            </div>
          </div>

          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.718878768638!2d73.33838237469665!3d18.988271954383735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8e97e2dc761a5%3A0x9c7dbb3f5a5f9fcb!2sKarjat%20River%20Camping!5e0!3m2!1sen!2sin!4v1749500000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karjat River Camping Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Explore Our <span className="text-primary">Camping Perks</span></h1>
          <div className="row g-4">
            {[
              { icon: FaUtensils, title: "Riverside Meals" },
              { icon: FaGlassCheers, title: "Bonfire Music" },
              { icon: FaSwimmer, title: "River Dips" },
              { icon: FaHotel, title: "Tented Stay" },
              { icon: FaUsers, title: "Group Activities" },
              { icon: FaSpa, title: "Forest Retreat" },
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
                  <div className="service-icon"><s.icon className="icon" /></div>
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <FaArrowUp />
              </button>
            </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p> &copy; <a className="border-bottom text-white" href="">Vagabond Inc.</a> All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Karjat;
