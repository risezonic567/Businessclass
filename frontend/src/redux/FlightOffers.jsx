import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../config/api";

export const flightOffer = createAsyncThunk(
  "offer/flight",
  async (offerId, { rejectWithValue }) => {
    try {
      if (!offerId) throw new Error("Offer ID not found");
      const res = await fetch(apiUrl(`/api/get-offers/${offerId}`), {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) {
        return rejectWithValue(data?.message || "Failed to load offer");
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const offerSlice = createSlice({
  name: "offerSlice",
  initialState: {
    items: null,
    error: null,
    loading: false,
  },
  reducers: {
    clearOffer(state) {
      state.items = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(flightOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(flightOffer.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(flightOffer.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearOffer } = offerSlice.actions;
export default offerSlice.reducer;
