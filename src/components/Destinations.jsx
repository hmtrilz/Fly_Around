import React, { useState } from "react";
import "../styles/destinations.css";
import CountriesList from '../countries.json';

const Destinations = ({setCountry}) => {
  const [image, setImage] = useState ();

  const PaisRandom = () => {
    let indice = Math.floor(Math.random()*CountriesList.length);
    let countryName = CountriesList[indice] ;

    setCountry(countryName.name);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Destinations</h2>
          <p>Do you want some suggestions? Find out the best countries to visit</p>
        </div>
        <div>
          <button className="botao" onClick={PaisRandom}>Random place</button>
        </div>
      </div>
    </div>
  );
}
export default Destinations;
