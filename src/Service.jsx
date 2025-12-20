function Service() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <div className="container-fluid page-header py-2 mb-2 bg-light">
        <div className="container py-2">
          <h1 className="display-5 text-dark mb-3 text-center">
            Our Services
          </h1>
        </div>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="container-xxl py-2">
        <div className="container">
          <div className="text-center mb-3">
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
                <div className="service-item bg-white shadow rounded p-4 h-100 text-center">
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
      </div>
    </>
  );
}

export default Service;