import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Location.module.css";
import { FaHotel, FaUsers, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers, FaArrowUp, FaCampground, FaFire, FaHiking } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Revdanda = () => {
  const [modalImg, setModalImg] = useState(null); 
  useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50); // slight delay lets motion animations load first
}, []);


  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModal = () => {
    setModalImg(null);
  };

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

      {/* Hero Section */}
      <div className="container-fluid p-0 mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/camps/revdanda/re7.jpg" alt="Revdanda" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Revdanda Beach
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
              <h1 className="mb-4">Revdanda Beach Camping</h1>
              <p className="mb-4">
                Revdanda Beach Camping offers a peaceful seaside escape with tents just a few meters from the ocean.
                Experience BBQ, music nights, starry skies, and refreshing sea breeze. Ideal for couples, families, and friends alike.
                <br /><br />
                <strong>Nearby Attractions:</strong> Revdanda Fort, Portuguese Church, Korlai Fort & Lighthouse, and Revdanda Murud Beach.
                <br /><br />
                <strong>How to Reach:</strong><br />
                - <strong>From Mumbai:</strong> Ferry from Gateway of India to Mandwa, then local transit to Revdanda.<br />
                - <strong>From Pune:</strong> Direct bus to Alibaug, then rickshaw to campsite.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={234} duration={2} /></h2>
                        <p className="mb-0">{["Tents", "Campfires", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["re2.jpeg", "re3.jpeg", "re6.jpg", "re10.jpg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={img}>
                    <motion.img
                      className={`img-fluid rounded ${i === 0 ? "w-75" : i === 1 ? "w-100" : i === 2 ? "w-50" : "w-75"}`}
                      src={`/camps/revdanda/${img}`}
                      alt={`revdanda-${i}`}
                      onClick={() => openModal(`/camps/revdanda/${img}`)}
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
              <h6 className="section-title text-white text-uppercase mb-3">Beach Camping</h6>
              <h1 className="text-white mb-4">Escape to Revdanda’s Secluded Shores</h1>
              <p className="text-white mb-4">
                Bask in the calm of Revdanda beach. Lounge in cozy tents, indulge in local cuisine, and unwind to ocean melodies with bonfires and live music.
              </p>
              <Link to="/BookNow" state={{ location: "Revdanda Beach Camping" }} className="btn btn-light py-md-3 px-md-5">Book Your Tent</Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.691492233738!2d72.91158251266921!3d18.554964613107646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be86f0018cd9a0b%3A0xb0d1162a7ea13fa0!2sREVDANDA%20BEACH%20CAMPING!5e0!3m2!1sen!2sin!4v1749497951663!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: "450px" }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Revdanda Beach Camping Map"
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
              { icon: FaUtensils, title: "Local Cuisine" },
              { icon: FaGlassCheers, title: "Evening Bonfire" },
              { icon: FaSwimmer, title: "Beach Fun" },
              { icon: FaHotel, title: "Tent Stay" },
              { icon: FaUsers, title: "Group Activities" },
              { icon: FaSpa, title: "Chill Zones" },
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

export default Revdanda;
