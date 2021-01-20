import React, { useState } from "react";
import Navigation from "./pages/Navigation";
import Header from "./pages/Header";
import About from "./pages/About";
import How from "./pages//How";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import DestinationsItem from "./pages/DestinationsItem";
import BingApi from "./pages/BingApi";
import FlightResults from "./pages/FlightResults";
import HotelResults from "./pages/HotelResults";

function App() {
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

export default App;
