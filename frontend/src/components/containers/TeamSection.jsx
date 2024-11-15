import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import team1 from '../../../public/assets/images/team1.jpg';
import team2 from '../../../public/assets/images/team2.jpg';
import team3 from '../../../public/assets/images/team3.jpg';
import team4 from '../../../public/assets/images/team4.jpg';
import team5 from '../../../public/assets/images/team5.jpg';
import team6 from '../../../public/assets/images/team6.jpg';

const TeamSection = () => {
  return (
    <section className="bg-gray-200 py-10" id="team">
      <div className="container mx-auto py-5">
        <div className="text-center mb-8">
          <h6 className="text-gray-600 text-lg mb-2">Our Team</h6>
          <h3 className="text-primary text-4xl font-bold mb-3">Meet the Experts</h3>
          <p className="text-gray-700 mb-4 px-4 md:px-0">Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum.</p>
          <a className="inline-block mt-4 px-8 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300" href="#">Join Our Team</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[team5, team6, team1, team2, team3, team4].map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src={image} className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" alt={`Team member ${index + 1}`} />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="flex space-x-4">
                  <a className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-blue-700" href="#url">
                    <FaFacebook />
                  </a>
                  <a className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-blue-300" href="#url">
                    <FaTwitter />
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold text-primary">Name {index + 1}</h4>
                <h6 className="text-lg text-gray-600">Position</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
