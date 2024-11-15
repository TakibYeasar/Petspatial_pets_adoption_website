import React from 'react';
import b3 from '../../../public/assets/images/b3.jpg';
import { FaCheck } from 'react-icons/fa';

const WhyusSection = () => {
  return (
    <section className="bg-gray-100 py-5" id="about1">
      <div className="container py-5">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-5 lg:space-y-0">
          <div className="lg:w-1/2 flex-shrink-0">
            <div className="relative">
              <img src={b3} alt="Why Choose Us" className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="text-left">
              <h6 className="text-gray-500 text-lg mb-2"><span>Why Choose Us</span></h6>
              <h3 className="text-primary text-3xl font-bold">Why Petspatial?</h3>
            </div>
            <p className="mt-4 text-gray-700">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Learn more about our work! Lorem ipsum viverra feugiat.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-700">
                <FaCheck className="text-primary mr-2" />
                Pellen tesque libero ut justo
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheck className="text-primary mr-2" />
                Lorem ipsum dolor sit amet elit
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheck className="text-primary mr-2" />
                Pellen tesque libero ut justo
              </li>
            </ul>
            <a href="/about" className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyusSection;
