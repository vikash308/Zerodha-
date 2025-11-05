import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "130px" }}
            className="img-fluid"
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
