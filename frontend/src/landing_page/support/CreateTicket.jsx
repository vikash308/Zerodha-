import React from "react";

const CreateTicket = () => {
  const topics = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Trading and Markets",
      links: [
        "Equity and Derivatives",
        "Margins and Leverage",
        "Order Types and Product Codes",
        "Corporate Actions",
        "Market Timings",
        "Intraday and Delivery Trades",
        "Settlement and Payouts",
      ],
    },
    {
      title: "Funds and Withdrawals",
      links: [
        "Adding and Withdrawing Funds",
        "UPI and Bank Transfers",
        "Instant Withdrawals",
        "Refunds and Failures",
        "Linked Bank Account Issues",
        "Payment Gateway Charges",
        "Funds on Hold",
      ],
    },
    {
      title: "Mutual Funds",
      links: [
        "Direct Mutual Fund Investments",
        "Coin App Usage",
        "Systematic Investment Plans (SIP)",
        "Redemptions and Switches",
        "NAV and Settlement",
        "Tax Statements",
        "Account Linking",
      ],
    },
    {
      title: "Profile and Account",
      links: [
        "Updating Profile Details",
        "Nominee Addition",
        "PAN and Aadhaar Updates",
        "Address Change",
        "Password Reset",
        "Two-factor Authentication",
        "Deactivation and Reopening",
      ],
    },
    {
      title: "Charges and Reports",
      links: [
        "Brokerage Charges",
        "Contract Notes",
        "Ledger and P&L Reports",
        "Tax P&L",
        "DP and AMC Charges",
        "Trade-wise Reports",
        "GST and SEBI Fees",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">To create a ticket, select a relevant topic</h1>
      </div>

      <div className="row">
        {topics.map((topic, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-5">
            <h4 className="fs-5 mb-3">{topic.title}</h4>
            <ul className="list-unstyled">
              {topic.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-decoration-none text-primary d-block mb-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
