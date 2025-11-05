import React from "react";

const Pricing = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center justify-content-center">
        {/* Left Section */}
        <div className="col-lg-4 col-md-10 mb-5 mb-lg-0">
          <h1 className="fw-semibold mb-3">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India — flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            See pricing <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-10">
          <div className="row text-center g-4">
            <div className="col-sm-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <h1 className="fw-bold">₹0</h1>
                <p className="text-muted mb-0">
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="border rounded-4 p-4 h-100 shadow-sm">
                <h1 className="fw-bold">₹20</h1>
                <p className="text-muted mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
