import React, { Component } from "react";
import '../styles/header.css';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>

                   {/*FORMULÁRIO DE PESQUISA*/}

                   <div className="wrapper wrapper--w900">
                    <div className="card card-6">
                      <div className="card-body">
                        <form form method="POST" action="#">
                          <div className='row row-space'>
                            <div className="col-2">
                              <div className="input-group">
                                <label className="label">From</label>
                                <input className="input--style-1" onChange={this.handleChange} name='from' type="text" placeholder="City, Region or Airport" required="required"/>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="input-group">
                                <label className="label">To</label>
                                <input className="input--style-1" onChange={this.handleChange} name='to' type="text" placeholder="City, Region or Airport" required="required"/>
                              </div>
                            </div>
                          </div>
                          <div className='row row-space'>
                            <div className="col-2">
                              <div className="input-group">
                                <label className="label">Depart</label>
                                <input className="input--style-1" onChange={this.handleChange} name='depart' type="date" placeholder="DD/MM/YYYY" id="input-start"/>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="input-group">
                                <label className="label">Return</label>
                                <input className="input--style-1" onChange={this.handleChange} name='return' type="date" placeholder="DD/MM/YYYY" id="input-end"/>
                              </div>
                            </div>
                          </div>
                          <div className="row row-space">
                            <div className="col-2">
                              <button className="btn-submit m-b-0" type="submit">Search</button>
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
}

export default Header;
