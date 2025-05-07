// src/components/Layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle About Us link click
  const handleAboutClick = (e) => {
    // If already on the about page, prevent default navigation
    if (location.pathname === '/about') {
      e.preventDefault();
      
      // Find the President Section element and scroll to it
      const presidentSection = document.getElementById('president-section');
      if (presidentSection) {
        presidentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#184A3C] py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={isScrolled ? "/src/assets/images/logo-colored.png" : "/src/assets/images/logo-white.png"} 
            alt="AMSA Logo" 
            className="h-12" 
          />
          <div className="ml-2 font-bold text-xl">
            <p className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>AMSA-</p>
            <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Universitas Indonesia</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {/* Modify the About link to use our custom click handler */}
          <Link 
            to="/about" 
            className={`font-[Schibsted Grotesk] hover:text-green-500 transition-colors ${
              isScrolled 
                ? 'text-[#184A3C]'  // Color when scrolled
                : 'text-white'  // Default color when not scrolled
            }`}
            onClick={handleAboutClick}
          >
            About Us
          </Link>
          <NavLink to="/divisions" label="Divisions" isScrolled={isScrolled} />
          <NavLink to="/achievements" label="Achievements" isScrolled={isScrolled} />
          <NavLink to="/buku-putih" label="Buku Putih" isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {/* Modify mobile About link too */}
            <Link 
              to="/about" 
              className="block py-2 text-gray-800 hover:text-green-500 font-medium border-b border-gray-200"
              onClick={(e) => {
                handleAboutClick(e);
                setIsMenuOpen(false);
              }}
            >
              About Us
            </Link>
            <MobileNavLink to="/divisions" label="Divisions" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/achievements" label="Achievements" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/buku-putih" label="Buku Putih" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, label, isScrolled }) => (
  <Link 
    to={to} 
    className={`font-[Schibsted Grotesk] hover:text-green-500 transition-colors ${
      isScrolled 
        ? 'text-[#184A3C]'  // Color when scrolled
        : 'text-white'  // Default color when not scrolled
    }`}
  >
    {label}
  </Link>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    className="block py-2 text-gray-800 hover:text-green-500 font-medium border-b border-gray-200 last:border-0"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;