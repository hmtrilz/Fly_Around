import React from "react";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import "../styles/results.css";

const FlightResultsItem = ({ apiData }) => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[1];
  console.log(apiData);

  return (
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
            <Link to="/" className="linkazul">
            <a className="navbar-brand page-scroll" href="#page-top">
              Fly Around
            </a>{" "}
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              
              <li>
                <Link to="/" className="linkazul">
                  <a className="page-scroll" href="#page-top">
                    Go Back
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {apiData &&
        apiData
          .filter((item) => item.id === pathID)
          .map((item) => (
            <div className="margemtop">
              <div className="infovoo">
                <h1 className="white-text">
                  {item.itineraries[0].segments[0].departure.iataCode} ➔{" "}
                  {item.itineraries[1].segments[0].departure.iataCode}
                </h1>
                <h6 className="white-text">
                  {" "}
                  1 person | Round Trip | Economic Class
                </h6>
              </div>
              <div>
                {/* partida */}
                <div className="info">
                  <div id="flights" className="flightitem">
                    <h4>Outward Flight</h4>
                    <div className="flightbox">
                      <div className="course-preview">
                        <h3>
                          {item.itineraries[0].segments[0].departure.iataCode} ➔{" "}
                          {item.itineraries[1].segments[0].departure.iataCode}
                        </h3>{" "}
                        {/*primeiro certo */}
                        <h6>
                          {moment(
                            item.itineraries[0].segments[0].arrival.at
                          ).format("DD/MM/YYYY   h:mm a")}
                        </h6>
                      </div>
                      <div className="course-info">
                        <table2>
                          <tr>
                            <th className="pad2">Scale</th>
                            <th className="pad2">Duration</th>
                            <th className="pad2">Airline</th>
                          </tr>
                          <tr>
                            <td>{item.itineraries[0].segments.length - 1}</td>
                            <td>{item.itineraries[0].duration}</td>
                            <td>{item.validatingAirlineCodes[0]}</td>
                          </tr>
                        </table2>
                      </div>
                    </div>
                  </div>

                  {/* chegada */}
                  <div id="resultsitem" className="flightitem">
                    <h4>Return Flight</h4>
                    <div className="flightbox">
                      <div className="course-preview">
                        <h3>
                          {item.itineraries[1].segments[0].departure.iataCode} ➔{" "}
                          {item.itineraries[0].segments[0].departure.iataCode}
                        </h3>{" "}
                        {/*primeiro certo */}
                        <h6>
                          {moment(
                            item.itineraries[1].segments[0].arrival.at
                          ).format("DD/MM/YYYY   h:mm a")}
                        </h6>
                      </div>
                      <div className="course-info">
                        <table2>
                          <tr>
                            <th className="pad2">Scale</th>
                            <th className="pad2">Duration</th>
                            <th className="pad2">Airline</th>
                          </tr>
                          <tr>
                            <td> {item.itineraries[1].segments.length - 1}</td>
                            <td>{item.itineraries[1].duration}</td>
                            <td>{item.validatingAirlineCodes[0]}</td>
                          </tr>
                        </table2>
                      </div>
                    </div>
                  </div>
                  <div className="row-space">
                    <p className="price">{item.price.total}€</p>
                    <button className="btn-submit botaobuy" type="submit">
                        Book Flights
                      </button>        
                      <h6 className="seats">Only {item.numberOfBookableSeats} seats available!</h6>
                  </div>
                </div>
                {/* informations */}
                <div className="textarea">
                  <div className="column">
                    <div className="lines">
                      <p>
                        <b> Read before booking </b>
                      </p>
                    </div>
                    <div className="lines">
                      <p>
                        The prices displayed always include an estimate of the
                        mandatory fees and charges, but always remember to check
                        ALL information regarding tickets, final prices and
                        terms and conditions on the booking website before
                        proceeding with them.
                      </p>
                    </div>{" "}
                    <div className="lines">
                      <p>
                        <b>Check extra fees</b>
                      </p>
                    </div>
                    <div className="lines">
                      <p>
                        Some airlines / travel agencies charge extra fees for
                        luggage, insurance or use of credit cards and include a
                        service fee.{" "}
                        <a href="https://www.skyscanner.pt/airlinefees">
                          Check operator fees.
                        </a>
                      </p>
                    </div>
                    <div className="lines">
                      <p>
                        <b>
                          Check terms and conditions for travelers between 12
                          and 16 years old.
                        </b>
                      </p>
                    </div>
                    <div className="lines">
                      <p>
                        Restrictions may be placed on smaller passengers
                        traveling alone.
                      </p>
                    </div>
                  </div>
                  <div className="column2">
                    <ul>
                      <li className="lines2"> Face masks mandatory ✓ </li>
                      <li className="lines2"> Plane deep cleaned daily ✓</li>
                      <li className="lines2"> Flight crew wearing PPE ✓</li>
                      <li className="lines2"> Cleaning wipes provided ✓</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default FlightResultsItem;
