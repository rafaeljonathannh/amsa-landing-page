// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#6E9277] bg-opacity-[0.24] py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <img src="/src/assets/images/amsa-indonesia-green.png" alt="AMSA Logo" className="h-12" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[#184A3C]">AMSA-</p>
            <p className="text-sm text-[#184A3C]">Universitas Indonesia</p>
          </div>
          <div className="ml-8">
            <img src="/src/assets/images/together-we-grow-green.svg" alt="Together We Grow" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;