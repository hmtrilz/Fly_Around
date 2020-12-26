import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Destinations</h2>
            <p>
              Do you want some suggestions? Explore with us!
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/england.jpg"
                      title="England"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>England</h4>
                      </div>
                      <img
                        src="img/portfolio/england.jpg"
                        className="img-responsive"
                        alt="England"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/france.jpg"
                      title="france"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>France</h4>
                      </div>
                      <img
                        src="img/portfolio/france.jpg"
                        className="img-responsive"
                        alt="France"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/australia.jpg"
                      title="Australia"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Australia</h4>
                      </div>
                      <img
                        src="img/portfolio/australia.jpg"
                        className="img-responsive"
                        alt="Australia"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/italy.jpg"
                      title="Italy"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Italy</h4>
                      </div>
                      <img
                        src="img/portfolio/italy.jpg"
                        className="img-responsive"
                        alt="Italy"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/mexico.jpg"
                      title="Mexico"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Mexico</h4>
                      </div>
                      <img
                        src="img/portfolio/mexico.jpg"
                        className="img-responsive"
                        alt="Mexico"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/usa.jpg"
                      title="USA"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>USA</h4>
                      </div>
                      <img
                        src="img/portfolio/usa.jpg"
                        className="img-responsive"
                        alt="USA"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/portugal.jpg"
                      title="Portugal"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Portugal</h4>
                      </div>
                      <img
                        src="img/portfolio/portugal.jpg"
                        className="img-responsive"
                        alt="Portugal"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/brazil.jpg"
                      title="Brazil"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Brazil</h4>
                      </div>
                      <img
                        src="img/portfolio/brazil.jpg"
                        className="img-responsive"
                        alt="Brazil"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/spain.jpg"
                      title="Spain"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Spain</h4>
                      </div>
                      <img
                        src="img/portfolio/spain.jpg"
                        className="img-responsive"
                        alt="Spain"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
