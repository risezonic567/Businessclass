import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import dbconnect from "./config/db.js";
import flightRoutes from "./routes/flightsRoute.js";
import quoteRoutes from "./routes/quoteRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(compression());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:8888",
      "https://www.business-classflights.com",
      "https://business-classflights.com",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "businessclass-backend" });
});

app.use("/api", flightRoutes);
app.use("/enquiry", quoteRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: err.message || "Server error" });
});

await dbconnect();

app.listen(PORT, () => {
  console.log(`Businessclass backend running on port ${PORT}`);
});
