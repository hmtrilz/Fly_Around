<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import How from './components/How';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import FlightResults from './components/FlightResults';
import HotelResults from './components/HotelResults';
import DestinationsItem from './components/DestinationsItem';
import BingApi from './components/BingApi';

function App () {
  const [apiData, setApiData] = useState (null);
  const [hotelData, setHotelData] = useState (null);
  const [country, setCountry] = useState ();
>>>>>>> parent of 8d9120d... router

  return (
    <div>
      <Navigation />
<<<<<<< HEAD
      <Header setApiData={setApiData} setHotelData={setHotelData} />
=======
      <Header setApiData={setApiData} setHotelData={setHotelData}/>
>>>>>>> parent of 8d9120d... router
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
