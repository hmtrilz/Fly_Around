import React from "react";

function Testimonials() {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          <div className="testimonial">
            <div className="testimonial-image">
              <img src="../../public/img/testimonials/01.jpg" alt="" />
            </div>
            <div className="testimonial-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="testimonial-meta">
                <p>Fofinha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
