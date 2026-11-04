import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Wifi,
  Briefcase,
  ShieldCheck,
  ArrowRightLeft,
  Luggage,
} from "lucide-react";
import { flightOffer } from "../redux/FlightOffers";
import { apiUrl } from "../config/api";

const emptyPassenger = (type = "adult", id = "") => ({
  id,
  type,
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  nationality: "IN",
  passportNumber: "",
  passportExpiry: "",
  passportCountry: "IN",
});

function formatDuration(duration = "") {
  const match = String(duration).match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return duration || "N/A";
  const h = match[1] ? `${match[1]}h ` : "";
  const m = match[2] ? `${match[2]}m` : "";
  return `${h}${m}`.trim() || duration;
}

export default function Passengers() {
  const { offerId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: offerFromStore, loading, error } = useSelector((s) => s.offer);
  const lastSearch = useSelector((s) => s.flights.lastSearch);

  const [formData, setFormData] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (offerId) dispatch(flightOffer(offerId));
  }, [dispatch, offerId]);

  const offer = useMemo(() => {
    if (offerFromStore) return offerFromStore;
    try {
      return JSON.parse(localStorage.getItem("selectedOffer") || "null");
    } catch {
      return null;
    }
  }, [offerFromStore]);

  const isInternational = useMemo(() => {
    const origin = offer?.slices?.[0]?.origin;
    const destination = offer?.slices?.[0]?.destination;
    const originCountry = origin?.iata_country_code || origin?.country_code;
    const destinationCountry =
      destination?.iata_country_code || destination?.country_code;
    if (!originCountry || !destinationCountry) return true;
    return originCountry !== destinationCountry;
  }, [offer]);

  useEffect(() => {
    if (!offer) return;
    const fromOffer = offer.passengers || [];
    if (fromOffer.length) {
      setFormData(
        fromOffer.map((p) =>
          emptyPassenger(p.type || "adult", p.id || "")
        )
      );
      return;
    }
    const adults = Number(lastSearch?.adult || 1);
    const children = Number(lastSearch?.children || 0);
    const rows = [];
    for (let i = 0; i < adults; i++) rows.push(emptyPassenger("adult", `adult-${i}`));
    for (let i = 0; i < children; i++) rows.push(emptyPassenger("child", `child-${i}`));
    setFormData(rows.length ? rows : [emptyPassenger("adult", "adult-0")]);
  }, [offer, lastSearch]);

  const summary = useMemo(() => {
    if (!offer) return null;
    const slices = offer.slices || [];
    const slice0 = slices[0];
    const slice1 = slices[1];
    const route = [slice0?.origin?.iata_code, slice0?.destination?.iata_code]
      .filter(Boolean)
      .join(" → ");
    const returnRoute = slice1
      ? [slice1?.origin?.iata_code, slice1?.destination?.iata_code]
          .filter(Boolean)
          .join(" → ")
      : "";
    return {
      airline: offer?.owner?.name || "",
      route: returnRoute ? `${route} / ${returnRoute}` : route,
      departDate: slice0?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      returnDate: slice1?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      cabin:
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class_marketing_name ||
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class ||
        "business",
      price: String(offer?.total_amount || ""),
      currency: offer?.total_currency || "USD",
    };
  }, [offer]);

  const adultLength = formData.filter((p) => p.type === "adult").length;
  const childLength = formData.filter((p) => p.type === "child").length;

  const handleChange = (index, field, value) => {
    setFormData((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const validate = () => {
    for (const p of formData) {
      if (!p.firstName?.trim() || !p.lastName?.trim()) {
        return "Please enter first and last name for every traveller.";
      }
      if (!p.gender) return "Please select gender for every traveller.";
      if (!p.dob) return "Please enter date of birth for every traveller.";
      if (!p.phone?.trim() || p.phone.trim().length < 7) {
        return "Please enter a valid phone number for every traveller.";
      }
      if (!p.email?.trim() || !p.email.includes("@")) {
        return "Please enter a valid email for every traveller.";
      }
      if (isInternational) {
        if (!p.passportNumber?.trim()) {
          return "Passport number is required for international travel.";
        }
        if (!p.passportExpiry) {
          return "Passport expiry is required for international travel.";
        }
      }
    }
    return "";
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!offer || !summary) return;
    const err = validate();
    if (err) {
      setSubmitError(err);
      return;
    }

    const primary = formData[0];
    setSubmitting(true);
    setSubmitError("");
    try {
      const resp = await fetch(apiUrl("/enquiry/quote"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${primary.firstName} ${primary.lastName}`.trim(),
          email: primary.email.trim(),
          phone: primary.phone.trim(),
          message: "Booking request from passenger details form",
          offerId: offer.id || offerId,
          airline: summary.airline,
          route: summary.route,
          departDate: summary.departDate,
          returnDate: summary.returnDate,
          cabin: summary.cabin,
          price: summary.price,
          currency: summary.currency,
          passengers: formData.map((p) => ({
            type: p.type,
            firstName: p.firstName,
            middleName: p.middleName,
            lastName: p.lastName,
            gender: p.gender,
            dob: p.dob,
            phone: p.phone,
            email: p.email,
            nationality: p.nationality,
            passportNumber: p.passportNumber,
            passportExpiry: p.passportExpiry,
            passportCountry: p.passportCountry,
          })),
          offerSnapshot: {
            id: offer.id,
            total_amount: offer.total_amount,
            total_currency: offer.total_currency,
            owner: offer.owner,
            slices: offer.slices?.map((s) => ({
              origin: s?.origin?.iata_code,
              destination: s?.destination?.iata_code,
              duration: s?.duration,
            })),
          },
        }),
      });
      const data = await resp.json();
      if (!resp.ok || data.success === false) {
        throw new Error(data.message || "Booking request failed");
      }
      setShowSuccess(true);
    } catch (err2) {
      setSubmitError(err2.message || "Booking request failed");
    } finally {
      setSubmitting(false);
    }
  };

  const renderSlice = (slice, label) => {
    const segment = slice?.segments?.[0];
    if (!slice || !segment) return null;
    const departureTime = new Date(segment.departing_at);
    const arrivalTime = new Date(segment.arriving_at);
    return (
      <div className="mb-3">
        {label && <p className="small fw-semibold text-primary mb-2">{label}</p>}
        <div className="row align-items-center text-center g-2">
          <div className="col-4">
            <div className="fs-4 fw-bold">
              {departureTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="fw-semibold">{slice.origin?.iata_code}</div>
            <div className="small text-muted">{slice.origin?.city_name}</div>
          </div>
          <div className="col-4">
            <div className="small text-muted">{formatDuration(slice.duration)}</div>
            <div className="small text-muted">{slice.fare_brand_name || ""}</div>
          </div>
          <div className="col-4">
            <div className="fs-4 fw-bold">
              {arrivalTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="fw-semibold">{slice.destination?.iata_code}</div>
            <div className="small text-muted">{slice.destination?.city_name}</div>
          </div>
        </div>
      </div>
    );
  };

  if (loading && !offer) {
    return (
      <div className="bg-light text-center py-5" style={{ paddingTop: 120, minHeight: "60vh" }}>
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-3 text-muted">Loading selected flight...</p>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="bg-light" style={{ paddingTop: 120, minHeight: "60vh" }}>
        <div className="container py-5">
          <div className="alert alert-warning">
            No flight selected.{" "}
            <Link to="/flight-results">Back to results</Link> or{" "}
            <Link to="/">start a new search</Link>.
          </div>
          {error && <div className="alert alert-danger">{String(error)}</div>}
        </div>
      </div>
    );
  }

  const slices = offer.slices || [];
  const isRoundTrip = slices.length === 2;
  const firstSegment = slices[0]?.segments?.[0];
  const airlineName = offer?.owner?.name || "Airline";
  const airlineCode = offer?.owner?.iata_code || "XX";
  const airlineLogo =
    offer?.owner?.logo_symbol_url ||
    `https://images.kiwi.com/airlines/64/${airlineCode}.png`;
  const refundable = offer?.conditions?.refund_before_departure?.allowed;
  const changeAllowed = offer?.conditions?.change_before_departure?.allowed;
  const wifiAvailable =
    firstSegment?.passengers?.[0]?.cabin?.amenities?.wifi?.available;
  const checkedBag = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "checked"
  );
  const carryOn = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "carry_on"
  );

  return (
    <>
      <Helmet>
        <title>Traveller Details | Business Class Flights</title>
      </Helmet>

      <div className="bg-light" style={{ paddingTop: "100px", minHeight: "70vh" }}>
        <div className="container py-4" style={{ maxWidth: 980 }}>
          <nav className="mb-3 small text-muted">
            <Link to="/" className="text-decoration-none text-muted">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/flight-results" className="text-decoration-none text-muted">
              Results
            </Link>
            <span className="mx-2">/</span>
            <span>Travellers</span>
          </nav>

          {/* Offer summary */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body p-4">
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                    <img
                      src={airlineLogo}
                      alt={airlineName}
                      width={52}
                      height={52}
                      className="rounded-3 border bg-white p-2"
                      style={{ objectFit: "contain" }}
                    />
                    <div className="me-auto">
                      <div className="fw-bold fs-5">{airlineName}</div>
                      <div className="small text-muted">{airlineCode}</div>
                    </div>
                    <div className="d-flex gap-2 flex-wrap">
                      {isRoundTrip ? (
                        <span className="badge text-bg-primary-subtle text-primary border d-inline-flex align-items-center gap-1">
                          <ArrowRightLeft size={14} /> Round Trip
                        </span>
                      ) : (
                        <span className="badge text-bg-light border">One Way</span>
                      )}
                      {refundable && (
                        <span className="badge text-bg-success-subtle text-success border">
                          Refundable
                        </span>
                      )}
                    </div>
                  </div>

                  {renderSlice(slices[0], isRoundTrip ? "Departure Flight" : "")}
                  {isRoundTrip && renderSlice(slices[1], "Return Flight")}

                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {wifiAvailable && (
                      <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                        <Wifi size={14} /> WiFi
                      </span>
                    )}
                    {checkedBag && (
                      <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                        <Briefcase size={14} /> {checkedBag.quantity} Checked
                      </span>
                    )}
                    {carryOn && (
                      <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                        <Luggage size={14} /> {carryOn.quantity} Cabin
                      </span>
                    )}
                    {changeAllowed && (
                      <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                        <ShieldCheck size={14} /> Change Allowed
                      </span>
                    )}
                  </div>
                  <p className="small text-muted mt-3 mb-0">
                    CO₂ Emission: {offer?.total_emissions_kg || "N/A"} kg
                  </p>
                </div>
                <div className="col-lg-4">
                  <div
                    className="h-100 rounded-4 border p-4 text-center d-flex flex-column justify-content-center"
                    style={{ background: "linear-gradient(180deg, #eff6ff, #f8fafc)" }}
                  >
                    <div className="small text-muted">Total Price</div>
                    <div className="display-6 fw-bold text-primary my-2">
                      {summary?.currency} {summary?.price}
                    </div>
                    <div className="small text-muted">Taxes Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Traveller form */}
          <form onSubmit={handleBooking}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-3">
              <div>
                <h2 className="h4 fw-bold mb-1">Traveller Details</h2>
                <p className="small text-muted mb-0">
                  Enter passenger information as per government ID
                </p>
              </div>
              <div className="d-flex gap-2">
                <span className="badge text-bg-primary-subtle text-primary border px-3 py-2">
                  Adult {adultLength}
                </span>
                <span className="badge text-bg-success-subtle text-success border px-3 py-2">
                  Child {childLength}
                </span>
              </div>
            </div>

            {formData.map((p, index) => (
              <div key={p.id || index} className="card border-0 shadow-sm rounded-4 mb-3">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h3 className="h6 fw-bold mb-0">
                        {String(p.type || "adult").toUpperCase()} {index + 1}
                      </h3>
                      <p className="small text-muted mb-0">
                        {p.type === "child" ? "2–12 yrs" : "12+ yrs"}
                      </p>
                    </div>
                    <span className="badge text-bg-light border">Traveller</span>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="small text-muted">First Name</label>
                      <input
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.firstName}
                        onChange={(e) => handleChange(index, "firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Middle Name</label>
                      <input
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.middleName}
                        onChange={(e) => handleChange(index, "middleName", e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Last Name</label>
                      <input
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.lastName}
                        onChange={(e) => handleChange(index, "lastName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Gender</label>
                      <select
                        className="form-select"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.gender}
                        onChange={(e) => handleChange(index, "gender", e.target.value)}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.dob}
                        onChange={(e) => handleChange(index, "dob", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.phone}
                        onChange={(e) => handleChange(index, "phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        value={p.email}
                        onChange={(e) => handleChange(index, "email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small text-muted">Country (code)</label>
                      <input
                        className="form-control"
                        style={{ borderRadius: 12, height: 48 }}
                        placeholder="IN"
                        maxLength={2}
                        value={p.nationality}
                        onChange={(e) =>
                          handleChange(index, "nationality", e.target.value.toUpperCase())
                        }
                      />
                    </div>
                  </div>

                  {isInternational && (
                    <div className="mt-4 pt-3 border-top">
                      <h4 className="h6 fw-semibold mb-3">Passport Details</h4>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <label className="small text-muted">Passport Number</label>
                          <input
                            className="form-control"
                            style={{ borderRadius: 12, height: 48 }}
                            value={p.passportNumber}
                            onChange={(e) =>
                              handleChange(index, "passportNumber", e.target.value)
                            }
                            required={isInternational}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="small text-muted">Expiry Date</label>
                          <input
                            type="date"
                            className="form-control"
                            style={{ borderRadius: 12, height: 48 }}
                            value={p.passportExpiry}
                            onChange={(e) =>
                              handleChange(index, "passportExpiry", e.target.value)
                            }
                            required={isInternational}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="small text-muted">Issuing Country</label>
                          <input
                            className="form-control"
                            style={{ borderRadius: 12, height: 48 }}
                            placeholder="IN"
                            maxLength={2}
                            value={p.passportCountry}
                            onChange={(e) =>
                              handleChange(
                                index,
                                "passportCountry",
                                e.target.value.toUpperCase()
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {submitError && (
              <div className="alert alert-danger">{submitError}</div>
            )}

            <div className="text-center mt-2 mb-5">
              <button
                type="submit"
                className="btn btn-primary px-5 py-3 fw-semibold"
                style={{ borderRadius: 14 }}
                disabled={submitting || formData.length === 0}
              >
                {submitting ? "Submitting..." : "Continue Booking"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success popup */}
      {showSuccess && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.45)", zIndex: 2000 }}
        >
          <div
            className="bg-white rounded-4 shadow p-4 p-md-5 text-center mx-3"
            style={{ maxWidth: 440 }}
          >
            <div className="display-6 mb-2 text-success">✓</div>
            <h3 className="h4 fw-bold mb-2">Booking Request Submitted</h3>
            <p className="text-muted mb-4">
              Thanks! Our team will review your selected fare and traveller details and
              contact you shortly.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                style={{ borderRadius: 12 }}
                onClick={() => {
                  setShowSuccess(false);
                  navigate("/");
                }}
              >
                Back to Home
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ borderRadius: 12 }}
                onClick={() => {
                  setShowSuccess(false);
                  navigate("/flight-results");
                }}
              >
                View More Flights
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
