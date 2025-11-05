import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-page py-4 px-3 px-md-4">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3 text-center text-md-start">
        <p className="mb-0 text-muted fs-5">
          💸 Instant, zero-cost fund transfers with UPI
        </p>
        <div className="d-flex justify-content-center gap-2">
          <Link className="btn btn-success px-4">Add Funds</Link>
          <Link className="btn btn-primary px-4">Withdraw</Link>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column - Equity */}
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0 rounded-4 h-100">
            <div className="card-header bg-light border-bottom py-3">
              <h5 className="mb-0 fw-semibold text-primary">💼 Equity Funds</h5>
            </div>

            <div className="card-body px-4">
              {/* Top Summary */}
              <div className="row text-center text-md-start mb-3 gy-3">
                <div className="col-4 col-md-3">
                  <p className="mb-1 text-muted small">Available margin</p>
                  <h6 className="fw-bold text-success">₹4,043.10</h6>
                </div>
                <div className="col-4 col-md-3">
                  <p className="mb-1 text-muted small">Used margin</p>
                  <h6 className="fw-bold text-danger">₹3,757.30</h6>
                </div>
                <div className="col-4 col-md-3">
                  <p className="mb-1 text-muted small">Available cash</p>
                  <h6 className="fw-bold">₹4,043.10</h6>
                </div>
              </div>

              <hr />

              {/* Balance Details */}
              <div className="row gy-2">
                {[
                  ["Opening Balance", "₹4,043.10"],
                  ["Closing Balance", "₹3,736.40"],
                  ["Payin", "₹4,064.00"],
                  ["SPAN", "₹0.00"],
                  ["Delivery Margin", "₹0.00"],
                  ["Exposure", "₹0.00"],
                  ["Options Premium", "₹0.00"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="col-12 col-sm-6 d-flex justify-content-between small"
                  >
                    <span>{label}</span>
                    <span className="fw-semibold">{value}</span>
                  </div>
                ))}
              </div>

              <hr />

              {/* Collateral */}
              <div className="row gy-2">
                {[
                  ["Collateral (Liquid funds)", "₹0.00"],
                  ["Collateral (Equity)", "₹0.00"],
                  ["Total Collateral", "₹0.00"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="col-12 col-sm-6 d-flex justify-content-between small"
                  >
                    <span>{label}</span>
                    <span className="fw-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Commodity */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 rounded-4 text-center py-5 h-100">
            <div className="card-body">
              <p className="text-muted mb-3">
                📦 You don't have a commodity account
              </p>
              <Link className="btn btn-outline-primary px-4">
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
