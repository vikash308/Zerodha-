import React from "react";
import {Link} from "react-router-dom"

const OpenAccount = () => {
  return (
    <div className="container-fluid bg-light py-5 mt-5">
      <div className="container text-center py-5">
        <h1 className="fw-semibold mb-3">Open a Zerodha account</h1>
        <p className="text-muted mb-4 fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link className="btn btn-primary btn-lg px-5" to={"/signup"}>Sign up now</Link>
      </div>
    </div>
  );
};

export default OpenAccount;
