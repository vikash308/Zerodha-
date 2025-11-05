import React from "react";

const RightImage = ({ imageUrl, title, Description, learnMore }) => {
  return (
    <div className="container mt-5 pt-5 border-top">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 mt-4">
          <h1 className="mb-3">{title}</h1>
          <p className="text-muted">{Description}</p>
          <a
            href={learnMore}
            className="text-decoration-none text-primary fw-semibold"
          >
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center mt-4">
          <img
            src={imageUrl}
            alt={title}
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightImage;
