import React from 'react';
import "./Whyustwo.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import b3 from "../../assets/images/b3.jpg";

const Whyustwo = () => {
  return (
    <section className="content-with-photo-16 py-5">
      <div className="content-with-photo-16-main py-lg-5 py-sm-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 column">
              <div className="content-with-photo-16-inf">
                <div className="title-content text-left">
                  <h6 className="title-subhny mb-2"><span>Why Us</span></h6>
                  <h3 className="title-w3l">Established &
                    Trusted Pet
                    Care Service</h3>
                </div>
                <p>Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse
                  eleifend nibh quis dui placerat fermentum.n molestie nulla felis, vitae feugiat justo
                  pulvinar et. </p>
                <ul className="content-photo-list">
                  <li>
                    <span>Aliquam blandit vel sapien eget aliquam.</span>
                  </li>
                  <li>
                    <span>Phasellus eget volutpat libero. </span>
                  </li>
                  <li>
                    <span>Aliquam blandit vel sapien eget aliquam.</span>
                  </li>
                  <li>
                    <span>Phasellus eget volutpat libero. </span>
                  </li>
                </ul>
                <a className="btn-style mt-sm-5 mt-4" href="#"> Read More</a>
              </div>
            </div>
            <div className="col-lg-6 column mt-lg-0 mt-md-5 mt-4">
              <div className="companies-img">
                <img src={b3} className="img-fluid radius-image" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whyustwo