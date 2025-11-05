import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center">
      {/* Top Heading Section */}
      <div className="row justify-content-center text-center mt-5 px-3">
        <div className="col-lg-8 col-md-10">
          <h1 className="fw-semibold fs-2 fs-md-3 mb-4">
            We pioneered the discount broking model in India.{" "}
            <br className="d-none d-md-block" />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div
        className="row mt-5 border-top pt-5 justify-content-center text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
      >
        {/* Left Column */}
        <div className="col-lg-5 col-md-10 px-4 mb-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and “Rodha”, the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-lg-5 col-md-10 px-4 mb-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us, or learn more about our business and product philosophies.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="row text-center mt-5 mb-4">
        <div className="col">
          <button className="btn btn-outline-primary px-4 py-2 rounded-pill">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
