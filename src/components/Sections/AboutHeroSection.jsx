// src/components/Sections/AboutHeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/src/assets/images/about-hero.jpg" 
          alt="AMSA Team" 
          className="w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: '30% center',
            filter: 'grayscale(100%) brightness(0.75) sepia(20%) hue-rotate(200deg)',
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
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
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/src/assets/images/amsa-ui-white-logo.png" 
          alt="AMSA-UI Logo" 
          style={{
            width: '750px',
            height: 'auto',
            margin: '0 auto'
          }}
        />
      </motion.div>
      
      {/* Together We Grow logo */}
      <motion.div 
        className="absolute top-24 left-20 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src="/src/assets/images/together-we-grow.svg" 
          alt="Together We Grow" 
          className="h-12"
        />
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;