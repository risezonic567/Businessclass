import React from "react";
import "../../public/CSS/style.css";
const businessClassDestinations = [
  {
    title: "Business Class Flights to London",
    description:
      "Travel in great style to London on discounted tickets for international business class travel. Enjoy a fully reclining seat with top-notch airport facilities.",
    image: "/photos/London.jpg.jpeg",
  },
  {
    title: "Business Class Flights to Dubai",
    description:
      "Travel in luxury with leading business carriers on flights to Dubai through exclusive price negotiation between both carriers.",
    image: "/photos/dubai.jpg.jpeg",
  },
  {
    title: "Business Class Flights to Paris",
    description:
      "Travel like royalty to Paris with private cabin seating, delicious meals, and priority boarding.",
    image: "/photos/paris.jpg.jpeg",
  },
  {
    title: "Business Class Flights to India",
    description:
      "Save money on all long-haul (greater than 6 hours) flights to Delhi, Mumbai, and other key areas of India.",
    image: "/photos/India.jpg.jpeg",
  },
  {
    title: "Business Class Flights to Japan",
    description:
      "Discover exclusive business class fares from major U.S. cities to the most popular travel destinations in Japan.",
    image: "/photos/Japan.jpg.jpeg",
  },
  {
    title: "Business Class Flights to New York",
    description:
      "Luxury travel throughout Asia with ticket flexibility and personalized assistance in booking.",
    image: "/photos/New-york.jpg.jpeg",
  },
];

export default function PolularDestination() {
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6" style={{
              color: "blue",
              backdropFilter: "blur(50px)",
             
            }} >
              Popular Business Class Flight Destinations
            </h2>
            <p
              className="text-muted mt-2 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Discover the most requested international business class routes
              from the United States.
            </p>
          </div>

          <div className="row g-4">
            {businessClassDestinations.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm destination-card">
                  {/* Image wrapper */}
                  <div className="image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="destination-img"
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-semibold mb-2">✈ {item.title}</h5>
                    <p className="text-muted small flex-grow-1">
                      {item.description}
                    </p>
                    <button className="btn btn-outline-yellow btn-sm mt-3 align-self-start text-light" style={{ "background": "blue" }}>
                      View Deals
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
