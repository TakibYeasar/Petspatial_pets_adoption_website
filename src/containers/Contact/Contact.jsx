import React from 'react';
import "./Contact.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaArrowRight, FaClock, FaEnvelope, FaHome, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-sec">
      <div className="inner-banner">
      </div>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li><a href="/">Home</a></li>
            <li className="active"><FaArrowRight className=" mx-2" aria-hidden="true" /> Contact Us</li>
          </ul>
        </div>
      </section>

      <section className="wthree-row py-5 about-main" id="contact">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subhny mb-2"><span>Get in touch with us</span></h6>
                <h3 className="title-w3l">Let's discuss any services enquiry</h3>
              </div>

            </div>
            <div className="col-lg-6 pl-lg-5">
              <p className="pt-4">We are dedicated to the safety of our guests and employees and have updated our safety
                measures. We believe in Simple, Creative, Modern and Flexible Design Standards with a Retina and
                Responsive Approach.</p>
            </div>
          </div>
          <div className="d-grid contact my-md-5 my-4 pt-lg-3">
            <div className="contact-info-left d-grid text-center">
              <div className="contact-info">
                <FaHome className="icon" aria-hidden="true" />
                <h4>Contact Address</h4>
                <p>#3456VL Petspatial, Corner Services, NY - 62617.</p>
              </div>
              <div className="contact-info">
                <FaEnvelope className="icon" aria-hidden="true"/>
                <h4>Email address</h4>
                <p><a href="mailto:contact@mail.com" className="email">contact@mail.com</a></p>
                <p><a href="mailto:support@mail.com" className="email">support@mail.com</a></p>
              </div>
              <div className="contact-info">
                <FaPhone className="icon" aria-hidden="true"/>
                <h4>Contact phone</h4>
                <p><a href="tel:+12 534 891 4364">+12 534 891 4364</a></p>
                <p><a href="tel:+44 987 654 3211">+44 987 654 3211</a></p>
              </div>
              <div className="contact-info">
                <FaClock className="icon" aria-hidden="true"/>
                <h4>Opening hours</h4>
                <p>Mon-Fri: 8 AM - 5 PM</p>
                <p>Sat-Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="map-content-9 pt-lg-5">
            <h5 className="mb-sm-4 mb-3">Get in Touch. We're Here to Help</h5>
            <form action="https://sendmail.w3layouts.com/submitForm" method="post">
              <div className="twice-two">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name" required="" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email" required="" />
                  </div>
                </div>
                  <div className="row twice">
                  <div className="col-lg-12">
                    <input type="text" className="form-control" name="w3lSubject" id="w3lSubject" placeholder="Subject" required="" />
                    </div>
                  </div>
                  <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message" required=""></textarea>
                  <div className="text-right">
                    <button type="submit" className="btn-style mt-4 d-sm-inline d-block">Send Message</button>
                  </div>
                  </div>
                </form>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Contact