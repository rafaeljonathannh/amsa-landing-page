// src/pages/Achievements.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import AchievementsSection from '../components/Sections/AchievementsSection';

const Achievements = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <div className="pt-16">
      <AchievementsSection/>
    </div>
  );
};

export default Achievements;