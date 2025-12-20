import about_img from "./assets/About.jpg";

function About() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <div className="container-fluid page-header py-2 mb-2 bg-light">
        <div className="container py-1">
          <h1 className="display-5 text-dark mb-3 text-center">About Us</h1>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div className="container-xxl py-2 mt-2 mb-2">
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
                {[
                  "Quality Services",
                  "Expert Team",
                  "Affordable Pricing",
                  "24/7 Support",
                ].map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                      <h6 className="mb-0">{item}</h6>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#" className="btn btn-primary px-4 py-2">
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;