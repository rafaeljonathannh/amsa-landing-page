// src/components/Layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/src/assets/images/logo.png" alt="AMSA Logo" className="h-12" />
          <div className="ml-2 font-bold text-xl">
            <p className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>AMSA-</p>
            <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Universitas Indonesia</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/about" label="About Us" isScrolled={isScrolled} />
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
            <MobileNavLink to="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
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
    className={`font-medium hover:text-green-500 transition-colors ${
      isScrolled ? 'text-gray-800' : 'text-white'
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