// src/pages/AboutUs.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import AboutHeroSection from '../components/Sections/AboutHeroSection';
import VisionMissionSection from '../components/Sections/VisionMissionSection';
import OrganogramSection from '../components/Sections/OrganogramSection';

const AboutUs = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="pt-16">
      <AboutHeroSection />
      <VisionMissionSection />
      <OrganogramSection />
    </div>
  );
};

export default AboutUs;