import React from "react";
import "../styles/destinations.css";
import CountriesList from "../countries.json";
import "../styles/countries.css";

const Destinations = ({ setCountry }) => {
  const PaisRandom = () => {
    let indice = Math.floor(Math.random() * CountriesList.length);
    let countryName = CountriesList[indice];

    setCountry(countryName.name);
  };

  return (
    <div id="destinations" className="text-center">
      <div className="container paddingtop2">
        <div className="section-title">
          <h2>Destinations</h2>
          <p>Want to travel but don't know where to go?</p>
          <p>
            Allow this random destination generator to decide your fate. What
            could possibly go wrong?
          </p>
        </div>
        <div>
          <button className="botao" onClick={PaisRandom}>
            Generate my destination
          </button>
        </div>
      </div>
    </div>
  );
};
export default Destinations;
