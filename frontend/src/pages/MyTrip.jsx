import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Ticket, MapPinned, PhoneCall } from "lucide-react";

export default function MyTrip() {
  const [mode, setMode] = useState("ticket");
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Is my business class flight delayed or cancelled?",
      a: "Airlines update delays and cancellations close to departure time. Once you find your booking, it's worth checking the latest status with your airline too. Or just call us, and we'll do it with you.",
    },
    {
      q: "Can I find my booking with just my ticket number?",
      a: "You'll need your ticket number and the passenger's last name. If you only have the email you booked with, use the \"By email\" tab instead.",
    },
    {
      q: "How do I check my flight reservation if I lost my confirmation email?",
      a: "Call us at (866) 307-5957. Have your name and travel dates handy, and we'll look for the booking together.",
    },
    {
      q: "Can I change my travel date or seat?",
      a: "Often, yes. It depends on your fare rules. Tell us your booking details, and we'll explain what's possible before you decide anything.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Flight Status Check | Track Your Business Class Booking</title>
        <meta
          name="description"
          content="Check your business class flight booking with your ticket number or email. See trip details and get help from our Tustin, CA team 24/7."
        />
        <link
          rel="canonical"
          href="https://www.business-classflights.com/flight-status"
        />
        <script type="application/ld+json">
          {`{
"@context":"https://schema.org",
"@type":"WebApplication",
"name":"Flight Status Check",
"url":"https://www.business-classflights.com/flight-status",
"description":"Check your business class flight booking with your ticket number or email. See trip details and get help from our Tustin, CA team 24/7.",
"applicationCategory":"TravelApplication",
"operatingSystem":"All",
"publisher":{
"@type":"TravelAgency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com"
}
}`}
        </script>
      </Helmet>

      <div style={{ marginTop: "80px" }}>
        {/* Hero + form on existing banner photo style */}
        <div
          className="position-relative"
          style={{
            backgroundImage: "url('/photos/Trip_Banner.jpg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "70vh",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
          />
          <div className="container position-relative py-5">
            <nav className="mb-4" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
              <Link to="/" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.8)" }}>
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Flight status</span>
            </nav>

            <div className="row g-5 align-items-center">
              <div className="col-lg-6 text-white">
                <h1
                  className="fw-bold mb-3"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.4rem)", lineHeight: 1.25 }}
                >
                  Check your business class flight status
                </h1>
                <p className="mb-2 fw-semibold" style={{ fontSize: "1.05rem", opacity: 0.95 }}>
                  Find your booking, see trip details and get help from a real
                  person, 24/7.
                </p>
                <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
                  Booked a business class ticket and want to see where things
                  stand? Put in your ticket number and last name, and we&apos;ll
                  pull up your trip. You can also search with the email you booked
                  with. If something looks off, call us. We&apos;re in Tustin,
                  California, and the phones are open all day and night.
                </p>
              </div>

              <div className="col-lg-6">
                <div
                  className="rounded-4 shadow-lg p-4 p-md-5"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.35)",
                  }}
                >
                  <div
                    className="d-flex rounded-pill p-1 mb-4"
                    style={{ background: "rgba(0,0,0,0.06)" }}
                  >
                    <button
                      type="button"
                      className="btn flex-fill rounded-pill fw-semibold"
                      style={{
                        background: mode === "email" ? "blue" : "transparent",
                        color: mode === "email" ? "white" : "#333",
                      }}
                      onClick={() => setMode("email")}
                    >
                      By email
                    </button>
                    <button
                      type="button"
                      className="btn flex-fill rounded-pill fw-semibold"
                      style={{
                        background: mode === "ticket" ? "blue" : "transparent",
                        color: mode === "ticket" ? "white" : "#333",
                      }}
                      onClick={() => setMode("ticket")}
                    >
                      By ticket number
                    </button>
                  </div>

                  {mode === "ticket" && (
                    <>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="13-digit ticket number, e.g. 0161234567890"
                      />
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Passenger last name"
                      />
                    </>
                  )}

                  {mode === "email" && (
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email you booked with"
                    />
                  )}

                  <button
                    type="button"
                    className="btn w-100 py-3 fw-bold"
                    style={{
                      background: "blue",
                      color: "white",
                      borderRadius: "30px",
                    }}
                  >
                    Find my booking
                  </button>

                  <p className="small text-center text-muted mt-3 mb-0">
                    {mode === "ticket"
                      ? "Your ticket number is 13 digits long. You'll find it in your e-ticket confirmation email."
                      : "Your details are used only to find your trip."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light">
          <div className="container py-5">
            <div className="row g-4 text-center">
              {[
                { icon: Ticket, title: "1. Enter ticket", text: "13 digits + last name" },
                { icon: MapPinned, title: "2. See your trip", text: "Route, date, cabin" },
                { icon: PhoneCall, title: "3. Need a change?", text: "Call or email us" },
              ].map(({ icon: Icon, title, text }) => (
                <div className="col-md-4" key={title}>
                  <div className="h-100 bg-white rounded-4 p-4 shadow-sm">
                    <Icon size={28} style={{ color: "blue" }} className="mb-3" />
                    <h3 className="h6 fw-bold text-dark">{title}</h3>
                    <p className="mb-0 text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-5 pt-2">
              <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
                How to check your flight booking
              </h2>
              <ol className="ps-3 text-muted" style={{ lineHeight: 1.8 }}>
                <li>Choose whether to search by ticket number or by email.</li>
                <li>Enter your details exactly as they appear on your ticket.</li>
                <li>
                  Look over your route, travel date, and cabin. If you need to
                  change anything, give us a call.
                </li>
              </ol>
            </section>

            <section className="mt-5">
              <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
                Where to find your ticket number
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.7, maxWidth: "52rem" }}>
                Open your confirmation email and look for &quot;E-ticket
                number&quot; or &quot;Ticket&quot;. It&apos;s 13 digits. Can&apos;t
                see the email? Check your spam folder first. Still nothing? Call
                us, and we&apos;ll help you track it down.
              </p>
            </section>

            <section className="mt-5">
              <h2 className="fw-bold mb-4" style={{ color: "blue" }}>
                Common questions
              </h2>
              <div className="d-flex flex-column gap-3">
                {faqs.map((item, i) => (
                  <div key={item.q} className="bg-white rounded-4 shadow-sm">
                    <button
                      type="button"
                      className="btn w-100 text-start d-flex justify-content-between align-items-center px-4 py-3"
                      style={{ color: "#111", fontWeight: 600 }}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span style={{ fontSize: "1.25rem", color: "blue" }}>
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === i && (
                      <p className="px-4 pb-4 mb-0 text-muted" style={{ lineHeight: 1.7 }}>
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-5 bg-white rounded-4 shadow-sm p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div>
                <h2 className="h4 fw-bold mb-2" style={{ color: "blue" }}>
                  Need help with your trip?
                </h2>
                <p className="mb-1 text-muted">
                  Can&apos;t find your booking, or something doesn&apos;t look
                  right? Call{" "}
                  <a href="tel:+18663075957" style={{ color: "blue", fontWeight: 700 }}>
                    (866) 307-5957
                  </a>{" "}
                  or email us. A real person will pick up.
                </p>
                <p className="mb-0 small text-muted">
                  17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                </p>
              </div>
              <a
                href="tel:+18663075957"
                className="btn fw-bold px-4 py-3"
                style={{ background: "blue", color: "white", borderRadius: "30px", whiteSpace: "nowrap" }}
              >
                Call (866) 307-5957
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
