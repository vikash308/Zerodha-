import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid py-5" id="supportHero">
      {/* Top Section */}
      <div className="text-center mb-5" id="supportWrapper">
        <h4 className="fw-bold mb-2">Support Portal</h4>
        <a href="#" className="text-decoration-none fw-semibold">
          Track Tickets <i className="fa-solid fa-arrow-right-long ms-1"></i>
        </a>
      </div>

      {/* Main Content */}
      <div className="row align-items-start px-md-5 px-3">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          <h3 className="fw-semibold mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>

          <div className="position-relative mb-4">
            <input
              type="text"
              placeholder="e.g. How do I activate F&O, why is my order getting rejected?"
              className="form-control py-3 fs-6 shadow-sm border-0"
              style={{ borderRadius: "12px" }}
            />
            <i
              className="fa-solid fa-magnifying-glass text-muted position-absolute"
              style={{
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
              }}
            ></i>
          </div>

          <div className="d-flex flex-wrap gap-3">
            {[
              "Track account opening",
              "Track segment activation",
              "Intraday margins",
              "Kite user manual",
            ].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-decoration-none text-primary border rounded-pill px-3 py-2 bg-white shadow-sm small"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 ps-md-5">
          <h3 className="fw-semibold mb-4">Featured</h3>
          <ol className="ps-3">
            <li className="mb-3">
              <a href="#" className="text-decoration-none fw-medium">
                Current Takeovers and Delisting – January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none fw-medium">
                Latest Intraday Leverages – MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
