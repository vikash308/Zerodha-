import React from "react";

const Education = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 text-center">
          <img
            src="media/images/education.svg"
            alt="Education Illustration"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-10">
          <h1 className="fw-semibold mb-3">Free and open market education</h1>
          <p className="text-muted mb-4">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            Varsity <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>

          <p className="mt-5 text-muted mb-3">
            TradingQnA, the most active trading and investment community in
            India for all your queries.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            TradingQnA <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
