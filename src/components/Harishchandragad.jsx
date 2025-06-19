import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Location.module.css";
import {
  FaHotel, FaUsers, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers,
  FaArrowUp, FaCampground, FaFire, FaHiking
} from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Harishchandragad = () => {
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
            <img className="w-100" src="/treks/harishchandragad/hr8.webp" alt="Harishchandragad" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Harishchandragad
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
              <h1 className="mb-4">Weekend Trek to Harishchandragad Fort</h1>
              <p className="mb-4">
                A thrilling 2-day trek to one of Maharashtra's iconic forts. Harishchandragad
                is famed for Konkan Kada, Taramati peak, and Kedareshwar cave temple.
                Reach via Kasara/Kalyan to Pachnai or Khireshwar base village.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={120 + i * 30} duration={2} /></h2>
                        <p className="mb-0">{["Tents", "Campfires", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["hr3.png", "hr6.jpg", "hr7.jpg", "hr9.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={img}>
                    <motion.img
                      className={`img-fluid rounded ${i === 0 ? "w-75" : i === 1 ? "w-100" : i === 2 ? "w-50" : "w-75"}`}
                      src={`/treks/harishchandragad/${img}`}
                      alt={`harishchandragad-${i}`}
                      onClick={() => openModal(`/treks/harishchandragad/${img}`)}
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

      {/* Experience */}
      <section className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-white text-uppercase mb-3">Trekking Escape</h6>
              <h1 className="text-white mb-4">Raw, Rugged & Real</h1>
              <p className="text-white mb-4">
                Forest trails, wind-lashed cliffs, and ancient caves await. Harishchandragad is
                perfect for seekers of silence and stargazers alike.
              </p>
              <Link to="/BookNow" state={{ location: "Harishchandragad Trek" }} className="btn btn-light py-md-3 px-md-5">Book Now</Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7451998923123!2d73.76669901435108!3d19.391229986915853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be83c7d77a11e5f%3A0x713c2d7a9a5611e0!2sHarishchandragad!5e0!3m2!1sen!2sin!4v1623050321019!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: "450px" }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Harishchandragad Trek Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Experience <span className="text-primary">More</span></h1>
          <div className="row g-4">
            {[
              { icon: FaUtensils, title: "Local Meals" },
              { icon: FaGlassCheers, title: "Campfire Nights" },
              { icon: FaSwimmer, title: "Cliff Views" },
              { icon: FaHotel, title: "Tent Stay" },
              { icon: FaUsers, title: "Group Friendly" },
              { icon: FaSpa, title: "Nature Reset" },
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

export default Harishchandragad;
