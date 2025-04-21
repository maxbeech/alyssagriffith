'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface HoverEffectProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  rotate?: number;
  lift?: number;
  glow?: boolean;
  glowColor?: string;
  duration?: number;
  bgEffect?: boolean;
  bgColor?: string;
}

export default function HoverEffect({
  children,
  className = '',
  scale = 1.03,
  rotate = 0,
  lift = 5,
  glow = false,
  glowColor = 'rgba(255, 255, 255, 0.7)',
  duration = 0.2,
  bgEffect = false,
  bgColor = 'rgba(255, 255, 255, 0.05)'
}: HoverEffectProps) {
  // Apple-like spring configuration
  const springConfig = {
    type: 'spring',
    stiffness: 350,
    damping: 25,
    mass: 0.5
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 1, y: 0, rotate: 0, boxShadow: 'none' }}
      whileHover={{
        scale: scale,
        y: lift ? -lift : 0,
        rotate: rotate,
        boxShadow: glow ? `0 10px 25px -5px ${glowColor}` : 'none',
        transition: {
          ...springConfig,
          duration: duration
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: { 
          ...springConfig,
          duration: duration * 0.8 
        }
      }}
    >
      {bgEffect && (
        <motion.div 
          className="absolute inset-0 rounded-inherit"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            transition: { duration: duration * 1.2 }
          }}
          style={{ 
            backgroundColor: bgColor,
            borderRadius: 'inherit',
            zIndex: 0
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
} 