// src/pages/Divisions.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import DivisionsHeroSection from '../components/Sections/DivisionsHeroSection'; 
import DivisionsListSection from '../components/Sections/DivisionsListSection';
import DivisionsCTASection from '../components/Sections/DivisionsCTASection';
import divisions from '../components/data/divisionsData';

const Divisions = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="pt-20">
      <DivisionsHeroSection />
      <DivisionsListSection divisions={divisions} />
      <DivisionsCTASection />
    </div>
  );
};

export default Divisions;