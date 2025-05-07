// src/pages/Home.jsx
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import HeroSection from '../components/Sections/HeroSection';
import PresidentSection from '../components/Sections/PresidentSection';
import EventsSection from '../components/Sections/EventsSection';
import PartnersSection from '../components/Sections/PartnersSection';

const Home = ({ startAtPresident = false }) => {
  const presidentRef = useRef(null);
  
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
    
    // Scroll to President Section if startAtPresident is true
    if (startAtPresident && presidentRef.current) {
      setTimeout(() => {
        presidentRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [startAtPresident]);

  return (
    <main>
      <HeroSection />
      <div ref={presidentRef}>
        <PresidentSection />
      </div>
      <EventsSection />
      <PartnersSection />
    </main>
  );
};

export default Home;