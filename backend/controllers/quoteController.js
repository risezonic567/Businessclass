import Joi from "joi";
import Quote from "../models/Quote.js";
import { getMailTransport } from "../utils/nodemailer.js";

const passengerValidation = Joi.object({
  type: Joi.string().allow(""),
  firstName: Joi.string().allow(""),
  middleName: Joi.string().allow(""),
  lastName: Joi.string().allow(""),
  gender: Joi.string().allow(""),
  dob: Joi.string().allow(""),
  phone: Joi.string().allow(""),
  email: Joi.string().allow(""),
  nationality: Joi.string().allow(""),
  passportNumber: Joi.string().allow(""),
  passportExpiry: Joi.string().allow(""),
  passportCountry: Joi.string().allow(""),
}).unknown(true);

const quoteValidation = Joi.object({
  name: Joi.string().min(2).max(80).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(20).required(),
  message: Joi.string().allow("").max(1000),
  offerId: Joi.string().required(),
  airline: Joi.string().allow(""),
  route: Joi.string().allow(""),
  departDate: Joi.string().allow(""),
  returnDate: Joi.string().allow(""),
  cabin: Joi.string().allow(""),
  price: Joi.string().allow(""),
  currency: Joi.string().allow(""),
  passengers: Joi.array().items(passengerValidation).optional(),
  offerSnapshot: Joi.object().unknown(true).optional(),
});

export const submitQuote = async (req, res) => {
  try {
    const { error, value } = quoteValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const quote = await Quote.create(value);

    const teamTo = process.env.QUOTE_TO_EMAIL || process.env.USER_EMAIL;
    const fromEmail = (process.env.USER_EMAIL || "").trim();
    const pass = (process.env.EMAIL_PASS_ID || "").replace(/\s+/g, "").trim();

    if (fromEmail && pass && teamTo) {
      const passengerRows = (value.passengers || [])
        .map(
          (p, i) =>
            `<tr>
              <td>${i + 1}</td>
              <td>${p.type || "adult"}</td>
              <td>${[p.firstName, p.middleName, p.lastName].filter(Boolean).join(" ")}</td>
              <td>${p.gender || "-"}</td>
              <td>${p.dob || "-"}</td>
              <td>${p.phone || "-"}</td>
              <td>${p.email || "-"}</td>
              <td>${p.passportNumber || "-"}</td>
            </tr>`
        )
        .join("");

      const summary = `
        <h2>New Business Class Booking Request</h2>
        <p><b>Contact:</b> ${value.name}</p>
        <p><b>Email:</b> ${value.email}</p>
        <p><b>Phone:</b> ${value.phone}</p>
        <p><b>Offer ID:</b> ${value.offerId}</p>
        <p><b>Airline:</b> ${value.airline || "-"}</p>
        <p><b>Route:</b> ${value.route || "-"}</p>
        <p><b>Depart:</b> ${value.departDate || "-"}</p>
        <p><b>Return:</b> ${value.returnDate || "-"}</p>
        <p><b>Cabin:</b> ${value.cabin || "-"}</p>
        <p><b>Price:</b> ${value.currency || ""} ${value.price || "-"}</p>
        <p><b>Message:</b> ${value.message || "-"}</p>
        ${
          passengerRows
            ? `<h3>Passengers</h3>
               <table border="1" cellpadding="6" cellspacing="0">
                 <tr>
                   <th>#</th><th>Type</th><th>Name</th><th>Gender</th>
                   <th>DOB</th><th>Phone</th><th>Email</th><th>Passport</th>
                 </tr>
                 ${passengerRows}
               </table>`
            : ""
        }
      `;

      try {
        const transport = getMailTransport();
        await transport.sendMail({
          from: `"Business Class Flights" <${fromEmail}>`,
          to: teamTo,
          subject: `Booking request: ${value.route || value.offerId}`,
          html: summary,
        });

        await transport.sendMail({
          from: `"Business Class Flights" <${fromEmail}>`,
          to: value.email,
          subject: "We received your business class booking request",
          html: `
            <p>Hi ${value.name},</p>
            <p>Thanks for your booking request. Our team will review the selected fare and get back to you shortly.</p>
            <p><b>Route:</b> ${value.route || "-"}</p>
            <p><b>Fare shown:</b> ${value.currency || ""} ${value.price || "-"}</p>
            <p>Call us anytime at (866) 307-5957.</p>
          `,
        });
      } catch (mailErr) {
        console.error("Quote email failed:", mailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      status: true,
      message: "Booking request submitted successfully",
      data: { id: quote._id },
    });
  } catch (err) {
    console.error("Quote submit error:", err);
    return res.status(500).json({
      success: false,
      status: false,
      message: err.message || "Failed to submit quote",
    });
  }
};
