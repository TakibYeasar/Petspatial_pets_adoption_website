import React from 'react';
import "./About.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import b1 from "../../assets/images/b1.jpg";
import b2 from "../../assets/images/b2.jpg";

const About = () => {
  return (
    <section className="about-sec" id="about">
      <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-3">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4 align-self pr-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subhny mb-2"><span>Love Your Pet</span></h6>
                <h3 className="title-w3l">Established &
                  Trusted Pet
                  Care Service</h3>
              </div>
              <p className="mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
                elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                dolor sit, amet elit. Dolor ipsum non velit, culpa! Vivamus a et ut justo, init in dolor et.</p>
              <a className="btn-style mt-sm-5 mt-4 mr-2" href="/about"> Read More</a>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="position-relative">
                <img src={b1} alt="" className="radius-image img-fluid"/>
              </div>
            </div>
            <div className="col-lg-6 mt-5 pt-lg-4">
              <div className="position-relative">
                <img src={b2} alt="" className="radius-image img-fluid"/>
              </div>
            </div>
            <div className="col-lg-6 mt-5 align-self pl-lg-5 pt-lg-4">
              <div className="title-content text-left">
                <h6 className="title-subhny mb-2"><span>Pet care</span></h6>
                <h3 className="title-w3l">Reliable & Affordable in home pet care.</h3>
              </div>

              <p className="mt-md-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
                elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                dolor sit, amet elit. Dolor ipsum non velit, culpa! Vivamus a et ut justo, init in dolor et.</p>
              <a className="btn-style mt-sm-5 mt-4 mr-2" href="/about"> Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About