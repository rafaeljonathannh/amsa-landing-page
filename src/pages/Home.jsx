// src/pages/Home.jsx - Versi Sederhana
import { useEffect } from 'react';
import AOS from 'aos';
import HeroSection from '../components/Sections/HeroSection';
import PresidentSection from '../components/Sections/PresidentSection';
import EventsSection from '../components/Sections/EventsSection';
import PartnersSection from '../components/Sections/PartnersSection';
import Events from '../components/data/events';

const Home = () => {
  useEffect(() => {
    // Refresh AOS when component mounts - ini tetap diperlukan untuk animasi
    AOS.refresh();
    
    // Tidak ada kode scrolling kondisional - halaman selalu dimulai dari atas
  }, []);

  return (
    <main>
      <HeroSection />
      {/* Tidak memerlukan ref karena tidak ada scrolling kondisional */}
      <PresidentSection />
      <EventsSection events = {Events} />
      <PartnersSection />
    </main>
  );
};

export default Home;