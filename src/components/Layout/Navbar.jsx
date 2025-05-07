// src/components/Layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle navigation, with scroll to top for same-page links
  const handleNavigation = (e, path) => {
    // If clicking the link for the current page
    if (location.pathname === path) {
      e.preventDefault(); // Prevent default navigation
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Handle logo click to navigate to home and scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    
    // If already on homepage, just scroll to top
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } 
    // If on another page, navigate to home then scroll to top
    else {
      navigate('/');
      // We need to wait for navigation to complete
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#184A3C] py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="w-16 flex items-center justify-center">
            <img 
              src={isScrolled ? "/src/assets/images/logo-colored.png" : "/src/assets/images/logo-white.png"} 
              alt="AMSA Logo" 
              className={`${isScrolled ? 'h-14' : 'h-12'} w-auto object-contain`} 
            />
          </div>
          <div className="ml-2">
            <p className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>AMSA-</p>
            <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Universitas Indonesia</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/about" label="About Us" isScrolled={isScrolled} handleNavigation={handleNavigation} />
          <NavLink to="/divisions" label="Divisions" isScrolled={isScrolled} handleNavigation={handleNavigation} />
          <NavLink to="/achievements" label="Achievements" isScrolled={isScrolled} handleNavigation={handleNavigation} />
          <NavLink to="/buku-putih" label="Buku Putih" isScrolled={isScrolled} handleNavigation={handleNavigation} />
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
            <MobileNavLink to="/about" label="About Us" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
            <MobileNavLink to="/divisions" label="Divisions" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
            <MobileNavLink to="/achievements" label="Achievements" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
            <MobileNavLink to="/buku-putih" label="Buku Putih" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, label, isScrolled, handleNavigation }) => (
  <Link 
    to={to} 
    className={`font-[Schibsted Grotesk] hover:text-green-500 transition-colors ${
      isScrolled 
        ? 'text-[#184A3C]'
        : 'text-white'
    }`}
    onClick={(e) => handleNavigation(e, to)}
  >
    {label}
  </Link>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, label, onClick, handleNavigation }) => (
  <Link 
    to={to} 
    className="block py-2 text-gray-800 hover:text-green-500 font-medium border-b border-gray-200 last:border-0"
    onClick={(e) => {
      onClick();
      handleNavigation(e, to);
    }}
  >
    {label}
  </Link>
);

export default Navbar;