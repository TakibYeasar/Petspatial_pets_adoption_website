import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import team1 from "../../public/assets/images/team1.jpg";
import team2 from "../../public/assets/images/team2.jpg";
import team3 from "../../public/assets/images/team3.jpg";
import team4 from "../../public/assets/images/team4.jpg";
import team5 from "../../public/assets/images/team5.jpg";
import team6 from "../../public/assets/images/team6.jpg";

const testimonials = [
  {
    image: team1,
    quote: "Pellentesque libero ut justo",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    name: "Johnson William",
    city: "Example City"
  },
  {
    image: team2,
    quote: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    name: "Alexander Sakura",
    city: "Example City"
  },
  {
    image: team3,
    quote: "Pellentesque libero ut justo",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    name: "John Wilson",
    city: "Example City"
  },
  {
    image: team4,
    quote: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    name: "Julia Sakura",
    city: "Example City"
  },
  {
    image: team5,
    quote: "Pellentesque libero ut justo",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    name: "John Wilson",
    city: "Example City"
  },
  {
    image: team6,
    quote: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    name: "Julia Sakura",
    city: "Example City"
  }
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 py-5" id="testimonials">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row md:p-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="text-left p-6">
              <h6 className="text-base font-semibold mb-2 text-primary"><span>Reviews</span></h6>
              <h3 className="text-3xl font-bold">Testimonials</h3>
              <p className="mt-3 text-gray-600">Lorem ipsum viverra feugiat. Pellentesque libero ut justo, ultrices in ligula. Semper at tempor.</p>
            </div>
          </div>
          <div className="md:w-2/3 p-6 relative">
            <div className="flex justify-between items-center absolute inset-0 z-10">
              <button onClick={handlePrev} className="bg-gray-300 p-2 rounded-full">Prev</button>
              <button onClick={handleNext} className="bg-gray-300 p-2 rounded-full">Next</button>
            </div>
            <div className="relative">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  index === currentSlide && (
                    <motion.div
                      key={index}
                      className="flex flex-wrap"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <blockquote className="italic mb-4">
                            <q className="text-xl font-semibold text-gray-800">{testimonial.quote}</q>
                          </blockquote>
                          <p className="text-gray-600">{testimonial.text}</p>
                          <div className="flex items-center mt-4">
                            <img src={testimonial.image} alt="team member" className="w-16 h-16 rounded-full" />
                            <div className="ml-4">
                              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                              <p className="text-sm text-gray-500">{testimonial.city}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-10">
          <div className="w-1/2 sm:w-1/4 text-center">
            <p className="text-4xl font-bold text-gray-800">1500+</p>
            <h3 className="text-lg font-semibold text-primary mt-2">Acres Of Forests</h3>
          </div>
          <div className="w-1/2 sm:w-1/4 text-center">
            <p className="text-4xl font-bold text-gray-800">1160+</p>
            <h3 className="text-lg font-semibold text-primary mt-2">Million People</h3>
          </div>
          <div className="w-1/2 sm:w-1/4 text-center mt-6 sm:mt-0">
            <p className="text-4xl font-bold text-gray-800">1145k</p>
            <h3 className="text-lg font-semibold text-primary mt-2">Thousand Hectares</h3>
          </div>
          <div className="w-1/2 sm:w-1/4 text-center mt-6 sm:mt-0">
            <p className="text-4xl font-bold text-gray-800">1145k</p>
            <h3 className="text-lg font-semibold text-primary mt-2">Billion Donations</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
