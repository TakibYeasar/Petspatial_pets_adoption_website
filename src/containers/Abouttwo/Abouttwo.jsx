import React from 'react';
import "./Abouttwo.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAmbulance, FaAmericanSignLanguageInterpreting, FaArrowRight, FaUserMd } from "react-icons/fa";
import b5 from "../../assets/images/b5.jpg";

const Abouttwo = () => {
  return (
    <div className="abouttwo">
      <div className="inner-banner">
      </div>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li><a href="/">Home</a></li>
            <li className="active"><FaArrowRight className="mx-2" aria-hidden="true" /> About Us</li>
          </ul>
        </div>
      </section>

      <section className="w3l-services-6-main">
        <div className="services-6 py-5">
          <div className="container py-md-3">
            <div className="row serv_sec_info">
              <div className="col-lg-6 banner_bottom_grid help pr-lg-5">
                <img src={b5} alt=" " className="img-fluid radius-image"/>
              </div>
              <div className="col-lg-6 banner_bottom_left pl-lg-4 mt-lg-0 mt-md-5 mt-4">
                <div className="title-content text-left">
                  <h6 className="title-subhny mb-2"><span>Welcome</span></h6>
                  <h3 className="title-w3l">We are all about pets.
                    Over 13+ years in the business</h3>
                </div>
                <p>Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla
                  viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea
                  consequuntur illum facere aperiam sequi optio consectetur.</p>

                <a className="btn-style mt-4" href="#"> Read More</a>
              </div>
            </div>
            <div className="row features-w3pvt-main" id="features">
              <div className="col-lg-4 col-md-6 feature-gird">
                <div className="row features-hny-inner-gd">
                  <div className="col-md-3 col-2 featured_grid_left">
                    <div className="icon_left_grid">
                      <FaAmericanSignLanguageInterpreting aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-9 col-10 featured_grid_right_info pl-lg-0">
                    <h4><a className="link-hny" href="#url">Puppy Training </a></h4>
                    <p>Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 feature-gird">
                <div className="row features-hny-inner-gd">
                  <div className="col-md-3 col-2 featured_grid_left">
                    <div className="icon_left_grid">
                      <FaAmbulance aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-9 col-10 featured_grid_right_info pl-lg-0">
                    <h4><a className="link-hny" href="#url">Pet Transport</a></h4>
                    <p>Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 feature-gird">
                <div className="row features-hny-inner-gd">
                  <div className="col-md-3 col-2 featured_grid_left">
                    <div className="icon_left_grid">
                      <FaUserMd aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-9 col-10 featured_grid_right_info pl-lg-0">
                    <h4><a className="link-hny" href="#url">Medical Administration</a></h4>
                    <p>Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Abouttwo