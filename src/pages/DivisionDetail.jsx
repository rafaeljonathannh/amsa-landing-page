// src/pages/DivisionDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import DivisionsDetailHeroSection from '../components/Sections/DivisionsDetailHeroSection'; // Perhatikan: mengimpor DivisionDetail... bukan DivisionsDetail...
import DivisionsDetailTitleSection from '../components/Sections/DivisionsDetailTitleSection'; // Perhatikan: mengimpor DivisionDetail... bukan DivisionsDetail...
import DivisionsDetailActivitiesSection from '../components/Sections/DivisionsDetailActivitiesSection'; // Perhatikan: mengimpor DivisionDetail... bukan DivisionsDetail...
import divisionsData from '../components/data/divisionDetailsData';

const DivisionDetail = () => {
  const { divisionId } = useParams();
  const [division, setDivision] = useState(null);
  
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
    
    // Fetch division data based on divisionId
    setDivision(divisionsData[divisionId]);
    
    // Jika tidak menggunakan file data terpisah, definisikan divisionsData di sini
    // const divisionsData = {...};
    // setDivision(divisionsData[divisionId]);
  }, [divisionId]);
  
  if (!division) {
    return <div className="pt-24 text-center">Loading...</div>;
  }

  return (
    <div className="pt-16">
      <DivisionsDetailHeroSection division={division} />
      <DivisionsDetailTitleSection division={division} />
      <DivisionsDetailActivitiesSection activities={division.activities} />
    </div>
  );
};

export default DivisionDetail;