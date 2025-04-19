'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Update video source when theme changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [theme]);
  
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
      posterSrc: "/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg"
    },
    kawaii: {
      heading: "Alyssa-chan~ ✨",
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
      posterSrc: "/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg"
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

  // Select content based on theme
  const content = theme === 'portfolio' ? heroContent.portfolio : heroContent.kawaii;
  
  // Floating emotes for kawaii theme
  const emotes = ["✨", "💕", "🌸", "✌️", "🎀", "💖"];
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={content.posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={content.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className={`absolute inset-0 ${
          theme === 'portfolio' 
            ? 'bg-gradient-to-r from-gray-900/70 to-black/60' 
            : 'bg-gradient-to-r from-pink-500/40 to-purple-500/50 backdrop-blur-[2px]'
        }`}></div>
      </div>

      {/* Floating emotes for kawaii theme */}
      {theme === 'kawaii' && (
        <>
          {emotes.map((emote, index) => (
            <motion.div
              key={index}
              className="absolute text-3xl select-none pointer-events-none"
              initial={{ 
                opacity: 0, 
                y: '100vh',
                x: `${Math.random() * 100}vw` 
              }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                y: '0vh',
                rotate: Math.random() * 360 
              }}
              transition={{ 
                duration: 10 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 20,
                ease: "linear" 
              }}
            >
              {emote}
            </motion.div>
          ))}
        </>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-0">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="text-white">
            <motion.div variants={itemVariants}>
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
                theme === 'kawaii' ? 'text-pink-100' : 'text-white'
              }`}>
                {content.heading}
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className={`text-xl md:text-2xl mb-6 ${
                theme === 'kawaii' ? 'text-pink-200 font-medium' : 'text-gray-300'
              }`}>
                {content.subheading}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className={`text-base md:text-lg mb-8 max-w-xl ${
                theme === 'kawaii' ? 'text-pink-100/90' : 'text-gray-300'
              }`}>
                {content.description}
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link 
                href={content.cta.primary.link}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center ${
                  theme === 'portfolio' 
                    ? 'bg-violet-600 hover:bg-violet-700 text-white' 
                    : 'bg-pink-400 hover:bg-pink-500 text-white'
                }`}
              >
                {content.cta.primary.text}
              </Link>
              <Link 
                href={content.cta.secondary.link}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 text-center ${
                  theme === 'portfolio' 
                    ? 'border border-white text-white hover:bg-white/10' 
                    : 'border border-pink-300 text-pink-100 hover:bg-pink-400/20'
                }`}
              >
                {content.cta.secondary.text}
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, index) => (
                  <div key={index} className={theme === 'kawaii' ? 'text-pink-100' : 'text-white'}>
                    <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                    <div className={`text-sm ${theme === 'kawaii' ? 'text-pink-200' : 'text-gray-300'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <Image 
                src={
                  theme === 'portfolio' 
                    ? "/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg"
                    : "/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg"
                }
                alt="Alyssa Griffith"
                fill
                className={`object-cover rounded-xl ${
                  theme === 'portfolio' 
                    ? 'shadow-2xl' 
                    : 'border-4 border-pink-300 shadow-2xl shadow-pink-500/20'
                }`}
                sizes="(max-width: 1024px) 0vw, 600px"
                priority
              />
              {theme === 'kawaii' && (
                <div className="absolute -top-5 -right-5 bg-pink-400 text-white text-sm px-4 py-2 rounded-full transform rotate-12 font-medium shadow-lg">
                  Kawaii Mode!
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className={`absolute bottom-10 right-10 z-20 p-3 rounded-full shadow-lg ${
          theme === 'portfolio' 
            ? 'bg-violet-600 text-white hover:bg-violet-700' 
            : 'bg-pink-400 text-white hover:bg-pink-500'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'portfolio' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </motion.button>
    </section>
  );
};

export default Hero; 