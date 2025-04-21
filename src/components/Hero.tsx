'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Transform mouse position into subtle movement values
  const moveX = useTransform(springX, [-500, 500], [-15, 15]);
  const moveY = useTransform(springY, [-500, 500], [-15, 15]);
  const rotateX = useTransform(springY, [-500, 500], [2, -2]);
  const rotateY = useTransform(springX, [-500, 500], [-2, 2]);
  
  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };
  
  // Reset mouse position when mouse leaves section
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  // Update video source when theme changes
  useEffect(() => {
    if (videoRef.current) {
      setVideoLoaded(false);
      videoRef.current.load();
    }
  }, [theme]);
  
  // Handle video loaded state
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  
  // Define content based on theme
  const heroContent = {
    portfolio: {
      heading: "ALYSSA GRIFFITH",
      subheading: "Digital Creator & Choreographer",
      cta: {
        primary: {
          text: "See My Work",
          link: "/portfolio"
        },
        secondary: {
          text: "Contact Me",
          link: "/contact"
        }
      },
      stats: [
        { label: "Social Followers", value: "2.6M+" },
        { label: "Brand Collaborations", value: "50+" },
        { label: "Years of Experience", value: "5+" }
      ],
      videoSrc: "/media/videos/portfolio-bg.mp4",
      posterSrc: "/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg"
    },
    kawaii: {
      heading: "Alyssa Griffith",
      subheading: "Dancer • Cosplayer • Content Creator",
      cta: {
        primary: {
          text: "Explore Cosplays",
          link: "/cosplay"
        },
        secondary: {
          text: "Subscribe",
          link: "/subscribe"
        }
      },
      stats: [
        { label: "Daily Uploads", value: "New Content" },
        { label: "Exclusive Photos", value: "100s" },
        { label: "Cosplay Outfits", value: "25+" }
      ],
      videoSrc: "/media/videos/kawaii-bg.mp4",
      posterSrc: "/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Theme transition variants
  const themeTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  };

  // Select content based on theme
  const content = theme === 'portfolio' ? heroContent.portfolio : heroContent.kawaii;
  
  // Floating emotes for kawaii theme
  const emotes = ["✨", "💕", "🌸", "✌️", "👑", "💖", "⭐", "🌟", "🍭", "🧁", "🌈", "💅", "🎀", "💫", "🍡", "🦄", "🎧", "🧸", "🍰"];
  
  return (
    <motion.section 
      ref={sectionRef}
      className="relative h-screen flex items-end justify-center overflow-hidden pt-24 lg:pt-32 pb-16"
      animate={{ backgroundColor: theme === 'kawaii' ? '#fdf2f8' : '#111827' }}
      transition={themeTransition}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Background */}
      <div className={`absolute inset-0 w-full h-full ${!videoLoaded ? 'bg-gray-900' : ''}`}>
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={content.posterSrc}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${theme === 'kawaii' ? 'scale-[1.1] blur-[1px]' : ''}`}
          onLoadedData={handleVideoLoaded}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <source src={content.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: theme === 'portfolio' 
              ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))' 
              : 'linear-gradient(to bottom, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.4))'
          }}
          transition={themeTransition}
        ></motion.div>
      </div>

      {/* Kawaii-specific decorative elements */}
      <AnimatePresence>
        {theme === 'kawaii' && (
          <motion.div 
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-pink-400/30 backdrop-blur-sm z-10">
              <div className="absolute top-0 left-0 right-0 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 30" preserveAspectRatio="none" className="w-full h-full fill-pink-400/30">
                  <path d="M0,30 Q300,0 600,15 T1200,30 V0 H0 Z" />
                </svg>
              </div>
              
              {/* Heart trail at bottom */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-around">
                {[...Array(8)].map((_, i) => (
                  <motion.span 
                    key={`heart-${i}`}
                    className="text-pink-400 text-xl"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut"
                    }}
                  >
                    💖
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Side decorative elements */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex flex-col items-center space-y-6">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={`left-${i}`}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg shadow-pink-400/30"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      '0 0 10px 2px rgba(236, 72, 153, 0.3)',
                      '0 0 15px 4px rgba(236, 72, 153, 0.5)',
                      '0 0 10px 2px rgba(236, 72, 153, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center space-y-6">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={`right-${i}`}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg shadow-pink-400/30"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      '0 0 10px 2px rgba(236, 72, 153, 0.3)',
                      '0 0 15px 4px rgba(236, 72, 153, 0.5)',
                      '0 0 10px 2px rgba(236, 72, 153, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.5 + 0.25,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-24 left-8 w-32 h-32 rotate-[-15deg] opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10,50 Q10,10 50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Z" fill="none" stroke="#ec4899" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute bottom-24 right-8 w-32 h-32 rotate-[15deg] opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10,50 Q10,10 50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Z" fill="none" stroke="#ec4899" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating emotes for kawaii theme */}
      <AnimatePresence>
        {theme === 'kawaii' && (
          <>
            {emotes.map((emote, index) => (
              <motion.div
                key={index}
                className="absolute text-3xl select-none pointer-events-none z-10"
                initial={{ 
                  opacity: 0, 
                  y: '100vh',
                  x: `${Math.random() * 100}vw` 
                }}
                animate={{ 
                  opacity: [0, 1, 1, 0], 
                  y: [100, -500],
                  rotate: Math.random() * 360,
                  scale: [0.7, 1, 0.9, 1, 0.8]
                }}
                transition={{ 
                  duration: 8 + Math.random() * 5, 
                  repeat: Infinity, 
                  delay: Math.random() * 5,
                  ease: "linear" 
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                {emote}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Content with mouse-follow effect */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-24"
        style={{ 
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
          perspective: 1000
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, rotate: 0 },
            visible: { 
              opacity: 1, 
              rotate: theme === 'kawaii' ? -2 : 0,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                ...themeTransition
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div 
            className="text-white"
            animate={{ 
              rotate: theme === 'kawaii' ? 2 : 0 
            }}
            transition={themeTransition}
          >
            <motion.div 
              variants={itemVariants}
              className={theme === 'kawaii' ? 'transform hover:scale-105 transition-transform duration-300' : ''}
            >
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6"
                style={{
                  color: theme === 'kawaii' ? '#fce7f3' : 'white',
                  textShadow: theme === 'kawaii' 
                    ? '0 0 15px rgba(236, 72, 153, 0.5)'
                    : '0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(124, 58, 237, 0.5)'
                }}
              >
                {content.heading}
              </h1>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className={theme === 'kawaii' ? 'transform hover:scale-105 transition-transform duration-300' : ''}
            >
              <p className="text-xl md:text-3xl mb-8"
                style={{
                  color: theme === 'kawaii' ? '#fbcfe8' : 'rgb(209, 213, 219)',
                  textShadow: theme === 'kawaii' 
                    ? '0 0 10px rgba(236, 72, 153, 0.3)'
                    : '0 0 15px rgba(0, 0, 0, 0.6)'
                }}
              >
                {content.subheading}
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <Link 
                href={content.cta.primary.link}
                className="px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center"
                style={{
                  backgroundColor: theme === 'portfolio' ? '#7c3aed' : '#ec4899',
                  color: 'white',
                  boxShadow: theme === 'kawaii' 
                    ? '0 10px 15px -3px rgba(236, 72, 153, 0.3)'
                    : '0 10px 25px -5px rgba(124, 58, 237, 0.5)'
                }}
              >
                {theme === 'kawaii' && <span className="mr-2">✨</span>}
                {content.cta.primary.text}
              </Link>
              <Link 
                href={content.cta.secondary.link}
                className="px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center"
                style={{
                  border: theme === 'portfolio' ? '1px solid white' : '2px solid #f9a8d4',
                  color: theme === 'kawaii' ? '#fce7f3' : 'white',
                  boxShadow: theme === 'kawaii' 
                    ? '0 10px 15px -3px rgba(236, 72, 153, 0.2)'
                    : '0 8px 20px -5px rgba(255, 255, 255, 0.2)'
                }}
              >
                {theme === 'kawaii' && <span className="mr-2">💖</span>}
                {content.cta.secondary.text}
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {content.stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: theme === 'kawaii' 
                        ? 'rgba(236, 72, 153, 0.2)'
                        : 'rgba(124, 58, 237, 0.1)',
                      backdropFilter: theme === 'kawaii' ? 'blur(4px)' : 'blur(5px)'
                    }}
                    animate={{ 
                      rotate: theme === 'kawaii' ? (index - 1) : 0 
                    }}
                    whileHover={{ 
                      rotate: 0,
                      scale: theme === 'kawaii' ? 1.05 : 1.05
                    }}
                    transition={{
                      duration: 0.3
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold"
                      style={{
                        color: theme === 'kawaii' ? '#fce7f3' : 'white',
                        textShadow: theme === 'kawaii' 
                          ? '0 0 10px rgba(236, 72, 153, 0.5)'
                          : '0 0 15px rgba(124, 58, 237, 0.6)'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm"
                      style={{
                        color: theme === 'kawaii' ? '#fbcfe8' : 'rgb(209, 213, 219)',
                        textShadow: theme === 'kawaii' 
                          ? '0 0 5px rgba(236, 72, 153, 0.3)'
                          : '0 0 10px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {theme === 'kawaii' && 
                        (index === 0 ? '✨ ' : index === 1 ? '📸 ' : '👗 ')}
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Theme Toggle */}
      <div className="absolute bottom-10 right-10 z-20">
        <motion.button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-24 h-10 rounded-full shadow-lg overflow-hidden bg-violet-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
            animate={{ 
              x: theme === 'portfolio' ? -28 : 28,
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.span className="text-violet-600 text-xs font-bold">
              {theme === 'portfolio' ? 'Pro' : 'K'}
            </motion.span>
          </motion.div>
          <span className="absolute left-4 text-xs text-white font-semibold">
            Pro
          </span>
          <span className="absolute right-3 text-xs text-white font-semibold">
            Kawaii
          </span>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero; 