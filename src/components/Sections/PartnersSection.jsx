// src/components/Sections/PartnersSection.jsx
import { motion } from 'framer-motion';

const PartnersSection = () => {
  return (
    <>
      {/* Part of Title Section */}
      <section className="py-10 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <img 
              src="/src/assets/images/part-of.png" 
              alt="Part Of" 
              className="mx-auto w-64 md:w-80" 
            />
          </div>
        </div>
      </section>

      {/* Partner Logos - Top Row */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="w-48 md:w-96">

                <a href="https://kemkes.go.id/id/home" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-kemenkes.png" 
                    alt="Kemenkes" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="w-48 md:w-56">

                <img 
                  src="/src/assets/images/logo-rscm.png" 
                  alt="RSCM" 
                  className="w-full h-auto"
                />
              </div>
              <div className="w-48 md:w-56">

                <a href="https://www.instagram.com/bemfkui/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-bem-fkui.png" 
                    alt="BEM IKM FKUI 2025" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos - Middle Row */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              <div className="w-48 md:w-96">
                <a href="https://amsa-international.org" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-amsa-international.png" 
                    alt="AMSA International" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="w-48 md:w-96">
                <a href="https://amsaindonesia.org" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-amsa-indonesia.png" 
                    alt="AMSA Indonesia" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-12">
              <span className="text-4xl font-medium text-[#184A3C]">Connect With Us</span>
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
              {/* Gmail */}
              <a href="mailto:amsaui.org@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-20 h-18 md:w-22 md:h-22 bg-white rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img 
                    src="/src/assets/images/icon-gmail.png" 
                    alt="Gmail" 
                    className="w-9 h-9 md:w-12 md:h-12"
                  />
                </div>
                <p className="text-center mt-3 text-[#184A3C] font-medium">Gmail</p>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@amsa-universitasindonesia2132" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-20 h-18 md:w-22 md:h-22 bg-white rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img 
                    src="/src/assets/images/icon-youtube.png" 
                    alt="YouTube" 
                    className="w-9 h-9 md:w-12 md:h-12"
                  />
                </div>
                <p className="text-center mt-3 text-[#184A3C] font-medium">YouTube</p>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/amsa_ui" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-18 h-18 md:w-22 md:h-22 bg-white rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <img 
                    src="/src/assets/images/icon-instagram.png" 
                    alt="Instagram" 
                    className="w-9 h-9 md:w-12 md:h-12"
                  />
                </div>
                <p className="text-center mt-3 text-[#184A3C] font-medium">Instagram</p>
              </a>
            </div>

            <div className="mt-10 text-center">
              <p className="text-[#184A3C] text-lg">Stay connected with AMSA-UI for the latest news, events, and opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universitas Indonesia Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Logo UI */}
        <div className="flex justify-center md:justify-start">
          <motion.div 
            className="w-64 md:w-80"
            whileHover={{ 
              scale: 1.03,
              filter: "drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15))"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.4
            }}
          >
            <img 
              src="/src/assets/images/logo-ui.png" 
              alt="Universitas Indonesia" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
            whileHover={{ 
              scale: 1.02,
              color: "#184A3C"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.3
            }}
          >
            Universitas Indonesia
          </motion.h3>

          <motion.p 
            className="text-gray-700 text-lg leading-relaxed mb-6"
            whileHover={{ 
              x: 5,
              filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.3
            }}
          >
            Universitas Indonesia (UI) is one of Indonesia's oldest and most prestigious public universities. 
            Established in 1849 as the Dokter-Djawa School during the Dutch colonial era, it evolved into 
            Universitas Indonesia in 1950.
          </motion.p>
          
          {/* Location */}
          <motion.div 
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            whileHover={{ 
              y: -4,
              filter: "drop-shadow(0 12px 32px rgba(0, 0, 0, 0.12))"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.4
            }}
          >
            <div className="flex items-start">
              <motion.div 
                className="mr-4 mt-1"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  duration: 0.5
                }}
              >
                <svg className="w-6 h-6 text-[#184A3C]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <div>
                <h4 className="font-semibold text-[#184A3C] mb-2">AMSA-UI Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  Gedung C Lantai 4, Rumpun Ilmu Kesehatan (RIK)<br/>
                  Kampus UI Depok, Jawa Barat 16424<br/>
                  Indonesia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default PartnersSection;