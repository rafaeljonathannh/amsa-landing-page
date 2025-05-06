// src/pages/Home.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import HeroSection from '../components/Sections/HeroSection';
import PresidentSection from '../components/Sections/PresidentSection';
import EventsSection from '../components/Sections/EventsSection';
import PartnersSection from '../components/Sections/PartnersSection';

const Home = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <main>
      <HeroSection />
      <PresidentSection />
      <EventsSection />
      <PartnersSection />
    </main>
  );
};

export default Home;