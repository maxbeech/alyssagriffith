'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Dance portfolio items data
const danceItems = [
  {
    id: 1,
    title: 'K-Pop Dance Cover',
    category: 'cover',
    description: 'Full choreography cover of a popular K-Pop song with detailed costume reproduction.',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    date: 'March 2024',
  },
  {
    id: 2,
    title: 'Viral TikTok Transition Dance',
    category: 'transition',
    description: 'Seamless outfit change transition dance that gained over 1 million views.',
    image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
    date: 'February 2024',
  },
  {
    id: 3,
    title: 'Original Choreography Showcase',
    category: 'original',
    description: 'Original dance choreography created for a special event, combining multiple dance styles.',
    image: '/media/social_post_examples_images/454259564_1083318636205001_9211354481593696311_n.jpg',
    date: 'January 2024',
  },
  {
    id: 4,
    title: 'Dance Tutorial Series',
    category: 'tutorial',
    description: 'Step-by-step tutorial breaking down complex dance moves for beginners to learn.',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    date: 'December 2023',
  },
  {
    id: 5,
    title: 'Anime Convention Performance',
    category: 'performance',
    description: 'Live stage performance at AnimeExpo 2023 featuring choreography inspired by popular anime openings.',
    image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
    date: 'November 2023',
  },
  {
    id: 6,
    title: 'Trending Dance Challenge',
    category: 'challenge',
    description: 'My take on a viral dance challenge with unique personal variations and styling.',
    image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
    date: 'October 2023',
  },
  {
    id: 7,
    title: 'Collaboration Dance Project',
    category: 'collaboration',
    description: 'Joint dance project with other creators, featuring synchronized choreography across multiple videos.',
    image: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
    date: 'September 2023',
  },
  {
    id: 8,
    title: 'Behind-the-Scenes Dance Practice',
    category: 'behind-the-scenes',
    description: 'Raw dance practice footage showing the preparation process for my viral videos.',
    image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
    date: 'August 2023',
  },
  {
    id: 9,
    title: 'Dance Mashup Video',
    category: 'mashup',
    description: 'Creative mashup combining choreography from multiple popular songs into one seamless routine.',
    image: '/media/headshots/458042825_914504783786613_4060333813556286485_n.jpg',
    date: 'July 2023',
  },
];

export default function DancePortfolio() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | typeof danceItems[0]>(null);

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Dance' },
    { id: 'cover', label: 'Covers' },
    { id: 'transition', label: 'Transitions' },
    { id: 'original', label: 'Original' },
    { id: 'tutorial', label: 'Tutorials' },
    { id: 'performance', label: 'Performances' },
  ];

  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? danceItems 
    : danceItems.filter(item => item.category === activeFilter);

  // Open modal with selected item
  const openModal = (item: typeof danceItems[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

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
              {theme === 'kawaii' ? '✨ Dance Portfolio ✨' : 'Dance Portfolio'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Check out my high-energy dance videos, tutorials and performance clips!' 
                : 'Showcasing my choreography, dance covers, and performance art'}
            </p>
          </motion.div>
        </div>

        {/* Decorative elements for kawaii theme */}
        {theme === 'kawaii' && (
          <>
            <motion.div 
              className="absolute -bottom-6 right-10 w-24 h-24 rounded-full bg-pink-200 opacity-70"
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
              className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-300 opacity-70"
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

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <div className={`inline-flex rounded-full p-1 ${
              theme === 'kawaii' ? 'bg-pink-100' : 'bg-gray-100'
            }`}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? theme === 'kawaii'
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'bg-violet-600 text-white'
                      : theme === 'kawaii'
                        ? 'text-pink-700 hover:bg-pink-200'
                        : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-xl overflow-hidden ${
                    theme === 'kawaii'
                      ? 'shadow-lg shadow-pink-200/50 border-2 border-pink-200'
                      : 'shadow-lg border border-gray-200'
                  }`}
                  style={{ aspectRatio: item.id % 3 === 0 ? '3/4' : '3/3' }}
                  onClick={() => openModal(item)}
                >
                  <div className="relative w-full h-full cursor-pointer group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'kawaii'
                        ? 'bg-gradient-to-tr from-pink-500/80 to-purple-500/80'
                        : 'bg-black/70'
                    } flex flex-col justify-end p-6`}>
                      <span className={`text-xs uppercase tracking-wider mb-2 ${
                        theme === 'kawaii' ? 'text-pink-200' : 'text-violet-200'
                      }`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white text-sm opacity-80">{item.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-4xl w-full rounded-2xl overflow-hidden ${
                theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={`absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full ${
                  theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                }`}
                onClick={closeModal}
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={`p-8 ${theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'}`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 ${
                    theme === 'kawaii' ? 'bg-pink-100 text-pink-700' : 'bg-violet-100 text-violet-700'
                  }`}>
                    {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                  </span>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                  }`}>
                    {selectedItem.title}
                  </h3>
                  <p className={`mb-6 ${
                    theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                  }`}>
                    {selectedItem.description}
                  </p>
                  <div className={`text-sm ${
                    theme === 'kawaii' ? 'text-pink-600' : 'text-gray-600'
                  }`}>
                    <p>Date: {selectedItem.date}</p>
                  </div>
                  <div className="mt-8">
                    <Link 
                      href="/dance" 
                      className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                        theme === 'kawaii'
                          ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                          : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
                      }`}
                    >
                      {theme === 'kawaii' ? '✨ See More Dance Content ✨' : 'View Dance Page'}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className={`py-20 ${
        theme === 'kawaii' ? 'bg-gradient-to-r from-pink-200 to-pink-100' : 'bg-violet-50'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
            theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '💖 Want to Learn My Moves? 💖' : 'Interested in Dance Tutorials?'}
          </h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
          }`}>
            {theme === 'kawaii' 
              ? 'Check out my dance page for tutorials, behind-the-scenes content and dance tips!'
              : 'Visit my dedicated dance page for in-depth tutorials and technique breakdowns.'}
          </p>
          <Link 
            href="/dance" 
            className={`inline-block px-8 py-4 rounded-full font-medium text-lg transition-all ${
              theme === 'kawaii'
                ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-300/30 hover:scale-105'
                : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
            }`}
          >
            {theme === 'kawaii' ? '✨ Go to Dance Page ✨' : 'Explore Dance Content'}
          </Link>
        </div>
      </section>
    </div>
  );
} 