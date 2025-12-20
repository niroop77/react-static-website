import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";

function Service() {
  return (
    <>
      <Navbar />

      {/* ===== BANNER ===== */}
      <Banner title="Our Services" />

      {/* ===== SERVICES SECTION (MATCH HOME STYLE) ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Our Services</h6>
            <h2>What We Offer</h2>
          </div>

          <div className="row g-4">
            {[
              { icon: "gear-fill", title: "Technical Services" },
              { icon: "laptop-fill", title: "Web Development" },
              { icon: "phone-fill", title: "Mobile Solutions" },
              { icon: "people-fill", title: "Consulting" },
              { icon: "shield-lock-fill", title: "Security Services" },
              { icon: "headset", title: "24/7 Support" },
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="bg-white shadow rounded p-4 h-100 text-center">
                  <i
                    className={`bi bi-${service.icon} text-primary fs-1 mb-3`}
                  ></i>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="text-muted">
                    Reliable and professional solutions for your business.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US (RECOMMENDED) ===== */}
      <section className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase">Why Choose Us</h6>
            <h2>What Makes Us Different</h2>
          </div>

          <div className="row g-4">
            {[
              "Experienced Professionals",
              "Customer-Centric Approach",
              "Affordable Pricing",
              "Latest Technologies",
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 text-center">
                <div className="bg-white shadow rounded p-4 h-100">
                  <i className="bi bi-check-circle-fill text-primary fs-2 mb-3"></i>
                  <h6>{item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION (RECOMMENDED) ===== */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="bg-primary text-white rounded p-5 text-center">
            <h2 className="mb-3">Ready to Get Started?</h2>
            <p className="mb-4">
              Contact us today to discuss your project requirements.
            </p>
            <a href="/contact" className="btn btn-light px-5 py-2">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Service;
