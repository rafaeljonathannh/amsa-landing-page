// Modified src/pages/BukuPutih.jsx with updated color scheme
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
      pdfLink: 'https://drive.google.com/file/d/1eQIcLlrrNBtN7XeQGOvK5kI9F4VJlSgb/view',
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
    }
  ];

  // Filter buku putih based on active year
  const activeBukuPutih = bukuPutih.find(book => book.year === activeYear);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-[#184A3C] text-white py-20">
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
      <section className="py-12 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-3 mb-8" data-aos="fade-up">
              {bukuPutih.map((book) => (
                <button
                  key={book.year}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeYear === book.year
                      ? 'bg-[#184A3C] text-white'
                      : 'bg-white text-[#184A3C] hover:bg-gray-200'
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
                  <div className="absolute inset-0 bg-[#184A3C] rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
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
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#184A3C] rounded-full mb-4">
                    {activeBukuPutih.year} Edition
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{activeBukuPutih.title}</h2>
                  <h3 className="text-xl text-[#74928A] mb-4">{activeBukuPutih.subtitle}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activeBukuPutih.description}
                  </p>

                  {/* Chapter List */}
                  <div className="bg-[#6E9277] bg-opacity-[0.24] p-6 rounded-lg mb-8">
                    <h4 className="text-lg font-semibold text-[#184A3C] mb-4">Table of Contents</h4>
                    <ul className="space-y-2">
                      {activeBukuPutih.chapters.map((chapter, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 font-bold text-[#184A3C]">{idx + 1}.</span>
                          <span className="text-gray-700">{chapter}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Button */}
                <div>
                  <a
                    href={activeBukuPutih.pdfLink}
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#184A3C] hover:bg-[#0d3228] text-white font-medium rounded-lg transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download PDF
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BukuPutih;