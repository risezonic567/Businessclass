import express from "express";
import { submitQuote } from "../controllers/quoteController.js";

const router = express.Router();

router.post("/quote", submitQuote);

export default router;
