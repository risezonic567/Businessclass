import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wifi,
  Briefcase,
  ShieldCheck,
  ArrowRightLeft,
  Luggage,
} from "lucide-react";

export default function FlightCard({ item }) {
  const slices = item?.slices || [];
  if (!slices.length) return null;

  const offerId = item.id;
  const isRoundTrip = slices.length === 2;
  const firstSlice = slices[0];
  const secondSlice = slices[1];
  const firstSegment = firstSlice?.segments?.[0];
  const navigate = useNavigate();

  const airlineName = item?.owner?.name || "Airline";
  const airlineCode = item?.owner?.iata_code || "XX";
  const airlineLogo =
    item?.owner?.logo_symbol_url ||
    `https://images.kiwi.com/airlines/64/${airlineCode}.png`;
  const price = item?.total_amount || item?.intended_total_amount || "0";
  const currency = item?.total_currency || "USD";
  const refundable = item?.conditions?.refund_before_departure?.allowed;
  const changeAllowed = item?.conditions?.change_before_departure?.allowed;
  const emissions = item?.total_emissions_kg || "N/A";
  const wifiAvailable =
    firstSegment?.passengers?.[0]?.cabin?.amenities?.wifi?.available;
  const checkedBag = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "checked"
  );
  const carryOn = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "carry_on"
  );

  const handleSelect = () => {
    localStorage.setItem("selectedOffer", JSON.stringify(item));
    navigate(`/passengers/${offerId}`);
  };

  const renderSlice = (slice, label) => {
    const segment = slice?.segments?.[0];
    if (!slice || !segment) return null;

    const departureTime = new Date(segment?.departing_at);
    const arrivalTime = new Date(segment?.arriving_at);
    const originCode = slice?.origin?.iata_code || "N/A";
    const destinationCode = slice?.destination?.iata_code || "N/A";
    const originCity = slice?.origin?.city_name || "";
    const destinationCity = slice?.destination?.city_name || "";
    const duration = slice?.duration || "N/A";
    const fareBrand = slice?.fare_brand_name || "Basic";
    const cabinClass =
      segment?.passengers?.[0]?.cabin_class_marketing_name || "Business";
    const segments = slice?.segments || [];
    const layovers =
      segments.length > 1
        ? segments.slice(0, -1).map((seg) => seg?.destination?.iata_code)
        : [];

    return (
      <div className="mb-3">
        {isRoundTrip && (
          <p className="small fw-semibold text-primary mb-2">{label}</p>
        )}
        <div className="row align-items-center text-center g-2">
          <div className="col-4">
            <div className="fs-4 fw-bold">
              {departureTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="fw-semibold">{originCode}</div>
            <div className="small text-muted">{originCity}</div>
          </div>
          <div className="col-4">
            <div className="small text-muted">{duration}</div>
            {layovers.length > 0 && (
              <div className="small text-primary">via {layovers.join(", ")}</div>
            )}
            <div className="small text-muted">{fareBrand}</div>
          </div>
          <div className="col-4">
            <div className="fs-4 fw-bold">
              {arrivalTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="fw-semibold">{destinationCode}</div>
            <div className="small text-muted">{destinationCity}</div>
          </div>
        </div>
        <div className="mt-2">
          <span className="badge text-bg-light border">{cabinClass}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3">
      <div className="card-body p-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
              <img
                src={airlineLogo}
                alt={airlineName}
                width={56}
                height={56}
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

            {renderSlice(firstSlice, "Departure Flight")}
            {isRoundTrip && renderSlice(secondSlice, "Return Flight")}

            <div className="d-flex flex-wrap gap-2 mt-3">
              {wifiAvailable && (
                <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                  <Wifi size={14} /> WiFi
                </span>
              )}
              {checkedBag && (
                <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                  <Briefcase size={14} /> {checkedBag.quantity} Checked Bag
                </span>
              )}
              {carryOn && (
                <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                  <Luggage size={14} /> {carryOn.quantity} Cabin Bag
                </span>
              )}
              {changeAllowed && (
                <span className="badge text-bg-light border d-inline-flex align-items-center gap-1">
                  <ShieldCheck size={14} /> Change Allowed
                </span>
              )}
            </div>
            <p className="small text-muted mt-3 mb-0">CO₂ Emission: {emissions} kg</p>
          </div>

          <div className="col-lg-4">
            <div
              className="h-100 rounded-4 border p-4 d-flex flex-column justify-content-center text-center"
              style={{ background: "linear-gradient(180deg, #eff6ff, #f8fafc)" }}
            >
              <div className="small text-muted">Total Price</div>
              <div className="display-6 fw-bold text-primary my-2">
                {currency} {price}
              </div>
              <div className="small text-muted mb-3">taxes included</div>
              <button
                type="button"
                onClick={handleSelect}
                className="btn btn-primary py-2 fw-semibold"
                style={{ borderRadius: 14 }}
              >
                Select Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
