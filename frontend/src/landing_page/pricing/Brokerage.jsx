import React from "react";

const Brokerage = () => {
  return (
    <div className="container my-5">
      <div className="row border-top pt-5">
        {/* Left Column */}
        <div className="col-lg-8 col-md-12 mb-4 text-center text-lg-start">
          <a href="#" className="text-decoration-none text-dark">
            <h3 className="fs-4 mb-4 fw-semibold">Brokerage calculator</h3>
          </a>
          <ul
            className="list-unstyled text-muted small"
            style={{ lineHeight: "1.9" }}
          >
            <li>
              <strong>Call & trade and RMS auto-squareoff:</strong> Additional
              charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For <strong>NRI account (non-PIS)</strong>, 0.5% or ₹100 per
              executed order for equity (whichever is lower).
            </li>
            <li>
              For <strong>NRI account (PIS)</strong>, 0.5% or ₹200 per executed
              order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-lg-4 col-md-12 text-center text-lg-start">
          <a href="#" className="text-decoration-none text-dark">
            <h3 className="fs-4 mb-3 fw-semibold">List of charges</h3>
          </a>
          <p className="text-muted small">
            View all applicable account, brokerage, and transaction charges in
            detail.
          </p>
          <a href="#" className="btn btn-outline-primary btn-sm">
            View charges
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
