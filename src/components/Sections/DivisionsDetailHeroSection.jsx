const DivisionsDetailHeroSection = ({ division }) => {
  if (!division) return null;

  return (
    <div className="relative h-screen"> {/* common relative parent */}
      <section className="relative h-full flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={division.coverImage} 
            alt={division.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dynamic overlay */}
        <div
          className="absolute inset-0 opacity-[0.37] z-[1]"
          style={{ backgroundColor: division.bg }}
        ></div>

        {/* Blurred bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Together We Grow logo in top left */}
        <div className="absolute top-24 left-20 z-20">
          <img 
            src="/images/together-we-grow.svg" 
            alt="Together We Grow" 
            className="h-12"
          />
        </div>
      </section>

      {/* Division logo outside the section but positioned relative to the container */}
      {division.logo && (
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <div className="w-auto">
            <img 
              src={division.logo} 
              alt={`${division.title} Logo`} 
              className="h-96 w-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DivisionsDetailHeroSection;