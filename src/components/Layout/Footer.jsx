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
          <motion.div 
            className="mr-4"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/src/assets/images/amsa-indonesia-green.png" alt="AMSA Logo" className="h-12" />
          </motion.div>
          <motion.div 
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="font-bold text-[#184A3C]">AMSA-</p>
            <p className="text-sm text-[#184A3C]">Universitas Indonesia</p>
          </motion.div>
          <motion.div 
            className="ml-8"
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/src/assets/images/together-we-grow-green.svg" alt="Together We Grow" className="h-10" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;