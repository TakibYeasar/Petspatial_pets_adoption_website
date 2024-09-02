import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import b1 from "../../public/assets/images/banner1.jpg";
import b2 from "../../public/assets/images/banner2.jpg";
import b3 from "../../public/assets/images/banner3.jpg";

const images = [b1, b2, b3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [inView, controls]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10" id="home" ref={ref}>
      <div className="relative">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center min-h-[720px] flex items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            style={{ backgroundImage: `url(${image})` }}
            animate={controls}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 text-center text-white px-4 py-6">
              <div className="container mx-auto">
                <div className="mb-6">
                  <h3 className="text-5xl lg:text-7xl font-bold mb-4">Grooming & Pet Supplies.</h3>
                  <p className="text-lg lg:text-xl mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit.</p>
                  <a href="/about" className="inline-block border border-white text-white py-2 px-6 font-semibold hover:bg-blue-500 hover:border-blue-500">Read More</a>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                  <h5 className="text-white">Our Location : 253 Adams Ave, Iowa</h5>
                  <h5 className="text-white text-right">Open Hours : Mon - Sat 8am - 6pm</h5>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Slider;
