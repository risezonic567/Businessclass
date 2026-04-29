import React, { useState } from "react";
import { Helmet } from "react-helmet";



export default function Deals() {
  const [tab, setTab] = useState("all");

  const deals = [
    {
      type: "international",
      title: "Flat 25% Off – International Flights",
      desc: "Save big on flights to USA, Europe & Middle East.",
      code: "INT25",
      price: "Save up to ₹8,000",
    },
    {
      type: "domestic",
      title: "Domestic Flight Offer",
      desc: "Get lowest fares on all Indian airlines.",
      code: "FLYINDIA",
      price: "Save up to ₹1,500",
    },
    {
      type: "student",
      title: "Student Special Fare",
      desc: "Exclusive fares for students travelling abroad.",
      code: "STUDENT",
      price: "Save up to ₹4,000",
    },
    {
      type: "lastminute",
      title: "Last Minute Deals",
      desc: "Flying today or tomorrow? Grab cheap fares now.",
      code: "NOWFLY",
      price: "Limited seats",
    },
  ];

  const filteredDeals =
    tab === "all" ? deals : deals.filter((d) => d.type === tab);

  return (
    <>
      <Helmet>
        <title>Business Class Flight Deals | Save on Premium Airfare</title>
        <meta name="description" content="Discover exclusive Business Class Flight Deals with major airlines. Save on international premium airfare with flexible options and personalized booking support." />
        <link rel="canonical" href="https://www.business-classflights.com/flights-deals" />
        <script type="application/ld+json">
          {`{
"@context":"https://schema.org",
"@type":"Service",
"name":"Business Class Flight Deals",
"url":"https://www.business-classflights.com/flights-deals",
"description":"Explore discounted business class and first class flight deals for international travel with expert booking assistance and premium airline options.",
"provider":{
"@type":"TravelAgency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com"
},
"areaServed":{
"@type":"Country",
"name":"United States"
},
"offers":{
"@type":"Offer",
"availability":"https://schema.org/InStock",
"priceCurrency":"USD",
"url":"https://www.business-classflights.com/flights-deals"
}
}`}
        </script>


      </Helmet>
      <div
        className="container-fluid p-0"
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(/photos/Flight_Deals_Offer_Banner.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-100 d-flex align-items-center">
          <div className="container text-light">
            <div style={{ maxWidth: "650px" }}>
              <h1 className="fw-bold display-4 mb-3">
                Flight Deals & Exclusive Offers
              </h1>
              <p className="lead mb-4">
                Compare and book international & domestic flights at the lowest
                prices with exclusive airline deals.
              </p>
              {/* <button className="btn btn-color btn-lg px-5 text-light">
                Explore All Deals
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* DEALS SECTION */}
      <div className="container py-5">
        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap">
          {["all", "international", "domestic", "student", "lastminute"].map(
            (item) => (
              <button
                key={item}
                className={`btn text-black ${tab === item
                    ? "btn-color text-light"
                    : "btn-outline-btn-color text-light"
                  }`}
                onClick={() => setTab(item)}
              >
                {item === "all"
                  ? "All Deals"
                  : item === "international"
                    ? "International"
                    : item === "domestic"
                      ? "Domestic"
                      : item === "student"
                        ? "Student"
                        : "Last Minute"}
              </button>
            )
          )}
        </div>

        {/* Highlight Offer */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="/photos/Mega_sale.jpg"
                    className="img-fluid h-100 w-100 object-fit-cover"
                    alt=""
                  />
                </div>
                <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                  <h3 className="fw-bold mb-2">
                    Mega International Sale
                  </h3>
                  <p className="text-muted">
                    Fly worldwide with premium airlines at special discounted
                    fares. Limited time only.
                  </p>
                  <h5 className="text-success fw-bold">
                    Save up to ₹10,000
                  </h5>
                  <button className="btn btn-primary mt-3 px-4 text-light align-self-start">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Cards */}
        <div className="row g-4">
          {filteredDeals.map((deal, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-semibold">{deal.title}</h5>
                <p className="text-muted small">{deal.desc}</p>
                <p className="fw-bold text-success">{deal.price}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="badge bg-light text-dark">
                    Code: {deal.code}
                  </span>
                  <button className="btn btn-primary btn-sm text-light">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info here*/}
        <div className="text-center mt-5">
          <p className="text-muted">
            Prices may vary based on airline & availability. Book early for the
            best fares.
          </p>
        </div>
      </div>


    </>
  );
}
