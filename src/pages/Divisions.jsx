// src/pages/Divisions.jsx
import { useEffect } from 'react';
import AOS from 'aos';

const Divisions = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  const divisions = [
    {
      id: 'academics',
      title: 'Academics',
      description: 'Focused on enhancing medical education through workshops, seminars, and research opportunities that complement the academic curriculum.',
      image: '/src/assets/images/academics.jpg',
      activities: [
        'Medical education workshops and seminars',
        'Research methodology training',
        'Case study competitions',
        'Journal clubs and literature reviews',
        'Academic mentorship programs'
      ],
      achievements: [
        'Organized 15+ educational workshops annually',
        'Published 5 student research papers in medical journals',
        'Hosted international medical quiz competitions'
      ]
    },
    {
      id: 'exchange',
      title: 'Asian Medical Students Exchange Program',
      description: 'Facilitates international exchange programs that allow medical students to gain exposure to different healthcare systems and cultural practices.',
      image: '/src/assets/images/exchange.jpg',
      activities: [
        'Clinical exchange programs in partner hospitals',
        'Research exchange opportunities',
        'Cultural immersion experiences',
        'International healthcare system studies',
        'Cross-cultural medical practice observations'
      ],
      achievements: [
        'Facilitated exchanges for 100+ students annually',
        'Established partnerships with 20+ medical schools across Asia',
        'Organized pre-departure training for all exchange participants'
      ]
    },
    {
      id: 'outreach',
      title: 'Community Outreach',
      description: 'Designs and implements healthcare initiatives that serve underserved communities, focusing on preventive care and health education.',
      image: '/src/assets/images/outreach.jpg',
      activities: [
        'Community health screenings',
        'Health education campaigns',
        'First aid training for community members',
        'Public health awareness programs',
        'Medical camps in rural and underserved areas'
      ],
      achievements: [
        'Served over 5,000 patients through community clinics',
        'Conducted health education in 30+ schools',
        'Developed health educational materials in multiple languages'
      ]
    },
    {
      id: 'membership',
      title: 'Membership and Development',
      description: 'Focuses on recruiting and nurturing members through leadership development, mentorship programs, and networking opportunities.',
      image: '/src/assets/images/membership.jpg',
      activities: [
        'Leadership development workshops',
        'Peer mentorship programs',
        'Career guidance sessions',
        'Professional development seminars',
        'Alumni networking events'
      ],
      achievements: [
        'Increased membership by 25% annually',
        'Implemented successful mentorship framework',
        'Organized regional leadership summits'
      ]
    },
    {
      id: 'relations',
      title: 'Public Relation and Delegation',
      description: 'Manages relationships with external stakeholders, including other medical associations, healthcare institutions, and governmental bodies.',
      image: '/src/assets/images/relations.jpg',
      activities: [
        'Partnership building with healthcare organizations',
        'Representation at international medical conferences',
        'Collaborative projects with other medical associations',
        'Government liaison for healthcare policy discussions',
        'Media relationships and public communications'
      ],
      achievements: [
        'Established 10+ new organizational partnerships',
        'Represented AMSA at 5 international forums',
        'Secured sponsorships for major events'
      ]
    },
    {
      id: 'publication',
      title: 'Publication and Promotion',
      description: 'Produces and disseminates informative content through various media channels to promote health awareness and AMSA initiatives.',
      image: '/src/assets/images/publication.jpg',
      activities: [
        'Publishing the AMSA newsletter and journal',
        'Social media campaign management',
        'Website content development',
        'Creation of educational materials',
        'Documentation of AMSA events and achievements'
      ],
      achievements: [
        'Published quarterly medical journal',
        'Developed comprehensive social media presence',
        'Created promotional materials for all major initiatives'
      ]
    },
    {
      id: 'recruitment',
      title: 'Recruitment',
      description: 'Focuses on attracting talented medical students to join AMSA through targeted recruitment campaigns and engagement activities.',
      image: '/src/assets/images/recruitment.jpg',
      activities: [
        'Campus recruitment drives',
        'Orientation programs for new members',
        'Information sessions on AMSA opportunities',
        'Engagement activities for potential members',
        'Collaboration with medical school administrations'
      ],
      achievements: [
        'Recruited from 30+ medical schools',
        'Developed standardized orientation program',
        'Increased diversity in membership composition'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Our Divisions</h1>
            <p className="text-xl opacity-90" data-aos="fade-up" data-aos-delay="100">
              Explore the specialized divisions that form the backbone of AMSA's work, each focused on a unique aspect of medical education and community service.
            </p>
          </div>
        </div>
      </div>

      {/* Divisions List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {divisions.map((division, index) => (
              <div 
                key={division.id} 
                className={`pb-16 mb-16 ${index !== divisions.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div 
                    className="rounded-lg overflow-hidden shadow-xl" 
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  >
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{division.title}</h2>
                    <p className="text-gray-600 mb-6">{division.description}</p>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Activities</h3>
                      <ul className="space-y-2">
                        {division.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Achievements</h3>
                      <ul className="space-y-2">
                        {division.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-blue-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                        Join This Division
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up">Find Your Place in AMSA</h2>
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              With multiple divisions focusing on different aspects of medical education and community service, there's a place for everyone to contribute their unique talents and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors">
                Apply for Membership
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-full transition-colors">
                Contact Division Leaders
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Divisions;