// src/components/Sections/HeroSection.jsx
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Optional: Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Asian Medical Students' Association
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Empowering future medical professionals through education, innovation, and community outreach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors px-8 py-3 rounded-full font-medium"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Learn More
            </Link>
            <Link 
              to="/divisions" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 transition-colors px-8 py-3 rounded-full font-medium"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              Our Divisions
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <div className="animate-bounce">
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;