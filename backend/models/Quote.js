import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema(
  {
    type: { type: String, default: "adult" },
    firstName: { type: String, default: "" },
    middleName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    gender: { type: String, default: "" },
    dob: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    nationality: { type: String, default: "" },
    passportNumber: { type: String, default: "" },
    passportExpiry: { type: String, default: "" },
    passportCountry: { type: String, default: "" },
  },
  { _id: false }
);

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, index: true },
    phone: { type: String, trim: true, required: true },
    message: { type: String, trim: true, default: "" },
    offerId: { type: String, required: true },
    airline: { type: String, default: "" },
    route: { type: String, default: "" },
    departDate: { type: String, default: "" },
    returnDate: { type: String, default: "" },
    cabin: { type: String, default: "" },
    price: { type: String, default: "" },
    currency: { type: String, default: "USD" },
    passengers: { type: [passengerSchema], default: [] },
    offerSnapshot: { type: Object, default: {} },
  },
  { timestamps: true }
);

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
