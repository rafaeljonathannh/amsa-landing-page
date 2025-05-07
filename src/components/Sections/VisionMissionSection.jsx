// src/components/Sections/VisionMissionSection.jsx
import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Our Vision */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24">
                  <img 
                    src="/src/assets/images/vision-eye-icon.png" 
                    alt="Vision" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-script text-[#184A3C] mb-6">Our Vision</h2>
              <p className="text-gray-800 leading-relaxed">
                AMSA-UI as a family where each member's unique interests on opportunities as medical students are supported within a strong familial bond, and discover their full potential, while making significant societal impact and presence to enhance AMSA-UI influence
              </p>
            </div>
            
            {/* Our Missions */}
            <div>
              <h2 className="text-4xl font-script text-[#184A3C] mb-10">Our Missions</h2>
              
              <div className="space-y-8">
                {/* Mission 1 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="text-3xl font-bold text-[#184A3C]">01.</div>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      Advancing members' opportunities and competencies across local, national, and international events by ensuring sustained active participation
                    </p>
                  </div>
                </div>
                
                {/* Mission 2 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="text-3xl font-bold text-[#184A3C]">02.</div>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      Establish and maintain a safe supportive, and nurturing environment that encourages and enables members to realize and reach their fullest potential
                    </p>
                  </div>
                </div>
                
                {/* Mission 3 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="text-3xl font-bold text-[#184A3C]">03.</div>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      Promote and support comprehensive social work programs that serve as platforms for AMSA-UI members to make profound, positive impacts on the community
                    </p>
                  </div>
                </div>
                
                {/* Mission 4 */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="text-3xl font-bold text-[#184A3C]">04.</div>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      Strategically broaden networking opportunities and extend publication reach to enhance AMSA-UI branding by collaborating withe eternal organizations and stakeholders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;