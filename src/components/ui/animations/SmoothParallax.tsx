'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SmoothParallaxProps {
  children: React.ReactNode;
  offset?: number;
  direction?: 'horizontal' | 'vertical';
  speed?: number;
  className?: string;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export default function SmoothParallax({
  children,
  offset = 100,
  direction = 'vertical',
  speed = 0.5,
  className = '',
  springConfig = {
    stiffness: 80,
    damping: 20,
    mass: 1
  }
}: SmoothParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scale speed between 0.1 and 1.5 to prevent extreme values
  const safeSpeed = Math.max(0.1, Math.min(speed, 1.5));
  
  // Adjust offset based on speed
  const adjustedOffset = offset * safeSpeed;
  
  // Get scroll progress based on element position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create smooth spring-based scroll animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: springConfig.stiffness || 80,
    damping: springConfig.damping || 20,
    mass: springConfig.mass || 1,
    restDelta: 0.001
  });

  // Calculate transform values based on direction
  const isHorizontal = direction === 'horizontal';
  const transform = isHorizontal
    ? useTransform(smoothProgress, [0, 1], [-adjustedOffset, adjustedOffset])
    : useTransform(smoothProgress, [0, 1], [adjustedOffset, -adjustedOffset]);

  return (
    <motion.div
      ref={ref}
      className={`${className} overflow-hidden`}
      style={{ position: 'relative' }}
    >
      <motion.div
        style={{
          [isHorizontal ? 'x' : 'y']: transform,
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 