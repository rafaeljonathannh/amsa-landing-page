// src/pages/BukuPutih.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';

const BukuPutih = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  const [activeYear, setActiveYear] = useState('2024');

  const bukuPutih = [
    {
      year: '2024',
      title: 'Buku Putih AMSA 2024',
      subtitle: 'Advancing Medical Education in the Digital Era',
      description: 'Documenting our initiatives, achievements, and progress in advancing medical education and community healthcare throughout Asia in 2024.',
      image: '/src/assets/images/buku-putih-2024.jpg',
      pdfLink: '#',
      chapters: [
        'Message from the President',
        'Executive Summary',
        'Organizational Structure',
        'Strategic Vision 2024-2025',
        'Divisional Reports',
        'Financial Statement',
        'International Collaborations',
        'Research Highlights',
        'Community Impact Assessment',
        'Future Directions'
      ]
    },
    {
      year: '2023',
      title: 'Buku Putih AMSA 2023',
      subtitle: 'Building Resilience in Medical Education',
      description: 'A comprehensive overview of our organization\'s activities, collaborations, and impact in the field of medical education for the year 2023.',
      image: '/src/assets/images/buku-putih-2023.jpg',
      pdfLink: '#',
      chapters: [
        'Message from the President',
        'Executive Summary',
        'Organizational Structure',
        'Strategic Vision 2023-2024',
        'Divisional Reports',
        'Financial Statement',
        'International Collaborations',
        'Research Highlights',
        'Community Impact Assessment',
        'Future Directions'
      ]
    },
    {
      year: '2022',
      title: 'Buku Putih AMSA 2022',
      subtitle: 'Reimagining Medical Education Post-Pandemic',
      description: 'Highlighting our growth, challenges overcome, and significant contributions to healthcare education and community service in 2022.',
      image: '/src/assets/images/buku-putih-2022.jpg',
      pdfLink: '#',
      chapters: [
        'Message from the President',
        'Executive Summary',
        'Organizational Structure',
        'Strategic Vision 2022-2023',
        'Divisional Reports',
        'Financial Statement',
        'International Collaborations',
        'Research Highlights',
        'Community Impact Assessment',
        'Future Directions'
      ]
    },
    {
      year: '2021',
      title: 'Buku Putih AMSA 2021',
      subtitle: 'Adapting to Change in Healthcare Education',
      description: 'Showcasing our resilience and adaptability during the pandemic while continuing to serve the medical student community in 2021.',
      image: '/src/assets/images/buku-putih-2021.jpg',
      pdfLink: '#',
      chapters: [
        'Message from the President',
        'Executive Summary',
        'Organizational Structure',
        'Strategic Vision 2021-2022',
        'Divisional Reports',
        'Financial Statement',
        'International Collaborations',
        'Research Highlights',
        'Community Impact Assessment',
        'Future Directions'
      ]
    }
  ];

  // Filter buku putih based on active year
  const activeBukuPutih = bukuPutih.find(book => book.year === activeYear);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Buku Putih</h1>
            <p className="text-xl opacity-90" data-aos="fade-up" data-aos-delay="100">
              Our annual reports documenting AMSA's journey, achievements, and vision for the future of medical education in Asia.
            </p>
          </div>
        </div>
      </div>

      {/* Year Selection */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-3 mb-8" data-aos="fade-up">
              {bukuPutih.map((book) => (
                <button
                  key={book.year}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeYear === book.year
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveYear(book.year)}
                >
                  {book.year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Display */}
      {activeBukuPutih && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="relative group" data-aos="fade-right">
                  <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={activeBukuPutih.image}
                      alt={`${activeBukuPutih.title} Cover`}
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>

                {/* Book Details */}
                <div data-aos="fade-left">
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full mb-4">
                    {activeBukuPutih.year} Edition
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{activeBukuPutih.title}</h2>
                  <h3 className="text-xl text-blue-600 mb-4">{activeBukuPutih.subtitle}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activeBukuPutih.description}
                  </p>

                  {/* Chapter List */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h4>
                    <ul className="space-y-2">
                      {activeBukuPutih.chapters.map((chapter, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 font-bold text-blue-600">{idx + 1}.</span>
                          <span className="text-gray-700">{chapter}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={activeBukuPutih.pdfLink}
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Download PDF
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors">
                      Request Print Copy
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Highlights from Our Reports</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key findings, accomplishments, and strategic directions from our annual reports that showcase our commitment to medical education excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <HighlightCard
                title="International Collaborations"
                description="Partnerships with 15+ international medical organizations to facilitate knowledge exchange and research opportunities."
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                }
                delay={100}
              />
              <HighlightCard
                title="Research Publications"
                description="Over 45 research papers published by our members in peer-reviewed journals, contributing valuable insights to medical literature."
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                }
                delay={200}
              />
              <HighlightCard
                title="Financial Stability"
                description="Sound financial management with 25% annual growth in funding, enabling expanded programming and scholarship opportunities."
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                }
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Historical Archive</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our complete collection of annual reports dating back to our founding, documenting our growth and evolution as an organization.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year</th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Title</th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Theme</th>
                    <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bukuPutih.map((book) => (
                    <tr key={book.year} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{book.year}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{book.title}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{book.subtitle}</td>
                      <td className="py-3 px-4 text-sm font-medium">
                        <div className="flex space-x-2">
                          <button 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => setActiveYear(book.year)}
                          >
                            View
                          </button>
                          <a href={book.pdfLink} className="text-green-600 hover:text-green-800">
                            Download
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* Add more historical records */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">2020</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Buku Putih AMSA 2020</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Transformation in Challenging Times</td>
                    <td className="py-3 px-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                        <a href="#" className="text-green-600 hover:text-green-800">Download</a>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">2019</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Buku Putih AMSA 2019</td>
                    <td className="py-3 px-4 text-sm text-gray-600">Innovation in Medical Education</td>
                    <td className="py-3 px-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                        <a href="#" className="text-green-600 hover:text-green-800">Download</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Contribute to Our Next Report</h2>
            <p className="text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
              Share your achievements, research, and stories to be featured in our upcoming annual report.
            </p>
            <button
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors px-8 py-3 rounded-full font-medium"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Submit Your Contribution
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Highlight Card Component
const HighlightCard = ({ title, description, icon, delay }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-md"
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

export default BukuPutih;