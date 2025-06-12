// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#6E9277] bg-opacity-[0.24] py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* AMSA Logo + Text sebagai satu group */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 6px 16px rgba(0, 0, 0, 0.2))"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.4
            }}
          >
            <div className="mr-4 transition-all duration-300 group-hover:scale-105">
              <img src="/images/amsa-indonesia-green.png" alt="AMSA Logo" className="h-12" />
            </div>
            <div className="flex flex-col transition-all duration-300 group-hover:scale-105">
              <p className="font-bold text-[#184A3C] group-hover:text-[#0d3228] transition-colors duration-300">AMSA-</p>
              <p className="text-sm text-[#184A3C] group-hover:text-[#0d3228] transition-colors duration-300">Universitas Indonesia</p>
            </div>
          </motion.div>

          {/* Together We Grow Logo - terpisah */}
          <motion.div 
            className="ml-8"
            whileHover={{ 
              scale: 1.05,
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.4
            }}
          >
            <img src="/images/together-we-grow-green.svg" alt="Together We Grow" className="h-10" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;