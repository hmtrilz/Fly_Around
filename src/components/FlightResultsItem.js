import React from 'react';
import moment from 'moment';
import { Link, useLocation } from "react-router-dom";

const FlightResultsItem = ({apiData}) => {
    const location = useLocation();
    const pathID = location.pathname.split("/")[1];

    console.log(location);
    console.log(pathID);

    console.log("ola");
    console.log(apiData);
    return(
        <div>
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        >
                        {" "}
                            <span className="sr-only">Toggle navigation</span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                        </button>
                        <Link to={"/"}>
                            <a className="navbar-brand page-scroll">
                            Fly Around
                            </a>{" "}
                        </Link>
                    </div>
                </div>
            </nav>
            

            {apiData && (
                apiData.filter((item) => item.id === pathID).map((item) => (
                    <div>
                        <div>
                            <div className="flightitem">
                                <h4>{item.validatingAirlineCodes[0]} Airline</h4>

                                <h2>Departure Flight</h2>
                                <h1>{item.itineraries[0].segments[0].departure.iataCode} ➔ {item.itineraries[1].segments[0].departure.iataCode}</h1>
                                <h6>Departure: {moment(item.itineraries[0].segments[0].arrival.at).format('DD/MM/YYYY   h:mm a')}</h6>
                                <h4>Flight duration {item.itineraries[0].duration}</h4>
                                <h4>{item.itineraries[0].segments.length - 1} Scale(s)</h4>
                                
                                
                                <h2 className="espaco">Return Flight</h2>
                                <h1>{item.itineraries[1].segments[0].departure.iataCode} ➔ {item.itineraries[0].segments[0].departure.iataCode}</h1>
                                <h6>Departure: {moment(item.itineraries[1].segments[0].arrival.at).format('DD/MM/YYYY   h:mm a')}</h6>
                                <h4>Flight duration {item.itineraries[1].duration}</h4>
                                <h4>{item.itineraries[1].segments.length - 1} Scale(s)</h4>

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
                                <h6>Only {item.numberOfBookableSeats} seats available!</h6>
                                <button className="btn">Book Flight</button>
                            </div>
                        </div>
                    </div>)
                )
            )}
        </div>
    )
}

export default FlightResultsItem;