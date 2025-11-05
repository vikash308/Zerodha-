import React from "react";

const LeftImage = ({
  imageUrl,
  title,
  Description,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) => {
  return (
    <div className="container mt-5 pt-5 border-top">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={imageUrl} alt={title} className="img-fluid rounded" />
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-md-start text-center">
          <h1 className="fw-bold mb-3">{title}</h1>
          <p className="text-muted mb-4">{Description}</p>

          {/* Links */}
          <div className="mb-4">
            {tryDemo && (
              <a
                href={tryDemo}
                className="me-4 text-decoration-none text-primary fw-semibold"
              >
                Try Demo
              </a>
            )}
            {learnMore && (
              <a
                href={learnMore}
                className="text-decoration-none text-primary fw-semibold"
              >
                Learn More
              </a>
            )}
          </div>

          {/* App Store Links */}
          {(googleplay || appStore) && (
            <div className="d-flex justify-content-md-start justify-content-center gap-3">
              {googleplay && (
                <a href={googleplay}>
                  <img
                    src="media/images/googlePlayBadge.svg"
                    alt="Get it on Google Play"
                    className="img-fluid"
                    style={{ height: "40px" }}
                  />
                </a>
              )}
              {appStore && (
                <a href={appStore}>
                  <img
                    src="media/images/appstoreBadge.svg"
                    alt="Download on the App Store"
                    className="img-fluid"
                    style={{ height: "40px" }}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
