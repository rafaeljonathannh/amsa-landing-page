// src/components/Sections/HeroSection.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/images/hero-bg.jpg" 
          alt="AMSA Group" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Green overlay at 10% */}
      <div className="absolute inset-0 bg-[#1E4F40] opacity-[0.25] z-[1]"></div>

      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Blurred bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* Together We Grow logo di kiri atas sesuai mockup */}
      <motion.div 
        className="absolute top-40 left-20 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img 
          src="/images/together-we-grow.svg" 
          alt="Together We Grow" 
          className="h-12"
        />
      </motion.div>
      
      {/* AMSA-UI White Logo di tengah */}
      <motion.div 
        className="relative z-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img 
          src="/images/amsa-ui-white-logo.png" 
          alt="AMSA-UI Logo" 
          style={{
            width: '700px', // Diubah dari 350px menjadi 700px (2x lipat)
            height: 'auto',
            margin: '0 auto'
          }}
        />
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div 
          className="animate-bounce cursor-pointer"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;