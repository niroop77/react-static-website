import React, { useState } from "react";

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
      {/* ===== PAGE HEADER (MATCH ABOUT) ===== */}
      <div className="container-fluid page-header py-2 mb-2 bg-light">
        <div className="container py-1">
          <h1 className="display-5 text-dark mb-3 text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* ===== CONTACT SECTION ===== */}
      <div className="container-xxl py-2 mt-2 mb-2">
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

                      {/* NAME */}
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

                      {/* EMAIL */}
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

                      {/* SUBJECT */}
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

                      {/* MESSAGE */}
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

                      {/* BUTTON */}
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
      </div>
    </>
  );
}

export default Contact;
