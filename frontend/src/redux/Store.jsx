import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./FlightSlice";
import offerReducer from "./FlightOffers";

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    offer: offerReducer,
  },
});

export default store;
