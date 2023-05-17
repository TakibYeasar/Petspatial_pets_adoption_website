import React from 'react';
import "./Service.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaArrowRight } from "react-icons/fa";
import b3 from "../../assets/images/b3.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import ab2 from "../../assets/images/ab2.jpg";

const Service = () => {
  return (
    <div className="service-section">
      <div className="inner-banner">
      </div>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li><a href="/">Home</a></li>
            <li className="active"><FaArrowRight className="mx-2" aria-hidden="true" /> Services</li>
          </ul>
        </div>
      </section>
      

      <section className="w3l-servicesblock py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 about-right-faq align-self">
              <div className="title-content text-left">
                <h6 className="title-subhny mb-2"><span>Our Services</span></h6>
                <h3 className="title-w3l">Flexible, Trustworthy, and Reliable Care for Your Pet</h3>
              </div>
              <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .</p>
              <div className="progress-info info1">
                <h6 className="progress-tittle">Professionalism <span className="">80%</span></h6>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="90"
                    aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">Quality <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="95"
                    aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
              <div className="progress-info info3">
                <h6 className="progress-tittle">Reliability <span className="">75%</span></h6>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="95"
                    aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-4 pl-lg-5">
              <img src={b3} alt="" className="img-fluid radius-image"/>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-products py-5" id="projects">
        <div className="container py-lg-5 py-md-4">
          <div className="products-content">
            <div className="row no-gutters">
              <div className="col-lg-7">
                <div className="title-content text-left">
                  <h6 className="title-subhny mb-2"><span>Our Services</span></h6>
                  <h3 className="title-w3l">Our Sitters Are Thoroughly Vetted</h3>
                </div>

                <p className="mt-3">Lorem ipsum dolor sit, elit dolores nulla quisdam. minus aliquam
                  corrupti, modi ipsum natus sit pariatur. Curabitur mattis orci sed leo
                  mattis, nec
                  maximus nibh faucibus lorem dolor sit. it’s clinically clean. Lorem
                  ipsum dolor
                  sit.</p>
                <div className="row my-lg-5 my-4">
                  <div className="col-lg-6">
                    <img src={banner2} className="img-fluid radius-image"
                      alt="project image" />
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-4">
                    <p>Lorem ipsum dolor sit, elit dolores nulla quisdam. minus aliquam
                      corrupti, modi ipsum natus sit pariatur. Curabitur mattis orci sed leo
                      mattis, nec
                      maximus nibh faucibus lorem dolor sit. it’s clinically clean. Lorem
                      ipsum dolor
                      sit, elit dolores nulla dolor sit.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-lg-0 mt-md-5 mt-4 pl-lg-5">
                <img src={ab2} className="img-fluid radius-image"
                  alt="project image" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Service