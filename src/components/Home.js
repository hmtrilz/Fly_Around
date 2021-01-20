import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import How from "./How";
import Destinations from "./Destinations";
import Contact from "./Contact";
import DestinationsItem from "./DestinationsItem";
import BingApi from "./BingApi";
import FlightResults from "./FlightResults";
import HotelResults from "./HotelResults";

function Home() {
  const [apiData, setApiData] = useState(null);
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
      <DestinationsItem country={country} />
      <BingApi country={country} />
      <Contact />
    </div>
  );
}

export default Home;
