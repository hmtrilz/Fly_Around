import React, { useState } from 'react'
import FlightResults from './FlightResults';
import HotelResults from './HotelResults';


function Results () {
    const [apiData, setApiData] = useState (null);
    const [hotelData, setHotelData] = useState (null);
 
  
    return (
      <div>
        <FlightResults apiData={apiData} />
        <HotelResults hotelData={hotelData} />
      </div>
    )
    
  }
  
  export default Results;
  