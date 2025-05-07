// src/components/Sections/OrganogramSection.jsx
import React from 'react';

const OrganogramSection = () => {
  return (
    <section className="py-16 bg-[#6E9277] bg-opacity-60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">
            <span className="text-4xl font-light text-white">Our</span>
            <span className="text-4xl font-script text-white ml-3">Organogram</span>
            <span className="text-2xl font-medium text-white ml-4">2024/2025</span>
          </h2>
          
          {/* Organogram Tree Structure */}
          <div className="mt-12">
            {/* This would be replaced with the actual organizational chart */}
            <img 
              src="/src/assets/images/organogram.png" 
              alt="AMSA-UI Organizational Chart" 
              className="w-full h-auto"
            />
            
            {/* Placeholder for organogram - if you want to build it with HTML/CSS instead of image */}
            {/* 
            <div className="flex flex-col items-center">
              <div className="organogram-level-1">
                <div className="organogram-box">
                  <div className="organogram-photo">
                    <img src="/src/assets/images/representative.jpg" alt="Representative" />
                  </div>
                  <div className="organogram-title">Representative</div>
                  <div className="organogram-name">Josh Melvern Arelian</div>
                </div>
              </div>
              
              <div className="organogram-connector"></div>
              
              <div className="organogram-level-2 flex justify-center">
                <!-- More boxes for level 2 -->
              </div>
              
              <!-- ... more levels ... -->
            </div> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganogramSection;