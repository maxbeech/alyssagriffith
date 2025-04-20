'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function BehindTheScenesPage() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Styling based on theme
  const styles = {
    bg: theme === 'kawaii' ? 'bg-gradient-to-b from-pink-50 to-purple-50' : 'bg-gray-50',
    heading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-400' : 'text-violet-500',
    card: theme === 'kawaii' 
      ? 'bg-white border-pink-200 shadow-pink-100' 
      : 'bg-white border-gray-200 shadow-gray-100',
    tag: theme === 'kawaii'
      ? 'bg-pink-100 text-pink-600'
      : 'bg-violet-100 text-violet-600',
    button: {
      active: theme === 'kawaii'
        ? 'bg-pink-500 text-white'
        : 'bg-violet-700 text-white',
      inactive: theme === 'kawaii'
        ? 'bg-white text-pink-500 border-pink-300 hover:bg-pink-50'
        : 'bg-white text-violet-700 border-violet-200 hover:bg-violet-50'
    }
  };
  
  // BTS content categories and items
  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'photoshoots', name: 'Photoshoots' },
    { id: 'videos', name: 'Video Sets' },
    { id: 'events', name: 'Events' },
    { id: 'travel', name: 'Travel' }
  ];
  
  const btsItems = [
    {
      id: 1,
      title: "Winter Collection Photoshoot",
      description: "Setting up lights and backdrop for my winter-themed content shoots.",
      category: "photoshoots",
      image: "/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg",
      date: "December 15, 2023"
    },
    {
      id: 2,
      title: "Dance Video Prep",
      description: "Practicing my moves before shooting my latest dance transition video.",
      category: "videos",
      image: "/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg",
      date: "January 5, 2024"
    },
    {
      id: 3,
      title: "Anime Convention Appearance",
      description: "Getting ready for my meet and greet at AnimeExpo with my team.",
      category: "events",
      image: "/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg",
      date: "July 20, 2023"
    },
    {
      id: 4,
      title: "Tokyo Travel Vlog",
      description: "Visiting themed cafes and shopping for new cosplay materials in Akihabara.",
      category: "travel",
      image: "/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg",
      date: "November 3, 2023"
    },
    {
      id: 5,
      title: "Cosplay Makeup Tutorial",
      description: "Setting up my ring light and camera to film my latest tutorial.",
      category: "videos",
      image: "/media/social_post_examples_images/439690397_1248280729539064_5138451564801685449_n.jpg",
      date: "February 2, 2024"
    },
    {
      id: 6,
      title: "Brand Partnership Meeting",
      description: "Behind the scenes of my content planning session with a new sponsor.",
      category: "events",
      image: "/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg",
      date: "March 10, 2024"
    },
  ];
  
  // Filter items by selected category
  const filteredItems = selectedCategory === 'all' 
    ? btsItems 
    : btsItems.filter(item => item.category === selectedCategory);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <main className={`${styles.bg} pt-24 min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${styles.heading}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'kawaii' ? '✨ Behind The Scenes ✨' : 'Behind The Scenes'}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Exclusive peeks into my creative process, photoshoots, and daily life as a content creator~! 💕' 
              : 'Exclusive content showcasing the creative process behind my work, from preparation to execution.'}
          </motion.p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                selectedCategory === category.id 
                  ? styles.button.active
                  : styles.button.inactive
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* BTS Content Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className={`rounded-xl overflow-hidden ${styles.card} border shadow-lg hover:shadow-xl transition-all duration-300`}
              variants={itemVariants}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${styles.tag}`}>
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <button 
                    className={`text-sm font-medium ${theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'}`}
                  >
                    {theme === 'kawaii' ? 'Read More →' : 'View Details →'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Newsletter Signup */}
        <motion.div
          className={`mt-24 p-8 rounded-2xl text-center ${
            theme === 'kawaii' 
              ? 'bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200' 
              : 'bg-violet-50 border border-violet-100'
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${styles.heading}`}>
            {theme === 'kawaii' ? '💌 Want more exclusive content? 💌' : 'Get Exclusive Updates'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {theme === 'kawaii'
              ? 'Subscribe to my newsletter for behind-the-scenes photos, early access to new content, and special subscriber-only announcements!'
              : 'Join my newsletter to receive behind-the-scenes updates, exclusive content, and early access to new releases.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:border-transparent"
            />
            <button 
              className={`px-6 py-3 rounded-lg font-medium text-white ${
                theme === 'kawaii' ? 'bg-pink-500 hover:bg-pink-600 focus:ring-pink-300' : 'bg-violet-700 hover:bg-violet-800 focus:ring-violet-300'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            >
              {theme === 'kawaii' ? '✨ Subscribe ✨' : 'Subscribe'}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 