import React from 'react';
import { About, Banner, Features, Post, Review, Slider, Whyus } from '../containers';

const Homepage = () => {
  return (
    <div className="homepage">
        <Slider />
        <Features />
        <About />
        <Whyus />
        <Banner />
        <Post />
        <Review />
    </div>
  )
}

export default Homepage