import React, { useState } from "react";
import Banner from "../Components/Banner";
import CustomerTrust from "../Components/CustomerTrust";
import AutoPlay from "../Components/AutoPlay";
import Discound from "../Components/Discound";
import { Helmet } from "react-helmet";
import Destinations from "./DestinationPage";

const faqs = [
  {
    q: "How much does it cost to fly business class?",
    a: "It depends on where you're going, which airline you pick, the season, and how early you book. A long international flight costs a lot more than a short one. Tell us your route and dates, and we'll look for a better fare than the one you see online.",
  },
  {
    q: "Which airlines have the best business class?",
    a: "Emirates, Qatar Airways, Singapore Airlines, British Airways, and Air France come up a lot, mostly for their lie-flat seats and service. The “best” one really depends on your route, schedule, and budget. Share your trip, and we'll compare a few for you.",
  },
  {
    q: "What kinds of business class deals can I find?",
    a: "Usually discounted international fares, flexible-date options, and round-trip deals on major routes. Seats and prices change from day to day, so the quickest way to see what's available right now is to give us a call.",
  },
  {
    q: "Where do most people fly in business class?",
    a: "London, Dubai, Paris, New York, Los Angeles and San Francisco are the routes people ask us about most. Don't see your city? Ask us. We book plenty of other routes too.",
  },
  {
    q: "Is it safe to book business class online?",
    a: "Yes. We use secure booking and payment, and we go over your itinerary and ticket details with you before you travel, so there are no surprises.",
  },
  {
    q: "Can I change the date on my business class ticket?",
    a: "Sometimes. It comes down to the fare rules. Some tickets allow changes for a fee or a fare difference, and others don't. If flexibility matters to you, tell us up front, and we'll look for fares that give you room to move.",
  },
  {
    q: "Do you book first class flights too?",
    a: "Yes, on select routes and airlines. Send us your route and dates, and we'll let you know what's available.",
  },
  {
    q: "How early should I book?",
    a: "A few weeks ahead is usually a good rule of thumb. You get more seats and fares to choose from, especially around holidays and peak travel dates. Leaving it late? Call us anyway, because last-minute options sometimes pop up.",
  },
];

export default function Home() {
  const [open, setOpen] = useState(null);
  const [corpForm, setCorpForm] = useState({
    name: "",
    phone: "",
    route: "",
  });

  const handleCorpChange = (e) => {
    setCorpForm({ ...corpForm, [e.target.name]: e.target.value });
  };

  const handleCorpSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted successfully!");
  };

  return (
    <>
      <Helmet>
        <title>
          Discounts on Business Class Flights | Low Business Class Airfares
        </title>
        <meta
          name="description"
          content="Discounts on US travel agencies for business class airfare. Cheap business class tickets and reduced airfares. Book your international flights. Call now."
        />
        <link rel="canonical" href="https://www.business-classflights.com/" />
        <script type="application/ld+json">
          {`{
"@context": "https://schema.org",
"@graph":[

{
"@type":"Organization",
"@id":"https://www.business-classflights.com/#organization",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com/",
"logo":"https://www.business-classflights.com/photos/BUSINESS-CLASS-FLIGHTS-LOGO.png",
"foundingDate":"2025",
"contactPoint":{
"@type":"ContactPoint",
"telephone":"+1-866-307-5957",
"contactType":"customer support",
"areaServed":"US",
"availableLanguage":"English"
},
"sameAs":[
"https://www.facebook.com/businessclassticket1/",
"https://www.instagram.com/businessclassticket/",
"https://www.linkedin.com/company/business-class-ticket/",
"https://www.pinterest.com/businessclassticket/",
"https://www.youtube.com/@businessclassticket"
]
},

{
"@type":"TravelAgency",
"@id":"https://www.business-classflights.com/#travelagency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com/",
"logo":"https://www.business-classflights.com/photos/BUSINESS-CLASS-FLIGHTS-LOGO.png",
"telephone":"+1-866-307-5957",
"email":"info@asktravelo.com",
"priceRange":"$$$",
"address":{
"@type":"PostalAddress",
"streetAddress":"17662 Irvine Blvd, Suite 9",
"addressLocality":"Tustin",
"addressRegion":"CA",
"postalCode":"92780",
"addressCountry":"US"
},
"openingHours":"Mo-Su 00:00-23:59",
"areaServed":{
"@type":"Country",
"name":"United States"
}
},

{
"@type":"WebSite",
"@id":"https://www.business-classflights.com/#website",
"url":"https://www.business-classflights.com/",
"name":"Business Class Flights",
"publisher":{
"@id":"https://www.business-classflights.com/#organization"
},
"inLanguage":"en-US"
},

{
"@type":"Service",
"@id":"https://www.business-classflights.com/#service",
"name":"Business Class and First Class Flight Booking",
"provider":{
"@id":"https://www.business-classflights.com/#travelagency"
},
"serviceType":"Flight Booking Service",
"areaServed":{
"@type":"Country",
"name":"United States"
},
"description":"Travel agency offering discounted business class flights, first class airline tickets, corporate travel solutions, and group flight booking services."
},

{
"@type":"WebPage",
"@id":"https://www.business-classflights.com/#webpage",
"url":"https://www.business-classflights.com/",
"name":"Discounts on Business Class Flights | Low Business Class Airfares",
"isPartOf":{
"@id":"https://www.business-classflights.com/#website"
},
"about":{
"@id":"https://www.business-classflights.com/#travelagency"
},
"inLanguage":"en-US"
},

{
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"https://www.business-classflights.com/"
}
]
}

]
}`}
        </script>
      </Helmet>

      <Banner />
      <CustomerTrust />

      {/* How it works */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <h2 className="fw-bold text-center mb-5" style={{ color: "blue" }}>
            How It Works
          </h2>
          <div className="row g-4">
            {[
              {
                n: "1",
                t: "Tell us about your trip",
                d: "Share where you're headed, when you want to travel, and which cabin you prefer. It only takes a few minutes.",
              },
              {
                n: "2",
                t: "We find your fares",
                d: "One of our advisors compares airlines and fares for your dates, then sends you the best options.",
              },
              {
                n: "3",
                t: "Pick your flight and book",
                d: "Look over the details, ask us anything, and confirm only when you're happy with the fare.",
              },
              {
                n: "4",
                t: "Fly business class",
                d: "We're just a phone call away for changes, questions, or anything else before and during your trip.",
              },
            ].map((step) => (
              <div className="col-md-6 col-lg-3" key={step.n}>
                <div className="h-100 bg-white rounded-4 p-4 shadow-sm">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-white"
                    style={{ width: 42, height: 42, background: "blue" }}
                  >
                    {step.n}
                  </div>
                  <h3 className="h6 fw-bold text-dark">{step.t}</h3>
                  <p className="mb-0 small text-muted">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Discound />
      <Destinations />

      {/* Corporate */}
      <section className="py-5 bg-light">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <p
                className="text-uppercase mb-2"
                style={{ letterSpacing: "0.1em", color: "blue", fontSize: "0.8rem", fontWeight: 700 }}
              >
                For Business Travelers
              </p>
              <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
                International Business Class Fares &amp; Corporate Rates
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                Flying for work? Long trips are easier when you arrive rested,
                and the right fare keeps your budget in check too. We offer
                corporate rates on business class flights for solo travelers,
                small teams, and growing companies. We also compare international
                business class fares across airlines, so you can pick the mix of
                price, schedule, and flexibility that fits your trip.
              </p>
              <p className="mb-0 text-muted" style={{ lineHeight: 1.7 }}>
                Travel often? Ask us about multi-trip planning and flexible
                tickets. One advisor can look after all your bookings, so
                you&apos;re not starting from scratch every time.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="bg-white text-dark rounded-4 p-4 p-md-5 shadow">
                <h3 className="h5 fw-bold mb-3" style={{ color: "blue" }}>
                  Get a Corporate Quote
                </h3>
                <form onSubmit={handleCorpSubmit}>
                  <div className="mb-3">
                    <label className="form-label small">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={corpForm.name}
                      onChange={handleCorpChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={corpForm.phone}
                      onChange={handleCorpChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small">Route and dates</label>
                    <input
                      type="text"
                      className="form-control"
                      name="route"
                      placeholder="e.g. NYC–LON, Mar 12–19"
                      value={corpForm.route}
                      onChange={handleCorpChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold text-white"
                    style={{ background: "blue", borderRadius: "30px" }}
                  >
                    Get My Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2
            className="fw-bold mb-4 text-center"
            style={{ fontSize: "36px", color: "blue" }}
          >
            Business Class FAQs
          </h2>

          {faqs.map((item, i) => (
            <div key={item.q} className="border-bottom py-4">
              <div
                className="d-flex justify-content-between align-items-start"
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3
                  className="h5 mb-0"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#111",
                  }}
                >
                  {item.q}
                </h3>

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
                    lineHeight: "1.7",
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
