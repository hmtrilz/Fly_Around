import React from 'react';
import moment from 'moment';


const FlightResultsItem = ({fetchInitialData}) => {
    return(
        <>
        {fetchInitialData && (
            fetchInitialData.map((resultado) => (
                <div>
	                <div>
		                <div className="flightitem">
                            <h4>{resultado.validatingAirlineCodes[0]} Airline</h4>

                            <h2>Departure Flight</h2>
                            <h1>{resultado.itineraries[0].segments[0].departure.iataCode} ➔ {resultado.itineraries[1].segments[0].departure.iataCode}</h1>
                            <h6>Departure: {moment(resultado.itineraries[0].segments[0].arrival.at).format('DD/MM/YYYY   h:mm a')}</h6>
                            <h4>Flight duration {resultado.itineraries[0].duration}</h4>
                            <h4>{resultado.itineraries[0].segments.length - 1} Scale(s)</h4>
                            
                            
                            <h2 className="espaco">Return Flight</h2>
                            <h1>{resultado.itineraries[1].segments[0].departure.iataCode} ➔ {resultado.itineraries[0].segments[0].departure.iataCode}</h1>
                            <h6>Departure: {moment(resultado.itineraries[1].segments[0].arrival.at).format('DD/MM/YYYY   h:mm a')}</h6>
                            <h4>Flight duration {resultado.itineraries[1].duration}</h4>
                            <h4>{resultado.itineraries[1].segments.length - 1} Scale(s)</h4>

                        </div>
                        <div>
                            <h5>Read before booking</h5>
                            <p>The prices displayed always include an estimate of the mandatory fees and charges, but always remember to check ALL information regarding tickets, final prices and terms and conditions on the booking website before proceeding with them.</p>
                            <p><b>Check extra fees</b></p>
                            <p>Some airlines / travel agencies charge extra fees for luggage, insurance or use of credit cards and include a service fee. <a href="https://www.skyscanner.pt/airlinefees">Check operator fees.</a></p>
                            <p><b>Check terms and conditions for travelers between 12 and 16 years old.</b></p>
                            <p>Restrictions may be placed on smaller passengers traveling alone.</p>
                        </div>
                        <div>
                            <h6>Only {resultado.numberOfBookableSeats} seats available!</h6>
                            <button className="btn">Buy</button>
                        </div>
                    </div>
                </div>))
            )}
        </>
    )
}

export default FlightResultsItem;