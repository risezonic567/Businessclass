import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Deals() {
  const [tab, setTab] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);

  const deals = [
    {
      type: "lastminute",
      title: "Last-Minute Business Class",
      desc: "Need to leave in the next few days? Call and we'll check what's open right now.",
    },
    {
      type: "international",
      title: "International Fares",
      desc: "Europe, the Middle East and Asia, from major US airports.",
    },
    {
      type: "oneway",
      title: "One-Way Business Class",
      desc: "Not sure when you're coming back? We'll price it one way.",
    },
    {
      type: "roundtrip",
      title: "Round-Trip Business Class",
      desc: "Dates locked in? We'll compare airlines for the best fit.",
    },
  ];

  const filteredDeals =
    tab === "all" ? deals : deals.filter((d) => d.type === tab);

  const destinations = [
    { name: "London", path: "/flight-to/london" },
    { name: "Dubai", path: "/flight-to/dubai" },
    { name: "Paris", path: "/flight-to/paris" },
    { name: "New York", path: "/flight-to/newyork" },
    { name: "Los Angeles", path: "/flight-to/losangeles" },
    { name: "San Francisco", path: "/flight-to/sanfrancisco" },
    { name: "Chicago", path: "/flight-to/chicago" },
    { name: "Miami", path: "/flight-to/miami" },
    { name: "Las Vegas", path: "/flight-to/lasvegas" },
  ];

  const faqs = [
    {
      q: "How do I find last minute business class flights?",
      a: "Check a few different dates, a nearby airport, and both one-way and round-trip prices. Seats change fast, so calling an advisor is usually quickest. We can check live options for your dates.",
    },
    {
      q: "Are last-minute business class flights cheaper?",
      a: "Often not. You pay for whatever seats are left, and that depends on the route. Flexible dates give you the best shot.",
    },
    {
      q: "Where can I find cheap business class flights?",
      a: "Compare airlines, dates and airports, and look at one-way fares as well. Read what each fare includes before you decide. We do that comparison for you.",
    },
    {
      q: "Which international routes offer business class flights?",
      a: "Most major long-haul routes do, including London, Dubai and Paris. The cabin differs by airline, so check the details.",
    },
    {
      q: "Is it better to book one-way or round-trip?",
      a: "Round-trip suits fixed dates. One-way suits an uncertain return or a mix of airlines. We price both so you can compare the total.",
    },
    {
      q: "How can I find better business class flight deals?",
      a: "Be flexible with dates, compare airports, read the fare rules and talk to an advisor. On busy routes, booking early often helps.",
    },
    {
      q: "What should I consider when choosing business class airfare?",
      a: "The total price, stops, travel time, baggage, seat type, and how easy it is to change or cancel.",
    },
    {
      q: "What is included with business class flights?",
      a: "It depends on the airline, but usually a bigger baggage allowance, priority services, lounge access on some fares and a better meal.",
    },
  ];

  const jsonLdData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Class Flight Deals",
    url: "https://www.business-classflights.com/flight-deals",
    description:
      "Last-minute and international business class flight deals from US-based advisors. Compare airlines, dates and fare rules before you book.",
    provider: {
      "@type": "TravelAgency",
      name: "Business Class Flights",
      url: "https://www.business-classflights.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  });

  return (
    <>
      <Helmet>
        <title>
          Last-Minute Business Class Flights & International Flight Deals
        </title>
        <meta
          name="description"
          content="Compare last-minute and international business class flight deals. US advisors check airlines, dates and nearby airports. Call (866) 307-5957 for a quote."
        />
        <link
          rel="canonical"
          href="https://www.business-classflights.com/flight-deals"
        />
        <script type="application/ld+json">{jsonLdData}</script>
      </Helmet>

      {/* Hero */}
      <div
        className="container-fluid p-0"
        style={{
          marginTop: "80px",
          minHeight: "70vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(/photos/Flight_Deals_Offer_Banner.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex align-items-center" style={{ minHeight: "70vh" }}>
          <div className="container text-light py-5">
            <div style={{ maxWidth: "900px" }}>
              <h1 className="fw-bold display-5 mb-3">
                Last-Minute Business Class Flights &amp; International Flight
                Deals
              </h1>
              <p className="lead mb-4" style={{ lineHeight: 1.7 }}>
                Maybe your meeting got moved up. Maybe you&apos;ve been watching
                business class flight deals for weeks and want a second opinion
                before you pay. Either way, you&apos;re in the right place. Our
                advisors are based in the US, and they compare airlines, dates
                and nearby airports so you don&apos;t have to keep forty tabs
                open. Send us your route, and we&apos;ll reply with a few solid
                options and a plain explanation of what each fare includes.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="btn fw-bold px-4 py-3 text-white"
                  style={{ background: "blue", borderRadius: "30px" }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+18663075957"
                  className="btn fw-bold px-4 py-3"
                  style={{ border: "1px solid rgba(255,255,255,0.75)", color: "#fff", borderRadius: "30px" }}
                >
                  Call +1 (866) 307-5957
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current deals */}
      <div className="container py-5">
        <h2 className="fw-bold mb-2 text-center">Current Business Class Flight Deals</h2>
        <p className="text-muted text-center mb-4">
          Fares move quickly and seats sell out. Call us to confirm today&apos;s
          price for your dates.
        </p>

        <div className="d-flex justify-content-center mb-5 gap-2 flex-wrap">
          {[
            { id: "all", label: "All Deals" },
            { id: "international", label: "International" },
            { id: "lastminute", label: "Last Minute" },
            { id: "oneway", label: "One-Way" },
            { id: "roundtrip", label: "Round-Trip" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`btn ${tab === item.id ? "btn-primary text-light" : "btn-outline-primary"}`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredDeals.map((deal) => (
            <div key={deal.title} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                <h3 className="h5 fw-semibold">{deal.title}</h3>
                <p className="text-muted small flex-grow-1">{deal.desc}</p>
                <Link to="/contact-us" className="btn btn-primary btn-sm text-light align-self-start">
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Last minute */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">Last-Minute Business Class Flights</h2>
              <p className="text-muted">
                It&apos;s Thursday afternoon and you need to be on a plane by
                Saturday. That happens more than people admit: a deal closes
                early, a family situation comes up, or you simply can&apos;t wait
                for a trip any longer.
              </p>
              <p className="text-muted">
                Last minute business class flights are out there. They just
                aren&apos;t reliably cheap. A business cabin has a small number of
                seats, so you pay for whatever is left on that particular flight.
                Some days that&apos;s a fair price, and some days it&apos;s painful.
                There&apos;s no way to know without checking your exact dates.
              </p>
              <p className="fw-semibold mb-2">A few things tend to help:</p>
              <ul className="text-muted">
                <li>Leave a day earlier or later. A Wednesday flight can price very differently from a Friday one.</li>
                <li>Look at the other airport. If you live near New York, compare JFK with Newark.</li>
                <li>Price each leg on its own. Two one-way tickets on different airlines sometimes beat a round-trip.</li>
                <li>Count the whole trip, not just the fare. Stops, travel time and bag rules change the real value.</li>
                <li>Or call. We can see live availability for your dates, explain what we find in plain terms, and hold a seat while you decide.</li>
              </ul>
              <a href="tel:+18663075957" className="btn btn-primary text-light mt-2">
                Check Last-Minute Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">International Business Class Fares</h2>
              <p className="text-muted">
                On a long-haul flight, business class is a completely different
                experience from the front cabin of a short domestic hop.
                Depending on the airline and aircraft, you might get a lie-flat
                seat, priority check-in, a lounge before the flight, extra
                baggage and a real meal. Not every airline offers the same
                thing, so two international business class fares that look alike
                can feel nothing alike once you&apos;re onboard.
              </p>
              <p className="text-muted mb-0">
                So look past the price. How many stops are there, and how long
                is the whole trip? What aircraft is it, and how is the cabin
                laid out? What are the baggage, lounge and change rules? A fare
                that costs a bit more but lets you move your date is often the
                smarter buy, especially if your plans aren&apos;t fully settled.
                We&apos;ll walk through those trade-offs for your specific route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One-way / round-trip */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">
                One-Way and Round-Trip Business Class Flights
              </h2>
              <p className="text-muted">
                If your dates are fixed, round-trip is usually the simple
                choice, and it&apos;s often well priced on busy routes.
              </p>
              <p className="text-muted mb-0">
                One way business class flights make more sense when you
                don&apos;t know your return date, you&apos;re relocating, or you
                want to fly home with a different airline or from another city.
                Sometimes two one-way tickets cost less than a round-trip.
                Sometimes they cost more. We price both before you commit, so
                you can see the difference. And if flexibility matters to you,
                say so when you call. We&apos;ll look for fares with friendlier
                change rules, even when the upfront price is a little higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Business Class Flight Deals by Destination</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 850 }}>
              Prices shift with the route, the season and the airline. Pick a
              destination to see airlines, routes and travel tips.
            </p>
          </div>
          <div className="row g-3">
            {destinations.map((destination) => (
              <div className="col-sm-6 col-md-4" key={destination.path}>
                <div className="card border-0 shadow-sm h-100 rounded-4">
                  <div className="card-body">
                    <Link to={destination.path} className="text-decoration-none">
                      <h3 className="h6 fw-semibold mb-0 text-dark">
                        Business Class Flights to {destination.name}
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-4 mb-0">
            One thing worth knowing: on many US domestic routes the front cabin
            is sold as first class, and true lie-flat business seats show up
            mostly on international and premium transcontinental flights. Ask us
            what applies to your trip.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">
                6 Tips for Better Business Class Flight Deals
              </h2>
              <ol className="text-muted" style={{ lineHeight: 1.8 }}>
                <li>Give yourself a day or two of flexibility. Midweek flights often price differently from weekends.</li>
                <li>Try a different departure airport. A nearby one can change the fare.</li>
                <li>Check one-way prices too. Compare them with the round-trip.</li>
                <li>Read the fare rules. Change and cancellation terms matter as much as price.</li>
                <li>See what&apos;s included. Bags, lounges and seats differ by airline.</li>
                <li>Pick up the phone. A short call can show options a search page won&apos;t.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">Why Book Business Class With Us</h2>
              <p className="text-muted">
                The lowest advertised price isn&apos;t always the best value.
                We&apos;re a US-based team, someone answers the phone at any
                hour, and we explain your options without pressure.
              </p>
              <p className="text-muted">
                Before you book, we help you check the total fare with taxes,
                the airline and schedule, whether the flight is nonstop, how
                flexible the dates are, baggage, seat and cabin features, change
                and cancellation rules, and any premium services included. Then
                you pick. No rush.
              </p>
              <a href="tel:+18663075957" className="btn btn-primary text-light">
                Speak With a Business Class Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="d-flex flex-column gap-3">
            {faqs.map((item, i) => (
              <div key={item.q} className="bg-white rounded-4 border">
                <button
                  type="button"
                  className="btn w-100 text-start d-flex justify-content-between align-items-center px-4 py-3 fw-semibold"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="px-4 pb-4 mb-0 text-muted">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-5 text-center bg-white">
        <div className="container py-3">
          <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
            Ready to Find Your Business Class Deal?
          </h2>
          <p className="mb-4 mx-auto text-muted" style={{ maxWidth: 640 }}>
            Tell us your route and dates. An advisor will send fare options,
            usually the same day. If you need to fly urgently, call and
            we&apos;ll check live availability.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="tel:+18663075957"
              className="btn fw-bold px-4 py-3 text-white"
              style={{ background: "blue", borderRadius: "30px" }}
            >
              Call +1 (866) 307-5957
            </a>
            <Link
              to="/contact-us"
              className="btn fw-bold px-4 py-3 btn-outline-primary"
              style={{ borderRadius: "30px" }}
            >
              Request a Quote
            </Link>
          </div>
          <p className="small mt-4 mb-0 text-muted">
            Fares are subject to change and cannot be guaranteed until booking
            is complete. Availability varies by airline and travel date.
          </p>
        </div>
      </section>
    </>
  );
}
