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
    <div className="pt-20">
      {/* Start with President Section */}
      <PresidentSection />
      <EventsSection />
      <PartnersSection />
    </div>
  );
};

export default AboutUs;