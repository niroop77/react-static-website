import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* ===== TOP BAR (DESKTOP ONLY) ===== */}
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">

          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <i className="bi bi-geo-alt text-primary me-2"></i>
              <small>XYZ Road, Hyderabad, India</small>
            </div>

            <div className="h-100 d-inline-flex align-items-center py-3">
              <i className="bi bi-clock text-primary me-2"></i>
              <small>Mon - Sat: 09:00 AM - 07:00 PM</small>
            </div>
          </div>

          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <i className="bi bi-telephone text-primary me-2"></i>
              <small>+91 2222 000000</small>
            </div>

            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square bg-white text-primary me-1 sc-icons" href="#">
                <i className="bi bi-envelope"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-1 sc-icons" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary me-1 sc-icons" href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="btn btn-sm-square bg-white text-primary sc-icons" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 shadow-sm">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">LOGO</h2>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">

            <Link to="/" className="nav-item nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-item nav-link">
              About
            </Link>

            <Link to="/services" className="nav-item nav-link">
              Service
            </Link>

            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>

          </div>

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Book Now <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </nav>

      {/* ===== HEADER IMAGE ===== */}
      
    </>
  );
}

export default Navbar;