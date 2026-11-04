import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    if (!process.env.MONGO_URL) {
      console.warn("MONGO_URL missing — quote save will fail until configured");
      return;
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};

export default dbconnect;
