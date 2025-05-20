// src/pages/BukuPutih.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import PageHeader from '../components/Sections/PageHeader';
import BukuPutihSection from '../components/Sections/BukuPutihSection';

const BukuPutih = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="pt-16">
      <PageHeader 
        title="Buku Putih" 
        subtitle="Our annual report documenting AMSA's journey, achievements, and vision for the future of medical education in Asia."
      />
      <BukuPutihSection/>
    </div>
  );
};

export default BukuPutih;