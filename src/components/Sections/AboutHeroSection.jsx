// src/components/Sections/AboutHeroSection.jsx
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/about-hero.jpg" 
          alt="AMSA Team" 
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.6)',
          }}
        />
      </div>
      
      {/* Center Logo */}
      <div className="relative z-10 text-center">
        <img 
          src="/src/assets/images/amsa-ui-white-logo.png" 
          alt="AMSA-UI Logo" 
          className="w-64 h-auto mx-auto"
        />
        <h2 className="text-white text-xl mt-4">UNIVERSITAS INDONESIA</h2>
      </div>
      
      {/* Together We Grow small text */}
      <div className="absolute top-24 left-24 text-white z-10">
        <p className="text-sm font-light">Together We Grow</p>
      </div>
    </section>
  );
};

export default AboutHeroSection;