import React, { Component } from "react";

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
                  <div
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    <form onSubmit={this.handleSubmit} className= 'form'>
                    <div className='field'>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
                  </div>{" "}
                  <div
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    <form onSubmit={this.handleSubmit} className= 'form'>
                    <div className='field text-dark'>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
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
