import React, { useState } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import How from './components/How';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import FlightResults from './components/FlightResults';
import HotelResults from './components/HotelResults';
import RandomCountry from './components/RandomCountry';

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
      <RandomCountry country={country} />
      <Contact />
    </div>
  )
  
}

export default App;
