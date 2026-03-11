import React, { useState } from "react";
import Banner from "../Components/Banner";
import CustomerTrust from "../Components/CustomerTrust";
import AutoPlay from "../Components/AutoPlay";
import FAQ from "../Components/FAQ";
// import ContactUs from "../Components/ContactUs";
import PolularDestination from "../Components/PolularDestination";
import Discound from "../Components/Discound";
import { Helmet } from "react-helmet";

 const faqs=[{
    q: "How much does it cost to fly business class?",
    a: "Business class fares vary by route, airline, and season. Prices can range from moderately higher than economy to several times more, depending on availability, demand, and how early you book."
  },
  {
    q: "Which airlines offer the best business class experience?",
    a: "Many international airlines are known for high-quality business class cabins, including airlines from the Middle East, Europe, and Asia, as well as major global carriers from the US."
  },
  {
    q: "What type of business class flight deals can I find?",
    a: "You can find one-way, round-trip, multi-city, advance booking, and last-minute business class fares. Some airlines also offer promotional upgrades from economy to business class."
  },
  {
    q: "What are the most popular business class destinations?",
    a: "Popular business class routes often include major global hubs such as London, Paris, Dubai, Singapore, New York, and cities across Europe and Asia."
  },
  {
    q: "Which cities are most frequently booked in business class?",
    a: "Cities like New York, London, Dubai, Paris, Milan, Delhi, Mumbai, Bangkok, and Singapore are among the most common business class destinations."
  },
  {
    q: "Is booking business class online secure?",
    a: "Yes. Reputable travel platforms use encrypted payment systems and partner with trusted airlines and ticket providers to ensure secure bookings."
  },
  {
    q: "Can I change or cancel a business class ticket?",
    a: "Most business class tickets offer flexible change and cancellation options, although policies depend on the airline and fare type you choose."
  }
];

export default function Home() {
    const [open, setOpen] = useState(null);
  return (
    <>
      <Helmet>
        <title>Business Class Flights | Discount International Premium Tickets</title>
        <meta name="description" content="Book premium Business Class Flights at discounted prices worldwide. Save up to 40% on international tickets with expert support and secure booking assistance."/>
        <link rel="canonical" href="https://www.business-classflights.com/" />
      </Helmet>
      <Banner />
      <CustomerTrust />
      {/* <ContactUs /> */}
      <Discound />
      <PolularDestination />
       <div className="bg-white">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2 className="fw-bold mb-4" style={{ fontSize: "36px" }}>
          Business Class FAQs
        </h2>

        {faqs.map((item, i) => (
          <div key={i} className="border-bottom py-4">
            <div
              className="d-flex justify-content-between align-items-start"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h5
                className="mb-0"
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#111"
                }}
              >
                {item.q}
              </h5>

              <span style={{ fontSize: "22px", fontWeight: "600" }}>
                {open === i ? "−" : "+"}
              </span>
            </div>

            {open === i && (
              <p
                className="mt-3"
                style={{
                  color: "#555",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}
              >
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
      <AutoPlay />
      
    </>
  );
}
