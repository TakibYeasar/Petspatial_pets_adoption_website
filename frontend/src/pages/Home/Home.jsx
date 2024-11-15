import React from 'react';
import { AboutSection, BannerSection, FeaturesSection, PetsSection, ReviewSection, SliderSection, WhyusSection } from '../../components';

const Home = () => {
  return (
    <div className="homepage">
        <SliderSection />
        <FeaturesSection />
        <AboutSection />
        <WhyusSection />
        <BannerSection />
        <PetsSection />
        <ReviewSection />
    </div>
  )
}

export default Home;