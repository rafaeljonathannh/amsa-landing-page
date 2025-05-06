// src/pages/AboutUs.jsx
import { useEffect } from 'react';
import AOS from 'aos';

const AboutUs = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">About Us</h1>
            <p className="text-xl opacity-90" data-aos="fade-up" data-aos-delay="100">
              Learn more about the Asian Medical Students' Association, our history, mission, and the values that drive our organization.
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
                <p className="text-gray-600 mb-4">
                  The Asian Medical Students' Association was founded in [year] with the vision of connecting medical students across Asia to foster collaboration, knowledge exchange, and cultural understanding.
                </p>
                <p className="text-gray-600 mb-4">
                  What began as a small group of passionate students has grown into a robust organization spanning multiple countries, with thousands of members contributing to medical education, research, and community service.
                </p>
                <p className="text-gray-600">
                  Throughout our journey, we have remained committed to our founding principles while adapting to the evolving landscape of medical education and healthcare delivery.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
                <img
                  src="/src/assets/images/history-image.jpg"
                  alt="AMSA History"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our decisions, shape our culture, and define our approach to medical education and community service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                }
                title="Collaboration"
                description="We believe in the power of working together across borders, disciplines, and backgrounds to achieve common goals and address shared challenges."
                delay={100}
              />
              <ValueCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                }
                title="Excellence"
                description="We strive for the highest standards in medical education, research, and community service, continuously pushing boundaries and seeking improvement."
                delay={200}
              />
              <ValueCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                }
                title="Compassion"
                description="We approach our work with empathy and genuine concern for the well-being of patients, communities, and fellow medical students."
                delay={300}
              />
              <ValueCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                }
                title="Transparency"
                description="We operate with openness and honesty in all our activities, maintaining clear communication and accountability to our members and partners."
                delay={400}
              />
              <ValueCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                }
                title="Education"
                description="We believe in the transformative power of education and its ability to empower individuals, improve healthcare, and drive positive change in society."
                delay={500}
              />
              <ValueCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                }
                title="Diversity"
                description="We celebrate the rich tapestry of cultures, perspectives, and experiences that make up our community, recognizing that our differences strengthen us."
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated individuals who guide our organization and drive our mission forward.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                name="Dr. Jane Doe"
                position="President"
                image="/src/assets/images/team1.jpg"
                delay={100}
              />
              <TeamMember
                name="Dr. John Smith"
                position="Vice President"
                image="/src/assets/images/team2.jpg"
                delay={200}
              />
              <TeamMember
                name="Dr. Alex Johnson"
                position="Secretary General"
                image="/src/assets/images/team3.jpg"
                delay={300}
              />
              <TeamMember
                name="Dr. Sarah Williams"
                position="Treasurer"
                image="/src/assets/images/team4.jpg"
                delay={400}
              />
              <TeamMember
                name="Dr. Michael Brown"
                position="Director of Academic Affairs"
                image="/src/assets/images/team5.jpg"
                delay={500}
              />
              <TeamMember
                name="Dr. Emily Davis"
                position="Director of External Relations"
                image="/src/assets/images/team6.jpg"
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
              Become part of a vibrant network of medical students working together to shape the future of healthcare in Asia.
            </p>
            <button
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors px-8 py-3 rounded-full font-medium"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Become a Member
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description, delay }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-md text-center"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Team Member Component
const TeamMember = ({ name, position, image, delay }) => (
  <div
    className="bg-white rounded-lg overflow-hidden shadow-md"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <img src={image} alt={name} className="w-full h-56 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-blue-600">{position}</p>
    </div>
  </div>
);

export default AboutUs;