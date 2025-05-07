// src/components/Sections/PartnersSection.jsx

const PartnersSection = () => {
  return (
    <>
      {/* Part of Title Section */}
      <section className="py-16 bg-[#6E9277] bg-opacity-[0.24]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center">
              <span className="text-4xl font-light italic text-gray-600">Part</span>
              <span className="text-4xl font-medium text-gray-800 ml-2">of</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Partner Logos - Top Row */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-16">
              <div className="w-40">
                <a href="https://kemkes.go.id/id/home" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-kemenkes.png" 
                    alt="Kemenkes" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="w-40">
                <img 
                  src="/src/assets/images/logo-rscm.png" 
                  alt="RSCM" 
                  className="w-full h-auto"
                />
              </div>
              <div className="w-40">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-16 mb-16">
              <div className="w-48">
                <a href="https://amsa-international.org" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/src/assets/images/logo-amsa-international.png" 
                    alt="AMSA International" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="w-48">
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
      <section className="bg-[#1E293B] py-12 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-5xl font-bold mb-16">OUR SOCIAL MEDIA</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 max-w-4xl mx-auto">
            <a href="https://line.me/R/ti/p/@amsa-ui" target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="rounded-full bg-[#1E293B] p-5 w-24 h-24 flex items-center justify-center">
                <img 
                  src="/src/assets/images/icon-line.png" 
                  alt="Line" 
                  className="w-14 h-14"
                />
              </div>
            </a>
            <a href="https://twitter.com/amsaui" target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="rounded-full bg-[#1E293B] p-5 w-24 h-24 flex items-center justify-center">
                <img 
                  src="/src/assets/images/icon-twitter.png" 
                  alt="Twitter" 
                  className="w-14 h-14"
                />
              </div>
            </a>
            <a href="https://facebook.com/amsaui" target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="rounded-full bg-[#1E293B] p-5 w-24 h-24 flex items-center justify-center">
                <img 
                  src="/src/assets/images/icon-facebook.png" 
                  alt="Facebook" 
                  className="w-14 h-14"
                />
              </div>
            </a>
            <a href="https://youtube.com/c/amsaui" target="_blank" rel="noopener noreferrer" className="social-icon">
              <div className="rounded-full bg-[#1E293B] p-5 w-24 h-24 flex items-center justify-center">
                <img 
                  src="/src/assets/images/icon-youtube.png" 
                  alt="YouTube" 
                  className="w-14 h-14"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;