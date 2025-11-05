import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Product Sections */}
      <LeftImage
        imageUrl="media/images/kite.png"
        title="Kite"
        Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI. Enjoy the Kite experience seamlessly on Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googleplay="#"
        appStore="#"
      />

      <RightImage
        imageUrl="media/images/console.png"
        title="Console"
        Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations."
        learnMore="#"
      />

      <LeftImage
        imageUrl="media/images/coin.png"
        title="Coin"
        Description="Buy direct mutual funds online — commission-free, delivered directly to your Demat account. Experience effortless investing on Android and iOS."
        tryDemo="#"
        learnMore="#"
        googleplay="#"
        appStore="#"
      />

      <RightImage
        imageUrl="media/images/kiteconnect.png"
        title="Kite Connect API"
        Description="Build powerful trading platforms and experiences with our simple HTTP/JSON APIs. Startups can build their own investment apps and showcase them to our user base."
        learnMore="#"
      />

      <LeftImage
        imageUrl="media/images/varsity.png"
        title="Varsity Mobile"
        Description="A comprehensive collection of stock market lessons, explained with visuals and examples. Learn on the go with our bite-sized mobile-friendly content."
        learnMore="#"
        googleplay="#"
        appStore="#"
      />

      {/* Footer Text */}
      <div className="text-center my-5 py-4 border-top">
        <p className="fs-5 text-muted">
          Want to know more about our technology stack?{" "}
          <a href="#" className="text-decoration-none text-primary fw-semibold">
            Check out Zerodha.tech{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>

      {/* Universe Section */}
      <Universe />
    </>
  );
};

export default ProductPage;
