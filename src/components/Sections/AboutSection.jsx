// src/components/Sections/AboutSection.jsx

const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
  
            {/* Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div 
                className="rounded-lg overflow-hidden shadow-xl" 
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src="/src/assets/images/about-image.jpg"
                  alt="AMSA Team"
                  className="w-full h-auto object-cover"
                />
              </div>
  
              {/* Text content */}
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  The Asian Medical Students' Association
            </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AMSA is a non-political, non-religious organization established with an objective 
                  to promote the well-being of medical students across Asia. We focus on achieving 
                  academic excellence, personal growth, and professional development of medical 
                  students.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through our various initiatives and programs, we aim to create a collaborative 
                  network of future medical professionals who are compassionate, skilled, and 
                  committed to making a positive impact in healthcare.
                </p>
  
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h4 className="text-3xl font-bold text-blue-600">20+</h4>
                    <p className="text-gray-500 text-sm">Years of Impact</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h4 className="text-3xl font-bold text-blue-600">15+</h4>
                    <p className="text-gray-500 text-sm">Countries</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <h4 className="text-3xl font-bold text-blue-600">1000+</h4>
                    <p className="text-gray-500 text-sm">Members</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              {/* Vision */}
              <div 
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600" 
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading medical student organization in Asia, fostering a 
                  generation of healthcare professionals who are not only skilled in 
                  medical practice but also compassionate leaders committed to addressing 
                  global health challenges.
                </p>
              </div>
  
              {/* Mission */}
              <div 
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500" 
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower medical students through educational programs, international 
                  exchanges, community outreach, and advocacy initiatives that enhance their 
                  academic, professional, and personal development while fostering a sense of 
                  social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;