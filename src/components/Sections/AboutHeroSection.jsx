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
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: '30% center',
            filter: 'grayscale(100%) brightness(0.75) sepia(20%) hue-rotate(200deg)',
          }}
        />
      </div>
      
      {/* Blue tint overlay for cold effect */}
      <div className="absolute inset-0 z-1 bg-blue-900 opacity-20"></div>
      
      {/* Gradient overlay for transition to white at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-5"
        style={{
          background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))'
        }}
      ></div>
      
      {/* Center Logo */}
      <div className="relative z-10 text-center">
        <img 
          src="/src/assets/images/amsa-ui-white-logo.png" 
          alt="AMSA-UI Logo" 
          style={{
            width: '350px',
            height: 'auto',
            margin: '0 auto'
          }}
        />
      </div>
      
      {/* Together We Grow small text */}
      <div className="absolute top-24 left-24 text-white z-10">
        <p className="text-sm font-light">Together We Grow</p>
      </div>
    </section>
  );
};

export default AboutHeroSection;