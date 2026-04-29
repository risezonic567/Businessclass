import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'
export default function TermsCondition() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Business Class Flights</title>
        <meta name="description" content="Review the Terms and Conditions of Business Class Flights covering booking policies, pricing, cancellations, refunds, and customer responsibilities."/>
        <link rel="canonical" href="https://www.business-classflights.com/term-condition" />
      </Helmet>
      <section className="container mx-auto" style={{ marginTop: "100px" }}>
        {/* Breadcrumb */}
        <div className="px-4 sm:px-6 lg:px-20 pt-6">
          <p className="text-sm text-gray-500">
            <Link to="/" className="hover:underline text-gray-600">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">
              Terms & Conditions
            </span>
          </p>
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Business class flights provider 'Business Class Flights' has
                defined specific terms and conditions related to your usage of
                our website, the services we provide, or assistance with booking
                a flight. By using this website in any way (requesting an
                estimate, completing a booking, etc.), you are agreeing to these
                terms and conditions and will be legally bound by them.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The first purpose of these terms is to outline each party’s
                rights, responsibilities, and obligations regarding the use of
                our website, our booking procedures, how we price our flights,
                how we will handle cancellations or refunds, our limitations of
                liability, and how disputes will be resolved. If you disagree
                with any portion of the terms outlined here, please do not use
                our website or services.
              </p>

              <p className="text-gray-700 leading-relaxed">
                As long as you continue to use our services, you have implied
                your acceptance of the terms and conditions described herein.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                2. Nature of Services
              </h2>

              <p className="text-gray-700 mb-3">
                Business Class Flights provides travel agency and consolidation
                services as an independent travel agency. Our service allows
                customers to book flights directly through the airlines.
              </p>

              <p className="text-gray-700">
                Business Class Flights is not an airline and is not liable for
                any airline operations.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">3. Pricing & Fares</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All airline prices are only valid if available.</li>
                <li>
                  The price of an airline ticket cannot be guaranteed until it
                  is booked.
                </li>
                <li>All tickets are subject to airline rules.</li>
                <li>
                  Promotional or discounted tickets may contain restrictions.
                </li>
                <li>
                  The exchange rate between currencies may impact the price of a
                  flight.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                4. Booking Confirmation
              </h2>
              <p className="text-gray-700 mb-2">
                Your booking can only be made after:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Full payment is made.</li>
                <li>Your ticket is issued.</li>
                <li>You have received a confirmation email.</li>
              </ul>
            </section>

            {/* 5 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">5. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  We accept every major credit or debit card and approved
                  payment method.
                </li>
                <li>
                  You agree to allow us to charge you the full amount when we
                  confirm your reservation.
                </li>
                <li>
                  If a transaction occurs and it's determined to be improper or
                  fraudulent, we will report it to the authorities.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                6. Changes & Cancellations
              </h2>
              <p className="text-gray-700">
                Airlines make all changes according to their respective
                policies. You may incur extra costs. You'll be liable for any
                fare differences.
              </p>
            </section>

            {/* 7 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">7. Refunds</h2>
              <p className="text-gray-700 mb-2">
                Whether or not your fare can be refunded will depend on the
                airline's fare rules.
              </p>
              <p className="text-gray-700 mb-2">
                Service fees are generally non-refundable, unless otherwise
                specified in writing.
              </p>
              <p className="text-gray-700">
                Refunds can take as long as 7-30 business days, depending on how
                long it takes the airline to process your refund request.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                8. Travel Documents
              </h2>
              <p className="text-gray-700 mb-2">
                The customer has the following responsibilities:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Valid Passports</li>
                <li>Visas</li>
                <li>Entry Requirements</li>
                <li>Health Documentation</li>
              </ul>
              <p className="text-gray-700 mt-3">
                We are not liable for a customer's denied boarding due to these
                issues.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                9. Airline Schedule Changes
              </h2>
              <p className="text-gray-700 mb-2">Airlines have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Change Schedules</li>
                <li>Cancel Flights</li>
                <li>Modify Aircraft</li>
              </ul>
              <p className="text-gray-700 mt-3">
                If an airline makes any of the changes listed above, we will
                assist with the coordination but are not responsible for the
                changes.
              </p>
            </section>

            {/* 10 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-2">
                We are not accountable for the following items:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Delayed flights</li>
                <li>Missed connecting flights</li>
                <li>Acts of God</li>
                <li>Restrictions by the government</li>
                <li>Interruptions to your travel plans</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Our liability is restricted to our service fees only.
              </p>
            </section>

            {/* 11 */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">11. Chargebacks</h2>
              <p className="text-gray-700">
                Customers must agree to contact us first before filing a
                chargeback. Fraudulent chargebacks may lead to legal action
                being taken against the customer.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions will be interpreted in accordance
                with all laws of the State of California (without reference to
                its conflict of law principles), and, therefore, any and all
                disputes, claims, or lawsuits arising from or related to your
                use of our website or any of our services will be exclusively
                subject to the jurisdiction of state and federal courts located
                in the State of California. Using our services means you agree
                to the jurisdiction of those courts and waive any objections to
                their venue or jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
