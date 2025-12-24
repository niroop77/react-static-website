import React, { useState } from "react";
import about_img from "./assets/About.jpg";
import Banner from "./Banner";
import Navbar from "./Navbar";

function About() {
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

      {/* ===== BANNER ===== */}
      <Banner title="About Us" />

      {/* ===== ABOUT SECTION (MATCH HOME SPACING) ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">

            <div className="col-lg-6">
              <img
                src={about_img}
                className="img-fluid rounded shadow"
                alt="About us"
              />
            </div>

            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase mb-2">
                About Our Company
              </h6>

              <h2 className="mb-4">
                We Are Trusted & Experienced Professionals
              </h2>

              <p className="mb-4">
                We provide high-quality services with a commitment to excellence
                and customer satisfaction.
              </p>

              <div className="row g-4 mb-4">
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3"></i>
                    <span className="fw-semibold">Quality Services</span>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3"></i>
                    <span className="fw-semibold">Expert Team</span>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3"></i>
                    <span className="fw-semibold">Affordable Pricing</span>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-5 me-3"></i>
                    <span className="fw-semibold">24/7 Support</span>
                  </div>
                </div>
              </div>

              <a href="#" className="btn btn-primary px-4 py-2">
                Learn More
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM (SAME AS HOME) ===== */}
      <section className="container-xxl py-5 bg-light">
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

      {/* ===== FOOTER (MATCH HOME) ===== */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default About;
