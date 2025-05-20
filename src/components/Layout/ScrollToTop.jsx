// src/components/Layout/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes (navigation)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add this effect to handle page refreshes
  useEffect(() => {
    // Handle page refresh - run once on component mount
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual'; // Disable browser's auto scroll restoration
    }
    window.scrollTo(0, 0);

    // Handle beforeunload event (page refresh)
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollToTop;