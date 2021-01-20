import React from "react";
import "../styles/results.css";
import moment from "moment";
import { Link } from "react-router-dom";

const FlightResults = ({ apiData, loading }) => {
  console.log(apiData);
  console.log(loading);

  return (
    <div>
      {apiData &&
        apiData.map((resultado) => (
          <div id="flights" className="corpo">
            <div className="course">
              <div className="course-preview">
                <h3>
                  {resultado.itineraries[0].segments[0].departure.iataCode} ➔{" "}
                  {resultado.itineraries[1].segments[0].departure.iataCode}
                </h3>{" "}
                {/*primeiro certo */}
                <h6>
                  {moment(
                    resultado.itineraries[0].segments[0].arrival.at
                  ).format("DD/MM/YYYY   h:mm a")}
                </h6>
                <h3 className="espaco">
                  {resultado.itineraries[1].segments[0].departure.iataCode} ➔{" "}
                  {resultado.itineraries[0].segments[0].departure.iataCode}
                </h3>
                <h6>
                  {moment(
                    resultado.itineraries[1].segments[0].arrival.at
                  ).format("DD/MM/YYYY   h:mm a")}
                </h6>
              </div>
              <div className="course-info">
                <table>
                  <tr>
                    <th className="pad2">Scale</th>
                    <th className="pad2">Duration</th>
                    <th className="pad2">Airline</th>
                  </tr>
                  <tr>
                    <td>{resultado.itineraries[0].segments.length - 1}</td>
                    <td>{resultado.itineraries[0].duration}</td>
                    <td>{resultado.validatingAirlineCodes[0]}</td>
                  </tr>
                  <tr>
                    <td className="pad">
                      {resultado.itineraries[1].segments.length - 1}
                    </td>
                    <td className="pad">{resultado.itineraries[1].duration}</td>
                  </tr>
                </table>
                <div className="mover">
                  <p className="price">{resultado.price.total}€</p>
                  <Link to={`/${resultado.id}`}>
                    <button className="btn">More info</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FlightResults;
