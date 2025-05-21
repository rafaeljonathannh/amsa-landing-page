
const DivisionsDetailHeroSection = ({ division }) => {
  if (!division) return null;

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* Together We Grow logo in top left */}
      <div className="absolute top-24 left-20 z-20">
        <img 
          src="/src/assets/images/together-we-grow.svg" 
          alt="Together We Grow" 
          className="h-12"
        />
      </div>
      
      {/* Division logo in center */}
      {division.logo && (
        <div className="absolute bottom-1/3 transform translate-y-1/2 z-20">
          <img 
            src={division.logo} 
            alt={`${division.title} Logo`} 
            className="h-32 w-32"
          />
        </div>
      )}
    </section>
  );
};

export default DivisionsDetailHeroSection;