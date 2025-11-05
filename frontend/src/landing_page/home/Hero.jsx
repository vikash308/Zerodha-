import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center align-items-center">
        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mx-auto d-block"
          />
        </div>

        {/* Hero Text */}
        <div className="col-12">
          <h1 className="fw-semibold mb-3 display-6 display-md-5">
            Invest in everything
          </h1>
          <p className="text-muted fs-5 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>

          <Link className="btn btn-primary btn-lg px-5 py-2" to={"/signup"}>
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
