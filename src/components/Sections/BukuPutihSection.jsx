// Modified src/components/Sections/BukuPutihSection.jsx without year selection buttons
import { useEffect } from 'react';
import AOS from 'aos';

const BukuPutih = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  // Data buku putih 2024 langsung tanpa array dan tanpa state activeYear
  const bukuPutih2024 = {
    year: '2024',
    title: 'Buku Putih AMSA 2024',
    subtitle: 'Advancing Medical Education in the Digital Era',
    description: 'Documenting our initiatives, achievements, and progress in advancing medical education and community healthcare throughout Asia in 2024.',
    image: '/images/buku-putih-2024.jpg',
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
  };

  return (
    <div className="pt-20">
      {/* Page Header */}

      {/* Removed Year Selection Section */}

      {/* Book Display */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Book Cover */}
              <div className="relative group" data-aos="fade-right">
                <div className="absolute inset-0 bg-[#184A3C] rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={bukuPutih2024.image} 
                    alt={bukuPutih2024.title}
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div data-aos="fade-left">
                <div className="bg-[#184A3C] text-white px-2 py-1 rounded text-sm font-medium inline-block mb-4">
                  Year {bukuPutih2024.year}
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {bukuPutih2024.title}
                </h1>
                <h2 className="text-xl text-[#184A3C] font-semibold mb-6">
                  {bukuPutih2024.subtitle}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {bukuPutih2024.description}
                </p>

                {/* Table of Contents Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {bukuPutih2024.chapters.slice(0, 5).map((chapter, index) => (
                      <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                        <span className="text-[#184A3C] font-medium mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-gray-700">{chapter}</span>
                      </div>
                    ))}
                    {bukuPutih2024.chapters.length > 5 && (
                      <div className="text-gray-500 text-sm p-2">
                        +{bukuPutih2024.chapters.length - 5} more chapters...
                      </div>
                    )}
                  </div>
                </div>

                {/* Download Button */}
                <a 
                  href={bukuPutih2024.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-[#184A3C] hover:bg-[#0d3228] text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BukuPutih;