import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightOffer } from "../redux/FlightOffers";
import { apiUrl } from "../config/api";

export default function QuoteRequest() {
  const { offerId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: offer, loading, error } = useSelector((s) => s.offer);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (offerId) dispatch(flightOffer(offerId));
  }, [dispatch, offerId]);

  const summary = useMemo(() => {
    const source =
      offer ||
      (() => {
        try {
          return JSON.parse(localStorage.getItem("selectedOffer") || "null");
        } catch {
          return null;
        }
      })();
    if (!source) return null;

    const slice0 = source?.slices?.[0];
    const slice1 = source?.slices?.[1];
    const route = [
      slice0?.origin?.iata_code,
      slice0?.destination?.iata_code,
    ]
      .filter(Boolean)
      .join(" → ");
    const returnRoute = slice1
      ? [slice1?.origin?.iata_code, slice1?.destination?.iata_code]
          .filter(Boolean)
          .join(" → ")
      : "";

    return {
      source,
      airline: source?.owner?.name || "",
      route: returnRoute ? `${route} / ${returnRoute}` : route,
      departDate: slice0?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      returnDate: slice1?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      cabin:
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class_marketing_name ||
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class ||
        "business",
      price: source?.total_amount || "",
      currency: source?.total_currency || "USD",
    };
  }, [offer]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!summary) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const resp = await fetch(apiUrl("/enquiry/quote"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          offerId,
          airline: summary.airline,
          route: summary.route,
          departDate: summary.departDate,
          returnDate: summary.returnDate,
          cabin: summary.cabin,
          price: String(summary.price),
          currency: summary.currency,
          offerSnapshot: {
            id: summary.source?.id,
            total_amount: summary.source?.total_amount,
            total_currency: summary.source?.total_currency,
            owner: summary.source?.owner,
            slices: summary.source?.slices?.map((s) => ({
              origin: s?.origin?.iata_code,
              destination: s?.destination?.iata_code,
              duration: s?.duration,
              departing_at: s?.segments?.[0]?.departing_at,
              arriving_at: s?.segments?.[s?.segments?.length - 1]?.arriving_at,
            })),
          },
        }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.message || "Quote submit failed");
      setDone(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit quote");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request a Business Class Quote | Business Class Flights</title>
        <meta
          name="description"
          content="Request a quote for your selected business class flight. Our Tustin, CA team will follow up with clear options."
        />
      </Helmet>

      <div className="bg-light py-5" style={{ paddingTop: "100px", minHeight: "70vh" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <nav className="mb-3 small text-muted">
            <Link to="/" className="text-decoration-none text-muted">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/flight-results" className="text-decoration-none text-muted">
              Results
            </Link>
            <span className="mx-2">/</span>
            <span>Quote</span>
          </nav>

          <h1 className="h3 fw-bold mb-4" style={{ color: "blue" }}>
            Request a quote for this fare
          </h1>

          {loading && !summary && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" />
            </div>
          )}

          {error && !summary && (
            <div className="alert alert-danger">
              {String(error)}{" "}
              <button className="btn btn-link p-0" onClick={() => navigate("/")}>
                Start over
              </button>
            </div>
          )}

          {summary && (
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <h2 className="h5 fw-bold mb-3">Selected offer</h2>
                  <p className="mb-2">
                    <b>Airline:</b> {summary.airline || "-"}
                  </p>
                  <p className="mb-2">
                    <b>Route:</b> {summary.route || "-"}
                  </p>
                  <p className="mb-2">
                    <b>Depart:</b> {summary.departDate || "-"}
                  </p>
                  {summary.returnDate && (
                    <p className="mb-2">
                      <b>Return:</b> {summary.returnDate}
                    </p>
                  )}
                  <p className="mb-2">
                    <b>Cabin:</b> {summary.cabin}
                  </p>
                  <p className="mb-0 fs-4 fw-bold" style={{ color: "blue" }}>
                    {summary.currency} {summary.price}
                  </p>
                  <p className="small text-muted mt-2 mb-0">
                    Fares change quickly. Our advisor will confirm live
                    availability when they reply.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
                  {done ? (
                    <div className="text-center py-4">
                      <h2 className="h4 fw-bold mb-3" style={{ color: "blue" }}>
                        Quote request sent
                      </h2>
                      <p className="text-muted">
                        Thanks. Our team will review this fare and contact you
                        shortly. For urgent help call{" "}
                        <a href="tel:+18663075957">(866) 307-5957</a>.
                      </p>
                      <Link to="/" className="btn btn-primary text-white mt-2" style={{ borderRadius: 30 }}>
                        Back to home
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Full name*</label>
                        <input
                          className="form-control"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email*</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone*</label>
                        <input
                          className="form-control"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Message (optional)</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Flexible dates, preferred airline, etc."
                        />
                      </div>
                      {submitError && (
                        <div className="alert alert-danger py-2">{submitError}</div>
                      )}
                      <button
                        type="submit"
                        className="btn w-100 py-3 text-white fw-bold"
                        style={{ background: "blue", borderRadius: 30 }}
                        disabled={submitting}
                      >
                        {submitting ? "Sending..." : "Send quote request"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
