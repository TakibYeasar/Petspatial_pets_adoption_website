import React from 'react';
import b1 from "../../public/assets/images/b1.jpg";
import b2 from "../../public/assets/images/b2.jpg";

const About = () => {
  return (
    <section className="bg-gray-100" id="about">
      <div className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-10">
              <div className="text-left">
                <h6 className="text-lg text-gray-700 mb-2"><span>Love Your Pet</span></h6>
                <h3 className="text-3xl font-semibold">Established & Trusted Pet Care Service</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad.
                Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non
                velit, culpa! Vivamus a et ut justo, init in dolor et.
              </p>
              <a className="btn-style" href="/about">
                Read More
              </a>
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <div className="relative">
                <img src={b1} alt="" className="rounded-lg w-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 pt-8 lg:pt-10">
              <div className="relative">
                <img src={b2} alt="" className="rounded-lg w-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 pl-0 lg:pl-10 pt-8 lg:pt-10">
              <div className="text-left">
                <h6 className="text-lg text-gray-700 mb-2"><span>Pet care</span></h6>
                <h3 className="text-3xl font-semibold">Reliable & Affordable in-home pet care.</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad.
                Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non
                velit, culpa! Vivamus a et ut justo, init in dolor et.
              </p>
              <a className="btn-style" href="/about">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
