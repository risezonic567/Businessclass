import React, { useState } from "react";
import { Helmet } from "react-helmet";
export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    // here later you can connect API (email / CRM / backend)
  };

  return (
    <>
      <Helmet>
        <title>Contact Business Class Flights | 24/7 Booking Support</title>
        <meta name="description" content="Contact with  Business Class Flights for expert booking assistance, fare inquiries, and premium travel support. Our team is available to help with your travel needs." />
        <link rel="canonical" href="https://www.business-classflights.com/contact-us" />
        <script type="application/ld+json">
          {
            `{
"@context":"https://schema.org",
"@type":"ContactPage",
"name":"Contact Business Class Flights",
"url":"https://www.business-classflights.com/contact-us",
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
}`
          }
        </script>


      </Helmet>
      <div className="bg-light py-5" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left content */}
            <div className="col-lg-5">
              <h1 className="text-uppercase text-muted">Contact Us</h1>
              <h2 className="fw-bold mb-3 text-primary">
                Talk to our Business Class Experts
              </h2>
              <p className="text-muted">
                Need help finding the best business class fares or planning your
                trip? Send us your details and our team will get back to you
                with personalized assistance.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-2">✔ Fast response</li>
                <li className="mb-2">✔ Secure & private</li>
                <li className="mb-2">✔ Expert travel support</li>
                <li className="mb-2">✔+18663075957</li>
              </ul>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <div className="bg-white p-4 p-md-5 shadow rounded-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
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
                        placeholder="Enter your email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone (optional)</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+91 98765 43210"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <label className="form-label">Your Message*</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Tell us about your travel plan or question"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn  w-100 py-3"
                        style={{
                          background: "blue",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        Send Message
                      </button>
                    </div>

                    <div className="col-12 text-center text-muted small mt-2">
                      By submitting this form you agree to our privacy policy
                      and communication terms.
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
