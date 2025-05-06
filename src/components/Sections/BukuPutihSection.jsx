// src/components/Sections/BukuPutihSection.jsx
import { useState } from 'react';

const BukuPutihSection = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const bukuPutih = [
    {
      year: '2024',
      title: 'Annual Report 2024',
      description: 'Documenting our initiatives, achievements, and progress in advancing medical education and community healthcare throughout Asia.',
      image: '/src/assets/images/buku-putih-2024.jpg',
      downloadLink: '#',
    },
    {
      year: '2023',
      title: 'Annual Report 2023',
      description: 'A comprehensive overview of our organization\'s activities, collaborations, and impact in the field of medical education for the year 2023.',
      image: '/src/assets/images/buku-putih-2023.jpg',
      downloadLink: '#',
    },
    {
      year: '2022',
      title: 'Annual Report 2022',
      description: 'Highlighting our growth, challenges overcome, and significant contributions to healthcare education and community service.',
      image: '/src/assets/images/buku-putih-2022.jpg',
      downloadLink: '#',
    },
    {
      year: '2021',
      title: 'Annual Report 2021',
      description: 'Showcasing our resilience and adaptability during the pandemic while continuing to serve the medical student community.',
      image: '/src/assets/images/buku-putih-2021.jpg',
      downloadLink: '#',
    },
  ];

  const filteredBook = bukuPutih.find(book => book.year === activeYear);

  return (
    <section id="buku-putih" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Buku Putih</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our annual reports documenting AMSA's journey, achievements, and vision for the future of medical education in Asia.
            </p>
          </div>

          {/* Year selection */}
          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up" data-aos-delay="100">
            {bukuPutih.map(book => (
              <button
                key={book.year}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeYear === book.year
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveYear(book.year)}
              >
                {book.year}
              </button>
            ))}
          </div>

          {/* Book display */}
          {filteredBook && (
            <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay="200">
              {/* Book image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={filteredBook.image}
                    alt={`Buku Putih ${filteredBook.year}`}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>

              {/* Book details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{filteredBook.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {filteredBook.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete overview of all AMSA activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Financial transparency reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Future strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Messages from leaders and partners</span>
                  </li>
                </ul>

                {/* Download button */}
                <a
                  href={filteredBook.downloadLink}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
                >
                  Download PDF
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BukuPutihSection;