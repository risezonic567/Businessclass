import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Deals() {
  const [tab, setTab] = useState("all");

  const deals = [
    {
      type: "international",
      title: "Flat 25% Off – International Flights",
      desc: "Save big on flights to USA, Europe & Middle East.",
      code: "INT25",
      price: "Save up to $8,000",
    },
    {
      type: "domestic",
      title: "Domestic Flight Offer",
      desc: "Get lowest fares on all USA airlines.",
      code: "FLYINDIA",
      price: "Save up to $1,500",
    },
    {
      type: "student",
      title: "Student Special Fare",
      desc: "Exclusive fares for students travelling abroad.",
      code: "STUDENT",
      price: "Save up to $4,000",
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

  const destinations = [
    {name:"London",path:"/flight-to/london"},
    {name:"Dubai",path:"/flight-to/dubai"},
    {name:"Paris",path:"/flight-to/paris"},
    {name:"New York",path:"/flight-to/newyork"},
    {name:"Los Angeles",path:"/flight-to/losangeles"},
    {name:"San Francisco",path:"/flight-to/sanfrancisco"},
    {name:"Chicago",path:"/flight-to/chicago"},
    {name:"Miami",path:"/flight-to/miami"},
    {name:"Las Vegas",path:"/flight-to/lasvegas"},
  
  ];

  const jsonLdData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Class Flight Deals",
    url: "https://www.business-classflights.com/flights-deals",
    description:
      "Explore discounted business class and first class flight deals for international travel with expert booking assistance and premium airline options.",
    provider: {
      "@type": "TravelAgency",
      name: "Business Class Flights",
      url: "https://www.business-classflights.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: "https://www.business-classflights.com/flights-deals",
    },
  });

  return (
    <>
      <Helmet>
        <title>Business Class Flight Deals & Affordable Airfare</title>

        <meta
          name="description"
          content="Explore business class flight deals and affordable airfare for domestic and international routes. Compare airlines, fares, schedules, and travel dates.  
put on flight deal page"
        />

        <link
          rel="canonical"
          href="https://www.business-classflights.com/flights-deals"
        />

        <script type="application/ld+json">{jsonLdData}</script>
      </Helmet>

      <div
        className="container-fluid p-0"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(/photos/Flight_Deals_Offer_Banner.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="container text-light">
            <div style={{ maxWidth: "900px" }}>
              <h1 className="fw-bold display-4 mb-3">
                Business Class Flight Deals & Discount Airfare
              </h1>

              <p className="lead mb-4">
                Find business class flight deals and discounted airfare for
                domestic and international travel. Explore business class
                fares from different airlines, routes, travel dates, and
                premium cabin options to find an itinerary that suits your
                travel plans and budget.
              </p>

              <p className="lead">
                Whether you are planning ahead or need to travel soon, checking
                different dates, departure airports, and routes can help you
                find more available fare options. Explore international
                business class flights, one-way tickets, and round-trip
                itineraries while reviewing fares, schedules, cabin features,
                baggage allowances, and fare conditions before booking your
                business class flight tickets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DEALS SECTION ================= */}
      <div className="container py-5">
        {/* Tabs */}
        <div className="d-flex justify-content-center mb-5 gap-3 flex-wrap">
          {[
            "all",
            "international",
            "domestic",
            "student",
            "lastminute",
          ].map((item) => (
            <button
              key={item}
              className={`btn ${
                tab === item
                  ? "btn-primary text-light"
                  : "btn-outline-primary"
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
          ))}
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
                    alt="Business class flight mega sale"
                  />
                </div>

                <div className="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                  <h3 className="fw-bold mb-3">
                    Mega International Sale
                  </h3>

                  <p className="text-muted">
                    Fly worldwide with premium airlines at special discounted
                    fares. Limited time only.
                  </p>

                  <h5 className="text-success fw-bold">
                    Save up to $10,000
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

        {/* Bottom Info */}
        <div className="text-center mt-5">
          <p className="text-muted">
            Prices may vary based on airline & availability. Book early for
            the best fares.
          </p>
        </div>
      </div>

      {/* =====================================================
          LAST MINUTE BUSINESS CLASS FLIGHTS
      ===================================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">
                Last-Minute Business Class Flights
              </h2>

              <p className="text-muted">
                Need to travel soon? Last-minute business class flights can
                vary in price depending on demand, seat availability, route,
                airline, and travel date. Last-minute fares are not always
                cheaper, so reviewing multiple flight options can help you find
                a suitable itinerary.
              </p>

              <p className="text-muted">
                When looking for last-minute business class deals, consider
                more than the advertised fare. Flight duration, number of
                stops, baggage allowance, seat type, and fare flexibility can
                all affect the overall value of your trip.
              </p>

              <p className="text-muted mb-0">
                If your travel dates are flexible, check nearby departure and
                return dates for additional flight and fare options.
                Availability can change quickly on popular business class
                routes, so checking different itineraries may give you more
                choices.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">
                International Business Class Flights
              </h2>

              <p className="text-muted">
                International business class flights are available on many
                long-haul and international routes. Depending on the airline,
                aircraft, route, and fare type, business class may include
                lie-flat seats, priority airport services, lounge access,
                additional baggage allowance, premium dining, and other
                enhanced travel benefits.
              </p>

              <p className="text-muted">
                When reviewing international business class airfare, consider
                the complete itinerary rather than the ticket price alone. Look
                at the number of stops, aircraft type, total travel time,
                baggage allowance, seat configuration, and included services.
              </p>

              <p className="text-muted mb-0">
                Travel dates can also affect fares and availability. If your
                schedule allows, check different departure and return dates to
                find additional business class flight deals and itinerary
                options. Because business class services vary between airlines
                and aircraft, review the specific cabin features and fare
                conditions before selecting a flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ONE WAY / ROUND TRIP
      ===================================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">
                One-Way & Round-Trip Business Class Flights
              </h2>

              <p className="text-muted">
                Whether you need a one-way ticket or a round-trip itinerary,
                choose the option that best matches your travel plans.
              </p>

              <p className="text-muted">
                One-way business class flights can be useful when your return
                date is uncertain, you are relocating, or you plan to return
                using a different airline or route.
              </p>

              <p className="text-muted">
                Round-trip business class flights can be convenient when your
                departure and return dates are already confirmed.
              </p>

              <p className="text-muted">
                Before booking, review the total fare, flight schedule, baggage
                allowance, number of stops, change conditions, cancellation
                terms, and included services. The lowest advertised business
                class airfare may not always provide the best overall value.
              </p>

              <p className="text-muted mb-0">
                If flexibility is important, check the fare rules carefully. A
                slightly higher business class fare may provide more favorable
                change or cancellation conditions, depending on the airline
                and ticket type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Business Class Deals by Destination</h2>

            <p className="text-muted mx-auto" style={{ maxWidth: "850px" }}>
              Business class fares can vary by destination, departure airport,
              airline, season, demand, and travel dates. Exploring
              destination-specific business class flight deals can help you
              find routes, airlines, schedules, and fare options that match
              your travel plans.
            </p>
          </div>

          <h5 className="fw-bold mb-4">Explore popular destinations:</h5>

          <div className="row g-3">
            {destinations.map((destination, index) => (
              <div className="col-sm-6 col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100 rounded-4">
                  <div className="card-body">
                    <Link to={destination.path}>
                    <h5 className="fw-semibold mb-0">
                      Business Class Flights to {destination.name}
                    </h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted mt-4">
            Visit the individual destination pages to learn more about
            business class routes, airlines, airfare, travel options, and
            business class flight booking for each destination.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHY BOOK WITH US
      ===================================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4">Why Book With Us?</h2>

              <p className="text-muted">
                Finding the right business class ticket involves more than
                choosing the lowest advertised price. Our goal is to make it
                easier to explore available flight options based on your
                destination, travel dates, preferred airline, cabin
                requirements, and itinerary.
              </p>

              <p className="text-muted">
                When looking at discount business class flights, consider the
                complete travel experience rather than focusing only on the
                ticket price. Different airlines and fare types may offer
                different schedules, cabin features, baggage allowances, and
                flexibility.
              </p>

              <h5 className="fw-bold mt-4 mb-3">
                Before booking, consider:
              </h5>

              <div className="row g-3">
                {[
                  "Total business class airfare and ticket price",
                  "Airline and flight schedule",
                  "Nonstop and connecting flight options",
                  "Flexible travel-date alternatives",
                  "Baggage allowance",
                  "Seat and cabin features",
                  "Change and cancellation conditions",
                  "Included premium services",
                ].map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="d-flex align-items-start">
                      <span className="text-primary fw-bold me-2">✓</span>
                      <span className="text-muted">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-muted mt-4 mb-0">
                Reviewing these factors can help you select a business class
                itinerary that provides the right balance of price, comfort,
                schedule, and flexibility for your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
          </div>

          <div className="accordion" id="businessClassFaq">
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOne"
                >
                  Where can I find cheap business class flights?
                </button>
              </h2>

              <div
                id="faqOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  You can look for cheap business class flights by checking
                  different airlines, routes, travel dates, and departure
                  airports. Flexible dates and alternative airports may provide
                  additional fare options. However, review the complete fare
                  conditions and included services rather than choosing a
                  ticket based only on price.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqTwo"
                >
                  Are last-minute business class flights cheaper?
                </button>
              </h2>

              <div
                id="faqTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  Not necessarily. Last-minute business class flights can be
                  more expensive when demand is high or availability is
                  limited. Prices vary by route, airline, travel date, and
                  remaining seat availability. Checking multiple itineraries
                  and flexible dates may help you find suitable available
                  fares.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqThree"
                >
                  Which international routes offer business class flights?
                </button>
              </h2>

              <div
                id="faqThree"
                className="accordion-collapse collapse"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  Many international and long-haul routes offer business class
                  flights, but availability and onboard features vary by
                  airline and aircraft. When reviewing international business
                  class airfare, consider the complete itinerary, flight
                  duration, number of stops, seat configuration, baggage
                  allowance, and included services.
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqFour"
                >
                  Is it better to book a one-way or round-trip business class
                  flight?
                </button>
              </h2>

              <div
                id="faqFour"
                className="accordion-collapse collapse"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  It depends on your travel plans. One-way business class
                  flights can provide flexibility when your return date is
                  uncertain, while round-trip business class flights can be
                  convenient when your travel dates are confirmed. Review the
                  total fare and fare conditions before selecting an option.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqFive"
                >
                  How can I find better business class flight deals?
                </button>
              </h2>

              <div
                id="faqFive"
                className="accordion-collapse collapse"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  Check different travel dates, airlines, routes, departure
                  airports, and fare conditions. Flexible dates can provide
                  additional options when searching for business class flight
                  deals. It is also useful to consider the complete itinerary
                  and included services rather than focusing only on the
                  advertised ticket price.
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSix"
                >
                  What should I consider when choosing business class airfare?
                </button>
              </h2>

              <div
                id="faqSix"
                className="accordion-collapse collapse"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  Consider the total price, flight duration, number of stops,
                  airline, aircraft, seat type, baggage allowance, lounge
                  access, and change and cancellation conditions. The cheapest
                  business class flight ticket may not always offer the best
                  overall value.
                </div>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqSeven"
                >
                  What is included with business class flights?
                </button>
              </h2>

              <div
                id="faqSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#businessClassFaq"
              >
                <div className="accordion-body text-muted">
                  Inclusions vary by airline, route, aircraft, and fare type.
                  Depending on the flight, business class may include priority
                  check-in, lounge access, additional baggage allowance,
                  priority boarding, enhanced meals, and more comfortable
                  seating. Always check the specific fare details before
                  completing your business class flight booking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}