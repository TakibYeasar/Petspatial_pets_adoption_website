import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import b3 from '../../public/assets/images/b3.jpg';
import banner2 from '../../public/assets/images/banner2.jpg';
import ab2 from '../../public/assets/images/ab2.jpg';

const progressData = [
  { label: 'Professionalism', value: 80 },
  { label: 'Quality', value: 95 },
  { label: 'Reliability', value: 75 },
];

const Service = () => {
  return (
    <div className="service-section">
      <div className="relative min-h-[260px] bg-center bg-cover bg-no-repeat bg-[url('../../public/assets/images/banner2.jpg')]">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-[-1]"></div>
      </div>

      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-2 text-sm font-semibold capitalize">
            <li>
              <a href="/" className="text-gray-700 opacity-70 hover:opacity-100">Home</a>
            </li>
            <li className="flex items-center text-gray-900 font-bold">
              <FaArrowRight className="mx-2 text-xs opacity-70" aria-hidden="true" />
              Services
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-5" id="services">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-4">
              <div className="text-left mb-5">
                <h6 className="text-sm font-semibold mb-2">Our Services</h6>
                <h3 className="text-2xl font-bold">Flexible, Trustworthy, and Reliable Care for Your Pet</h3>
              </div>
              <p className="mt-4 mb-5">
                Lorem ipsum viverra feugiat. Pellentesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet.
              </p>
              <div className="space-y-4">
                {progressData.map((item) => (
                  <div key={item.label}>
                    <h6 className="flex justify-between text-lg font-semibold">
                      {item.label} <span>{item.value}%</span>
                    </h6>
                    <div className="relative bg-gray-200 h-2 rounded overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img src={b3} alt="Service" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5" id="projects">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-7/12 p-4">
              <div className="text-left mb-5">
                <h6 className="text-sm font-semibold mb-2">Our Services</h6>
                <h3 className="text-2xl font-bold">Our Sitters Are Thoroughly Vetted</h3>
              </div>
              <p className="mt-3 mb-5">
                Lorem ipsum dolor sit, elit dolores nulla quisdam. Minus aliquam corrupti, modi ipsum natus sit pariatur. Curabitur mattis orci sed leo mattis, nec maximus nibh faucibus lorem dolor sit. It’s clinically clean. Lorem ipsum dolor sit.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-1/2">
                  <img src={banner2} className="w-full rounded-lg" alt="Service Image" />
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                  <p>
                    Lorem ipsum dolor sit, elit dolores nulla quisdam. Minus aliquam corrupti, modi ipsum natus sit pariatur. Curabitur mattis orci sed leo mattis, nec maximus nibh faucibus lorem dolor sit. It’s clinically clean. Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 p-4 mt-4 lg:mt-0">
              <img src={ab2} className="w-full rounded-lg" alt="Additional Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
