import React from "react";
import {Link} from "react-router-dom"

const Universe = () => {
  const partners = [
    {
      logo: "media/images/smallcaseLogo.png",
      desc: "Thematic investment platform",
    },
    { logo: "media/images/streakLogo.png", desc: "Algo & strategy platform" },
    {
      logo: "media/images/sensibullLogo.svg",
      desc: "Options trading simplified",
    },
    { logo: "media/images/tijori.svg", desc: "Stock analytics & insights" },
    { logo: "media/images/dittoLogo.png", desc: "Insurance made simple" },
    { logo: "media/images/goldenpiLogo.png", desc: "Bonds & fixed income" },
  ];

  return (
    <div className="container mt-5 pt-5 border-top">
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        {partners.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-5">
            <img
              src={item.logo}
              alt="partner logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "180px" }}
            />
            <p className="text-muted small">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link className="btn btn-primary btn-lg px-5" to={"/signup"}>
          Sign up for free
        </Link>
      </div>
    </div>
  );
};

export default Universe;
