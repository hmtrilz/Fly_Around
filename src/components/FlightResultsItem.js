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
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={"/"}>
              <a className="navbar-brand page-scroll">Fly Around</a>
            </Link>
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
                    <div className="lines">
                      <p>Only {item.numberOfBookableSeats} seats available!</p>
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
