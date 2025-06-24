import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import PromoBanner from '../components/home/PromoBanner';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PromoBanner />
      <Testimonials />
    </div>
  );
};

export default HomePage;