import nodemailer from "nodemailer";

/** Build transporter at send-time so ESM import order can't wipe env credentials. */
export function getMailTransport() {
  const user = (process.env.USER_EMAIL || "").trim();
  const pass = (process.env.EMAIL_PASS_ID || "").replace(/\s+/g, "").trim();

  if (!user || !pass) {
    throw new Error("Missing credentials for PLAIN");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export default getMailTransport;
