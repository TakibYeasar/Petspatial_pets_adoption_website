import React from 'react';
import { Team } from '../containers';
import { FaAmbulance, FaAmericanSignLanguageInterpreting, FaArrowRight, FaUserMd } from "react-icons/fa";
import b5 from "../../public/assets/images/b5.jpg";
import b3 from '../../public/assets/images/b3.jpg';

const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <div className="relative min-h-[260px] bg-cover bg-center" style={{ backgroundImage: `url('../../public/assets/images/banner2.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>
      </div>

      <section className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <ul className="flex space-x-2 text-lg font-semibold text-gray-700">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li className="flex items-center"><FaArrowRight className="mx-2 text-xs" aria-hidden="true" /> About Us</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="lg:w-1/2">
              <img src={b5} alt="About Us" className="w-full h-auto rounded-lg" />
            </div>
            <div className="lg:w-1/2">
              <h6 className="text-lg font-bold mb-2 text-gray-500">Welcome</h6>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">We are all about pets. Over 13+ years in the business</h3>
              <p className="text-gray-600 mb-4">Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac. Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
              <a className="btn-style" href="#">Read More</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-3xl">
                <FaAmericanSignLanguageInterpreting aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800"><a href="#url" className="hover:underline">Puppy Training</a></h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-3xl">
                <FaAmbulance aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800"><a href="#url" className="hover:underline">Pet Transport</a></h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-3xl">
                <FaUserMd aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800"><a href="#url" className="hover:underline">Medical Administration</a></h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consec tetur adipisi elit. Dolores, rem!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="text-left mb-4">
                <h6 className="text-gray-500 text-lg mb-2">Why Us</h6>
                <h3 className="text-gray-800 text-3xl lg:text-2xl sm:text-xl font-semibold leading-tight">Established & Trusted Pet Care Service</h3>
              </div>
              <p className="text-gray-700 mb-6">Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum. Molestie nulla felis, vitae feugiat justo pulvinar et.</p>
              <ul className="list-disc text-gray-700 text-lg leading-7 mb-6 pl-5 space-y-2">
                <li>Aliquam blandit vel sapien eget aliquam.</li>
                <li>Phasellus eget volutpat libero.</li>
                <li>Aliquam blandit vel sapien eget aliquam.</li>
                <li>Phasellus eget volutpat libero.</li>
              </ul>
              <a href="#" className="btn-style">Read More</a>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
              <img src={b3} className="w-full h-auto rounded-lg" alt="Pet Care" />
            </div>
          </div>
        </div>
      </section>

      <Team />
    </div>
  )
}

export default Aboutpage;
