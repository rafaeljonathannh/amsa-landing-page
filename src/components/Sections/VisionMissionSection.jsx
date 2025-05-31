// src/components/Sections/VisionMissionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* Gradient overlay for transition to Organogram section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(110,146,119,0.3) 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Our Vision - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              {/* Vision SVG with icon and text */}
              <motion.div 
                className="flex justify-center mb-8"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/src/assets/images/vision.svg" 
                  alt="Our Vision" 
                  className="h-60 w-auto" 
                />
              </motion.div>
              
              {/* Vision Description - Center aligned paragraph */}
              <motion.p 
                className="text-gray-800 leading-relaxed text-lg text-center px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  type: "spring", 
                  stiffness: 300 
                }}
              >
                AMSA-UI as a family where each member's unique interests on opportunities as medical students are supported within a strong familial bond, and discover their full potential, while making significant societal impact and presence to enhance AMSA-UI influence
              </motion.p>
            </motion.div>
            
            {/* Our Missions - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Mission SVG */}
              <motion.div 
                className="mb-12"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/src/assets/images/mission.svg" 
                  alt="Our Missions" 
                  className="h-20 w-auto" 
                />
              </motion.div>
              
              {/* Mission Points - Updated with animations */}
              <div className="space-y-12">
                {/* Mission 1 */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1,
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  <div className="mr-6">
                    <div className="text-4xl font-bold text-[#184A3C]">01.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      Advancing members' opportunities and competencies across local, national, and international events by ensuring sustained active participation
                    </p>
                  </div>
                </motion.div>
                
                {/* Mission 2 */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2,
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  <div className="mr-6">
                    <div className="text-4xl font-bold text-[#184A3C]">02.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      Establish and maintain a safe supportive, and nurturing environment that encourages and enables members to realize and reach their fullest potential
                    </p>
                  </div>
                </motion.div>
                
                {/* Mission 3 */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3,
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  <div className="mr-6">
                    <div className="text-4xl font-bold text-[#184A3C]">03.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      Promote and support comprehensive social work programs that serve as platforms for AMSA-UI members to make profound, positive impacts on the community
                    </p>
                  </div>
                </motion.div>
                
                {/* Mission 4 */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4,
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  <div className="mr-6">
                    <div className="text-4xl font-bold text-[#184A3C]">04.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      Strategically broaden networking opportunities and extend publication reach to enhance AMSA-UI branding by collaborating withe xternal organizations and stakeholders
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;