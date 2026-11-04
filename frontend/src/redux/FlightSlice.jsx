import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../config/api";

export const fetchFlights = createAsyncThunk(
  "flights/search",
  async ({ payload, page = 1, limit = 20, filters = {} }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        page,
        limit,
        airlines: filters.airlines?.join(",") || "",
        stops: filters.stops?.join(",") || "",
        minPrice: filters.minPrice ?? 0,
        maxPrice: filters.maxPrice ?? 1000000,
        cabin_class: filters.cabin_class?.join(",") || "",
        refundableOnly: filters.refundableOnly || "",
        wifiOnly: filters.wifiOnly || "",
        layovers: filters.layovers?.join(",") || "",
        time: filters.time?.join(",") || "",
      });

      const resp = await fetch(`${apiUrl("/api/flights")}?${query}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const flightData = await resp.json();
      if (!resp.ok) {
        return rejectWithValue(flightData?.message || "Flight fetch failed");
      }
      return flightData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const flightSlice = createSlice({
  name: "flight-search",
  initialState: {
    offers: [],
    pagination: null,
    filtersData: { cabinClasses: [], airlines: [], layovers: [] },
    lastSearch: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLastSearch(state, action) {
      state.lastSearch = action.payload;
    },
    clearFlights(state) {
      state.offers = [];
      state.pagination = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload?.data?.offers || [];
        state.pagination = action.payload?.pagination || null;
        state.filtersData = action.payload?.filtersData || {
          cabinClasses: [],
          airlines: [],
          layovers: [],
        };
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLastSearch, clearFlights } = flightSlice.actions;
export default flightSlice.reducer;
