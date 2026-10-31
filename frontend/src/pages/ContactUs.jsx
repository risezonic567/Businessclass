import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, CheckCircle2 } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    helpWith: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <>
      <Helmet>
        <title>Contact Business Class Flights | Call or Message Us</title>
        <meta
          name="description"
          content="Got a question about a business class fare or your booking? Call us at (866) 307-5957 or drop a message. We're based in Tustin, CA."
        />
        <link
          rel="canonical"
          href="https://www.business-classflights.com/contact-us"
        />
        <script type="application/ld+json">
          {`{
"@context":"https://schema.org",
"@type":"ContactPage",
"name":"Contact Business Class Flights",
"url":"https://www.business-classflights.com/contact-us",
"description":"Got a question about a business class fare or your booking? Call us at (866) 307-5957 or drop a message. We're based in Tustin, CA.",
"publisher":{
"@type":"TravelAgency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com"
},
"contactPoint":{
"@type":"ContactPoint",
"telephone":"+1-866-307-5957",
"contactType":"customer support",
"email":"info@asktravelo.com",
"areaServed":"US",
"availableLanguage":"English"
}
}`}
        </script>
      </Helmet>

      <div className="bg-light py-5" style={{ marginTop: "80px" }}>
        <div className="container py-4">
          <nav className="mb-4" aria-label="Breadcrumb">
            <Link to="/" className="text-muted text-decoration-none">
              Home
            </Link>
            <span className="mx-2 text-muted">/</span>
            <span className="text-dark">Contact</span>
          </nav>

          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <h1 className="fw-bold mb-3" style={{ color: "blue", fontSize: "clamp(1.75rem, 3vw, 2.35rem)", lineHeight: 1.25 }}>
                Contact our business class travel team
              </h1>
              <p className="mb-3 fw-semibold text-dark" style={{ fontSize: "1.1rem" }}>
                Got a question? Ask us directly.
              </p>
              <p className="mb-4 text-muted" style={{ lineHeight: 1.7 }}>
                Maybe you&apos;re comparing business class fares for an upcoming
                trip. Or maybe you&apos;ve already booked, and something needs
                changing. Either way, tell us what&apos;s going on, and we&apos;ll
                take a look. Our office is in Tustin, California, and you can
                reach us by phone any time, day or night.
              </p>

              <ul className="list-unstyled mb-4">
                {[
                  "A real person replies, usually within one business day",
                  "Your details stay private and are used only to help with your trip",
                  "Help with new bookings, changes, and questions about existing tickets",
                ].map((item) => (
                  <li key={item} className="d-flex gap-2 mb-3 text-dark">
                    <CheckCircle2 size={20} className="text-success" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-column gap-3">
                <div className="bg-white rounded-4 p-3 p-md-4 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <Phone size={22} style={{ color: "blue", marginTop: 2 }} />
                    <div>
                      <div className="fw-semibold text-dark mb-1">Call us, 24/7</div>
                      <a
                        href="tel:+18663075957"
                        style={{ color: "blue", textDecoration: "none", fontWeight: 600 }}
                      >
                        (866) 307-5957
                      </a>
                      <div className="small text-muted mt-1">
                        Prefer to talk? We&apos;re available day and night.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-4 p-3 p-md-4 shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <MapPin size={22} style={{ color: "blue", marginTop: 2 }} />
                    <div>
                      <div className="fw-semibold text-dark mb-1">Visit or write to us</div>
                      <div className="text-muted">
                        17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                      </div>
                      <a
                        href="mailto:info@asktravelo.com"
                        className="d-inline-flex align-items-center gap-2 mt-2"
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        <Mail size={16} /> info@asktravelo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=17662+Irvine+Blvd+Suite+9+Tustin+CA+92780"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block mt-3"
                style={{ color: "blue", fontSize: "0.95rem" }}
              >
                Google Map: Tustin, CA office
              </a>
            </div>

            <div className="col-lg-7">
              <div className="bg-white p-4 p-md-5 shadow rounded-4">
                <p className="mb-4 text-muted">
                  The more you tell us, the faster we can help. Include your
                  route, travel dates, and number of passengers if you have them.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full name*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="(555) 123-4567"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Travel dates (optional)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Travel dates (optional)"
                        name="travelDates"
                        value={form.travelDates}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">I need help with*</label>
                      <select
                        className="form-select"
                        name="helpWith"
                        value={form.helpWith}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="new-booking">New booking / fare quote</option>
                        <option value="existing-booking">Existing booking change</option>
                        <option value="ticket-question">Question about a ticket</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message*</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Tell us your route, dates and any questions"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn w-100 py-3"
                        style={{
                          background: "blue",
                          color: "white",
                          fontWeight: 700,
                          borderRadius: "30px",
                        }}
                      >
                        Send message
                      </button>
                    </div>

                    <div className="col-12 text-center text-muted small mt-1">
                      By submitting this form, you agree to our{" "}
                      <Link to="/privacy-policy" style={{ color: "blue" }}>
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/term-condition" style={{ color: "blue" }}>
                        Terms
                      </Link>
                      . We&apos;ll only use your details to respond to your
                      request.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
