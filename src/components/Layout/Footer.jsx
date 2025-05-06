// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <img src="/src/assets/images/logo.png" alt="AMSA Logo" className="h-12" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-800">AMSA-</p>
            <p className="text-sm text-gray-600">Universitas Indonesia</p>
          </div>
          <div className="ml-8">
            <img src="/src/assets/images/logo-together.png" alt="Together We Grow" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;