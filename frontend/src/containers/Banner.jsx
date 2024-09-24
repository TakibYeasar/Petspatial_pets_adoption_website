import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative py-10 lg:py-20 bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url(/assets/images/banner4.jpg)' }}
      id="about"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 pr-5">
            <div className="text-left text-white">
              <h6 className="text-xl font-semibold mb-3">
                Better pet nutrition.
              </h6>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The finest fresh food and all your pet needs.
              </h3>
              <p className="text-lg sm:text-xl opacity-80 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet elit consectetuer adipisci elit. Lorem ipsum dolor sit amet elit consectetuer adipisci elit. Iure voluptatibus explicabo officia.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
              >
                Contact Now
              </a>
            </div>
          </div>

          <div className="lg:w-5/12 mt-10 lg:mt-0 flex justify-center relative">
            <a
              href="#small-dialog"
              className="play-view flex items-center justify-center w-16 h-16 bg-white rounded-full text-primary transition-transform transform hover:scale-110"
            >
              <i className="fa fa-play text-lg"></i>
            </a>
            <div id="small-dialog" className="hidden">
              <iframe
                src="https://player.vimeo.com/video/101587706"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
