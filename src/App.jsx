import React, { useState } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
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
      <Services />
      <Destinations />
      <Contact />
    </div>
  )
  
}

export default App;
