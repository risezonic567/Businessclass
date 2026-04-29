import React, { useEffect, useRef } from "react";

export default function AutoPlay() {
  const marqueeRef = useRef(null);
  const hasStarted = useRef(false);

  const reviews = [
    {
      name: "Russel",
      route: "Seattle → Madrid | Business Class",
      airline: "Asiana Airlines • Jan 2026",
      text:
        "Very polite and professional. My agent handled everything smoothly and saved me a lot on my business class ticket.",
    },
    {
      name: "Manu",
      route: "Tampa → Bangalore | Business Class",
      airline: "Premium Partner Airline • Jan 2026",
      text:
        "My travel manager was extremely responsive and found me the best deal. I felt taken care of throughout the booking.",
    },
    {
      name: "David",
      route: "Atlanta → Istanbul | Business Class",
      airline: "Turkish Airlines • Jan 2026",
      text:
        "Amazing service. The agent explored multiple options and secured me a luxury seat at an unbeatable price.",
    },
    {
      name: "Sophie",
      route: "London → Dubai | First Class",
      airline: "Emirates • Feb 2026",
      text:
        "Smooth booking, excellent communication, and a very comfortable flight experience. Highly recommended.",
    },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;

    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          marquee.style.animationPlayState = "running";
          hasStarted.current = true;
        } else {
          // Desktop only pause
          if (!isMobile && hasStarted.current) {
            marquee.style.animationPlayState = "paused";
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(marquee);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-5 bg-light overflow-hidden">
      <style>{`
        html, body { overflow-x: hidden; }

        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 28s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .review-card {
          width: 300px;
          height: 240px;
          margin: 0 16px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          padding: 20px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .review-card {
            width: 360px;
            height: 260px;
            margin: 0 24px;
            padding: 24px;
          }
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-5">
        <div className="fw-bold text-danger small" style={{ letterSpacing: "2px" }}>
          TRUSTED BY THOUSANDS
        </div>
        <h2 className="fw-bold display-6 text-dark my-2">
         Our Happy Client Say's That
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          We help business and first-class travelers book smarter, travel
          better, and enjoy exclusive fares.
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div ref={marqueeRef} className="marquee-track">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="review-card">
              <div>
                <h5 className="fw-bold mb-1">{review.name}</h5>
                <div className="text-muted small">{review.route}</div>
                <div className="text-corol small mb-2">
                  {review.airline}
                </div>
                <p className="mb-0">"{review.text}"</p>
              </div>
              <div className="text-success">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
