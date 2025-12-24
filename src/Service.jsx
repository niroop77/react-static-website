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


      {/* ===== WHY CHOOSE US (RECOMMENDED) ===== */}
     <section className="container-xxl py-5 bg-light">
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
       <section className="container-fluid py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-3 text-white">Have a Project in Mind?</h2>
          <p className="mb-4 text-white">
            Let’s discuss how we can help your business grow.
          </p>
          <a href="/contact" className="btn btn-light px-5 py-2">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Service;
