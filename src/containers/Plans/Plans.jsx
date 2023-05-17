import React from 'react';
import "./Plans.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Plans = () => {
  return (
    <section className="w3l-pricing-7-main py-5" id="pricing">
      <div className="pricing-7-sec pt-lg-4 pt-md-3 pb-lg-5 pb-md-4">
        <div className="container pricing-grid">
          <div className="title-content text-center">
            <h6 className="title-subhny three mb-2"><span>Our Plans</span></h6>
            <h3 className="title-w3l mb-5">Affordable Packages</h3>
          </div>

          <div className="pricing-sec-7 pt-lg-3">
            <div className="pricing-gd-left pric-7-1">
              <div className="w3l-pricing-7">
                <div className="w3l-pricing-7-top">
                  <h6 className="one-light">Free Package</h6>

                  <h4><label>$</label>0<span>/month</span></h4>
                </div>
                <div className="w3l-pricing-7-bottom">
                  <div className="w3l-pricing-7-bottom-bottom">
                    <ul className="links">
                      <li>
                        <p className="lists">5 Dog Walk </p>
                      </li>
                      <li>
                        <p className="lists line-through">3 Vet Visit </p>
                      </li>
                      <li>
                        <p className="lists line-through">3 Pet Spa</p>
                      </li>
                      <li>
                        <p className="lists line-through">Free Supports</p>
                      </li>
                      <li>
                        <p className="lists line-through">Customer Support</p>
                      </li>

                    </ul>
                  </div>
                  <div className="buy-button">
                    <a className="btn-outline-border btn-style" href="#buy">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-gd-left pric-7 active">
              <div className="w3l-pricing-7">
                <div className="w3l-pricing-7-top">
                  <h5>Save 10% </h5>
                  <h6>Standard Package</h6>

                  <h4><label>$</label>39<span>/month</span></h4>
                </div>
                <div className="w3l-pricing-7-bottom">
                  <div className="w3l-pricing-7-bottom-bottom">
                    <ul className="links">
                      <li>
                        <p className="lists">5 Dog Walk </p>
                      </li>
                      <li>
                        <p className="lists line-through">3 Vet Visit </p>
                      </li>
                      <li>
                        <p className="lists line-through">3 Pet Spa</p>
                      </li>
                      <li>
                        <p className="lists line-through">Free Supports</p>
                      </li>
                      <li>
                        <p className="lists line-through">Customer Support</p>
                      </li>
                    </ul>
                  </div>
                  <div className="buy-button">
                    <a className="btn-style" href="#buy">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-gd-left pric-7-2">
              <div className="w3l-pricing-7">
                <div className="w3l-pricing-7-top">
                  <h6 className="one-light">Pro Package</h6>

                  <h4><label>$</label>89<span>/month</span></h4>
                </div>
                <div className="w3l-pricing-7-bottom">
                  <div className="w3l-pricing-7-bottom-bottom">
                    <ul className="links">
                      <li>
                        <p className="lists">5 Dog Walk </p>
                      </li>
                      <li>
                        <p className="lists line-through">3 Vet Visit </p>
                      </li>
                      <li>
                        <p className="lists line-through">3 Pet Spa</p>
                      </li>
                      <li>
                        <p className="lists line-through">Free Supports</p>
                      </li>
                      <li>
                        <p className="lists line-through">Customer Support</p>
                      </li>
                    </ul>
                  </div>
                  <div className="buy-button">
                    <a className="btn-outline-border btn-style" href="#buy">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans