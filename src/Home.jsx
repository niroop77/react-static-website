import React, { useState } from "react";
import about_img from "./assets/about.jpg";
import Navbar from "./Navbar";
import Banner from "./Banner";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* ===== HERO BANNER ===== */}
      <Banner title="We Build Reliable Digital Solutions" />

      {/* ===== ABOUT ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src={about_img}
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase mb-2">
                About Our Company
              </h6>
              <h2 className="mb-4">Trusted Professionals</h2>
              <p className="mb-4">
                We deliver high-quality digital services with a strong focus on
                performance, security, and customer satisfaction.
              </p>

              <ul className="list-unstyled">
                {[
                  "Quality Services",
                  "Expert Team",
                  "Affordable Pricing",
                  "24/7 Support",
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Our Services</h6>
            <h2>What We Offer</h2>
          </div>

          <div className="row g-4">
            {[
              "gear-fill",
              "laptop-fill",
              "phone-fill",
              "people-fill",
              "shield-lock-fill",
              "headset",
            ].map((icon, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="bg-white shadow rounded p-4 text-center h-100">
                  <i className={`bi bi-${icon} fs-1 text-primary`}></i>
                  <h5 className="mt-3">Professional Service</h5>
                  <p className="text-muted">
                    Reliable and efficient solutions tailored to your needs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Why Choose Us</h6>
            <h2>What Makes Us Different</h2>
          </div>

          <div className="row g-4 text-center">
            {[
              "Experienced Professionals",
              "Modern Technologies",
              "Customer-First Approach",
              "On-Time Delivery",
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-white shadow rounded p-4 h-100">
                  <i className="bi bi-star-fill text-primary fs-2 mb-3"></i>
                  <h6>{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="container-xxl py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-3">Have a Project in Mind?</h2>
          <p className="mb-4">
            Let’s discuss how we can help your business grow.
          </p>
          <a href="/contact" className="btn btn-light px-5 py-2">
            Contact Us
          </a>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Contact</h6>
            <h2>Get In Touch</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="card shadow p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button className="btn btn-primary px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Home;
