import React from "react";

const Team = () => {
  return (
    <div className="container py-5">
      {/* Section Heading */}
      <div className="row border-top pt-5">
        <h1 className="text-center fw-semibold mb-5">People</h1>
      </div>

      {/* Founder Section */}
      <div className="row align-items-center justify-content-center text-muted">
        {/* Image Column */}
        <div className="col-lg-4 col-md-5 col-10 text-center mb-4 mb-md-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid shadow-sm"
            style={{
              borderRadius: "50%",
              width: "70%",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <h4 className="mt-4 mb-1 fw-semibold">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder & CEO</h6>
        </div>

        {/* Description Column */}
        <div className="col-lg-6 col-md-7 col-11 fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>

          <p className="mt-4">
            Connect on{" "}
            <a href="#" className="text-decoration-none text-primary">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none text-primary">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none text-primary">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
