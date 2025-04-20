'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Press feature data
const pressFeatures = [
  {
    id: 1,
    outlet: 'TikTok Trends',
    title: 'Rising Stars: Creators Changing the Dance Scene',
    quote: 'Alyssa Griffith has mastered the art of viral transitions, with her videos generating millions of views in record time.',
    date: 'February 2024',
    logo: '/media/logo-icon_only.png',
    link: '#'
  },
  {
    id: 2,
    outlet: 'Cosplay Weekly',
    title: 'The New Wave of Cosplay Influencers',
    quote: 'Griffith brings characters to life with meticulous attention to detail and her signature kawaii style that resonates with anime fans worldwide.',
    date: 'January 2024',
    logo: '/media/logo-icon_only.png',
    link: '#'
  },
  {
    id: 3,
    outlet: 'Social Media Today',
    title: 'Gen Z Influencers: The New Marketing Powerhouses',
    quote: 'With engagement rates consistently above industry averages, Alyssa Griffith has become a go-to creator for brands targeting the 18-24 demographic.',
    date: 'December 2023',
    logo: '/media/logo-icon_only.png',
    link: '#'
  },
  {
    id: 4,
    outlet: 'Digital Creator Magazine',
    title: 'Top 50 Influencers to Watch',
    quote: 'Alyssa Griffith has created a unique dual-personality brand that allows her to appeal to both corporate partners and niche fan communities.',
    date: 'November 2023',
    logo: '/media/logo-icon_only.png',
    link: '#'
  },
  {
    id: 5,
    outlet: 'Entertainment Weekly',
    title: 'How TikTok is Changing Entertainment',
    quote: 'Creators like Alyssa Griffith are pioneering new forms of micro-entertainment that capture attention in seconds yet build lasting fan connections.',
    date: 'October 2023',
    logo: '/media/logo-icon_only.png',
    link: '#'
  }
];

// Logo showcase data
const brandLogos = [
  { id: 1, name: 'Fashion Brand', logo: '/media/logo-icon_only.png' },
  { id: 2, name: 'Beauty Brand', logo: '/media/logo-icon_only.png' },
  { id: 3, name: 'Tech Company', logo: '/media/logo-icon_only.png' },
  { id: 4, name: 'Entertainment Platform', logo: '/media/logo-icon_only.png' },
  { id: 5, name: 'Lifestyle Brand', logo: '/media/logo-icon_only.png' },
  { id: 6, name: 'Gaming Company', logo: '/media/logo-icon_only.png' },
];

// Press Quote Slider
const PressQuoteSlider = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % pressFeatures.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplayEnabled]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplayEnabled(false);
  const handleMouseLeave = () => setAutoplayEnabled(true);

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    setAutoplayEnabled(false);
  };

  return (
    <div 
      className="relative overflow-hidden py-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '✨ Media Spotlight ✨' : 'Featured In'}
        </h2>
        
        {/* Slider container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative" style={{ height: '360px' }}>
              <AnimatePresence mode="wait">
                {pressFeatures.map((feature, index) => (
                  currentSlide === index && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 p-12 flex flex-col items-center text-center ${
                        theme === 'kawaii' 
                          ? 'bg-gradient-to-r from-pink-100 via-pink-50 to-purple-50 border-2 border-pink-200'
                          : 'bg-gray-50 border border-gray-200'
                      } rounded-2xl`}
                    >
                      <div className="mb-6 relative w-16 h-16">
                        <Image
                          src={feature.logo}
                          alt={feature.outlet}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'kawaii' ? 'text-pink-600' : 'text-gray-900'
                      }`}>
                        {feature.outlet}
                      </h3>
                      
                      <h4 className={`text-lg font-medium mb-6 ${
                        theme === 'kawaii' ? 'text-purple-600' : 'text-violet-600'
                      }`}>
                        "{feature.title}"
                      </h4>
                      
                      <blockquote className={`text-xl italic mb-6 ${
                        theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                      }`}>
                        "{feature.quote}"
                      </blockquote>
                      
                      <span className={`text-sm ${
                        theme === 'kawaii' ? 'text-pink-500' : 'text-gray-500'
                      }`}>
                        {feature.date}
                      </span>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Slider controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {pressFeatures.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? theme === 'kawaii' 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-violet-600 scale-125'
                    : theme === 'kawaii'
                      ? 'bg-pink-200 hover:bg-pink-300'
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full ${
              theme === 'kawaii' 
                ? 'bg-pink-400 text-white hover:bg-pink-500'
                : 'bg-violet-600 text-white hover:bg-violet-700'
            } focus:outline-none z-10`}
            onClick={() => goToSlide((currentSlide - 1 + pressFeatures.length) % pressFeatures.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full ${
              theme === 'kawaii' 
                ? 'bg-pink-400 text-white hover:bg-pink-500'
                : 'bg-violet-600 text-white hover:bg-violet-700'
            } focus:outline-none z-10`}
            onClick={() => goToSlide((currentSlide + 1) % pressFeatures.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Brand logos marquee
const BrandLogosMarquee = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`py-16 ${
      theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '🌟 Brands I\'ve Worked With 🌟' : 'Brand Collaborations'}
        </h2>
        
        <div className="relative overflow-hidden py-4">
          <div className="flex space-x-12 animate-marquee">
            {/* Duplicate logos for infinite scroll effect */}
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className={`flex-shrink-0 flex items-center justify-center w-32 h-32 ${
                  theme === 'kawaii' 
                    ? 'bg-white rounded-xl shadow-md shadow-pink-200 border-2 border-pink-100'
                    : 'bg-white rounded-xl shadow-md border border-gray-100'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Press mentions table
const PressMentions = () => {
  const { theme } = useTheme();
  
  const mentions = [
    {
      outlet: 'Fashion Weekly',
      title: 'Social Media Stars Taking Over Fashion',
      date: 'March 2024',
      link: '#'
    },
    {
      outlet: 'The Creator Economy',
      title: 'How Dance Creators Are Building Media Empires',
      date: 'February 2024',
      link: '#'
    },
    {
      outlet: 'Digital Marketing Insider',
      title: 'Case Study: Successful Influencer Campaigns',
      date: 'January 2024',
      link: '#'
    },
    {
      outlet: 'Cosplay Magazine',
      title: '10 Cosplayers Breaking Into Mainstream',
      date: 'December 2023',
      link: '#'
    },
    {
      outlet: 'Social Platform Report',
      title: 'Content Creators to Watch in 2024',
      date: 'December 2023',
      link: '#'
    }
  ];
  
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '📰 Press Coverage 📰' : 'Media Mentions'}
        </h2>
        
        <div className="overflow-hidden shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={theme === 'kawaii' ? 'bg-pink-100' : 'bg-gray-50'}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                }`}>
                  Media Outlet
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                }`}>
                  Feature Title
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                }`}>
                  Date
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                }`}>
                  Link
                </th>
              </tr>
            </thead>
            <tbody className={`bg-white divide-y ${
              theme === 'kawaii' ? 'divide-pink-100' : 'divide-gray-200'
            }`}>
              {mentions.map((mention, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={theme === 'kawaii' ? 'hover:bg-pink-50' : 'hover:bg-gray-50'}
                >
                  <td className={`px-6 py-4 whitespace-nowrap ${
                    theme === 'kawaii' ? 'text-pink-800' : 'text-gray-900'
                  } font-medium`}>
                    {mention.outlet}
                  </td>
                  <td className={`px-6 py-4 ${
                    theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                  }`}>
                    {mention.title}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${
                    theme === 'kawaii' ? 'text-pink-600' : 'text-gray-500'
                  }`}>
                    {mention.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={mention.link} 
                      className={`inline-flex items-center ${
                        theme === 'kawaii' 
                          ? 'text-pink-500 hover:text-pink-700' 
                          : 'text-violet-600 hover:text-violet-800'
                      }`}
                    >
                      Read
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Press Kit section
const PressKit = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`py-20 ${
      theme === 'kawaii' ? 'bg-gradient-to-r from-pink-100 via-pink-50 to-purple-50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
              }`}>
                {theme === 'kawaii' ? '🎀 Press Kit & Resources 🎀' : 'Press Kit'}
              </h2>
              
              <p className={`mb-6 ${
                theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
              }`}>
                Looking to feature Alyssa Griffith in your publication? Download the press kit for official bio, high-resolution images, and brand guidelines.
              </p>
              
              <ul className={`space-y-4 mb-8 ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
              }`}>
                <li className="flex items-center">
                  <svg className={`h-5 w-5 mr-2 ${
                    theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Official bio & resume
                </li>
                <li className="flex items-center">
                  <svg className={`h-5 w-5 mr-2 ${
                    theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  High-resolution images
                </li>
                <li className="flex items-center">
                  <svg className={`h-5 w-5 mr-2 ${
                    theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Brand guidelines
                </li>
                <li className="flex items-center">
                  <svg className={`h-5 w-5 mr-2 ${
                    theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fact sheet & statistics
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                    theme === 'kawaii'
                      ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                      : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
                  }`}
                >
                  {theme === 'kawaii' ? '✨ Download Press Kit ✨' : 'Download Press Kit'}
                </a>
                
                <Link 
                  href="/contact" 
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                    theme === 'kawaii'
                      ? 'bg-white text-pink-500 border-2 border-pink-300 hover:bg-pink-50 shadow-lg shadow-pink-100 hover:scale-105'
                      : 'bg-white text-violet-600 border border-violet-200 hover:bg-violet-50 hover:scale-105'
                  }`}
                >
                  {theme === 'kawaii' ? '💌 Contact for Press 💌' : 'Contact for Press'}
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-2xl overflow-hidden shadow-xl ${
              theme === 'kawaii' ? 'border-4 border-pink-200' : 'border border-gray-200'
            }`}>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg"
                  alt="Alyssa Griffith Press Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 opacity-30 ${
                  theme === 'kawaii' 
                    ? 'bg-gradient-to-tr from-pink-500 to-purple-500'
                    : 'bg-gradient-to-tr from-indigo-600 to-violet-600'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`px-6 py-3 rounded-full font-bold text-white ${
                    theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-700'
                  }`}>
                    {theme === 'kawaii' ? '✨ Press Materials ✨' : 'Press Materials'}
                  </div>
                </div>
              </div>
            </div>
            
            {theme === 'kawaii' && (
              <>
                <motion.div 
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-pink-300 opacity-70"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-purple-300 opacity-70"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function Press() {
  const { theme } = useTheme();
  
  return (
    <div className={theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-32 pb-20 ${
        theme === 'kawaii' 
          ? 'bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400' 
          : 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {theme === 'kawaii' ? '📰 Press & Media 📰' : 'Press & Media'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'See where I\'ve been featured and download press materials!' 
                : 'Media coverage, press releases, and resources for publications'}
            </p>
          </motion.div>
        </div>

        {/* Decorative elements for kawaii theme */}
        {theme === 'kawaii' && (
          <>
            <motion.div 
              className="absolute -bottom-6 left-10 w-24 h-24 rounded-full bg-pink-200 opacity-70"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div 
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-purple-300 opacity-70"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </>
        )}
      </section>
      
      <PressQuoteSlider />
      <BrandLogosMarquee />
      <PressMentions />
      <PressKit />
    </div>
  );
} 