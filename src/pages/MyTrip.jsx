import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function MyTrip() {
  const [mode, setMode] = useState("ticket");

 
  const BG_OVERLAY_OPACITY = 0.45; 
  const BG_BLUR = "6px";             
  const CARD_OPACITY = 0.85;        
  const CARD_BLUR = "14px";          
  

  return (
    <>
      <Helmet>
        <title>Flight Status Check | Track Your Flight Online</title>
        <meta name="description" content="Track real-time Flight Status updates for domestic and international routes. Check departures, arrivals, delays, and schedule changes quickly and easily."/>
        <link rel="canonical" href="https://www.business-classflights.com/flight-status" />
        <script type="application/ld+json">
{
  `{
"@context":"https://schema.org",
"@type":"WebApplication",
"name":"Flight Status Tracker",
"url":"https://www.business-classflights.com/flight-status",
"description":"Check real-time flight status updates, including arrivals, departures, delays, and schedule changes for domestic and international flights.",
"applicationCategory":"TravelApplication",
"operatingSystem":"All",
"publisher":{
"@type":"TravelAgency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com"
}
}`
}
</script>


      </Helmet>
      <div
      className="min-vh-100 position-relative"
      style={{
        backgroundImage: "url('/photos/Trip_Banner.jpg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `rgba(0,0,0,${BG_OVERLAY_OPACITY})`,
          backdropFilter: `blur(${BG_BLUR})`,
        }}
      />

      <div className="container min-vh-100 position-relative">
        <div className="row min-vh-100 justify-content-center align-items-center">
          
          <div className="col-12 col-md-7 col-lg-5">
            <div
              className="rounded-4 shadow-lg p-4"
              style={{
                background: `rgba(255,255,255,${CARD_OPACITY})`,
                backdropFilter: `blur(${CARD_BLUR})`,
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              <h1 className="fw-bold text-center mb-4">My Trip</h1>

              {/* Toggle */}
              <div
                className="d-flex rounded-pill p-1 mb-4"
                style={{
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                <button
                  className={`btn flex-fill rounded-pill fw-semibold btn-outline-none ${
                    mode === "email" ? "text-white" : "text-dark"
                  }`}
                  style={{
                    background:
                      mode === "email"
                        ? "blue"
                        : "transparent",
                    transition: "0.3s",
                    
                  }}
                  onClick={() => setMode("email")}
                >
                  By Email
                </button>

                <button
                  className={`btn flex-fill rounded-pill fw-semibold ${
                    mode === "ticket" ? "text-white" : "text-dark"
                  }`}
                  style={{
                    background:
                      mode === "ticket"
                        ? "blue"
                        : "transparent",
                    transition: "0.3s",
                    
                  }}
                  onClick={() => setMode("ticket")}
                >
                  By Ticket
                </button>
              </div>

              {/* Form */}
              {mode === "ticket" && (
                <>
                  <h3 className="text-muted small mb-2">
                    Enter your ticket number and last name
                  </h3>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="13-digit Ticket Number"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Passenger Last Name"
                  />
                </>
              )}

              {mode === "email" && (
                <>
                  <p className="text-muted small mb-2">
                    Enter the email used while booking
                  </p>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                  />
                </>
              )}

              <button
                className="btn w-100 py-2 fw-semibold"
                style={{
                  background: "blue",
                  color: "white",
                }}
              >
                Find My Booking
              </button>

              <h2 className="text-center text-muted small mt-3 mb-0" >
                Need help? Contact our 24×7 support team
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
