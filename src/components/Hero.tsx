'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
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
      heading: "Alyssa Griffith",
      subheading: "Digital Creator & Choreographer",
      description: "Captivating audiences through seamless blend of dance, visual storytelling, and digital content creation.",
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
      heading: "@alyssagriffith ✨",
      subheading: "Dancer • Cosplayer • Content Creator",
      description: "Creating cute and spicy content that brings your favorite characters to life! Join me for dance, cosplay and so much more!",
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
      className="relative h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32"
      animate={{ backgroundColor: theme === 'kawaii' ? '#fdf2f8' : '#111827' }}
      transition={themeTransition}
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
              ? 'linear-gradient(to right, rgba(17, 24, 39, 0.7), rgba(0, 0, 0, 0.6))' 
              : 'linear-gradient(to right, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.5))'
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
            {/* Top decorative border */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-pink-400/30 backdrop-blur-sm z-10">
              <div className="absolute bottom-0 left-0 right-0 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 30" preserveAspectRatio="none" className="w-full h-full fill-pink-400/30">
                  <path d="M0,0 Q300,30 600,15 T1200,0 V30 H0 Z" />
                </svg>
              </div>
            </div>
            
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-0">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4"
                style={{
                  color: theme === 'kawaii' ? '#fce7f3' : 'white',
                  textShadow: theme === 'kawaii' ? '0 0 15px rgba(236, 72, 153, 0.5)' : 'none'
                }}
              >
                {content.heading}
              </h1>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className={theme === 'kawaii' ? 'transform hover:scale-105 transition-transform duration-300' : ''}
            >
              <p className="text-xl md:text-2xl mb-6"
                style={{
                  color: theme === 'kawaii' ? '#fbcfe8' : 'rgb(209, 213, 219)',
                  textShadow: theme === 'kawaii' ? '0 0 10px rgba(236, 72, 153, 0.3)' : 'none'
                }}
              >
                {content.subheading}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-base md:text-lg mb-8 max-w-xl"
                style={{
                  color: theme === 'kawaii' ? 'rgba(252, 231, 243, 0.9)' : 'rgb(209, 213, 219)',
                  textShadow: theme === 'kawaii' ? '0 0 8px rgba(236, 72, 153, 0.2)' : 'none'
                }}
              >
                {content.description}
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link 
                href={content.cta.primary.link}
                className="px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center"
                style={{
                  backgroundColor: theme === 'portfolio' ? '#7c3aed' : '#ec4899',
                  color: 'white',
                  boxShadow: theme === 'kawaii' ? '0 10px 15px -3px rgba(236, 72, 153, 0.3)' : 'none'
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
                  boxShadow: theme === 'kawaii' ? '0 10px 15px -3px rgba(236, 72, 153, 0.2)' : 'none'
                }}
              >
                {theme === 'kawaii' && <span className="mr-2">💖</span>}
                {content.cta.secondary.text}
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: theme === 'kawaii' ? 'rgba(236, 72, 153, 0.2)' : 'transparent',
                      backdropFilter: theme === 'kawaii' ? 'blur(4px)' : 'none'
                    }}
                    animate={{ 
                      rotate: theme === 'kawaii' ? (index - 1) : 0 
                    }}
                    whileHover={{ 
                      rotate: 0,
                      scale: theme === 'kawaii' ? 1.05 : 1
                    }}
                    transition={{
                      duration: 0.3
                    }}
                  >
                    <div className="text-2xl md:text-3xl font-bold"
                      style={{
                        color: theme === 'kawaii' ? '#fce7f3' : 'white',
                        textShadow: theme === 'kawaii' ? '0 0 10px rgba(236, 72, 153, 0.5)' : 'none'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm"
                      style={{
                        color: theme === 'kawaii' ? '#fbcfe8' : 'rgb(209, 213, 219)',
                        textShadow: theme === 'kawaii' ? '0 0 5px rgba(236, 72, 153, 0.3)' : 'none'
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
          
          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block"
          >
            <motion.div 
              className="relative h-[500px] w-full"
              animate={{ rotate: theme === 'kawaii' ? 3 : 0 }}
              transition={themeTransition}
            >
              <Image 
                src={
                  theme === 'portfolio' 
                    ? "/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg"
                    : "/media/social_post_examples_images/474172572_18478867738054326_1426034679285231887_n.jpg"
                }
                alt="Alyssa Griffith"
                fill
                className="object-cover rounded-xl"
                style={{
                  border: theme === 'kawaii' ? '8px solid rgba(249, 168, 212, 0.8)' : 'none',
                  boxShadow: theme === 'kawaii' 
                    ? '0 25px 50px -12px rgba(236, 72, 153, 0.4), 0 0 15px rgba(236, 72, 153, 0.3)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                sizes="(max-width: 1024px) 0vw, 600px"
                priority
              />
              
              <AnimatePresence>
                {theme === 'kawaii' && (
                  <>
                    <motion.div 
                      className="absolute -top-6 -right-5 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm px-4 py-2 rounded-full transform rotate-12 font-medium shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        rotate: [12, 15, 12, 9, 12],
                        y: [0, -5, 0, 5, 0]
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Kawaii Mode! 🌸
                    </motion.div>
                    
                    {/* Decorative stickers */}
                    <motion.div 
                      className="absolute bottom-5 -left-5 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs px-3 py-1.5 rounded-full transform -rotate-12 font-medium shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        rotate: [-12, -8, -12, -16, -12],
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      So cute! 💕
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-1/2 -right-6 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs px-3 py-1.5 rounded-full transform rotate-90 font-medium shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        x: [0, 5, 0, -5, 0],
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      ✨ Amazing!
                    </motion.div>
                    
                    {/* New sticker */}
                    <motion.div 
                      className="absolute top-10 left-5 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs px-3 py-1.5 rounded-full transform rotate-[-20deg] font-medium shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1,
                        scale: 1,
                        rotate: [-20, -15, -20, -25, -20],
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      Subscribe! 💖
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
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