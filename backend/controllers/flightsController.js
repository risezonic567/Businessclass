const duffelHeaders = () => ({
  Authorization: `Bearer ${process.env.DUFFEL_API}`,
  "Content-Type": "application/json",
  "Duffel-Version": "v2",
});

const mapCabin = (classe = "") => {
  const c = String(classe).toLowerCase().replace(/\s+/g, "_");
  if (c.includes("first")) return "first";
  if (c.includes("premium")) return "premium_economy";
  if (c.includes("business")) return "business";
  if (c.includes("economy")) return "economy";
  return "business";
};

export const fligtsDatas = async (req, res) => {
  try {
    const {
      from,
      to,
      departDate,
      returnDate,
      classe,
      adult,
      children,
      infant,
      tripType,
    } = req.body;

    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 20);

    if (!from || !to || !departDate || (Number(adult) === 0 && (children > 0 || infant > 0))) {
      return res.status(400).json({
        status: false,
        message: "from, to, departDate and adult are required",
      });
    }

    if (!process.env.DUFFEL_API) {
      return res.status(500).json({
        success: false,
        message: "DUFFEL_API is not configured",
      });
    }

    const isRoundTrip =
      tripType === "roundtrip" && returnDate && returnDate !== "";

    const passengers = [];
    for (let i = 0; i < Number(adult || 1); i++) passengers.push({ type: "adult" });
    for (let i = 0; i < Number(children || 0); i++) passengers.push({ type: "child" });
    for (let i = 0; i < Number(infant || 0); i++) {
      passengers.push({ type: "infant_without_seat" });
    }

    const slices = [
      {
        origin: from,
        destination: to,
        departure_date: departDate,
      },
    ];

    if (isRoundTrip) {
      slices.push({
        origin: to,
        destination: from,
        departure_date: returnDate,
      });
    }

    const cabinClass = mapCabin(classe);

    const response = await fetch("https://api.duffel.com/air/offer_requests", {
      method: "POST",
      headers: duffelHeaders(),
      body: JSON.stringify({
        data: {
          slices,
          passengers,
          cabin_class: cabinClass,
        },
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.errors?.[0]?.message || "Duffel API Error");
    }

    let allOffers = result?.data?.offers || [];

    const {
      airlines,
      stops,
      minPrice,
      maxPrice,
      refundableOnly,
      wifiOnly,
      time,
      cabin_class,
      layovers,
    } = req.query;

    const airlineArr = airlines ? airlines.split(",").filter(Boolean) : [];
    const stopsArr = stops ? stops.split(",").filter(Boolean) : [];
    const timeArr = time ? time.split(",").filter(Boolean) : [];
    const cabins = cabin_class ? cabin_class.split(",").filter(Boolean) : [];
    const layoverArr = layovers ? layovers.split(",").filter(Boolean) : [];

    const filteredOffers = allOffers.filter((item) => {
      const firstSlice = item?.slices?.[0];
      const firstSegment = firstSlice?.segments?.[0];
      if (!firstSlice || !firstSegment) return false;

      const airline = item?.owner?.name || "";
      const cabin =
        item?.slices?.[0]?.segments?.[0]?.passengers?.[0]?.cabin_class;
      const price = Number(item?.total_amount || 0);
      const stopsCount = firstSlice?.segments?.length - 1;
      const depHour = new Date(firstSegment?.departing_at).getHours();
      const refundable = item?.conditions?.refund_before_departure?.allowed;
      const wifi =
        firstSegment?.passengers?.[0]?.cabin?.amenities?.wifi?.available;

      const airlineMatch =
        airlineArr.length === 0 || airlineArr.includes(airline);
      const cabinMatch = cabins.length === 0 || cabins.includes(cabin);
      const stopMatch =
        stopsArr.length === 0 ||
        stopsArr.some(
          (s) =>
            (s === "non-stop" && stopsCount === 0) ||
            (s === "1" && stopsCount === 1) ||
            (s === "2+" && stopsCount >= 2)
        );
      const priceMatch =
        price >= Number(minPrice || 0) &&
        price <= Number(maxPrice || Infinity);
      const refundableMatch = refundableOnly !== "true" || refundable;
      const wifiMatch = wifiOnly !== "true" || wifi;
      const timeMatch =
        timeArr.length === 0 ||
        timeArr.some(
          (t) =>
            (t === "morning" && depHour >= 5 && depHour < 12) ||
            (t === "afternoon" && depHour >= 12 && depHour < 17) ||
            (t === "evening" && depHour >= 17 && depHour < 21) ||
            (t === "night" && (depHour >= 21 || depHour < 5))
        );
      const layoverMatch =
        layoverArr.length === 0 ||
        firstSlice?.segments?.some((seg) =>
          layoverArr.includes(seg?.destination?.iata_code)
        );

      return (
        stopMatch &&
        priceMatch &&
        refundableMatch &&
        wifiMatch &&
        timeMatch &&
        airlineMatch &&
        cabinMatch &&
        layoverMatch
      );
    });

    const total = allOffers.length;
    const totalOffers = filteredOffers.length;
    const totalPages = Math.ceil(totalOffers / limit) || 1;
    const startIndex = (page - 1) * limit;
    const paginatedOffers = filteredOffers.slice(startIndex, startIndex + limit);

    const allCabinClasses = [
      ...new Set(
        allOffers
          .map(
            (item) =>
              item?.slices?.[0]?.segments?.[0]?.passengers?.[0]?.cabin_class
          )
          .filter(Boolean)
      ),
    ];

    const allAirlines = [
      ...new Set(allOffers.map((item) => item?.owner?.name).filter(Boolean)),
    ];

    const allLayovers = [
      ...new Set(
        allOffers
          .flatMap((item) =>
            item?.slices?.[0]?.segments
              ?.slice(0, -1)
              ?.map((seg) => seg?.destination?.iata_code)
          )
          .filter(Boolean)
      ),
    ];

    return res.status(200).json({
      success: true,
      message: isRoundTrip ? "Round Trip Flights Fetched" : "One Way Flights Fetched",
      tripType: isRoundTrip ? "roundtrip" : "oneway",
      pagination: {
        currentPage: page,
        limit,
        total,
        totalOffers,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      filtersData: {
        cabinClasses: allCabinClasses,
        airlines: allAirlines,
        layovers: allLayovers,
      },
      data: {
        offers: paginatedOffers,
      },
    });
  } catch (error) {
    console.error("Flight API Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const searchLocation = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || String(query).trim().length < 2) {
      return res.send({
        message: "Query too short",
        status: true,
        data: { data: { suggestions: [] } },
      });
    }

    if (!process.env.DUFFEL_API) {
      return res.status(500).json({
        status: false,
        message: "DUFFEL_API is not configured",
      });
    }

    const response = await fetch(
      `https://api.duffel.com/places/suggestions?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: duffelHeaders(),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return res.status(400).send({
        message: "Duffel API error",
        status: false,
        error: result,
      });
    }

    return res.send({
      message: "Airport suggestions fetched successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Location search error" });
  }
};

export const offerData = async (req, res) => {
  try {
    const { offerId } = req.params;
    if (!offerId) {
      return res.status(400).json({
        success: false,
        message: "offerId is required",
      });
    }

    if (!process.env.DUFFEL_API) {
      return res.status(500).json({
        success: false,
        message: "DUFFEL_API is not configured",
      });
    }

    const response = await fetch(
      `https://api.duffel.com/air/offers/${offerId}`,
      { headers: duffelHeaders() }
    );
    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status || 400).json({
        success: false,
        message: result?.errors?.[0]?.message || "Failed to fetch offer",
        error: result,
      });
    }

    return res.json({
      success: true,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch offer",
      error: error.message,
    });
  }
};
