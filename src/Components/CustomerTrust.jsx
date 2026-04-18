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

      {/* FIRST ROW */}
      <div className="row align-items-center g-5">

        {/* LEFT IMAGE */}
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

        {/* RIGHT CONTENT */}
        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(100px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.9s ease-out",
          }}
        >
          <h2 className="fw-bold mb-3" style={{color:"black"}}>
            Business Class Travel Specialists Dedicated To You.
          </h2>

          <p className="text-muted">
            We are experts in discounted business and first-class fares from the US to all major international destinations. All of our travel advisors exclusively negotiate unpublished fares that save you 40% or more when flying in a premium cabin.
            </p>

          <div className="d-flex gap-4 my-4">
            <div>
              <h4 className="fw-bold mb-0 text-corol">188K+</h4>
              <small className="text-muted">Happy Travelers</small>
            </div>
            <div>
              <h4 className="fw-bold mb-0 text-corol">24/7</h4>
              <small className="text-muted">Live Support</small>
            </div>
            <div>
              <h4 className="fw-bold mb-0 text-corol">97%</h4>
              <small className="text-muted">Positive Reviews</small>
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

      {/* SECOND ROW */}
      <div className="row align-items-center mt-2 g-3 flex-lg-row-reverse">

        {/* IMAGE */}
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

        {/* TEXT */}
        <div
          className="col-lg-6"
          style={{
            transform: visible ? "translateX(0)" : "translateX(-100px)",
            opacity: visible ? 1 : 0,
            transition: "all 1s ease-out",
          }}
        >
          <h4 className="fw-bold mb-3" style={{color:"blue"}}>
             Personalized Discount Business & First Class Flight Booking
          </h4>

          <p className="text-muted">
            Experience top-class service from our travel experts as they work to help you get exclusive unpublished rates on your international travel. With our ability to negotiate on behalf of clients, you will receive substantial discounts on premium seating tickets versus the price listed by the airline. Whether for business or leisure travel, Premium-Class Travel is ready to assist you!
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
