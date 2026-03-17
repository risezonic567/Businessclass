import React, { useState } from "react";

export default function Banner() {
  const [tripType, setTripType] = useState("round");

  return (
    <div className="position-relative text-white banner-wrapper">
      {/* Background Image */}
      <img
        src="/photos/Business_Class_Banner_1.jpg.jpeg"
        alt="Flight Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover" }}
      />

      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 banner-overlay" />

      {/* Styles */}
      <style>{`
        .banner-wrapper {
          min-height: 100vh;
          padding-top: 120px; /* FIXED NAVBAR SPACE. */
          padding-bottom: 40px;
        }

        

        @media (max-width: 768px) {
          .banner-wrapper {
            padding-top: 100px;
          }

          .banner-title {
            font-size: 24px;
            line-height: 1.3;
          }

          .banner-subtitle {
            font-size: 14px;
          }

          .search-form .col-md {
            margin-bottom: 12px;
          }
        }

        .glass-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(18px);
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3);
        }

        .trip-tab {
          cursor: pointer;
          font-weight: 600;
          padding: 6px 12px;
          position: relative;
          color: #555;
          transition: all 0.3s;
        }

        .trip-tab.active {
          color: #ff8c00;
        }

        .trip-tab.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(135deg,#ff3c3c,#ff8c00);
          border-radius: 10px;
        }

        .search-input {
          height: 48px;
          border-radius: 12px;
        }

        .search-btn {
          height: 50px;
          border-radius: 14px;
          font-weight: 600;
          background: linear-gradient(135deg,#ff3c3c,#ff8c00);
          color: white;
          border: none;
          transition: all 0.3s;
        }

        .search-btn:hover {
          transform: scale(1.03);
        }
      `}</style>

      {/* Content */}
      <div className="container position-relative text-center px-3">
        {/* Heading */}
        <h1 className="fw-bold mb-2 banner-title">
          Get Luxury Business & First Class flights deals 
        </h1>

        <p className="opacity-75 mb-4 banner-subtitle">
          Exclusive luxury flight deals curated by travel experts
        </p>

        {/* Search Box */}
        <div
          className="glass-card p-4 mx-auto"
          style={{ maxWidth: "950px", color: "#000" }}
        >
          {/* Trip Toggle */}
          <div className="d-flex gap-4 mb-3 justify-content-start">
            <div
              className={`trip-tab ${tripType === "round" ? "active" : ""}`}
              onClick={() => setTripType("round")}
            >
              Round Trip
            </div>

            <div
              className={`trip-tab ${tripType === "one" ? "active" : ""}`}
              onClick={() => setTripType("one")}
            >
              One Way
            </div>
          </div>

          {/* Form */}
          <div className="row g-3 search-form align-items-end">
            <div className="col-12 col-md-2">
              <label className="small text-muted">From</label>
              <input
                type="text"
                className="form-control search-input"
                placeholder="New York"
              />
            </div>

            <div className="col-12 col-md-2">
              <label className="small text-muted">To</label>
              <input
                type="text"
                className="form-control search-input"
                placeholder="London"
              />
            </div>

            <div className="col-12 col-md-2">
              <label className="small text-muted">Departure</label>
              <input type="date" className="form-control search-input" />
            </div>

            {tripType === "round" && (
              <div className="col-12 col-md-2">
                <label className="small text-muted">Return</label>
                <input type="date" className="form-control search-input" />
              </div>
            )}

            <div className="col-12 col-md-2">
              <label className="small text-muted">Passengers</label>
              <select className="form-select search-input">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>

            <div
              className={`col-12 col-md-${tripType === "round" ? "2" : "2"}`}
            >
              <button className="search-btn w-100">Search Flights</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
