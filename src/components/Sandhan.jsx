import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/Location.module.css";
import { FaHotel, FaUsersCog, FaUsers, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers, FaDumbbell, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaCampground, FaFire, FaHiking } from "react-icons/fa";

const Sandhan = () => {
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
            <img className="w-100" src="/treks/sandhan/sn1.webp " alt="Sandhan Valley" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Sandhan Valley Trek
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
              <h1 className="mb-4">Sandhan Valley Adventure</h1>
              <p className="mb-4">
                Sandhan Valley, also known as the Valley of Shadows, is a magnificent canyon located in the Sahyadri Mountains near Bhandardara. This 2-day trek offers rappelling, rock climbing, and camping under a sky full of stars. A paradise for adventure seekers!

                Nearby Attractions: Ratangad Fort, Bhandardara Lake, and Amruteshwar Temple.

                How to Reach:
                From Mumbai/Pune: Drive or take a train to Igatpuri, then local transport to Samrad village (base point).

                Detailed route and travel guidance provided upon booking.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={51} duration={2} /></h2>
                        <p className="mb-0">{["Tents", "Campfires", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["sn3.jpg", "sn2.jpg", "sn4.jpg", "sn6.jpg"].map((img, idx) => (
                  <div className={`col-6 text-${idx % 2 === 0 ? 'end' : 'start'}`} key={img}>
                    <motion.img
                      className={`img-fluid rounded ${idx === 2 ? 'w-50' : 'w-75'}`}
                      src={`/treks/sandhan/${img}`}
                      alt={`about-${idx + 1}`}
                      style={{ marginTop: idx === 0 ? "25%" : 0 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
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
              <h6 className="section-title text-white text-uppercase mb-3">Trekking Adventure</h6>
              <h1 className="text-white mb-4">Conquer the Shadows of Sandhan</h1>
              <p className="text-white mb-4">
                Join a thrilling descent into the mystical Sandhan Valley. Engage in rappelling, witness surreal views, and camp under starlit skies in the heart of the Sahyadris.
              </p>
              <Link to="/BookNow" className="btn btn-light py-md-3 px-md-5">
                Book Your Trek
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60306.81981286183!2d73.6927076433378!3d19.499536067178803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc14f27f51df7d%3A0x16e861dbd1b99365!2sSandhan%20Valley!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sandhan Valley Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">What Awaits You in <span className="text-primary">Sandhan</span></h1>
          <div className="row g-4">
            {[
              { icon: FaUtensils, title: "Local Meals" },
              { icon: FaGlassCheers, title: "Bonfire Sessions" },
              { icon: FaSwimmer, title: "Water Crossings" },
              { icon: FaHotel, title: "Tent Camping" },
              { icon: FaUsers, title: "Group Treks" },
              { icon: FaSpa, title: "Nature Immersion" },
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
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
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

export default Sandhan;
