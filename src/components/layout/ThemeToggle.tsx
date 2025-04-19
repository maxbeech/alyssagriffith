'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Animation variants for the mode indicator
  const indicatorVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Current mode indicator */}
      <motion.div
        className={`mb-2 px-6 py-2 rounded-full text-sm font-medium
          ${theme === 'kawaii' 
            ? 'bg-pink-200 text-pink-500 border-2 border-pink-300' 
            : 'bg-indigo-100 text-indigo-700 border-2 border-indigo-200'
          }`}
        initial="hidden"
        animate="visible"
        variants={indicatorVariants}
        transition={{ duration: 0.2 }}
      >
        {theme === 'kawaii' ? '✨ Kawaii Mode' : 'Portfolio Mode'}
      </motion.div>
      
      {/* Toggle button */}
      <motion.button
        onClick={toggleTheme}
        className={`relative w-32 h-12 rounded-full overflow-hidden transition-all duration-300 shadow-md
          ${theme === 'kawaii' 
            ? 'bg-gradient-to-r from-pink-400 to-purple-300' 
            : 'bg-gradient-to-r from-indigo-400 to-violet-500'
          }`}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Mode text labels - positioned behind the indicator */}
        <div className="absolute inset-0 flex items-center justify-between px-5 text-sm font-bold text-white">
          <span className={`z-10 transition-opacity duration-300 ${theme === 'kawaii' ? 'opacity-30' : 'opacity-100'}`}>
            Pro
          </span>
          <span className={`z-10 transition-opacity duration-300 ${theme === 'kawaii' ? 'opacity-100' : 'opacity-30'}`}>
            Cute
          </span>
        </div>
        
        {/* Moving indicator */}
        <motion.div 
          className="absolute top-1 left-1 w-10 h-10 bg-white rounded-full shadow-sm z-20"
          initial={false}
          animate={{ 
            x: theme === 'kawaii' ? "calc(100% - 42px)" : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle; 