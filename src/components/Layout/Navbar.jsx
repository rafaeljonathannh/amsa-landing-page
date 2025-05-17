import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
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
    className={`px-4 py-2 rounded-md font-medium border border-transparent transition-colors ${
      isScrolled 
        ? 'text-gray-800 hover:text-white hover:bg-[#184A3C]' 
        : 'text-white hover:text-gray-800 hover:bg-white'
    }`}
    onClick={(e) => handleNavigation(e, to)}
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
              className={`flex items-center font-medium px-3 py-2 rounded-md border border-transparent transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-white hover:bg-[#184A3C]' 
                  : 'text-white hover:text-gray-800 hover:bg-white'
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
