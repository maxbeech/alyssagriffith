'use client';
import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface SlideIntoViewProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
  threshold?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export default function SlideIntoView({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  threshold = 0.2,
  staggerChildren = false,
  staggerDelay = 0.05
}: SlideIntoViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: once
  });

  // Apple-like spring animation physics
  const springConfig = {
    type: "spring",
    damping: 30,
    stiffness: 300,
    mass: 0.5
  };

  // Define movement distances based on direction
  const distance = 70;
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
    }
  };

  const initialPosition = getInitialPosition();

  // Container for potential child staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0, ...initialPosition },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        ...springConfig,
        staggerChildren: staggerChildren ? staggerDelay : 0,
        delayChildren: staggerChildren ? delay : 0,
      }
    }
  };

  // Child animation for staggered elements
  const childVariants: Variants = {
    hidden: { opacity: 0, ...initialPosition },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ...springConfig
      }
    }
  };

  if (staggerChildren && React.Children.count(children) > 0) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
} 