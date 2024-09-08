import React from 'react';
import { About, Banner, Features, Pets, Review, Slider, Whyus } from '../containers';

const Homepage = () => {
  return (
    <div className="homepage">
        <Slider />
        <Features />
        <About />
        <Whyus />
        <Banner />
        <Pets />
        <Review />
    </div>
  )
}

export default Homepage