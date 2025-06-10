import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "../assets/css/Location.module.css";
import { FaHotel, FaUsers, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaCampground, FaFire, FaHiking } from "react-icons/fa";

const Matheran = () => {
  const topRef = useRef(null);

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
            <img className="w-100" src="/camps/matheran/ma7.jpeg" alt="Matheran" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <motion.h1
                  className="display-3 text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Matheran Camping
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
              <h1 className="mb-4">Matheran Hill Station Camping</h1>
              <p className="mb-4">
                Matheran is Asia’s only automobile-free hill station, nestled in the Western Ghats. Enjoy a 2-day, 1-night camping retreat with panoramic views, trekking trails, and colonial charm.
                Camp under the stars, surrounded by dense forests and red soil trails. Activities include sunset point hikes, bonfires, night jungle walks, and heritage toy train rides.
                <br /><br />
                <strong>Nearby Attractions:</strong> Panorama Point, Charlotte Lake, Echo Point, Louisa Point, One Tree Hill, Pisarnath Mahadev Temple.
                <br /><br />
                <strong>How to Reach:</strong> Take a local train to Neral Station, then a shared taxi or toy train to Matheran. Walk or hire a horse/hand-pulled rickshaw to the campsite.
              </p>
              <div className="row g-3 pb-4">
                {[FaCampground, FaFire, FaHiking].map((Icon, i) => (
                  <div className="col-sm-4" key={i}>
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <Icon className="fa-2x text-primary mb-2" />
                        <h2 className="mb-1"><CountUp end={i === 0 ? 150 : i === 1 ? 70 : 320} duration={2} /></h2>
                        <p className="mb-0">{["Tents", "Bonfires", "Trekkers"][i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                {["ma2.jpeg", "ma1.jpeg", "ma12.jpg", "ma10.jpeg"].map((img, i) => (
                  <div className={`col-6 text-${i % 2 === 0 ? "end" : "start"}`} key={i}>
                    <motion.img
                      className="img-fluid rounded"
                      src={`camps/matheran/${img}`}
                      alt={`matheran-${i}`}
                      style={{ width: i === 2 ? "50%" : "75%", marginTop: i === 0 ? "25%" : 0 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section with Map */}
      <section className="container-xxl py-5 px-0">
        <div className="row g-0">
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5">
              <h6 className="section-title text-white text-uppercase mb-3">Hill Camping</h6>
              <h1 className="text-white mb-4">Reconnect with Nature at Matheran</h1>
              <p className="text-white mb-4">
                Breathe fresh air, witness incredible sunrises, and experience the peace of car-free Matheran. Ideal for solo travelers, couples, and families seeking tranquility.
              </p>
              <Link to="/BookNow" className="btn btn-light py-md-3 px-md-5">
                Book Your Tent
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.588573143745!2d73.27048977621078!3d18.987883883832998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801e9999999b9%3A0xabc4aa4aa9fbb1a7!2sMatheran%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1749500464693!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Matheran Camping Map"
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
              { icon: FaUtensils, title: "Local Meals" },
              { icon: FaGlassCheers, title: "Campfire Nights" },
              { icon: FaSwimmer, title: "Waterfall Dips" },
              { icon: FaHotel, title: "Tent Stay" },
              { icon: FaUsers, title: "Group Treks" },
              { icon: FaSpa, title: "Forest Calm" },
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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
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

export default Matheran;
