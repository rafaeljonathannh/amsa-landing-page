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
        {/* Logo - dengan ukuran yang lebih besar */}
        <a 
          href="/" 
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          {/* Fixed dimensions container with larger width */}
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
          <Link 
            to="/about" 
            className={`font-[Schibsted Grotesk] hover:text-green-500 transition-colors ${
              isScrolled 
                ? 'text-[#184A3C]'  // Color when scrolled
                : 'text-white'  // Default color when not scrolled
            }`}
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
            <Link 
              to="/about" 
              className="block py-2 text-gray-800 hover:text-green-500 font-medium border-b border-gray-200"
              onClick={() => setIsMenuOpen(false)}
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