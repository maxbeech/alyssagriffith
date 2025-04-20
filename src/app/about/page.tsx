'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Heading component with theme-aware styling
const Heading = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const { theme } = useTheme();
  return (
    <h2 
      className={`text-3xl md:text-4xl font-bold mb-6 ${
        theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
      } ${className}`}
    >
      {children}
    </h2>
  );
};

// Stats component with animated counters
const Stats = () => {
  const { theme } = useTheme();
  
  const stats = [
    { label: 'TikTok Followers', value: '1.7M+', icon: '/media/logo-icon_only.png' },
    { label: 'Instagram Followers', value: '715K+', icon: '/media/logo-icon_only.png' },
    { label: 'Brand Collaborations', value: '120+', icon: '/media/logo-icon_only.png' },
    { label: 'Countries Reached', value: '50+', icon: '/media/logo-icon_only.png' },
  ];

  return (
    <div className={`py-16 ${theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading className="text-center mb-12">
          {theme === 'kawaii' ? '✨ My Growth Journey ✨' : 'Platform & Reach'}
        </Heading>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl ${
                theme === 'kawaii' 
                  ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100' 
                  : 'bg-white border border-gray-100 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={stat.icon}
                alt={stat.label}
                width={48}
                height={48}
                className={`mb-4 ${theme === 'kawaii' ? 'animate-bounce' : ''}`}
              />
              <motion.span 
                className={`text-3xl md:text-4xl font-bold mb-2 ${
                  theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
                }`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.span>
              <span className={theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Portrait Gallery with carousel
const PortraitGallery = () => {
  const { theme } = useTheme();
  
  const portraits = [
    '/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg',
    '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
    '/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg',
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading className="text-center mb-12">
          {theme === 'kawaii' ? '📸 Gallery 📸' : 'Portrait Gallery'}
        </Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {portraits.map((portrait, index) => (
            <motion.div 
              key={index}
              className={`relative rounded-xl overflow-hidden aspect-[3/4] ${
                theme === 'kawaii' 
                  ? 'border-4 border-pink-300 shadow-xl shadow-pink-100 transform rotate-' + (index % 2 === 0 ? '1' : '-1')
                  : 'border border-gray-200 shadow-xl'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 } 
              }}
            >
              <Image
                src={portrait}
                alt={`Alyssa Griffith portrait ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                theme === 'kawaii' 
                  ? 'bg-gradient-to-r from-pink-500/70 to-purple-500/70' 
                  : 'bg-black/50'
              } flex items-end`}>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Alyssa Griffith</h3>
                  <p>{theme === 'kawaii' ? 'Kawaii Cosplayer & Dancer ✨' : 'Digital Creator & Influencer'}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Bio section
const Bio = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <div className="py-16" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          style={{ opacity, y }}
        >
          <Heading>
            {theme === 'kawaii' ? '🌸 My Story 🌸' : 'About Me'}
          </Heading>
          
          <motion.div 
            className={`prose lg:prose-xl mx-auto ${
              theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Hi, I'm Alyssa Griffith! I'm an American digital creator and influencer who's passionate about dance, cosplay, and connecting with my amazing community online.
            </p>
            
            <p>
              Since launching my TikTok in November 2020, I've built a following of over 1.7 million people who enjoy my high-energy dance transitions, creative cosplays, and authentic lifestyle content. On Instagram, I share fashion-forward looks and behind-the-scenes moments with my 715,000+ followers.
            </p>
            
            <p>
              My mission is to inspire and entertain through creative choreography, authentic storytelling, and engaging content that resonates with my primarily Gen Z audience. Whether I'm creating dance tutorials, showcasing new cosplays, or partnering with brands I love, my goal is to bring joy and creativity to everything I do.
            </p>
            
            <p>
              When I'm not creating content, I enjoy {theme === 'kawaii' ? 'watching anime, collecting kawaii merchandise, and gaming' : 'choreographing new routines, traveling, and connecting with fans through live streams'}.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                  theme === 'kawaii'
                    ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200'
                    : 'bg-violet-600 text-white hover:bg-violet-700'
                }`}
              >
                {theme === 'kawaii' ? '✨ Let\'s Connect! ✨' : 'Get in Touch'}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Journey Timeline
const Timeline = () => {
  const { theme } = useTheme();
  
  const milestones = [
    {
      year: '2020',
      title: 'TikTok Debut',
      description: 'Posted my first dance video on TikTok in November 2020.'
    },
    {
      year: '2021',
      title: 'Viral Breakthrough',
      description: 'Reached 500K followers after several viral dance transitions.'
    },
    {
      year: '2022',
      title: 'Brand Collaborations',
      description: 'Partnered with major fashion and lifestyle brands.'
    },
    {
      year: '2023',
      title: 'Cosplay Focus',
      description: 'Expanded content to include popular anime and game character cosplays.'
    },
    {
      year: '2024',
      title: 'Multi-Platform Growth',
      description: 'Surpassed 1.7M on TikTok and 700K on Instagram, launched website.'
    }
  ];

  return (
    <div className={`py-16 ${theme === 'kawaii' ? 'bg-gradient-to-r from-pink-100 via-pink-50 to-purple-50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading className="text-center mb-12">
          {theme === 'kawaii' ? '✨ My Journey ✨' : 'Creator Timeline'}
        </Heading>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
            theme === 'kawaii' ? 'bg-pink-300' : 'bg-violet-300'
          }`}></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full z-10 ${
                  theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                }`}>
                  {milestone.year.substring(2)}
                </div>
                
                <div className={`relative ${index % 2 === 0 ? 'ml-auto pl-12 pr-4' : 'mr-auto pr-12 pl-4'} w-1/2`}>
                  <div className={`p-6 rounded-xl ${
                    theme === 'kawaii' 
                      ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100' 
                      : 'bg-white border border-gray-100 shadow-lg'
                  }`}>
                    <span className={`text-sm font-medium ${
                      theme === 'kawaii' ? 'text-pink-600' : 'text-violet-600'
                    }`}>
                      {milestone.year}
                    </span>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                    }`}>
                      {milestone.title}
                    </h3>
                    <p className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-600'}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
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
              {theme === 'kawaii' ? '🌸 About Alyssa-Chan 🌸' : 'About Me'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Get to know the real me behind the kawaii cosplays and dance videos!' 
                : 'Digital creator passionate about dance, creativity, and authentic engagement'}
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
      
      <Bio />
      <PortraitGallery />
      <Stats />
      <Timeline />
    </div>
  );
} 