// src/components/Sections/AchievementsSection.jsx
import achievementsData from '../data/achievementsData';

const AchievementsSection = () => {
    return (
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Achievements timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
  
              {/* Achievement cards */}
              <div className="space-y-12">
                {achievementsData.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
  
                    {/* Timeline card */}
                    <div className="md:w-1/2 md:pr-8 md:pl-8">
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full mb-2">
                          {achievement.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
  
                    {/* Timeline image - hidden on mobile for better layout */}
                    <div className="hidden md:block md:w-1/2 md:px-8 mt-4 md:mt-0">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-85 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AchievementsSection;