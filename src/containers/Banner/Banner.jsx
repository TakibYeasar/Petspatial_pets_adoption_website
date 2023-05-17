import React from 'react';
import "./Banner.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Banner = () => {
  return (
    <section className="banner-sec py-5" id="about">
      <div className="new-block py-md-5 py-3">
        <div className="container py-lg-5">
          <div className="row middle-section align-self">
            <div className="col-lg-7 video-info pr-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subhny three mb-2"><span>Better pet nutrition.</span></h6>
                <h3 className="title-w3l two pr-lg-5">The finest fresh food and all your pet needs.</h3>
                <p className="mt-3 pr-lg-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet elit
                  consec tetur adipisi elit.
                  Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Iure voluptatibus explicabo
                  officia.</p>
                <a href="/contact" className="btn-style btn-white mt-sm-5 mt-4">Contact Now </a>
              </div>
            </div>
            <div className="col-lg-5 history-info mt-5 pl-lg-5 align-self">
              <div className="position-relative mt-lg-0 mt-5 pt-lg-0 pt-5 pb-lg-0 pb-5">
                <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                </a>
                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/101587706" frameborder="0" allow="autoplay; fullscreen"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner