import React from "react";

const Stats = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center justify-content-center">
        {/* Left Text Section */}
        <div className="col-lg-6 col-md-10 mb-5 mb-lg-0">
          <h1 className="fw-semibold mb-4">Trust with confidence</h1>

          <div className="mb-4">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted">
              That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="text-muted">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High-quality apps that you use at your own pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">The Zerodha universe</h5>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions — we help you make smarter financial
              decisions.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-lg-6 col-md-10 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "85%" }}
          />
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="#"
              className="text-decoration-none text-primary fw-semibold"
            >
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none text-primary fw-semibold"
            >
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
