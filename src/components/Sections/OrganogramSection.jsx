// src/components/Sections/OrganogramSection.jsx
import React from 'react';

const OrganogramSection = () => {
  return (
    <section className="py-16 bg-[#6E9277] bg-opacity-80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="inline-flex items-baseline">
              <span className="text-4xl font-normal text-white mr-2">Our</span>
              <span className="text-5xl font-script text-white">Organogram</span>
              <span className="text-2xl font-medium text-white ml-4">2024/2025</span>
            </h2>
          </div>
          
          {/* Organogram SVG - Responsive */}
          <div className="mt-12">
            {/* Desktop Version */}
            <div className="hidden md:block">
              <img 
                src="/src/assets/images/organogram.svg" 
                alt="AMSA-UI Organizational Chart 2024/2025" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Mobile Version - Simplified or with zoom option */}
            <div className="md:hidden">
              <div className="relative">
                <img 
                  src="/src/assets/images/organogram-mobile.svg" 
                  alt="AMSA-UI Organizational Chart 2024/2025" 
                  className="w-full h-auto"
                />
                <button 
                  className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-[#184A3C] py-2 px-4 rounded-full text-sm font-medium shadow-md"
                  onClick={() => window.open('/src/assets/images/organogram.svg', '_blank')}
                >
                  Tap to Enlarge
                </button>
              </div>
              <p className="text-white text-center mt-4 text-sm">
                Tap to view the full organizational structure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganogramSection;