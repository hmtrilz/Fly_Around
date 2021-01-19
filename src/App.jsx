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

  return (
    <div>
      <Navigation />
      <Header setApiData={setApiData} setHotelData={setHotelData}/>
      <FlightResults apiData={apiData} />
      <HotelResults hotelData={hotelData} />
      <About />
      <How />
      <Destinations setCountry={setCountry} />
      <DestinationsItem country={country}/>
      <BingApi country={country} />
      <Contact />
    </div>
  )
  
}

export default App;
