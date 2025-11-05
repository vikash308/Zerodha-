import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div className="apps-page py-5 px-3 px-md-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 text-center text-md-start">
        <h4 className="fw-bold text-primary mb-2 mb-md-0">
          📱 Integrated Apps & Tools
        </h4>
        <Link className="btn btn-outline-primary px-4" to="/add-app">
          + Add New App
        </Link>
      </div>

      <div className="row g-4">
        {[
          {
            name: "TradingView",
            desc: "Advanced charting and market analysis integration.",
            icon: "bi-graph-up",
          },
          {
            name: "Smallcase",
            desc: "Invest in expert-curated portfolios seamlessly.",
            icon: "bi-briefcase",
          },
          {
            name: "Tickertape",
            desc: "Stock screeners, analysis tools, and data insights.",
            icon: "bi-bar-chart",
          },
        ].map((app, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center py-4 px-3">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className={`bi ${app.icon} fs-4`}></i>
                </div>
                <h5 className="fw-semibold">{app.name}</h5>
                <p className="text-muted small mb-3">{app.desc}</p>
                <Link className="btn btn-sm btn-outline-primary">
                  Open App
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
