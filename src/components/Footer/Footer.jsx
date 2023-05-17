import React from 'react';
import "./Footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import b1 from "../../assets/images/b1.jpg";
import b2 from "../../assets/images/b2.jpg";
import b3 from "../../assets/images/b3.jpg";
import b4 from "../../assets/images/b4.jpg";
import b5 from "../../assets/images/b5.jpg";
import b6 from "../../assets/images/b6.jpg";

const Footer = () => {
  return (
      <footer className="footer-sec">
        <div className="footer-29-w3l py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6  footer-list-29 footer-1 pr-lg-5">
                <div className="footer-logo mb-3">
                  <a className="footer-brand-logo" href="/">Pet<span className="sublog">spatial.</span></a>

                </div>
                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                  tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
                <div className="main-social-footer-29 mt-4">
                  <a href="#facebook" className="facebook"><FaFacebook /></a>
                  <a href="#twitter" className="twitter"><FaTwitter /></a>
                  <a href="#instagram" className="instagram"><FaInstagram /></a>
                  <a href="#linkedin" className="linkedin"><FaLinkedin /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-list-29 footer-2 mt-sm-0 mt-5">
                <h6 className="footer-title-29">Subscribe Newsletter
                </h6>
                <form action="#" method="post" className="forms-25-info mt-4 mb-2">
                  <div className="forms-gds">
                    <input type="email" name="" placeholder="Enter your email" required=""/>
                      <button className="btn btn-style ">Subscribe</button>
                  </div>
                  <p className="mt-4 text-left">By submitting this form, you agree to the <a href="#">privacy policy</a> and <a
                    href="#">terms of use</a></p>
                </form>
              </div>
              <div className="col-lg-4 col-md-6  footer-list-29 footer-4 mt-lg-0 mt-5 pl-lg-5">
                <h6 className="footer-title-29">Instagram
                </h6>
                <ul className="w3linst-imgs row">
                  <li className="col-4"><a href="#"><img src={b1} alt="" className="radius-image img-fluid" /></a>
                  </li>
                  <li className="col-4"><a href="#"><img src={b2} alt="" className="radius-image img-fluid" /></a>
                  </li>
                  <li className="col-4"><a href="#"><img src={b3} alt="" className="radius-image img-fluid" /></a>
                  </li>
                  <li className="col-4 mt-4"><a href="#"><img src={b4} alt=""
                    className="radius-image img-fluid" /></a>
                  </li>
                  <li className="col-4 mt-4"><a href="#"><img src={b5} alt=""
                    className="radius-image img-fluid" /></a>
                  </li>
                  <li className="col-4 mt-4"><a href="#"><img src={b6} alt=""
                    className="radius-image img-fluid" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="w3l-copyright">
          <div className="container">
            <div className="row bottom-copies">
              <p className="col-lg-8 copy-footer-29">© 2021 Petspatial. All rights reserved. Design by <a
                href="https://w3layouts.com/" target="_blank">
                W3layouts</a></p>

              <div className="col-lg-4 footer-list-29">
                <ul className="d-flex text-lg-right">
                  <li><a href="#careers"> Careers</a></li>
                  <li className="mx-lg-5 mx-md-4 mx-3"><a href="#privacymy-lg-0 my-4">Privacy Policy</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        </footer>
  )
}

export default Footer