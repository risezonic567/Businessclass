# Business Class Flights — lightweight backend

Duffel search + offer detail + quote enquiry. No Razorpay / OAuth / Twilio / Cloudinary.

## Endpoints

- `GET /health`
- `GET /api/flight/location?query=`
- `POST /api/flights`
- `GET /api/get-offers/:offerId`
- `POST /enquiry/quote`

## Local

1. Copy `.env.example` → `.env` and set `DUFFEL_API`, Mongo, optional SMTP.
2. `npm install && npm run dev`
3. Default port `5000` (docker maps host `5011:5000`).

## Docker

From repo root:

```bash
docker compose up -d --build
```

Set `MONGO_URL=mongodb://mongo:27017/businessclass` in `backend/.env` for compose.
