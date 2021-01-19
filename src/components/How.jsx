import React from "react";

function How() {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>How Fly Around works?</h2>
          <p>Follow these 3 simple steps and have a great experience!</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa fas fa-search"></i>
            <div className="service-desc">
              <h3>Search Form</h3>
              <p>Fill in the search form with cities, select a departure and a return date and submit</p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fas fa-plane"></i>
            <div className="service-desc">
              <h3>Flights & Hotels</h3>
              <p>Check the list of the best 5 flight offers and the latest and cheapest hotels</p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fas fa-globe"></i>
            <div className="service-desc">
              <h3>Random Destination</h3>
              <p>Don't know where to go?</p>
              <p>Try our random destination generator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
