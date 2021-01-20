import React from "react";
import Api from "../components/AmadeusApi";
import "../styles/header.css";
import AirportsList from "../airports.json";
import AutoComplete from "../components/AutoComplete";
import HotelApi from "../components/HotelApi";
import Results from "./Results";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

const Header = ({ setApiData, setHotelData }) => {
  const formHandler = async (e) => {
    e.preventDefault();
    let resultados = await Api(
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
    <Router>
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
                              <label className="label">From</label>
                              <AutoComplete data={AirportsList} />
                            </div>
                            <div id="match-list"></div>
                            <div className="col-2 input-group">
                              <label className="label">To</label>
                              <AutoComplete data={AirportsList} />
                            </div>
                            <div id="match-list"></div>
                          </div>
                          <div className="row row-space">
                            <div className="col-2 input-group">
                              <label className="label">Depart</label>
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
                              <label className="label">Return</label>
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
                              <Link to="/results">
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
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Switch>
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
};

export default Header;
