import React from 'react';

const Banner = () => {
  return (
    <section className="relative py-5 bg-cover bg-center flex items-center" style={{ backgroundImage: 'url(../../public/assets/images/banner4.jpg)' }} id="about">
      <div className="absolute inset-0 bg-black/55 z-0"></div>
      <div className="container mx-auto py-10 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 pr-5">
            <div className="text-left text-white">
              <h6 className="mb-2 text-lg font-semibold"><span>Better pet nutrition.</span></h6>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">The finest fresh food and all your pet needs.</h3>
              <p className="mt-3 mb-6 opacity-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Iure voluptatibus explicabo officia.</p>
              <a href="/contact" className="inline-block bg-white text-primary px-6 py-3 font-semibold rounded-full hover:bg-gray-200 transition">Contact Now</a>
            </div>
          </div>
          <div className="lg:w-5/12 mt-10 lg:mt-0 flex justify-center relative">
            <a href="#small-dialog" className="play-view flex items-center justify-center w-14 h-14 bg-white rounded-full text-primary transition-transform transform hover:scale-110">
              <span className="fa fa-play"></span>
            </a>
            <div id="small-dialog" className="hidden">
              <iframe src="https://player.vimeo.com/video/101587706" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
