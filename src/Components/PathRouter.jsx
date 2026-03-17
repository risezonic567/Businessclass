import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Support from "../pages/Support";
import MyTrip from "../pages/MyTrip";
import Deals from "../pages/Deals";
// import ContactUs from "./ContactUs";
import PrivacyPolicy from '../pages/ProvicyPolicy'
import FAQ from "./FAQ";
import AboutUs from "../pages/AboutUs";
import TermsCondition from '../pages/TermsCondition'
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";

export default function PathRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-deals" element={<Deals />} />
        <Route path="/support" element={<Support />} />
        <Route path="/flight-status" element={<MyTrip />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/term-condition" element={<TermsCondition/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}
