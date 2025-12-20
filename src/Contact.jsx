import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

function Contact() {
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
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      {/* ===== BANNER ===== */}
      <Banner title="Contact Us" />

      {/* ===== CONTACT FORM ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase mb-2">
              Get In Touch
            </h6>
            <h2 className="mb-4">
              We’d Love to Hear From You
            </h2>
            <p className="text-muted">
              Reach out for any queries, support, or business inquiries.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow border-0 rounded">
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows="5"
                          placeholder="Write your message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-2"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS (RECOMMENDED) ===== */}
      <section className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="bg-white shadow rounded p-4 h-100">
                <i className="bi bi-geo-alt-fill text-primary fs-2 mb-3"></i>
                <h6>Our Address</h6>
                <p className="text-muted mb-0">
                  XYZ Road, Delhi, India
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-white shadow rounded p-4 h-100">
                <i className="bi bi-telephone-fill text-primary fs-2 mb-3"></i>
                <h6>Call Us</h6>
                <p className="text-muted mb-0">
                  +91 2222 000000
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-white shadow rounded p-4 h-100">
                <i className="bi bi-envelope-fill text-primary fs-2 mb-3"></i>
                <h6>Email Us</h6>
                <p className="text-muted mb-0">
                  info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION (RECOMMENDED) ===== */}
      <section className="container-fluid px-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Delhi%20India&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
