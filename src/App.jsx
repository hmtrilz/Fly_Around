import React, { useState } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import FlightResults from './components/FlightResults'

function App () {
  const [apiData, setApiData] = useState (null);

  return (
    <div>
      <Navigation />
      <Header apiData={apiData} setApiData={setApiData} />
      <FlightResults apiData={apiData} />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  )
  
}

export default App;
