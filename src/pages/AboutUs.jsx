import React from "react";
import FAQ from "../Components/FAQ";
import {
  Globe,
  HandPlatter,
  ChartNoAxesCombined,
  TrendingUp,
} from "lucide-react";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Business Class Flights | Travel Experts</title>
        <meta name="description" content="Learn about our Business Class Flights agency specializing in discounted international premium tickets, personalized service, and reliable travel support." />
        <link rel="canonical" href="https://www.business-classflights.com/about-us" />
        <script type="application/ld+json">
          {`{
"@context":"https://schema.org",
"@type":"AboutPage",
"name":"About Business Class Flights",
"url":"https://www.business-classflights.com/about-us",
"description":"Learn about Business Class Flights, a travel agency specializing in discounted business class and first class airline tickets for international travel.",
"publisher":{
"@type":"TravelAgency",
"name":"Business Class Flights",
"url":"https://www.business-classflights.com"
}
}`}
        </script>


      </Helmet>
      <div
        className="container-fluid p-0 position-relative"
        style={{
          height: "100vh",
          backgroundImage: "url(/photos/Business_Class_Banner_2.jpg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.55)" }}
        ></div>

        <div className="vh-100 d-flex justify-content-center align-items-center position-relative">
          <div className="text-light text-center container">
            <h1 className="fw-bold display-4">
              About Our Business Class Travel Specialists
            </h1>
            <p className="lead mt-4 fw-semibold">
              Delivering personalized discount business and first class flight
              solutions for travelers across the United States.
            </p>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container text-center" style={{color:"blue"}}>
          <h2 className="fw-bold mb-4">
            Why Book Business Class Flights With Us?
          </h2>
          <p className="lead text-muted">
            At Business Class Flights, we believe travel should be simple,
            affordable, and stress-free. Our mission is to help travelers book
            discounted business and first-class tickets easily, with competitive
            pricing and dependable, personalized service.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-md-6">
              <div
                className="rounded-4 shadow overflow-hidden"
                style={{ height: "350px" }}
              >
                <img
                  src="/photos/About-us-ticket.jpg"
                  alt="About"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-3 " style={{color:"blue"}}>Who We Are</h2>
              <p>
                Business Class Flights is a travel agency that focuses on
                corporate and/or personal management of travel to help customers
                with their discounted, high-end business class and first class
                airfares and connecting travel; our team of experienced travel
                consultants works directly with most airlines to obtain
                exclusive fares as well as flexible travel for our clients.
              </p>
              <p>
                As your personal travel consultant, we’re committed to offering
                exceptional service, great value with the lowest price for all
                of your travel needs, and outstanding customer service to make
                every travel experience pleasant, safe, and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h3 className="fw-semibold mb-3" style={{color:"blue"}}>Our Mission</h3>
                <p>
                  Our mission is to help all travelers find business class fares
                  at an affordable price and make it easier for them to book as
                  well. We strive to provide exceptional travel deals and
                  personalized services to each traveler while ensuring that
                  they will have an enjoyable travel experience with us and that
                  their money will be well spent.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h3 className="fw-semibold mb-3" style={{color:"blue"}}>Our Vision</h3>
                <p>
                  We want to be a leader in premium travel services which
                  provide value and transparent pricing. Aiming to redefine the
                  way travelers book business class flights, we are committed to
                  creating a new experience that combines luxury travel with
                  simplicity, dependability, and value for money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold display-5 mb-4" style={{color:"blue"}}>
                Why Choose Business Class Flights
              </h2>

              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  ✅ Exclusive business class deals without needing to be a
                  frequent flyer.
                </li>
                <li className="mb-3">
                  ✅ Dedicated expert support available 24/7.
                </li>
                <li className="mb-3">
                  ✅ Flexible ticketing options tailored to your needs.
                </li>
                <li className="mb-3">
                  ✅ Transparent pricing with no hidden surprises.
                </li>
                <li className="mb-4">
                  ✅ Simple, fast, and completely secure booking process.
                </li>
              </ul>

              <a
                href="tel: (866)307-5957"
                className="btn btn-light btn-lg rounded-pill px-4 fw-semibold btn-color"
              >
                Book Your Business Class Today
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/photos/Why-choose-business-class-flights.jpg.jpeg"
                alt="Business Class"
                className="img-fluid rounded-4 shadow-lg" style={{ height: "350px", width: "570px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5" style={{color:"blue"}}>Our Values</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="text-center border p-4 rounded-4 shadow-sm h-100">
              <TrendingUp size={36} className="text-info" />
              <h5 className="mt-3 fw-semibold">Customer First Approach</h5>
              <p>
                We prioritize our clients’ comfort, savings, and satisfaction by
                offering personalized travel solutions and dedicated support.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="text-center border p-4 rounded-4 shadow-sm h-100">
              <HandPlatter size={36} className="text-warning" />
              <h5 className="mt-3 fw-semibold">Transparency & Trust</h5>
              <p>We believe in honest pricing with no hidden fees.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="text-center border p-4 rounded-4 shadow-sm h-100">
              <ChartNoAxesCombined size={36} className="text-success" />
              <h5 className="mt-3 fw-semibold">Excellence in Service</h5>
              <p>
                Our experienced travel consultants deliver seamless booking
                assistance.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="text-center border p-4 rounded-4 shadow-sm h-100">
              <Globe size={36} className="text-primary" />
              <h5 className="mt-3 fw-semibold">Global Expertise</h5>
              <p>
                Strong airline partnerships provide access to exclusive deals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
