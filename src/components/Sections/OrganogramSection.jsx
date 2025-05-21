// src/components/Sections/OrganogramSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const OrganogramSection = () => {
  return (
    <section 
      className="py-16 relative" 
      style={{ 
        background: 'linear-gradient(to bottom, #6E9277 20%, #6E9277 0%, white 100%)',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Top gradient for smooth transition from Vision Mission section */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(110,146,119,0.3) 0%, rgba(110,146,119,0.7) 50%, rgba(110,146,119,1) 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="inline-flex items-baseline">
              <motion.span 
                className="text-4xl font-normal text-white mr-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.6)' }}
              >
                Our
              </motion.span>
              <motion.span 
                className="text-5xl font-script text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.7)' }}
              >
                Organogram
              </motion.span>
              <motion.span 
                className="text-2xl font-medium text-white ml-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.6)' }}
              >
                2024/2025
              </motion.span>
            </h2>
          </motion.div>
          
          {/* Organogram SVG - Responsive */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Desktop Version */}
            <div className="hidden md:block">
              <motion.img 
                src="/src/assets/images/organogram.svg" 
                alt="AMSA-UI Organizational Chart 2024/2025" 
                className="w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
            
            {/* Mobile Version - Simplified or with zoom option */}
            <div className="md:hidden">
              <div className="relative">
                <motion.img 
                  src="/src/assets/images/organogram-mobile.svg" 
                  alt="AMSA-UI Organizational Chart 2024/2025" 
                  className="w-full h-auto"
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 40 }}
                />
                <motion.button 
                  className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-[#184A3C] py-2 px-4 rounded-full text-sm font-medium shadow-md"
                  onClick={() => window.open('/src/assets/images/organogram.svg', '_blank')}
                  whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tap to Enlarge
                </motion.button>
              </div>
              <motion.p 
                className="text-white text-center mt-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Tap to view the full organizational structure
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganogramSection;