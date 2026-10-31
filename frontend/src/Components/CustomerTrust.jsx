import React, { useEffect, useRef, useState } from "react";

export default function CustomerTrust() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          Observer.disconnect(); 
        }
      },
      { threshold: 0.25 } 
    );

    if (sectionRef){ 
      Observer.observe(sectionRef.current)
    };

    return () => Observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container py-5 overflow-hidden"
    >
      <div className="row align-items-center g-5">

        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(-100px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease-out",
          }}
        >
          <img
            src="/photos/Business_Class_Travel_Management.jpg.jpeg"
            className="img-fluid rounded-4 shadow-lg"
            alt="Business class seat"
          />
        </div>

       
        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(100px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease-out",
          }}
        >
          <h2 className="fw-bold mb-3" style={{color:"black"}}>
            Fly Business Class Without Paying Full Airline Prices
          </h2>

          <p className="text-muted">
            Flying in business class doesn&apos;t have to mean paying the full
            listed price. Our travel specialists help you find discount business
            class flights on international routes from the US, including London,
            Dubai, Paris, New York, and Los Angeles. We compare airlines,
            cabins, and dates, so you can review the cheapest business class
            airfares before you book. Whether you travel for work or plan a
            long-haul holiday, one search or one call gets you started.
            </p>

          <div className="d-flex gap-4 my-2">
            <div>
              <h4 className="fw-bold mb-0" style={{color:"blue"}}>188K+</h4>
              <small className="text-muted">Happy Travelers</small>
            </div>
            <div>
              <h4 className="fw-bold mb-0" style={{color:"blue"}}>24/7</h4>
              <small className="text-muted">Live Support</small>
            </div>
            <div>
              <h4 className="fw-bold mb-0" style={{color:"blue"}}>97%</h4>
              <small className="text-muted">Positive Review</small>
            </div>
          </div>

           <a
            href="tel:+18663075957"
            className="btn mt-2"
            style={{
              background: "blue",
              color: "white",
              padding: "10px 22px",
              borderRadius: "30px",
            }}
          >
            Speak With Expert
          </a>
        </div>
      </div>

     
      <div className="row align-items-center mt-5 g-3 flex-lg-row-reverse">

     
        <div
          className="col-lg-6 text-center"
          style={{
            transform: visible ? "translateX(0)" : "translateX(100px)",
            opacity: visible ? 1 : 0,
            transition: "all 1s ease-out",
          }}
        >
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <img
              src="/photos/Business_Class_Trusted_By_Travelers.jpg.jpeg"
              className="img-fluid"
              alt="Business Class customers"
             
            />
          </div>
        </div>

        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(-100px)",
            opacity: visible ? 1 : 0,
            transition: "all 1s ease-out",
          }}
        >
          <h2 className="h4 fw-bold mb-3" style={{color:"blue"}}>
             Personalized Discount Business & First Class Flight Booking
          </h2>

          <p className="text-muted">
            Our advisors negotiate on your behalf to find business class flights
            tickets at a discount compared to the airline&apos;s listed price.
            You share your route, dates, and preferences, and we return clear
            fare options with the cabin, airline, and baggage details explained.
            If a better option appears, we help you rebook within the fare rules.
          </p>

          <a
            href="tel:+18663075957"
            className="btn mt-2"
            style={{
              background: "blue",
              color: "white",
              padding: "10px 22px",
              borderRadius: "30px",
            }}
          >
            Speak With Business Class Expert
          </a>
        </div>

      </div>
    </div>
  );
}
