import React from 'react';
import "./Team.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";
import team5 from "../../assets/images/team5.jpg";
import team6 from "../../assets/images/team6.jpg";

const Team = () => {
  return (
    <section className="w3l-team py-5" id="w3l-team">
      <div className="container py-lg-4 py-sm-3">

        <div className="row text-center">
          <div className="col-md-6 mt-5 pl-lg-5">
            <div className="title-content text-left">
              <h6 className="title-subhny mb-2"><span>Our Team</span></h6>
              <h3 className="title-w3l mb-3">Team Experts</h3>
              <p>Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum.n molestie nulla felis, vitae feugiat justo pulvinar et.</p>
              <a className="btn-style mt-md-5 mt-4" href="#"> Join Our Team</a>
            </div>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <div className="team-grids text-center">
              <img src={team5} className="img-fluid" alt=""/>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <FaFacebook />
                      </a>
                      <a className="twitter" href="#url">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <h4>John Harris</h4>
            <h6>Boarding</h6>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <div className="team-grids text-center">
              <img src={team6} className="img-fluid" alt=""/>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <FaFacebook />
                      </a>
                      <a className="twitter" href="#url">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <h4>Scott Colon</h4>
            <h6>Boarding</h6>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <div className="team-grids text-center">
              <img src={team1} className="img-fluid" alt=""/>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <FaFacebook />
                      </a>
                      <a className="twitter" href="#url">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <h4>John Doe</h4>
            <h6>Boarding</h6>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <div className="team-grids text-center">
              <img src={team2} className="img-fluid" alt=""/>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <FaFacebook />
                      </a>
                      <a className="twitter" href="#url">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <h4>Alexander</h4>
            <h6>Training</h6>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <div className="team-grids text-center">
              <img src={team3} className="img-fluid" alt=""/>
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <FaFacebook />
                      </a>
                      <a className="twitter" href="#url">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <h4>Martin ker </h4>
            <h6>Boarding</h6>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <div className="team-grids text-center">
              <img src={team4} className="img-fluid" alt="" />
                <div className="team-info">
                  <div className="caption">
                    <div className="social-icons-section text-center">
                      <a className="fac" href="#url">
                        <FaFacebook />
                      </a>
                      <a className="twitter" href="#url">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <h4>Elizabeth </h4>
            <h6>Doggie Day Care</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team