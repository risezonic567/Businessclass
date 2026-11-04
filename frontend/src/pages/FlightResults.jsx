import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../redux/FlightSlice";
import FlightCard from "../Components/flights/FlightCard";

const TIME_SLOTS = [
  { label: "Morning", value: "morning", time: "05:00 – 11:59" },
  { label: "Afternoon", value: "afternoon", time: "12:00 – 16:59" },
  { label: "Evening", value: "evening", time: "17:00 – 20:59" },
  { label: "Night", value: "night", time: "21:00 – 04:59" },
];

const STOP_OPTIONS = [
  { label: "Non-stop", value: "non-stop" },
  { label: "1 stop", value: "1" },
  { label: "2+", value: "2+" },
];

const defaultFilters = {
  airlines: [],
  stops: [],
  time: [],
  cabin_class: [],
  layovers: [],
  refundableOnly: false,
  wifiOnly: false,
  sort: "",
  minPrice: 0,
  maxPrice: 100000,
};

function toggleInList(list, value, checked) {
  if (checked) return [...list, value];
  return list.filter((x) => x !== value);
}

export default function FlightResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { offers, loading, error, pagination, lastSearch, filtersData } =
    useSelector((s) => s.flights);

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);
  const [showAllAirlines, setShowAllAirlines] = useState(false);

  const payload = useMemo(
    () =>
      location.state?.payload ||
      lastSearch ||
      (() => {
        try {
          return JSON.parse(localStorage.getItem("lastSearch") || "null");
        } catch {
          return null;
        }
      })(),
    [location.state, lastSearch]
  );

  useEffect(() => {
    if (!payload) return;
    try {
      localStorage.setItem("lastSearch", JSON.stringify(payload));
    } catch {
      /* ignore */
    }
  }, [payload]);

  useEffect(() => {
    if (!payload) return;
    dispatch(fetchFlights({ payload, page, limit: 20, filters }));
  }, [dispatch, payload, page, filters]);

  const airlines = filtersData?.airlines || [];
  const cabinClasses = filtersData?.cabinClasses || [];
  const visibleAirlines = showAllAirlines ? airlines : airlines.slice(0, 10);

  const sortedOffers = useMemo(() => {
    const list = [...(offers || [])];
    if (filters.sort === "cheap") {
      list.sort((a, b) => Number(a.total_amount) - Number(b.total_amount));
    } else if (filters.sort === "expensive") {
      list.sort((a, b) => Number(b.total_amount) - Number(a.total_amount));
    }
    return list;
  }, [offers, filters.sort]);

  const clearFilters = () => {
    setFilters(defaultFilters);
    setPage(1);
  };

  const filterPanel = (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-3 p-md-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 fw-bold mb-0">Filters</h2>
          <button
            type="button"
            className="btn btn-link text-success text-decoration-none p-0 small"
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>

        <div className="mb-4">
          <h3 className="h6 fw-semibold">Airlines</h3>
          <div style={{ maxHeight: 220, overflowY: "auto" }}>
            {visibleAirlines.length === 0 && (
              <p className="small text-muted mb-0">Available after search</p>
            )}
            {visibleAirlines.map((name) => (
              <label
                key={name}
                className="d-flex align-items-center gap-2 small mb-2"
              >
                <input
                  type="checkbox"
                  className="form-check-input m-0"
                  checked={filters.airlines.includes(name)}
                  onChange={(e) => {
                    setPage(1);
                    setFilters((prev) => ({
                      ...prev,
                      airlines: toggleInList(prev.airlines, name, e.target.checked),
                    }));
                  }}
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
          {airlines.length > 10 && (
            <button
              type="button"
              className="btn btn-link btn-sm text-success p-0"
              onClick={() => setShowAllAirlines((v) => !v)}
            >
              {showAllAirlines ? "Show less" : `Load more (${airlines.length - 10})`}
            </button>
          )}
        </div>

        <div className="mb-4">
          <h3 className="h6 fw-semibold">Cabin Class</h3>
          {(cabinClasses.length
            ? cabinClasses
            : ["economy", "premium_economy", "business", "first"]
          ).map((cabin) => (
            <label key={cabin} className="d-flex align-items-center gap-2 small mb-2">
              <input
                type="checkbox"
                className="form-check-input m-0"
                checked={filters.cabin_class.includes(cabin)}
                onChange={(e) => {
                  setPage(1);
                  setFilters((prev) => ({
                    ...prev,
                    cabin_class: toggleInList(prev.cabin_class, cabin, e.target.checked),
                  }));
                }}
              />
              <span className="text-uppercase">{String(cabin).replace(/_/g, " ")}</span>
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="h6 fw-semibold">Price Range</h3>
          <div className="d-flex justify-content-between small text-muted mb-2">
            <span>Min: ${filters.minPrice}</span>
            <span>Max: ${filters.maxPrice}</span>
          </div>
          <label className="small text-muted">Minimum Price</label>
          <input
            type="range"
            className="form-range"
            min={0}
            max={200000}
            step={100}
            value={filters.minPrice}
            onChange={(e) => {
              setPage(1);
              const next = Math.min(Number(e.target.value), filters.maxPrice - 100);
              setFilters((prev) => ({ ...prev, minPrice: next }));
            }}
          />
          <label className="small text-muted">Maximum Price</label>
          <input
            type="range"
            className="form-range"
            min={0}
            max={200000}
            step={100}
            value={filters.maxPrice}
            onChange={(e) => {
              setPage(1);
              const next = Math.max(Number(e.target.value), filters.minPrice + 100);
              setFilters((prev) => ({ ...prev, maxPrice: next }));
            }}
          />
        </div>

        <div className="mb-4">
          <h3 className="h6 fw-semibold">Departure Time</h3>
          <div className="row g-2">
            {TIME_SLOTS.map((slot) => {
              const active = filters.time.includes(slot.value);
              return (
                <div className="col-6" key={slot.value}>
                  <button
                    type="button"
                    className={`btn w-100 text-start small ${
                      active ? "btn-success" : "btn-outline-secondary"
                    }`}
                    style={{ borderRadius: 12 }}
                    onClick={() => {
                      setPage(1);
                      setFilters((prev) => ({
                        ...prev,
                        time: toggleInList(prev.time, slot.value, !active),
                      }));
                    }}
                  >
                    <div className="fw-semibold">{slot.label}</div>
                    <div className={active ? "opacity-75" : "text-muted"} style={{ fontSize: 11 }}>
                      {slot.time}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="h6 fw-semibold">Stops</h3>
          {STOP_OPTIONS.map((opt) => (
            <label key={opt.value} className="d-flex align-items-center gap-2 small mb-2">
              <input
                type="checkbox"
                className="form-check-input m-0"
                checked={filters.stops.includes(opt.value)}
                onChange={(e) => {
                  setPage(1);
                  setFilters((prev) => ({
                    ...prev,
                    stops: toggleInList(prev.stops, opt.value, e.target.checked),
                  }));
                }}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="h6 fw-semibold">Extras</h3>
          <label className="d-flex align-items-center gap-2 small mb-2">
            <input
              type="checkbox"
              className="form-check-input m-0"
              checked={filters.refundableOnly}
              onChange={(e) => {
                setPage(1);
                setFilters((prev) => ({ ...prev, refundableOnly: e.target.checked }));
              }}
            />
            <span>Refundable only</span>
          </label>
          <label className="d-flex align-items-center gap-2 small mb-0">
            <input
              type="checkbox"
              className="form-check-input m-0"
              checked={filters.wifiOnly}
              onChange={(e) => {
                setPage(1);
                setFilters((prev) => ({ ...prev, wifiOnly: e.target.checked }));
              }}
            />
            <span>WiFi available</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Business Class Flight Results | Business Class Flights</title>
        <meta
          name="description"
          content="Compare business class flight offers and select a fare to continue booking."
        />
      </Helmet>

      <div className="bg-light" style={{ paddingTop: "100px", minHeight: "70vh" }}>
        <div className="container-fluid px-3 px-lg-4 py-4">
          <nav className="mb-3 small text-muted">
            <Link to="/" className="text-decoration-none text-muted">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Flight results</span>
          </nav>

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <div>
              <h1 className="h4 fw-bold mb-1" style={{ color: "blue" }}>
                {pagination?.totalOffers ?? sortedOffers.length} Flights Found
                {pagination?.total ? ` Out of ${pagination.total}` : ""}
              </h1>
              {payload && (
                <p className="text-muted mb-0 fw-semibold">
                  {payload.from} → {payload.to}
                  {payload.departDate ? ` · ${payload.departDate}` : ""}
                  {payload.returnDate ? ` → ${payload.returnDate}` : ""}
                </p>
              )}
            </div>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <select
                className="form-select"
                style={{ width: "auto", borderRadius: 12 }}
                value={filters.sort}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sort: e.target.value }))
                }
              >
                <option value="">Sort by</option>
                <option value="cheap">Price: Low to High</option>
                <option value="expensive">Price: High to Low</option>
              </select>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ borderRadius: 30 }}
                onClick={() => navigate("/")}
              >
                New search
              </button>
            </div>
          </div>

          {!payload && (
            <div className="alert alert-warning">
              No search found. <Link to="/">Start a new flight search</Link>.
            </div>
          )}

          <div className="row g-4">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="sticky-top" style={{ top: 110 }}>
                {filterPanel}
              </div>
            </div>

            <div className="col-12 d-lg-none mb-2">
              <button
                className="btn btn-outline-secondary w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileFilters"
              >
                Filters
              </button>
              <div className="collapse mt-3" id="mobileFilters">
                {filterPanel}
              </div>
            </div>

            <div className="col-lg-9">
              {loading && (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status" />
                  <p className="mt-3 text-muted">Finding business class fares...</p>
                </div>
              )}

              {!loading && error && (
                <div className="alert alert-danger">{String(error)}</div>
              )}

              {!loading && !error && payload && sortedOffers.length === 0 && (
                <div className="alert alert-info">
                  No offers match these filters. Try clearing filters or different dates.
                </div>
              )}

              <div className="d-flex flex-column gap-3">
                {sortedOffers.map((item) => (
                  <FlightCard key={item.id} item={item} />
                ))}
              </div>

              {pagination?.totalPages > 1 && (
                <div className="d-flex justify-content-center gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    disabled={!pagination.hasPrevPage || loading}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    Previous
                  </button>
                  <span className="align-self-center text-muted">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </span>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    disabled={!pagination.hasNextPage || loading}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
