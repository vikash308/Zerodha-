import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light mt-5 border-top">
      <div className="container py-5">
        {/* --- Top Section --- */}
        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "160px" }}
            />
            <p className="text-muted small mb-0">
              &copy; 2010 - 2024, not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* --- Company Links --- */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Referral programme</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Zerodha.tech</a>
              </li>
              <li>
                <a href="#">Press & media</a>
              </li>
              <li>
                <a href="#">Zerodha cares (CSR)</a>
              </li>
            </ul>
          </div>

          {/* --- Support Links --- */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Support portal</a>
              </li>
              <li>
                <a href="#">Z-Connect blog</a>
              </li>
              <li>
                <a href="#">List of charges</a>
              </li>
              <li>
                <a href="#">Downloads & resources</a>
              </li>
            </ul>
          </div>

          {/* --- Account Links --- */}
          <div className="col-12 col-md-3">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#">Open an account</a>
              </li>
              <li>
                <a href="#">Fund transfer</a>
              </li>
              <li>
                <a href="#">60 day challenge</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Legal & Info Section --- */}
        <div className="mt-5 text-muted small" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For any complaints pertaining to securities broking please write to{" "}
            <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>,
            for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>
            .
          </p>
          <p>
            <a href="#">Smart Online Dispute Resolution</a> |{" "}
            <a href="#">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository. 3) Check your securities / MF / bonds in
            the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day."
          </p>
          <p>
            KYC is one time exercise while dealing in securities markets - once
            KYC is done through a SEBI registered intermediary, you need not
            undergo the same process again. As a business we don't give stock
            tips, and have not authorized anyone to trade on behalf of others.
          </p>
        </div>

        {/* --- Bottom Links --- */}
        <div className="mt-4 d-flex flex-wrap gap-3 small">
          {[
            "NSE",
            "BSE",
            "MCX",
            "Terms & Conditions",
            "Policies & Procedures",
            "Privacy Policy",
            "Disclosure",
          ].map((item, i) => (
            <a key={i} href="#" className="text-decoration-none text-muted">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
