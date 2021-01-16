import React, { useState } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import How from './components/How';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import FlightResults from './components/FlightResults';
import HotelResults from './components/HotelResults';

function App () {
  const [apiData, setApiData] = useState (null);
  const [hotelData, setHotelData] = useState (null);

  return (
    <div>
      <Navigation />
      <Header apiData={apiData} setApiData={setApiData} hotelData={hotelData} setHotelData={setHotelData}/>
      <FlightResults apiData={apiData} />
      <HotelResults hotelData={hotelData} />
      <About />
      <How />
      <Destinations />
      <Contact />
    </div>
  )
  
}

export default App;
