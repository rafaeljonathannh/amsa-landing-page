// src/pages/Achievements.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import PageHeader from '../components/Sections/PageHeader';
import AchievementsSection from '../components/Sections/AchievementsSection';

const Achievements = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="pt-16">
      <PageHeader 
        title="Our Achievements" 
        subtitle="Celebrating our milestones and recognitions that highlight our commitment to excellence in medical education and community service."
      />
      <AchievementsSection/>
    </div>
  );
};

export default Achievements;