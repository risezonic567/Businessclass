import React from "react";
import {
  Phone,
  Mail,
  Calendar,
  XCircle,
  RefreshCcw,
  Briefcase,
} from "lucide-react";


export default function Support() {
  return (
    <>
      <Helmet>
        <title>Travel Support Services | Business Class Assistance</title>
        <meta name="description" content="Access professional Travel Support Services for booking changes, cancellations, upgrades, and airline assistance with expert customer care and guidance."/>
        <link rel="canonical" href="https://www.business-classflights.com/support" />
      </Helmet>
      {/* Main content with container */}
      <div className="container mt-5" style={{paddingTop : "50px"}}>
        {/* Page Header */}
        <div className="mb-5 text-center">
          <h1 className="fw-bold">Flight Support</h1>
          <p className="text-muted">
            Manage your bookings, change travel dates, cancel flights or get help
            from our support team.
          </p>
        </div>

        {/* Support Options */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <Calendar size={26} className="text-primary" />
                <h5 className="mb-0">Reschedule Flight</h5>
              </div>
              <p className="text-muted small">
                Change your travel date or time. Fare difference and airline
                charges may apply.
              </p>
              <button className="btn btn-outline-primary btn-sm">
                Request Date Change
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <XCircle size={26} className="text-danger" />
                <h5 className="mb-0">Cancel Flight</h5>
              </div>
              <p className="text-muted small">
                Cancel your ticket and get refund as per airline policy.
              </p>
              <button className="btn btn-outline-danger btn-sm">
                Cancel Booking
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <RefreshCcw size={26} className="text-warning" />
                <h5 className="mb-0">Refund Status</h5>
              </div>
              <p className="text-muted small">
                Check refund progress after cancellation or flight change.
              </p>
              <button className="btn btn-outline-warning btn-sm">
                Track Refund
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <Briefcase size={26} className="text-success" />
                <h5 className="mb-0">Name, Seat & Baggage</h5>
              </div>
              <p className="text-muted small">
                Need to correct passenger name, add baggage or change seat?
              </p>
              <button className="btn btn-outline-success btn-sm">
                Get Assistance
              </button>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-5 border-top pt-4 text-center">
          <h5 className="fw-semibold mb-2">Need Immediate Help?</h5>
          <p className="text-muted small mb-3">
            Our travel experts are available 24×7 to help with urgent booking
            issues.
          </p>

          <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
            <a
              href="tel:(866)307-5957"
              className="btn  d-flex align-items-center gap-2"
              style={{ background: "linear-gradient(135deg,#ff3c3c,#ff8c00)" }}
            >
              <Phone size={18} /> (866)307-5957
            </a>

            <a
              href="mailto:support@businessclassticket.com"
              className="btn btn-outline-secondary d-flex align-items-center gap-2"
            >
              <Mail size={18} /> support@businessclassticket.com
            </a>
          </div>
        </div>
      </div>

      
    </>
  );
}
