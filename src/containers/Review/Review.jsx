import React from 'react';
import "./Review.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";
import team5 from "../../assets/images/team5.jpg";
import team6 from "../../assets/images/team6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";


const Review = () => {
  return (
    <section className="w3l-clients w3l-test py-5" id="testimonials">
      <div className="container py-lg-5 py-md-4 pt-2 pb-5">
        <div className="row w3test-grids p-md-5 pb-0">
          <div className="col-lg-4 testimonials-con-left-info">
            <div className="title-content text-left p-xl-3">
              <h6 className="title-subhny mb-2"><span>Reviews</span></h6>
              <h3 className="title-w3l two">Testimonials</h3>
              <p className="test-p mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel.
                Lorem ipsum viverra feugiat.</p>
            </div>
          </div>
          <div className="col-lg-8 testimonials-con-right mt-lg-0 mt-5 p-xl-3">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="row">
                  <div className="item col-lg-6">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>Pellen tesque libero ut justo</q>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                          faucibus orci luctus et ultrices posuere.</p>
                      </div>
                      <div className="bottom-info mt-4">
                        <a className="comment-img" href="#url"><img src={team1} className="img-fluid radius-image"
                          alt="placeholder image" /></a>
                        <div className="people-info align-self">
                          <h3>Johnson william</h3>
                          <p className="identity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item col-lg-6">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>Pellen tesque libero ut justo</q>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                          faucibus orci luctus et ultrices posuere.</p>
                      </div>
                      <div className="bottom-info mt-4">
                        <a className="comment-img" href="#url"><img src={team3} className="img-fluid radius-image"
                          alt="placeholder image" /></a>
                        <div className="people-info align-self">
                          <h3>John wilson</h3>
                          <p className="identity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="item col-lg-6">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>Lorem ipsum dolor sit amet</q>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                          faucibus orci luctus et ultrices posuere.</p>
                      </div>
                      <div className="bottom-info mt-4">
                        <a className="comment-img" href="#url"><img src={team2} className="img-fluid radius-image"
                          alt="placeholder image" /></a>
                        <div className="people-info align-self">
                          <h3>Alexander sakura</h3>
                          <p className="identity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item col-lg-6">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>Lorem ipsum dolor sit amet</q>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                          faucibus orci luctus et ultrices posuere.</p>
                      </div>
                      <div className="bottom-info mt-4">
                        <a className="comment-img" href="#url"><img src={team4} className="img-fluid radius-image"
                          alt="placeholder image" /></a>
                        <div className="people-info align-self">
                          <h3>Julia sakura</h3>
                          <p className="identity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="item col-lg-6">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>Pellen tesque libero ut justo</q>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                          faucibus orci luctus et ultrices posuere.</p>
                      </div>
                      <div className="bottom-info mt-4">
                        <a className="comment-img" href="#url"><img src={team5} className="img-fluid radius-image"
                          alt="placeholder image" /></a>
                        <div className="people-info align-self">
                          <h3>John wilson</h3>
                          <p className="identity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item col-lg-6">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>Lorem ipsum dolor sit amet.</q>
                        </blockquote>
                        <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                          faucibus orci luctus et ultrices posuere.</p>
                      </div>
                      <div className="bottom-info mt-4">
                        <a className="comment-img" href="#url"><img src={team6} className="img-fluid radius-image"
                          alt="placeholder image" /></a>
                        <div className="people-info align-self">
                          <h3>Julia sakura</h3>
                          <p className="identity">Example City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            
          </div>
        </div>
        <div className="row stats-con pt-md-5 mt-5">
          <div className="col-lg-3 col-6 stats_info counter_grid">
            <p className="counter">1500 </p>
            <span className="plus">+</span><br />
            <h3>Acres Of Forests</h3>

          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid mt-md-0 mt-0">
            <p className="counter">1160</p>
            <span className="plus">+</span><br />
            <h3>Million People</h3>

          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
            <p className="counter">1145 </p>
            <span className="plus">k</span><br />
            <h3>Thousand Hectares </h3>

          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
            <p className="counter">1145 </p>
            <span className="plus">k</span> <br />
            <h3>Thousand Hectares </h3>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Review