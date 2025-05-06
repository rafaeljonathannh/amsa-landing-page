// src/pages/AboutUs.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import PresidentSection from '../components/Sections/PresidentSection';
import EventsSection from '../components/Sections/EventsSection';
import PartnersSection from '../components/Sections/PartnersSection';

const AboutUs = () => {
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

export default AboutUs;