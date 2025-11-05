import React from "react";

const Hero = () => {
  return (
    <div className="container my-5 py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h1 className="fw-bold mb-3">Technology</h1>
          <h3 className="text-muted fs-5 mb-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="fs-6">
            Check out our{" "}
            <a
              href="#"
              className="text-decoration-none text-primary fw-semibold"
            >
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
