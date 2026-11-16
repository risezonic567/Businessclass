import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFlights, setLastSearch } from "../redux/FlightSlice";
import { apiUrl } from "../config/api";

export default function Banner() {
  const [tripType, setTripType] = useState("round");
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");
  const [fromAirports, setFromAirports] = useState([]);
  const [toAirports, setToAirports] = useState([]);
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showPassengers, setShowPassengers] = useState(false);
  const [cabin, setCabin] = useState("business");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const passengersRef = useRef(null);
  const fromDebounce = useRef(null);
  const toDebounce = useRef(null);

  const totalPassengers = Number(adults) + Number(children) + Number(infants);
  const passengerLabel =
    totalPassengers === 1 ? "1 Passenger" : `${totalPassengers} Passengers`;

  const bumpCount = (type, delta) => {
    if (type === "adults") {
      const nextAdults = adults + delta;
      if (nextAdults < 1 || nextAdults > 9) return;
      const nextInfants = Math.min(infants, nextAdults);
      if (nextAdults + children + nextInfants > 9) return;
      setAdults(nextAdults);
      if (nextInfants !== infants) setInfants(nextInfants);
      return;
    }
    if (type === "children") {
      const nextChildren = children + delta;
      if (nextChildren < 0 || nextChildren > 8) return;
      if (adults + nextChildren + infants > 9) return;
      setChildren(nextChildren);
      return;
    }
    if (type === "infants") {
      const nextInfants = infants + delta;
      if (nextInfants < 0 || nextInfants > adults) return;
      if (adults + children + nextInfants > 9) return;
      setInfants(nextInfants);
    }
  };

  useEffect(() => {
    const onDoc = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) setShowFrom(false);
      if (toRef.current && !toRef.current.contains(e.target)) setShowTo(false);
      if (passengersRef.current && !passengersRef.current.contains(e.target)) {
        setShowPassengers(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const fetchAirports = async (value, setter, showSetter) => {
    if (!value || value.trim().length < 2) {
      setter([]);
      showSetter(false);
      return;
    }
    try {
      const resp = await fetch(
        `${apiUrl("/api/flight/location")}?query=${encodeURIComponent(value.trim())}`
      );
      const data = await resp.json();
      const raw = data?.data?.data ?? data?.data?.suggestions ?? [];
      const suggestions = Array.isArray(raw) ? raw : raw?.suggestions || [];
      setter(suggestions);
      showSetter(suggestions.length > 0);
    } catch {
      setter([]);
    }
  };

  const onFromChange = (value) => {
    setFromQuery(value);
    setFromCode("");
    clearTimeout(fromDebounce.current);
    fromDebounce.current = setTimeout(
      () => fetchAirports(value, setFromAirports, setShowFrom),
      300
    );
  };

  const onToChange = (value) => {
    setToQuery(value);
    setToCode("");
    clearTimeout(toDebounce.current);
    toDebounce.current = setTimeout(
      () => fetchAirports(value, setToAirports, setShowTo),
      300
    );
  };

  const pickSuggestion = (item, which) => {
    const code =
      item?.iata_code ||
      item?.airports?.[0]?.iata_code ||
      item?.city?.iata_code ||
      "";
    if (!code) return;
    // Same as GTH: only IATA code in the input (e.g. DEL)
    if (which === "from") {
      setFromQuery(code);
      setFromCode(code);
      setShowFrom(false);
      setFromAirports([]);
    } else {
      setToQuery(code);
      setToCode(code);
      setShowTo(false);
      setToAirports([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    if (!fromCode || !toCode) {
      setError("Please select airports from the suggestions.");
      return;
    }
    if (!departDate) {
      setError("Please choose a departure date.");
      return;
    }
    if (tripType === "round" && !returnDate) {
      setError("Please choose a return date.");
      return;
    }

    const payload = {
      from: fromCode,
      to: toCode,
      departDate,
      returnDate: tripType === "round" ? returnDate : "",
      classe: cabin,
      adult: Number(adults) || 1,
      children: Number(children) || 0,
      infant: Number(infants) || 0,
      tripType: tripType === "round" ? "roundtrip" : "oneway",
    };

    setLoading(true);
    dispatch(setLastSearch(payload));
    try {
      const result = await dispatch(fetchFlights({ payload, page: 1, limit: 20 }));
      if (fetchFlights.rejected.match(result)) {
        setError(result.payload || "Search failed");
        return;
      }
      navigate("/flight-results", { state: { payload } });
    } catch (err) {
      setError(err.message || "Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="position-relative text-white banner-wrapper">
      <video
        src="/video/video.mp4"
        loop
        muted
        autoPlay
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: 0 }}
      />
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(0,0,0,0.45)", zIndex: 1 }}
      />

      <style>{`
        .banner-wrapper {
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 48px;
          overflow: visible;
        }
        @media (max-width: 768px) {
          .banner-wrapper { padding-top: 110px; }
          .banner-title { font-size: 24px; line-height: 1.3; }
          .banner-subtitle { font-size: 14px; }
        }
        .glass-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(18px);
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3);
        }
        .trip-tab {
          cursor: pointer;
          font-weight: 600;
          padding: 6px 12px;
          position: relative;
          color: #555;
          transition: all 0.3s;
          user-select: none;
        }
        .trip-tab.active { color: black; }
        .trip-tab.active::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 3px;
          background: black;
          border-radius: 10px;
        }
        .search-input {
          height: 48px;
          border-radius: 12px;
        }
        .search-btn {
          height: 48px;
          border-radius: 14px;
          font-weight: 600;
          background: blue;
          color: white;
          border: none;
          width: 100%;
          transition: all 0.3s;
        }
        .search-btn:hover { transform: scale(1.03); }
        .search-btn:disabled { opacity: 0.7; transform: none; }
        .airport-dd {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 4px);
          z-index: 50;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          max-height: 220px;
          overflow-y: auto;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }
        .airport-dd button {
          display: block;
          width: 100%;
          text-align: left;
          border: 0;
          background: transparent;
          padding: 10px 12px;
          font-size: 14px;
          color: #111;
        }
        .airport-dd button:hover { background: #f3f4f6; }
        .pax-trigger {
          height: 48px;
          border-radius: 12px;
          border: 1px solid #ced4da;
          background: #fff;
          width: 100%;
          text-align: left;
          padding: 0 12px;
          font-size: 1rem;
          color: #212529;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pax-panel {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 4px);
          z-index: 60;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          padding: 12px;
          min-width: 260px;
        }
        .pax-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 8px 0;
        }
        .pax-row + .pax-row { border-top: 1px solid #f1f5f9; }
        .pax-label { font-weight: 600; font-size: 0.95rem; color: #111; }
        .pax-hint { font-weight: 400; color: #6b7280; font-size: 0.85rem; }
        .pax-controls { display: flex; align-items: center; gap: 10px; }
        .pax-btn {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid #d1d5db;
          background: #fff;
          font-size: 1.1rem;
          line-height: 1;
          color: #111;
        }
        .pax-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .pax-count { min-width: 18px; text-align: center; font-weight: 600; }
        .pax-note { font-size: 0.78rem; color: #6b7280; margin: 8px 0 0; }
        .pax-done {
          margin-top: 10px;
          width: 100%;
          border: 0;
          border-radius: 10px;
          background: blue;
          color: #fff;
          font-weight: 600;
          padding: 8px 12px;
        }
      `}</style>

      <div className="container position-relative text-center px-3" style={{ zIndex: 2 }}>
        <p
          className="text-uppercase mb-2"
          style={{ letterSpacing: "0.12em", fontSize: "0.8rem", fontWeight: 700, opacity: 0.9 }}
        >
          Business Class Flights
        </p>
        <h1 className="fw-bold mb-2 banner-title">
          Discount Business Class Airfare – Exclusive International Discounts
        </h1>
        <p className="opacity-75 mb-4 banner-subtitle">
          Discounted business class flights and cheap tickets from US travel specialists.
        </p>

        <form
          onSubmit={handleSearch}
          className="glass-card p-4 mx-auto mt-4 text-start"
          style={{ maxWidth: "1100px", color: "#000" }}
        >
          <div className="d-flex gap-4 mb-3 justify-content-start">
            <div
              className={`trip-tab ${tripType === "round" ? "active" : ""}`}
              onClick={() => setTripType("round")}
              role="button"
              tabIndex={0}
            >
              Round Trip
            </div>
            <div
              className={`trip-tab ${tripType === "one" ? "active" : ""}`}
              onClick={() => setTripType("one")}
              role="button"
              tabIndex={0}
            >
              One Way
            </div>
          </div>

          <div className="row g-3 search-form align-items-end">
            <div className="col-12 col-md-6 col-lg position-relative" ref={fromRef}>
              <label className="small text-muted">From</label>
              <input
                type="text"
                className="form-control search-input"
                placeholder="New York"
                value={fromQuery}
                onChange={(e) => onFromChange(e.target.value)}
                onFocus={() => fromAirports.length && setShowFrom(true)}
                autoComplete="off"
                required
              />
              {showFrom && fromAirports.length > 0 && (
                <div className="airport-dd">
                  {fromAirports.map((item, idx) => (
                    <button
                      type="button"
                      key={`${item?.iata_code || item?.id || idx}-from`}
                      onClick={() => pickSuggestion(item, "from")}
                    >
                      {(item?.name || item?.city_name || item?.city?.name || "Airport") +
                        (item?.iata_code ? ` (${item.iata_code})` : "")}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="col-12 col-md-6 col-lg position-relative" ref={toRef}>
              <label className="small text-muted">To</label>
              <input
                type="text"
                className="form-control search-input"
                placeholder="London"
                value={toQuery}
                onChange={(e) => onToChange(e.target.value)}
                onFocus={() => toAirports.length && setShowTo(true)}
                autoComplete="off"
                required
              />
              {showTo && toAirports.length > 0 && (
                <div className="airport-dd">
                  {toAirports.map((item, idx) => (
                    <button
                      type="button"
                      key={`${item?.iata_code || item?.id || idx}-to`}
                      onClick={() => pickSuggestion(item, "to")}
                    >
                      {(item?.name || item?.city_name || item?.city?.name || "Airport") +
                        (item?.iata_code ? ` (${item.iata_code})` : "")}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="col-6 col-md-4 col-lg">
              <label className="small text-muted">Departure</label>
              <input
                type="date"
                className="form-control search-input"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                required
              />
            </div>

            {tripType === "round" && (
              <div className="col-6 col-md-4 col-lg">
                <label className="small text-muted">Return</label>
                <input
                  type="date"
                  className="form-control search-input"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="col-6 col-md-4 col-lg position-relative" ref={passengersRef}>
              <label className="small text-muted">Passengers</label>
              <button
                type="button"
                className="pax-trigger"
                onClick={() => setShowPassengers((v) => !v)}
                aria-expanded={showPassengers}
                aria-haspopup="dialog"
              >
                {passengerLabel}
              </button>
              {showPassengers && (
                <div className="pax-panel" role="dialog" aria-label="Passenger counts">
                  <div className="pax-row">
                    <div>
                      <div className="pax-label">Adults</div>
                    </div>
                    <div className="pax-controls">
                      <button
                        type="button"
                        className="pax-btn"
                        onClick={() => bumpCount("adults", -1)}
                        disabled={adults <= 1}
                        aria-label="Fewer adults"
                      >
                        −
                      </button>
                      <span className="pax-count">{adults}</span>
                      <button
                        type="button"
                        className="pax-btn"
                        onClick={() => bumpCount("adults", 1)}
                        disabled={adults >= 9 || totalPassengers >= 9}
                        aria-label="More adults"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="pax-row">
                    <div>
                      <div className="pax-label">
                        Children <span className="pax-hint">(Aged 2–11)</span>
                      </div>
                    </div>
                    <div className="pax-controls">
                      <button
                        type="button"
                        className="pax-btn"
                        onClick={() => bumpCount("children", -1)}
                        disabled={children <= 0}
                        aria-label="Fewer children"
                      >
                        −
                      </button>
                      <span className="pax-count">{children}</span>
                      <button
                        type="button"
                        className="pax-btn"
                        onClick={() => bumpCount("children", 1)}
                        disabled={children >= 8 || totalPassengers >= 9}
                        aria-label="More children"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="pax-row">
                    <div>
                      <div className="pax-label">
                        Infants <span className="pax-hint">(On lap)</span>
                      </div>
                    </div>
                    <div className="pax-controls">
                      <button
                        type="button"
                        className="pax-btn"
                        onClick={() => bumpCount("infants", -1)}
                        disabled={infants <= 0}
                        aria-label="Fewer infants"
                      >
                        −
                      </button>
                      <span className="pax-count">{infants}</span>
                      <button
                        type="button"
                        className="pax-btn"
                        onClick={() => bumpCount("infants", 1)}
                        disabled={
                          infants >= adults || totalPassengers >= 9
                        }
                        aria-label="More infants"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <p className="pax-note">Most airlines treat 10+ as a group request.</p>
                  <button
                    type="button"
                    className="pax-done"
                    onClick={() => setShowPassengers(false)}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            <div className="col-6 col-md-4 col-lg">
              <label className="small text-muted">Cabin</label>
              <select
                className="form-select search-input"
                value={cabin}
                onChange={(e) => setCabin(e.target.value)}
              >
                <option value="business">Business</option>
                <option value="first">First</option>
                <option value="premium_economy">Premium Economy</option>
                <option value="economy">Economy</option>
              </select>
            </div>

            <div className="col-12 col-md-4 col-lg">
              <label className="small text-muted d-none d-lg-block">&nbsp;</label>
              <button className="search-btn" type="submit" disabled={loading}>
                {loading ? "Searching..." : "Search Flights"}
              </button>
            </div>
          </div>

          {error && <p className="text-danger small mt-3 mb-0">{error}</p>}
        </form>
      </div>
    </div>
  );
}
