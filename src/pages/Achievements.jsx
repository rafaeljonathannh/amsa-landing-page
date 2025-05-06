// src/components/Sections/AchievementsSection.jsx
import { Link } from 'react-router-dom';

const AchievementsSection = () => {
    const achievements = [
      {
        title: "National Biomedical Competition",
        year: "2024",
        description: "First place in the national biomedical research competition, presenting innovative approaches to diabetes management.",
        image: "/src/assets/images/achievement1.jpg",
      },
      {
        title: "Community Health Initiative",
        year: "2023",
        description: "Implemented a community health program that served over 5,000 underprivileged individuals, providing free health screenings and education.",
        image: "/src/assets/images/achievement2.jpg",
      },
      {
        title: "International Medical Conference",
        year: "2023",
        description: "Hosted the Asian Medical Students Conference with over 500 attendees from 15 countries, featuring renowned speakers and workshops.",
        image: "/src/assets/images/achievement3.jpg",
      },
      {
        title: "Medical Journal Publication",
        year: "2022",
        description: "Published a peer-reviewed research paper on sustainable healthcare practices in emerging economies.",
        image: "/src/assets/images/achievement4.jpg",
      },
    ];
  
    return (
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Celebrating our milestones and recognitions that highlight our commitment to excellence in medical education and community service.
              </p>
            </div>
  
            {/* Achievements timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
  
              {/* Achievement cards */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
  
                    {/* Timeline card */}
                    <div className="md:w-1/2 md:pr-8 md:pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
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
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Call to action */}
            <div className="text-center mt-16" data-aos="fade-up">
              <Link
                to="/achievements"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
              >
                View All Achievements
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AchievementsSection;