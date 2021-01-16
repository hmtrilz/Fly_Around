import React from "react";
import Api from './AmadeusApi'
import '../styles/header.css';

const Header = ({apiData, setApiData}) => {
  const formHandler = async e => {
    e.preventDefault();
    let resultados = await Api (e.target.form[0].value, e.target.form[1].value, e.target.form[2].value, e.target.form[3].value);
    setApiData (resultados);
  }

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>What's next?<span></span></h1>
                <p>Find the cheapest flights and hotels and take off!</p>

                  {/*FORMULÁRIO DE PESQUISA*/}

                  <div className="wrapper wrapper--w900">
                  <div className="card card-6">
                    <div className="card-body">
                      <form form method="POST" action="#">
                        <div className='row row-space'>
                          <div className="col-2">
                            <div className="input-group">
                              <label className="label">From</label>
                              <input className="input--style-1" name='from' type="text" placeholder="City" required="required"/>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="input-group">
                              <label className="label">To</label>
                              <input className="input--style-1" name='to' type="text" placeholder="City" required="required"/>
                            </div>
                          </div>
                        </div>
                        <div className='row row-space'>
                          <div className="col-2">
                            <div className="input-group">
                              <label className="label">Depart</label>
                              <input className="input--style-1" name='depart' type="date" placeholder="DD/MM/YYYY" id="input-start" required="required"/>
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="input-group">
                              <label className="label">Return</label>
                              <input className="input--style-1" name='return' type="date" placeholder="DD/MM/YYYY" id="input-end" required="required"/>
                            </div>
                          </div>
                        </div>
                        <div className="row row-space">
                          <div className="col-2">
                            <button onClick={formHandler} className="btn-submit m-b-0" type="submit">Search</button>
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
  );
}

export default Header;
