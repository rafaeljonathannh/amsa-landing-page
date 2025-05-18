// src/pages/BukuPutih.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import BukuPutihSection from '../components/Sections/BukuPutihSection';

const BukuPutih = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <BukuPutihSection/>
    </div>
  );
};

export default BukuPutih;