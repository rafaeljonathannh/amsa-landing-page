import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const divisionsRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const divisions = [
    { id: 'academics', title: 'Academics' },
    { id: 'exchange', title: 'Asian Medical Students Exchange Program' },
    { id: 'outreach', title: 'Community Outreach' },
    { id: 'membership', title: 'Membership and Development' },
    { id: 'relations', title: 'Public Relation and Delegation' },
    { id: 'publication', title: 'Publication and Promotion' },
    { id: 'recruitment', title: 'Recruitment' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divisionsRef.current && !divisionsRef.current.contains(event.target)) {
        setIsDivisionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleDivisions = () => {
    setIsDivisionsOpen(!isDivisionsOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop NavLink Component
const NavLink = ({ to, label, handleNavigation, isScrolled }) => (
  <Link 
    to={to} 
    className={`${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'} transition-colors`}
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

return (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#184A3C] py-4'
  }`}>
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <div className="w-20 flex items-center justify-center">
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
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/about" label="About Us" handleNavigation={handleNavigation} isScrolled={isScrolled} />

          {/* Divisions Dropdown */}
          <div className="relative" ref={divisionsRef}>
            <button
              className={`flex items-center transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
              onMouseEnter={() => setIsDivisionsOpen(true)}
              onClick={toggleDivisions}
            >
              <span>Divisions</span>
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div 
              className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${
                isDivisionsOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
              }`}
              onMouseLeave={() => setIsDivisionsOpen(false)}
            >
              <div className="py-2">
                {divisions.map((division) => (
                  <Link
                    key={division.id}
                    to={`/divisions/${division.id}`}
                    className="block px-4 py-2 text-[#184A3C] hover:bg-[#6E9277] hover:bg-opacity-20 transition-colors"
                    onClick={() => setIsDivisionsOpen(false)}
                  >
                    {division.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/achievements" label="Achievements" handleNavigation={handleNavigation} isScrolled={isScrolled} />
          <NavLink to="/buku-putih" label="Buku Putih" handleNavigation={handleNavigation} isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Inside nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 rounded-lg overflow-hidden">
          <MobileNavLink to="/about" label="About Us" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
          
          {/* Mobile Divisions */}
          <div className="py-2 text-gray-800 border-b border-gray-200">
            <button 
              className="flex items-center justify-between w-full text-left font-medium hover:text-green-500 px-4"
              onClick={toggleDivisions}
            >
              <span>Divisions</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`mt-2 transition-all duration-300 overflow-hidden ${
              isDivisionsOpen ? 'max-h-96' : 'max-h-0'
            }`}>
              {divisions.map((division) => (
                <Link
                  key={division.id}
                  to={`/divisions/${division.id}`}
                  className="block pl-6 py-2 text-gray-700 hover:text-green-500"
                  onClick={() => {
                    setIsDivisionsOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {division.title}
                </Link>
              ))}
            </div>
          </div>

          <MobileNavLink to="/achievements" label="Achievements" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
          <MobileNavLink to="/buku-putih" label="Buku Putih" onClick={() => setIsMenuOpen(false)} handleNavigation={handleNavigation} />
        </div>
      )}
    </div>
  </nav>
);
};


export default Navbar;
