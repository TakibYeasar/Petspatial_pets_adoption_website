import React from 'react';
import "./Slider.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <section className="slider-sec banner-slider" id="home">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <div className="slider-info banner-view banner-top1">
                <div className="container">
                  <div className="banner-info">
                    <h3>Grooming & Pet Supplies.</h3>
                    <div className="banner-info-top">
                      <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                        tempufddfel. Lorem ipsum dolor sit amet elit. </p>
                      <a href="/about" className="btn-style btn-outline-light mt-sm-5 mt-4">Read More </a>

                    </div>
                  </div>
                  <div className="banner-info-top-grids">
                    <h5 className="text-lg-left"><strong>Our Location : </strong> 253 Adams Ave, Iowa</h5>
                    <h5 className="text-lg-right"><strong> Open Hours : </strong> Mon - Sat 8am - 6pm</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="slider-info banner-view banner-top2">
                <div className="container">
                  <div className="banner-info">
                    <h3>Caring is More Daring.</h3>
                    <div className="banner-info-top">
                      <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                        tempufddfel. Lorem ipsum dolor sit amet elit. </p>
                      <a href="/about" className="btn-style btn-outline-light mt-sm-5 mt-4">Read More </a>

                    </div>
                  </div>
                  <div className="banner-info-top-grids">
                    <h5 className="text-lg-left"><strong>Our Location : </strong> 253 Adams Ave, Iowa</h5>
                    <h5 className="text-lg-right"><strong> Open Hours : </strong> Mon - Sat 8am - 6pm</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="slider-info banner-view banner-top3">
                <div className="container">
                  <div className="banner-info">
                    <h3>Grooming & Pet Supplies.</h3>
                    <div className="banner-info-top">
                      <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                        tempufddfel. Lorem ipsum dolor sit amet elit. </p>
                      <a href="/about" className="btn-style btn-outline-light mt-sm-5 mt-4">Read More </a>
                    </div>
                  </div>
                  <div className="banner-info-top-grids">
                    <h5 className="text-lg-left"><strong>Our Location : </strong> 253 Adams Ave, Iowa</h5>
                    <h5 className="text-lg-right"><strong> Open Hours : </strong> Mon - Sat 8am - 6pm</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Slider