import React from "react";

const Awards = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center justify-content-center">
        {/* Image Column */}
        <div className="col-lg-6 col-md-10 text-center mb-4 mb-lg-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker Illustration"
            className="img-fluid"
            style={{ maxWidth: "85%" }}
          />
        </div>

        {/* Text Column */}
        <div className="col-lg-6 col-md-10 text-center text-lg-start px-4">
          <h1 className="fw-semibold mb-3">Largest stock broker in India</h1>
          <p className="text-muted mb-4 fs-6">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6 text-muted">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 text-muted">
              <ul className="list-unstyled">
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
