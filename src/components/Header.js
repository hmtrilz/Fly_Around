import React, {useState} from "react";
import FlightApi from "./FlightApi";
import "../styles/header.css";
import AirportsList from "../airports.json";
import AutoComplete from "./AutoComplete";
import HotelApi from "./HotelApi";


const Header = ({ setApiData, setHotelData }) => {
  
  const formHandler = async (e) => {
    e.preventDefault();
    let resultados = await FlightApi(
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value
    );
    setApiData(resultados);
  };

  const formHandler2 = async (e) => {
    e.preventDefault();
    let hotel = await HotelApi(
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value
    );
    console.log(hotel);
    setHotelData(hotel);
  };

  return (
   
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    What's next?<span></span>
                  </h1>
                  <p style={{ fontWeight: "normal" }}>
                    Find the cheapest flights and hotels and take off!
                  </p>
                  {/*FORMULÁRIO DE PESQUISA*/}
                  <div className="wrapper wrapper--w900">
                    <div className="card card-6">
                      <div className="card-body">
                        <form action="#">
                          <div className="row row-space">
                            <div className="col-2 input-group">
                              <label className="label">Origin</label>
                              <AutoComplete data={AirportsList} />
                            </div>
                            <div id="match-list"></div>
                            <div className="col-2 input-group">
                              <label className="label">Destination</label>
                              <AutoComplete data={AirportsList} />
                            </div>
                            <div id="match-list"></div>
                          </div>
                          <div className="row row-space">
                            <div className="col-2 input-group">
                              <label className="label">Depart / Check-In</label>
                              <input
                                className="input--style-1"
                                name="depart"
                                type="date"
                                placeholder="DD/MM/YYYY"
                                id="input-start"
                                required="required"
                              />
                            </div>
                            <div className="col-2 input-group">
                              <label className="label">Return / Check-Out</label>
                              <input
                                className="input--style-1"
                                name="return"
                                type="date"
                                placeholder="DD/MM/YYYY"
                                id="input-end"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="row row-space">
                            <div className="col-2">
                              <button
                                onClick={(e) => {
                                  formHandler(e);
                                  formHandler2(e);
                                }}
                                className="btn-submit m-b-0"
                                type="submit"
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
