import React from 'react';
import "./Features.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCuttlefish, FaShower, FaSignLanguage, FaSitemap, FaSnowflake, FaUserMd } from "react-icons/fa";

const Features = () => {
  return (
    <section className="w3l-features py-5" id="features">
      <div className="container py-lg-4">
        <div className="grids-area-hny main-cont-wthree-fea row">
          <div className="col-lg-2 col-md-3 col-6 grids-feature">
            <div className="area-box">
              <div className="icon">
                <FaSnowflake />
              </div>
              <h4><a href="#feature" className="title-head">Dog Walking</a></h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 grids-feature">
            <div className="area-box mb-lg-0">
              <div className="icon">
                <FaCuttlefish />
              </div>
              <h4><a href="#feature" className="title-head">Healthy Meals</a></h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 grids-feature">
            <div className="area-box mb-lg-0">
              <div className="icon">
                <FaSignLanguage />
              </div>
              <h4><a href="#feature" className="title-head">Pet Sitting</a></h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 grids-feature">
            <div className="area-box">
              <div className="icon">
                <FaSitemap />
              </div>
              <h4><a href="#feature" className="title-head">Dog Activities</a></h4>

            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 grids-feature">
            <div className="area-box mb-lg-0">
              <div className="icon">
                <FaShower />
              </div>
              <h4><a href="#feature" className="title-head">Pet Daycare</a></h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6 grids-feature">
            <div className="area-box">
              <div className="icon">
                <FaUserMd />
              </div>
              <h4><a href="#feature" className="title-head">Pet Grooming</a></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features