// src/components/Sections/DivisionsListSection.jsx

const DivisionsListSection = ({ divisions }) => {
  return (
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
  );
};

export default DivisionsListSection;