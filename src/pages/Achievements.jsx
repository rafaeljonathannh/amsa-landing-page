// src/pages/Achievements.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';

const Achievements = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'academic', name: 'Academic' },
    { id: 'community', name: 'Community Service' },
    { id: 'research', name: 'Research' },
    { id: 'international', name: 'International Recognition' }
  ];

  const achievements = [
    {
      id: 1,
      title: 'National Biomedical Competition Award',
      category: 'academic',
      year: '2024',
      description: 'First place in the national biomedical research competition, presenting innovative approaches to diabetes management.',
      image: '/src/assets/images/achievement1.jpg',
      details: [
        'Presented a novel research on non-invasive glucose monitoring',
        'Competed against 50 other medical schools',
        'Included a prototype demonstration and clinical trial proposal',
        'Judged by a panel of experts in endocrinology and biomedical engineering'
      ]
    },
    {
      id: 2,
      title: 'Community Health Initiative Impact',
      category: 'community',
      year: '2023',
      description: 'Implemented a community health program that served over 5,000 underprivileged individuals, providing free health screenings and education.',
      image: '/src/assets/images/achievement2.jpg',
      details: [
        'Organized 20 health camps in rural areas',
        'Provided free health screenings for common conditions',
        'Distributed educational materials in local languages',
        'Trained 100 community health volunteers',
        'Established follow-up care pathways with local hospitals'
      ]
    },
    {
      id: 3,
      title: 'Asian Medical Students Conference Hosting',
      category: 'international',
      year: '2023',
      description: 'Successfully hosted the Asian Medical Students Conference with over 500 attendees from 15 countries, featuring renowned speakers and workshops.',
      image: '/src/assets/images/achievement3.jpg',
      details: [
        'Organized a week-long conference with 30+ sessions',
        'Featured keynote speakers from WHO and leading medical institutions',
        'Included hands-on workshops on medical skills',
        'Facilitated cultural exchange activities',
        'Received excellent feedback with 95% satisfaction rate'
      ]
    },
    {
      id: 4,
      title: 'Medical Journal Publication',
      category: 'research',
      year: '2022',
      description: 'Published a peer-reviewed research paper on sustainable healthcare practices in emerging economies in a respected international medical journal.',
      image: '/src/assets/images/achievement4.jpg',
      details: [
        'Conducted original research with a team of medical students',
        'Gathered data from 5 different countries',
        'Developed recommendations for resource-limited settings',
        'Cited by multiple subsequent publications',
        'Presented findings at two international conferences'
      ]
    },
    {
      id: 5,
      title: 'Regional Medical Ethics Debate Championship',
      category: 'academic',
      year: '2022',
      description: 'Won the Regional Medical Ethics Debate Championship, demonstrating excellence in ethical reasoning and argumentation.',
      image: '/src/assets/images/achievement5.jpg',
      details: [
        'Competed against 16 medical schools in the region',
        'Debated complex ethical dilemmas in healthcare',
        'Demonstrated deep understanding of medical ethics principles',
        'Received recognition for innovative arguments',
        'Qualified for international ethics forum'
      ]
    },
    {
      id: 6,
      title: 'Public Health Awareness Campaign Award',
      category: 'community',
      year: '2021',
      description: 'Received national recognition for an innovative public health awareness campaign on mental health for teenagers.',
      image: '/src/assets/images/achievement6.jpg',
      details: [
        'Reached over 50,000 teenagers through social media',
        'Created age-appropriate educational content',
        'Partnered with 25 schools for in-person workshops',
        'Developed a peer support program',
        'Published a guide for educators and parents'
      ]
    },
    {
      id: 7,
      title: 'WHO Collaboration Project',
      category: 'international',
      year: '2021',
      description: 'Selected as a partner organization by the World Health Organization for a youth engagement project on global health priorities.',
      image: '/src/assets/images/achievement7.jpg',
      details: [
        'One of only three student organizations selected globally',
        'Contributed to policy recommendations for youth health',
        'Participated in high-level stakeholder meetings',
        'Implemented local projects aligned with WHO priorities',
        'Developed training materials used in multiple countries'
      ]
    },
    {
      id: 8,
      title: 'Medical Innovation Challenge Winner',
      category: 'research',
      year: '2020',
      description: 'First prize in the Medical Innovation Challenge for developing a low-cost medical device for rural healthcare settings.',
      image: '/src/assets/images/achievement8.jpg',
      details: [
        'Created a portable diagnostic tool using affordable materials',
        'Designed for use in areas without reliable electricity',
        'Tested prototype in three rural clinics',
        'Received funding for further development',
        'Filed provisional patent application'
      ]
    }
  ];
  
  // Filter achievements based on active category
  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Our Achievements</h1>
            <p className="text-xl opacity-90" data-aos="fade-up" data-aos-delay="100">
              Celebrating our milestones and recognitions that highlight our commitment to excellence in medical education and community service.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
                  data-aos="fade-up"
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="text-md font-semibold text-gray-800 mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {achievement.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800">
                      Read more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">Achievement Highlights</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A snapshot of our impact and recognition across various domains of medical education and community service.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard number="25+" label="Awards Received" delay={100} />
              <StatCard number="15+" label="Countries Impacted" delay={200} />
              <StatCard number="12" label="Research Publications" delay={300} />
              <StatCard number="50K+" label="Community Members Served" delay={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up">Be Part of Our Success Story</h2>
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Join AMSA and contribute to our growing list of achievements while developing your skills and making a difference in healthcare.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors" data-aos="fade-up" data-aos-delay="200">
              Join AMSA Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ number, label, delay }) => (
  <div className="text-center" data-aos="fade-up" data-aos-delay={delay}>
    <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{number}</div>
    <div className="text-gray-300 font-medium">{label}</div>
  </div>
);

export default Achievements;