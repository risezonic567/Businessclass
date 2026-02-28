import React from "react";
import Banner from "../Components/Banner";
import CustomerTrust from "../Components/CustomerTrust";
import AutoPlay from "../Components/AutoPlay";
import FAQ from "../Components/FAQ";
import ContactUs from "../Components/ContactUs";
import SocialMediaLinks from "../../SocialMediaLinks";
import PolularDestination from "../Components/PolularDestination";
import Discound from "../Components/Discound";
import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Business Class Flights | Discount International Premium Tickets</title>
        <meta name="description" content="Book premium Business Class Flights at discounted prices worldwide. Save up to 40% on international tickets with expert support and secure booking assistance."/>
        <link rel="canonical" href="https://www.business-classflights.com/" />
      </Helmet>
      <Banner />
      <CustomerTrust />
      <ContactUs />
      {/* <SocialMediaLinks /> */}
      <Discound />
      <PolularDestination />
      <FAQ />
      <AutoPlay />
      
    </>
  );
}
