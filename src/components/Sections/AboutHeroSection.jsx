import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AboutHeroSection = () => {
  const [gradientEnd, setGradientEnd] = useState('85%');

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const aspectRatio = windowWidth / windowHeight;
      
      // Base calculation for height
      let dynamicValue = 85 - (windowHeight * 0.005);
      
      // Adjust for wider screens (higher aspect ratio)
      if (aspectRatio > 1.5) { // If screen is significantly wider than tall
        dynamicValue = 85 + (aspectRatio * 1.5); // Increase gradient end for wide screens
      }
      
      // Constrain between 85% and 90% for wide screens, 70% to 85% for others
      const constrainedValue = aspectRatio > 1.5 
        ? Math.min(90, Math.max(85, dynamicValue))
        : Math.min(85, Math.max(70, dynamicValue));
      
      setGradientEnd(`${constrainedValue}%`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maskStyle = {
    maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) ${gradientEnd})`,
    WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(255,255,255,0) ${gradientEnd})`,
  };

  return (
    <section className="relative flex items-center justify-center bg-white" style={{ height: '100vh' }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero-bg.jpg" 
          alt="AMSA Group" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            ...maskStyle,
          }}
        />
      </div>
      
      {/* green overlay */}
      <div style={{
        backgroundColor: 'rgba(24, 74, 60, 0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        ...maskStyle,
      }}></div>
      
      {/* Logo */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
        <img 
          src="/src/assets/images/together-we-grow.png" 
          alt="Together We Grow" 
          style={{
            position: 'absolute',
            top: '-550px',
            left: '70px',
            height: '50px',
            objectFit: 'contain',
          }}
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;