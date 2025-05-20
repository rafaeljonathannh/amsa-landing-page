// src/components/Sections/PageHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, bgColor = "[#184A3C]", textColor = "white" }) => {
  return (
    <div className={`bg-${bgColor} text-${textColor} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;