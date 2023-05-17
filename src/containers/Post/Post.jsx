import React from 'react';
import "./Post.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaComments, FaUser } from "react-icons/fa";
import b5 from "../../assets/images/b5.jpg";
import b6 from "../../assets/images/b6.jpg";
 
const Post = () => {
  return (
    <section className="blog-sec py-5" id="blogs">
      <div className="container py-md-5 py-2">
        <div className="title-content text-left">
          <h6 className="title-subhny mb-2"><span>Our Posts</span></h6>
          <h3 className="title-w3l">Recent Blog Posts.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 item mt-5 mr-5">
            <div className="single-left1 mb-0">
              <div className="blg-img">
                <a href="#"><img src={b5} alt=" " className="img-responsive img-fluid" />
                  <div className="bl-top">
                    <h4>12 Mar</h4>
                  </div>
                </a>
              </div>
              <div className="btom-cont">
                <h5 className="title-w3l"><a href="#">Germs Thrive the Office! Your Health Risk?</a></h5>
                <ul className="admin-post">
                  <li><a href="#"><FaUser className="icon" /> Posted by Admin</a></li>
                  <li><a href="#"><FaComments className="icon" /> Comments (20)</a></li>
                </ul>
                <p className="">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim sunt in culpa qui officia deserunt. </p>
                <a href="#" className="btn-style btn-white mt-4">Read More</a>

              </div>
            </div>
          </div>

          <div className="col-md-6 item mt-5 ml-5">
            <div className="single-left1 mb-0">
              <div className="blg-img">
                <a href="#"><img src={b6} alt=" " className="img-responsive img-fluid" />
                  <div className="bl-top">
                    <h4>14 Mar</h4>
                  </div>
                </a>
              </div>
              <div className="btom-cont">
                <h5 className="title-w3l"><a href="#">Germs Thrive the Office! Your Health Risk?</a></h5>
                <ul className="admin-post">
                  <li><a href="#"><FaUser className="icon" /> Posted by Admin</a></li>
                  <li><a href="#"><FaComments className="icon" /> Comments (20)</a></li>
                </ul>
                <p className="">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim sunt in culpa qui officia deserunt. </p>
                <a href="#" className="btn-style btn-white mt-4">Read More</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post