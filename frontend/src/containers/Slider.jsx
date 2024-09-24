import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import b1 from "../../public/assets/images/banner1.jpg";
import b2 from "../../public/assets/images/banner2.jpg";
import b3 from "../../public/assets/images/banner3.jpg";

const slides = [
  {
    title: "Grooming & Pet Supplies.",
    description:
      "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit.",
    location: "253 Adams Ave, Iowa",
    hours: "Mon - Sat 8am - 6pm",
    image: b1,
  },
  {
    title: "Caring is More Daring.",
    description:
      "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit.",
    location: "253 Adams Ave, Iowa",
    hours: "Mon - Sat 8am - 6pm",
    image: b2,
  },
  {
    title: "Grooming & Pet Supplies.",
    description:
      "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit.",
    location: "253 Adams Ave, Iowa",
    hours: "Mon - Sat 8am - 6pm",
    image: b3,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Swipe handlers for touch gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  // Handle manual previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle manual next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative z-10" id="home" {...handlers}>
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center text-white max-w-3xl mx-auto">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl mb-4 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <a
                  href="/about"
                  className="inline-block mt-4 px-8 py-3 text-sm font-medium border border-white text-white hover:bg-blue-600 hover:border-blue-600 transition"
                >
                  Read More
                </a>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <h5 className="text-base sm:text-lg">
                    <strong>Location:</strong> {slides[currentSlide].location}
                  </h5>
                  <h5 className="text-base sm:text-lg text-right">
                    <strong>Open Hours:</strong> {slides[currentSlide].hours}
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Slider;
