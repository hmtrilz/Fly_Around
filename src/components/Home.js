import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import How from "./How";
import Destinations from "./Destinations";
import Contact from "./Contact";
import ImageApi from './ImageApi';
import FlightResults from "./FlightResults";
import HotelResults from "./HotelResults";

function Home({ apiData, setApiData }) {
  const [hotelData, setHotelData] = useState(null);
  const [country, setCountry] = useState();

  return (
    <div>
      <Navigation />
      <Header setApiData={setApiData} setHotelData={setHotelData} />
      <FlightResults apiData={apiData} />
      <HotelResults hotelData={hotelData} />
      <About />
      <How />
      <Destinations setCountry={setCountry} />
      <ImageApi country={country} />
      <Contact />
    </div>
  );
}

export default Home;
