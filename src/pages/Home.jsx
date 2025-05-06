// src/pages/Home.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import HeroSection from '../components/Sections/HeroSection';
import AboutSection from '../components/Sections/AboutSection';
import DivisionsSection from '../components/Sections/DivisionsSection';
import AchievementsSection from '../components/Sections/AchievementsSection';
import BukuPutihSection from '../components/Sections/BukuPutihSection';

const Home = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <DivisionsSection />
      <AchievementsSection />
      <BukuPutihSection />
    </main>
  );
};

export default Home;