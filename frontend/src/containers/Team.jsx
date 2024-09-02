import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import team1 from '../../public/assets/images/team1.jpg';
import team2 from '../../public/assets/images/team2.jpg';
import team3 from '../../public/assets/images/team3.jpg';
import team4 from '../../public/assets/images/team4.jpg';
import team5 from '../../public/assets/images/team5.jpg';
import team6 from '../../public/assets/images/team6.jpg';

const Team = () => {
  return (
    <section className="bg-gray-200 py-5" id="team">
      <div className="container py-5">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 max-w-md">
            <h6 className="text-gray-500 text-lg mb-2">Our Team</h6>
            <h3 className="text-primary text-3xl font-bold mb-3">Team Experts</h3>
            <p className="text-gray-700">Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum. molestie nulla felis, vitae feugiat justo pulvinar et.</p>
            <a className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark" href="#">Join Our Team</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[team5, team6, team1, team2, team3, team4].map((image, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img src={image} className="w-full rounded-lg" alt={`Team member ${index + 1}`} />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <a className="inline-block w-10 h-10 bg-blue-800 text-white rounded-full items-center justify-center mx-1 hover:bg-blue-700" href="#url">
                      <FaFacebook />
                    </a>
                    <a className="inline-block w-10 h-10 bg-blue-400 text-white rounded-full items-center justify-center mx-1 hover:bg-blue-300" href="#url">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mt-4">Name {index + 1}</h4>
              <h6 className="text-lg text-gray-600">Position</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
