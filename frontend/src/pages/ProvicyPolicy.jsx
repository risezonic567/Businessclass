import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'
export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Business Class Flights</title>
        <meta name="description" content="Read the Privacy Policy of Business Class Flights to understand how we collect, protect, and use your personal and payment information securely."/>
        <link rel="canonical" href="https://www.business-classflights.com/privacy-policy" />
      </Helmet>
      <section className="container" style={{ marginTop: "100px" }}>
        <div className="px-4 sm:px-6 lg:px-20 pt-6">
          <p className="text-sm text-gray-500">
            <Link to="/" className="hover:underline text-gray-600">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </p>
        </div>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Privacy Policy – Business Class Flights
            </h1>

            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                Business Class Flights (also referred to as "Company," "we,"
                "our," or "us") values your right to privacy and is sincere
                about keeping your private information safe and secure. This
                Privacy Policy explains how we collect, use, store, and share
                your information when you visit our website, request a quote,
                make a reservation, or contact our customer service.
              </p>
              <p className="text-gray-700 mt-3">
                By accessing or using our website or services, you acknowledge
                that you have read and understood this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                2. Information We Collect
              </h2>
              <h3 className="font-medium mt-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing address</li>
                <li>Travel details</li>
                <li>Passport details (if required)</li>
                <li>Payment information</li>
              </ul>

              <h3 className="font-medium mt-4">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Cookies and tracking technologies</li>
                <li>Website usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Booking flights</li>
                <li>Communicating with you</li>
                <li>Providing customer support</li>
                <li>Processing payment transactions</li>
                <li>Preventing fraud</li>
                <li>Enhancing website functionality</li>
                <li>Sending promotions (if opted in)</li>
                <li>Meeting legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                4. Sharing of Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Airlines</li>
                <li>Global Distribution Systems</li>
                <li>Travel consolidators</li>
                <li>Credit card processors</li>
                <li>Fraud detection providers</li>
                <li>Law enforcement agencies (when required)</li>
              </ul>
              <p className="text-gray-700 mt-3 font-medium">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                5. Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-700">
                We use cookies for website functionality, analytics, marketing,
                and improving user experience. You may disable cookies in your
                browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>SSL encryption</li>
                <li>Secure payment gateways</li>
                <li>Restricted employee access</li>
                <li>Fraud detection systems</li>
              </ul>
              <p className="text-gray-700 mt-3">
                However, no system can guarantee 100% security over the
                Internet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
              <p className="text-gray-700">
                We retain your information only as long as required to complete
                transactions, meet legal requirements, resolve disputes, and
                enforce agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Request access to your data</li>
                <li>Request correction</li>
                <li>Request deletion</li>
                <li>Opt out of marketing emails</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Contact us at:{" "}
                <a
                  href="mailto:info@businessclassflights.com"
                  className="text-blue-600 underline"
                >
                  info@businessclassflights.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                9. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are
                not responsible for their privacy practices and recommend
                reviewing their policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                10. Updates to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a new effective date. Continued
                use of our services implies acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
