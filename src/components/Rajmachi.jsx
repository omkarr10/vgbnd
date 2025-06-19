import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Location.module.css";
import {
  FaHotel, FaUsers, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers,
  FaCampground, FaFire, FaHiking, FaArrowUp
} from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Rajmachi = () => {
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
            <img className="w-100" src="/treks/rajmachi/rm.jpg" alt="Rajmachi" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Rajmachi Fort Trek
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
              <h1 className="mb-4">Rajmachi Fort Trek & Camping</h1>
              <p className="mb-4">
                Embark on an adventurous journey to Rajmachi Fort, nestled in the Sahyadri mountains. Ideal for beginners and nature lovers alike, the trek offers scenic views, ancient forts, and lush trails.
                <br /><br />
                <strong>Nearby Attractions:</strong> Shrivardhan Fort, Manoranjan Fort, Kondhane Caves.
                <br /><br />
                <strong>How to Reach:</strong><br />
                - <strong>From Mumbai:</strong> Train to Karjat, then jeep to base village Udhewadi.<br />
                - <strong>From Pune:</strong> Drive or train to Lonavala, then trek or hire jeep to base.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={100 + i * 30} duration={2} /></h2>
                        <p className="mb-0">{["Tents", "Campfires", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["rm1.jpg", "rm4.avif", "rm3.jpg", "rm2.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={img}>
                    <motion.img
                      className={`img-fluid rounded ${i === 0 ? "w-75" : i === 1 ? "w-100" : i === 2 ? "w-50" : "w-75"}`}
                      src={`/treks/rajmachi/${img}`}
                      alt={`rajmachi-${i}`}
                      onClick={() => openModal(`/treks/rajmachi/${img}`)}
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
              <h6 className="section-title text-white text-uppercase mb-3">Mountain Escape</h6>
              <h1 className="text-white mb-4">Discover Rajmachi’s Hidden Majesty</h1>
              <p className="text-white mb-4">
                Hike through forest trails, set up tents under the stars, and explore ancient forts with panoramic valley views. Rajmachi is a rustic gem for the wild-hearted.
              </p>
              <Link to="/BookNow" state={{ location: "Rajmachi Fort Trek" }} className="btn btn-light py-md-3 px-md-5">Book Your Trek</Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.2549523333196!2d73.39257547638036!3d18.831328382323456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fe3e5f2fc1db%3A0x570d853467244a2a!2sRajmachi%20Fort!5e0!3m2!1sen!2sin!4v1750332499405!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: "450px" }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Rajmachi Fort Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-xxl py-5">
        <div className="container text-center">
          <h6 className="section-title text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Trek With <span className="text-primary">Comfort & Fun</span></h1>
          <div className="row g-4">
            {[
              { icon: FaUtensils, title: "Homely Meals" },
              { icon: FaGlassCheers, title: "Campfire Nights" },
              { icon: FaSwimmer, title: "Stream Dips" },
              { icon: FaHotel, title: "Tent Stay" },
              { icon: FaUsers, title: "Guided Groups" },
              { icon: FaSpa, title: "Peaceful Ambience" },
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

export default Rajmachi;