// src/components/Sections/PartnersSection.jsx

const PartnersSection = () => {
  return (
    <>
      {/* Part of Title Section */}
      <section className="py-10 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center">
              <span className="text-4xl font-light italic text-gray-600">Part</span>
              <span className="text-4xl font-medium text-[#184A3C] ml-2">of</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Partner Logos - Top Row */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="w-48 md:w-56">

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
              <div className="w-48 md:w-56">
                <a href="https://amsa-international.org" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-amsa-international.png" 
                    alt="AMSA International" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="w-48 md:w-56">
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

      {/* Social Media Section - REDESIGNED */}
      <section className="py-12 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
    </>
  );
};

export default PartnersSection;