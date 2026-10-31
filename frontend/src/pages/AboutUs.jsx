import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Users,
  BadgeDollarSign,
  Handshake,
  Plane,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function AboutUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Where is Business Class Flights located?",
      a: "We're a business class travel agency based in Tustin, CA. We serve Orange County and travelers across the United States.",
    },
    {
      q: "How can you offer discounted business class fares?",
      a: "Our consultants compare fares across airlines and use airline relationships to find prices you might not see when searching alone. Fares change by route, date, and availability, so we always check current options for your trip.",
    },
    {
      q: "Do I need to be a frequent flyer to get these deals?",
      a: "No. Our fares are open to regular travelers. You don't need airline status or a rewards account.",
    },
    {
      q: "Do you handle corporate business class travel booking?",
      a: "Yes. We book for individual business travelers and for teams, and we can suggest flexible options when schedules might shift.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No. We explain the full fare, including taxes and fees, before you book.",
    },
    {
      q: "Can I change or cancel my ticket?",
      a: "It depends on your fare rules. We tell you the conditions before you pay and point out the flexible options so you can choose with full information.",
    },
    {
      q: "Can you help with business class flights from Orange County airports?",
      a: "Yes. We help travelers book business and first class from John Wayne Airport (SNA), LAX, and other US airports.",
    },
    {
      q: "How do I talk to a business class flight consultant?",
      a: "Use the contact page, call us at (866) 307-5957, or send an email to info@asktravelo.com. Tell us your route and dates, and a consultant will come back with options and the full price.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Business Class Travel Agency in Tustin, CA</title>
        <meta
          name="description"
          content="Meet Business Class Flights, a Tustin, CA travel agency. We help Orange County and US travelers book discounted business and first class flights with clear pricing."
        />
        <link
          rel="canonical"
          href="https://www.business-classflights.com/about-us"
        />
        <script type="application/ld+json">
          {`{
"@context":"https://schema.org",
"@type":"AboutPage",
"name":"About Business Class Flights",
"url":"https://www.business-classflights.com/about-us",
"description":"Meet Business Class Flights, a Tustin, CA travel agency. We help Orange County and US travelers book discounted business and first class flights with clear pricing.",
"publisher":{
"@type":"TravelAgency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com",
"telephone":"+1-866-307-5957",
"email":"info@asktravelo.com",
"address":{
"@type":"PostalAddress",
"streetAddress":"17662 Irvine Blvd, Suite 9",
"addressLocality":"Tustin",
"addressRegion":"CA",
"postalCode":"92780",
"addressCountry":"US"
}
}
}`}
        </script>
      </Helmet>

      {/* Hero — keep existing photo banner style */}
      <div
        className="container-fluid p-0 position-relative"
        style={{
          height: "100vh",
          backgroundImage: "url(/photos/Business_Class_Banner_2.jpg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "0",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.55)" }}
        />
        <div className="vh-100 d-flex justify-content-center align-items-center position-relative">
          <div className="text-light text-center container" style={{ maxWidth: 900 }}>
            <p className="text-uppercase mb-2 fw-semibold" style={{ letterSpacing: "0.12em", opacity: 0.9 }}>
              Tustin, California
            </p>
            <h1 className="fw-bold display-5 mb-3">
              About Our Business Class Travel Agency in Tustin, CA
            </h1>
            <p className="lead mt-3 fw-semibold">
              Flying up front shouldn&apos;t depend on loyalty status or a
              full-fare budget. We&apos;re a Tustin-based team of business class
              flight consultants, and we help travelers across the US book
              premium seats at fares that actually make sense.
            </p>
            <a
              href="tel:+18663075957"
              className="btn btn-lg mt-3 fw-semibold"
              style={{ background: "blue", color: "white", borderRadius: "30px", padding: "10px 28px" }}
            >
              Talk to a Business Class Consultant
            </a>
          </div>
        </div>
      </div>

      {/* Who we are */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <div className="rounded-4 shadow overflow-hidden" style={{ height: 350 }}>
                <img
                  src="/photos/About-us-ticket.jpg"
                  alt="Business class travel consultants"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
                Who We Are
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.75 }}>
                We&apos;re a small, focused business class travel agency in
                Tustin, California. We don&apos;t try to sell every kind of
                ticket. Business and first class are the only things we do, and
                that&apos;s exactly why we&apos;re good at it.
              </p>
              <p className="text-muted mb-0" style={{ lineHeight: 1.75 }}>
                When you reach out, you talk to a person who listens first.
                Maybe you need a lie-flat seat for a long overseas trip. Maybe
                your plans might change, and you need a flexible ticket. Maybe
                you&apos;re booking for a client meeting, and the schedule
                can&apos;t slip. Whatever it is, one of our consultants works
                through it with you and finds the right fit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-4 shadow-sm p-4 mt-5">
            <h3 className="h5 fw-bold mb-3" style={{ color: "blue" }}>
              What Our Consultants Do
            </h3>
            <ul className="mb-0 text-muted" style={{ lineHeight: 1.85 }}>
              <li>Find discounted business and first class fares on domestic and international routes</li>
              <li>Compare airlines, routings, and layovers, not just the lowest price on the screen</li>
              <li>Suggest flexible tickets when your dates aren&apos;t set</li>
              <li>Handle corporate business class travel booking for teams and regular business travelers</li>
              <li>Help with changes, questions, and upgrades after you&apos;ve booked</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How booking works */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "blue" }}>
            How Booking With Us Works
          </h2>
          <div className="row g-4">
            {[
              {
                n: "1",
                t: "Share your trip",
                d: "Tell us where you're going, when, and how flexible you can be.",
              },
              {
                n: "2",
                t: "We compare fares",
                d: "We check options across airlines and send you the best matches.",
              },
              {
                n: "3",
                t: "See the full price",
                d: "Taxes and fees are explained before you pay, so nothing surprises you later.",
              },
              {
                n: "4",
                t: "We stay available",
                d: "If plans change, you reach a real person who already knows your booking.",
              },
            ].map((step) => (
              <div className="col-md-6 col-lg-3" key={step.n}>
                <div className="h-100 rounded-4 border bg-white p-4 shadow-sm">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3 text-white"
                    style={{ width: 42, height: 42, background: "blue" }}
                  >
                    {step.n}
                  </div>
                  <h3 className="h6 fw-bold">{step.t}</h3>
                  <p className="mb-0 small text-muted">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(135deg, #0d1b2a, #1b263b)" }}
      >
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4" style={{ color: "#7dd3fc" }}>
                Why Travelers Choose Us
              </h2>
              <ul className="list-unstyled fs-6 mb-4" style={{ lineHeight: 1.9 }}>
                <li className="mb-2">✅ We&apos;re specialists. Business and first class are all we book, so we know where the good fares hide.</li>
                <li className="mb-2">✅ Honest pricing. We tell you what&apos;s included before you commit.</li>
                <li className="mb-2">✅ No frequent flyer status needed. Our deals are for regular travelers too.</li>
                <li className="mb-2">✅ Plain-language fare rules. You&apos;ll know what&apos;s flexible and what isn&apos;t.</li>
                <li>✅ One real person from start to finish. You&apos;re not passed between departments.</li>
              </ul>
              <a
                href="tel:+18663075957"
                className="btn btn-light btn-lg rounded-pill px-4 fw-semibold"
              >
                Talk to a Business Class Consultant
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/photos/Why-choose-business-class-flights.jpg.jpeg"
                alt="Premium cabin and consultants"
                className="img-fluid rounded-4 shadow-lg"
                style={{ height: 350, width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="h-100 p-4 border rounded-4 shadow-sm">
                <h2 className="h4 fw-bold mb-3" style={{ color: "blue" }}>
                  Our Mission
                </h2>
                <p className="mb-0 text-muted" style={{ lineHeight: 1.7 }}>
                  We want business class to feel realistic for more travelers.
                  And we want booking it to be simple, clear, and honest.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-4 border rounded-4 shadow-sm">
                <h2 className="h4 fw-bold mb-3" style={{ color: "blue" }}>
                  Our Vision
                </h2>
                <p className="mb-0 text-muted" style={{ lineHeight: 1.7 }}>
                  We&apos;d like to be the first agency people think of for
                  premium travel at a fair price, known for open pricing and for
                  treating every traveler as an individual, not a ticket number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: "blue" }}>
          What We Stand For
        </h2>
        <div className="row g-4">
          {[
            {
              icon: Users,
              t: "Customer First",
              d: "Your comfort, budget, and schedule decide what we recommend.",
              color: "text-info",
            },
            {
              icon: BadgeDollarSign,
              t: "Honest Pricing",
              d: "The fare we quote is the fare you understand, taxes and fees included.",
              color: "text-warning",
            },
            {
              icon: Handshake,
              t: "Service That Follows Through",
              d: "We're with you from the first search to after you land.",
              color: "text-success",
            },
            {
              icon: Plane,
              t: "Airline Relationships",
              d: "Our airline connections help us find fares you may not see on your own.",
              color: "text-primary",
            },
          ].map(({ icon: Icon, t, d, color }) => (
            <div className="col-md-3" key={t}>
              <div className="text-center border p-4 rounded-4 shadow-sm h-100">
                <Icon size={36} className={color} />
                <h3 className="h6 mt-3 fw-semibold">{t}</h3>
                <p className="text-muted small mb-0">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
                Based in Tustin, Serving Travelers Across the US
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.75 }}>
                Our office is in Tustin, in the heart of Orange County. A lot of
                people ask us about Orange County business class flights from
                John Wayne Airport (SNA) and LAX, and we&apos;re happy to help
                with those. But we also book premium cabins for travelers in
                other US cities every day. Everything works over the phone,
                email, and online, so distance isn&apos;t a problem.
              </p>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="d-flex gap-2 mb-3 text-dark">
                  <MapPin size={18} style={{ color: "blue", marginTop: 2 }} />
                  17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                </li>
                <li className="d-flex gap-2 mb-3 text-dark">
                  <Phone size={18} style={{ color: "blue", marginTop: 2 }} />
                  <a href="tel:+18663075957" style={{ color: "blue", textDecoration: "none" }}>
                    (866) 307-5957
                  </a>
                </li>
                <li className="d-flex gap-2 mb-3 text-dark">
                  <Mail size={18} style={{ color: "blue", marginTop: 2 }} />
                  <a href="mailto:info@asktravelo.com" style={{ color: "blue", textDecoration: "none" }}>
                    info@asktravelo.com
                  </a>
                </li>
                <li className="d-flex gap-2 text-dark">
                  <Clock size={18} style={{ color: "blue", marginTop: 2 }} />
                  Phone support available 24/7
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-sm border bg-white">
                <iframe
                  title="Google Map Tustin CA office"
                  src="https://maps.google.com/maps?q=17662%20Irvine%20Blvd%20Suite%209%20Tustin%20CA%2092780&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="340"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expect */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "blue" }}>
            What You Can Expect From Our Consultants
          </h2>
          <div className="row g-4">
            {[
              {
                t: "One point of contact",
                d: "The same consultant handles your booking from the first message to the last.",
              },
              {
                t: "Clear answers",
                d: "Fare rules, taxes, and fees are explained in plain words.",
              },
              {
                t: "Quick replies",
                d: "A real person replies, usually within one business day.",
              },
            ].map((item) => (
              <div className="col-md-4" key={item.t}>
                <div className="h-100 rounded-4 p-4 border shadow-sm">
                  <h3 className="h6 fw-bold" style={{ color: "blue" }}>
                    {item.t}
                  </h3>
                  <p className="mb-0 text-muted">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="fw-bold text-center mb-4" style={{ color: "blue" }}>
            Frequently Asked Questions
          </h2>
          <div className="d-flex flex-column gap-3">
            {faqs.map((item, i) => (
              <div key={item.q} className="bg-white rounded-4 border shadow-sm">
                <button
                  type="button"
                  className="btn w-100 text-start d-flex justify-content-between align-items-center px-4 py-3"
                  style={{ color: "#111", fontWeight: 600 }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span style={{ color: "blue" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="px-4 pb-4 mb-0 text-muted" style={{ lineHeight: 1.7 }}>
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center bg-white">
        <div className="container py-3">
          <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
            Ready to Fly Up Front?
          </h2>
          <p className="mb-4 mx-auto text-muted" style={{ maxWidth: 620 }}>
            Tell us your route and dates. A consultant will get back to you with
            real options and the full price.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="tel:+18663075957"
              className="btn fw-bold px-4 py-3"
              style={{ background: "blue", color: "white", borderRadius: "30px" }}
            >
              Talk to a Business Class Consultant
            </a>
            <Link
              to="/contact-us"
              className="btn fw-bold px-4 py-3 btn-outline-primary"
              style={{ borderRadius: "30px" }}
            >
              Contact Us
            </Link>
          </div>
          <p className="small mt-4 mb-0 text-muted">
            *Fares include all fuel surcharges, service fees, and taxes. Fares
            are subject to change and cannot be guaranteed until booking is
            complete.
          </p>
        </div>
      </section>
    </>
  );
}
