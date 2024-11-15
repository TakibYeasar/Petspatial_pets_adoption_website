import React from 'react';
import { FaCuttlefish, FaShower, FaSignLanguage, FaSitemap, FaSnowflake, FaUserMd } from "react-icons/fa";

const featuresData = [
  { icon: <FaSnowflake />, title: 'Dog Walking' },
  { icon: <FaCuttlefish />, title: 'Healthy Meals' },
  { icon: <FaSignLanguage />, title: 'Pet Sitting' },
  { icon: <FaSitemap />, title: 'Dog Activities' },
  { icon: <FaShower />, title: 'Pet Daycare' },
  { icon: <FaUserMd />, title: 'Pet Grooming' },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-5" id="features">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap justify-between">
          {featuresData.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-3 mb-8">
              <div className="p-6 transition-transform duration-500 ease-in-out rounded-lg bg-gray-200 border border-gray-200 hover:bg-gray-100 hover:border-blue-500">
                <div className="text-4xl text-blue-500">
                  {feature.icon}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-gray-800 hover:text-blue-500">
                  <a href="#feature" className="no-underline">{feature.title}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
