import React from "react";

const Hero = () => {
  return (
    <div className="container my-5 pb-5 border-bottom">
      {/* Header Section */}
      <div className="row text-center mb-5">
        <div className="col">
          <h1 className="fw-bold mb-3">Pricing</h1>
          <p className="text-muted fs-5">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row text-center gy-5">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="mb-3"
            style={{ width: "120px" }}
          />
          <h2 className="fs-4 mb-2">Free equity delivery</h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: "320px" }}>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday trades"
            className="mb-3"
            style={{ width: "120px" }}
          />
          <h2 className="fs-4 mb-2">Intraday and F&O trades</h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: "320px" }}>
            Flat ₹20 or 0.03% (whichever is lower) per executed order across
            equity, currency, and commodity trades. Flat ₹20 on all option
            trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="media/images/pricingMF.svg"
            alt="Free mutual funds"
            className="mb-3"
            style={{ width: "120px" }}
          />
          <h2 className="fs-4 mb-2">Free direct MF</h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: "320px" }}>
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
