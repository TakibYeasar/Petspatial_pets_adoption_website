import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import b1 from "../../public/assets/images/b1.jpg";
import b2 from "../../public/assets/images/b2.jpg";
import b3 from "../../public/assets/images/b3.jpg";
import b4 from "../../public/assets/images/b4.jpg";
import b5 from "../../public/assets/images/b5.jpg";
import b6 from "../../public/assets/images/b6.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="py-5">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="pr-lg-5">
              <div className="mb-5">
                <a className="text-white text-4xl font-bold" href="/">
                  Pet<span className="text-blue-500">spatial.</span>
                </a>
              </div>
              <p className="text-gray-400">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
              <div className="flex space-x-4 mt-6">
                <a href="#facebook" className="text-white bg-transparent border border-white/20 p-3 rounded-md transition duration-300 hover:bg-blue-500 hover:border-blue-500">
                  <FaFacebook />
                </a>
                <a href="#twitter" className="text-white bg-transparent border border-white/20 p-3 rounded-md transition duration-300 hover:bg-blue-500 hover:border-blue-500">
                  <FaTwitter />
                </a>
                <a href="#instagram" className="text-white bg-transparent border border-white/20 p-3 rounded-md transition duration-300 hover:bg-blue-500 hover:border-blue-500">
                  <FaInstagram />
                </a>
                <a href="#linkedin" className="text-white bg-transparent border border-white/20 p-3 rounded-md transition duration-300 hover:bg-blue-500 hover:border-blue-500">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="mt-5 md:mt-0">
              <h6 className="text-white text-2xl font-bold mb-5">Subscribe Newsletter</h6>
              <form action="#" method="post" className="space-y-4">
                <div className="flex flex-col">
                  <input type="email" placeholder="Enter your email" required className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 outline-none" />
                  <button className="btn btn-style mt-4 p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Subscribe</button>
                </div>
                <p className="text-gray-400 mt-4">By submitting this form, you agree to the <a href="#" className="text-white hover:text-blue-500">privacy policy</a> and <a href="#" className="text-white hover:text-blue-500">terms of use</a>.</p>
              </form>
            </div>

            <div className="pl-lg-5 mt-5 md:mt-0">
              <h6 className="text-white text-2xl font-bold mb-5">Instagram</h6>
              <ul className="grid grid-cols-3 gap-4">
                <li><a href="#"><img src={b1} alt="" className="rounded-lg w-full" /></a></li>
                <li><a href="#"><img src={b2} alt="" className="rounded-lg w-full" /></a></li>
                <li><a href="#"><img src={b3} alt="" className="rounded-lg w-full" /></a></li>
                <li><a href="#"><img src={b4} alt="" className="rounded-lg w-full mt-4" /></a></li>
                <li><a href="#"><img src={b5} alt="" className="rounded-lg w-full mt-4" /></a></li>
                <li><a href="#"><img src={b6} alt="" className="rounded-lg w-full mt-4" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
