// src/components/Sections/AboutHeroSection.jsx
import { Link } from 'react-router-dom';

const AboutHeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero-bg.jpg" 
          alt="AMSA Group" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Logo */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
        <img 
          src="/src/assets/images/together-we-grow.png" 
          alt="Together We Grow" 
          className="h-12 mb-6"
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;