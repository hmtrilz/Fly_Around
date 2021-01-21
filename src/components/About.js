  
import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/travel.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  When we started, we set out to do things differently. We wanted
                  to show all flight options in one place, creating a simple
                  alternative to the confusing sites that make travel feel like
                  hard work. Now we are dedicated to making travel as simple as
                  possible, we help each and every one of them find the best
                  options across flights and hotels to book the perfect trip.
                </p>
                <p>But we’re not stopping there.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default About;
