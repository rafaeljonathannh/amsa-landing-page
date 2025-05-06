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
\        </div>
        <div className="w-48">
          <a href="https://amsaindonesia.org" target="_blank" rel="noopener noreferrer">
            <img 
              src="/src/assets/images/logo-amsa-indonesia.png" 
              // alt="AMSA Indonesia" 
              className="w-full h-auto"
            />
          </a>
\        </div>
      </div>
    </div>
  </div>
</section>


      {/* Bottom Section with UI Logo and Social Media */}
      <section className="bg-[#6E9277] bg-opacity-[0.24] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <img 
                src="/src/assets/images/logo-ui.png" 
                alt="Universitas Indonesia" 
                className="h-24 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-700 mb-4">Follow us for latest updates</p>
              <a href="https://instagram.com/amsa-ui" className="inline-block p-2 mb-6">
                <img 
                  src="/src/assets/images/icon-instagram.png" 
                  alt="Instagram" 
                  className="w-8 h-8"
                />
              </a>
              <p className="text-gray-700 mb-4">Contact Us</p>
              <a href="mailto:contact@amsa-ui.org" className="inline-block p-2">
                <img 
                  src="/src/assets/images/icon-email.png" 
                  alt="Email" 
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
