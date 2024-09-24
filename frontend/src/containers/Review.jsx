import React, { useState, useEffect, useRef } from 'react';
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    } else if (swipeDistance < -swipeThreshold) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
      );
    }
  };

  return (
    <section className="bg-gray-100 py-5" id="testimonials">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row md:p-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="text-left p-6">
              <h6 className="text-base font-semibold mb-2 text-primary"><span>Reviews</span></h6>
              <h3 className="text-3xl font-bold text-gray-800">Testimonials</h3>
              <p className="mt-3 text-gray-600">Discover what our clients say about us. Your satisfaction is our priority!</p>
            </div>
          </div>
          <div className="md:w-2/3 p-6 relative">
            <div
              className="relative flex"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence>
                {testimonials.slice(currentSlide, currentSlide + 1).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-wrap"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full p-4">
                      <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <blockquote className="italic mb-4">
                          <q className="text-xl font-semibold text-gray-800">{testimonial.quote}</q>
                        </blockquote>
                        <p className="text-gray-600">{testimonial.text}</p>
                        <div className="flex items-center mt-4">
                          <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
