import React, { useState } from "react";
import about_img from "./assets/About.jpg";
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
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="container-xxl py-5">
  <div className="container">

    {/* Section Heading */}
    <div className="text-center mb-5">
      <h6 className="text-primary text-uppercase fw-semibold">
        Our Services
      </h6>
      <h2 className="fw-bold">
        What We Offer
      </h2>
    </div>

    {/* Services Grid */}
    <div className="row g-4">

      <div className="col-lg-4 col-md-6">
        <div className="bg-white border rounded shadow-sm p-4 h-100 text-center">
          <i className="bi bi-gear-fill text-primary fs-1 mb-3"></i>
          <h5 className="fw-semibold mb-3">Technical Services</h5>
          <p className="text-muted mb-0">
            Reliable and professional solutions for your business.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="bg-white border rounded shadow-sm p-4 h-100 text-center">
          <i className="bi bi-laptop-fill text-primary fs-1 mb-3"></i>
          <h5 className="fw-semibold mb-3">Web Development</h5>
          <p className="text-muted mb-0">
            Scalable and modern websites tailored to your needs.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="bg-white border rounded shadow-sm p-4 h-100 text-center">
          <i className="bi bi-phone-fill text-primary fs-1 mb-3"></i>
          <h5 className="fw-semibold mb-3">Mobile Solutions</h5>
          <p className="text-muted mb-0">
            User-friendly mobile apps for Android and iOS platforms.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="bg-white border rounded shadow-sm p-4 h-100 text-center">
          <i className="bi bi-people-fill text-primary fs-1 mb-3"></i>
          <h5 className="fw-semibold mb-3">Consulting</h5>
          <p className="text-muted mb-0">
            Expert guidance to drive your business forward.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="bg-white border rounded shadow-sm p-4 h-100 text-center">
          <i className="bi bi-shield-lock-fill text-primary fs-1 mb-3"></i>
          <h5 className="fw-semibold mb-3">Security Services</h5>
          <p className="text-muted mb-0">
            Protect your systems with advanced security solutions.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="bg-white border rounded shadow-sm p-4 h-100 text-center">
          <i className="bi bi-headset text-primary fs-1 mb-3"></i>
          <h5 className="fw-semibold mb-3">24/7 Support</h5>
          <p className="text-muted mb-0">
            Always available support whenever you need help.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== WHY CHOOSE US ===== */}
     <section className="container-xxl py-5">
  <div className="container">

    {/* Section Heading */}
    <div className="text-center mb-5">
      <h6 className="text-primary text-uppercase fw-semibold">
        Why Choose Us
      </h6>
      <h2 className="fw-bold">
        What Makes Us Different
      </h2>
    </div>

    {/* Cards */}
    <div className="row g-4 text-center">

      <div className="col-lg-3 col-md-6">
        <div className="bg-white border rounded shadow-sm h-100 p-4">
          <i className="bi bi-people-fill text-primary fs-2 mb-3"></i>
          <h6 className="fw-semibold">
            Experienced Professionals
          </h6>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="bg-white border rounded shadow-sm h-100 p-4">
          <i className="bi bi-cpu-fill text-primary fs-2 mb-3"></i>
          <h6 className="fw-semibold">
            Modern Technologies
          </h6>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="bg-white border rounded shadow-sm h-100 p-4">
          <i className="bi bi-heart-fill text-primary fs-2 mb-3"></i>
          <h6 className="fw-semibold">
            Customer-First Approach
          </h6>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="bg-white border rounded shadow-sm h-100 p-4">
          <i className="bi bi-clock-fill text-primary fs-2 mb-3"></i>
          <h6 className="fw-semibold">
            On-Time Delivery
          </h6>
        </div>
      </div>

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
