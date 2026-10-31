import React from "react";

export default function Discound() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: "blue" }}>
              Why Book Discount Business Class Flights With Our Travel Experts
            </h2>
            <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
              Let&apos;s be honest: finding a truly good business class fare is
              hard. The prices you see on airline websites aren&apos;t always the
              lowest ones out there. Some of the better fares are negotiated
              rates that never show up in a regular search. That&apos;s where we
              come in. We do the digging, so you don&apos;t have to.
            </p>

            <a
              href="tel:+18663075957"
              className="btn btn-lg text-white"
              style={{ background: "blue", borderRadius: "30px" }}
            >
              Talk to a Travel Expert
            </a>
          </div>

          <div className="col-lg-6">
            <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 text-success fs-4">✔</div>
                <div>
                  <h3 className="h6 fw-semibold mb-1">Competitive business class fares</h3>
                  <p className="text-muted small mb-0">
                    We work with negotiated and consolidator fares that aren&apos;t
                    always listed on airline sites. How much you save depends on
                    your route, airline, and travel dates.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="me-3 text-success fs-4">✔</div>
                <div>
                  <h3 className="h6 fw-semibold mb-1">One advisor, start to finish</h3>
                  <p className="text-muted small mb-0">
                    You get a dedicated advisor who helps with your route, your
                    airline, and your seat. No bouncing between agents or
                    repeating your story.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="me-3 text-success fs-4">✔</div>
                <div>
                  <h3 className="h6 fw-semibold mb-1">Room to change your plans</h3>
                  <p className="text-muted small mb-0">
                    Plans change. Where the fare allows it, we look for options
                    with date changes and flexible ticket rules.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="me-3 text-success fs-4">✔</div>
                <div>
                  <h3 className="h6 fw-semibold mb-1">Real people, any time</h3>
                  <p className="text-muted small mb-0">
                    Our US-based team is on call 24/7. Need a change, an upgrade,
                    or help in a pinch? Just call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
