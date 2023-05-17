import React from 'react';
import "./Whyus.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import b3 from "../../assets/images/b3.jpg";
import { FaCheck } from "react-icons/fa";

const Whyus = () => {
  return (
    <section className="whyus-sec" id="about1">
      <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 left-wthree-img">
              <div className="position-relative">
                <img src={b3} alt="" className="radius-image img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5 align-self">
              <div className="title-content text-left">
                <h6 className="title-subhny mb-2"><span>Why Choose Us</span></h6>
                <h3 className="title-w3l">Why Petspatial?</h3>
              </div>
              <p className="mt-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Learn more about our work!
                Lorem ipsum viverra feugiat.
              </p>
              <ul className="w3l-right-book mt-4">
                <li><FaCheck className="icon" />Pellen tesque libero ut justo</li>
                <li><FaCheck className="icon" />Lorem ipsum dolor sit amet elit</li>
                <li><FaCheck className="icon" />Pellen tesque libero ut justo</li>
              </ul>
              <a href="/about" className="btn-style mt-4">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyus