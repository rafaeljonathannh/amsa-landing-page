// src/components/Sections/VisionMissionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Our Vision - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Vision SVG with icon and text */}
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/src/assets/images/vision.svg" 
                  alt="Our Vision" 
                  className="h-28 w-auto" 
                />
              </motion.div>
              
              {/* Vision Description - Left aligned paragraph */}
              <motion.p 
                className="text-gray-800 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
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
                className="mb-10"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/src/assets/images/mission.svg" 
                  alt="Our Missions" 
                  className="h-16 w-auto" 
                />
              </motion.div>
              
              {/* Mission Points - Updated with animations */}
              <div className="space-y-10">
                {/* Mission 1 */}
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="mr-4">
                    <div className="text-3xl font-bold text-[#184A3C]">01.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed">
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
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="mr-4">
                    <div className="text-3xl font-bold text-[#184A3C]">02.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed">
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
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="mr-4">
                    <div className="text-3xl font-bold text-[#184A3C]">03.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed">
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
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="mr-4">
                    <div className="text-3xl font-bold text-[#184A3C]">04.</div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-800 leading-relaxed">
                      Strategically broaden networking opportunities and extend publication reach to enhance AMSA-UI branding by collaborating withe eternal organizations and stakeholders
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