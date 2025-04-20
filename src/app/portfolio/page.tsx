'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: 'Summer Fashion Campaign',
    category: 'brand-work',
    description: 'Promotional content for summer fashion collection featuring casual beach wear.',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    client: 'Fashion Brand',
    date: 'June 2023',
  },
  {
    id: 2,
    title: 'Cosplay Convention Appearance',
    category: 'cosplay',
    description: 'Featured cosplay performance at Anime Convention 2023.',
    image: '/media/social_post_examples_images/451054069_930525998766432_8420761959308580563_n.jpg',
    date: 'August 2023',
  },
  {
    id: 3,
    title: 'TikTok Dance Challenge',
    category: 'dance',
    description: 'Viral dance challenge that garnered over 2 million views.',
    image: '/media/social_post_examples_images/454259564_1083318636205001_9211354481593696311_n.jpg',
    date: 'September 2023',
  },
  {
    id: 4,
    title: 'Lifestyle Brand Partnership',
    category: 'brand-work',
    description: 'Lifestyle content featuring home goods and decoration.',
    image: '/media/social_post_examples_images/448485172_1089729965450196_1766185261358962474_n.jpg',
    client: 'Home Goods Brand',
    date: 'October 2023',
  },
  {
    id: 5,
    title: 'Anime Character Cosplay',
    category: 'cosplay',
    description: 'Recreation of popular anime character with detailed costume and makeup.',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    date: 'November 2023',
  },
  {
    id: 6,
    title: 'Choreography Showcase',
    category: 'dance',
    description: 'Original choreography for trending song.',
    image: '/media/social_post_examples_images/414071636_877656817460797_8060586933150239830_n.jpg',
    date: 'December 2023',
  },
  {
    id: 7,
    title: 'Beauty Product Campaign',
    category: 'brand-work',
    description: 'Promotional content for skincare line featuring before and after results.',
    image: '/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg',
    client: 'Beauty Brand',
    date: 'January 2024',
  },
  {
    id: 8,
    title: 'Video Game Cosplay Series',
    category: 'cosplay',
    description: 'Series of cosplays inspired by popular video game characters.',
    image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
    date: 'February 2024',
  },
  {
    id: 9,
    title: 'Dance Tutorial Series',
    category: 'dance',
    description: 'Step-by-step tutorials for popular dance moves and transitions.',
    image: '/media/headshots/458042825_914504783786613_4060333813556286485_n.jpg',
    date: 'March 2024',
  },
];

export default function Portfolio() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'brand-work', label: 'Brand Work' },
    { id: 'cosplay', label: 'Cosplay' },
    { id: 'dance', label: 'Dance' },
  ];

  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Open modal with selected item
  const openModal = (item: typeof portfolioItems[0]) => {
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
              {theme === 'kawaii' ? '✨ My Creative Work ✨' : 'Portfolio'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Check out my kawaii cosplays, dance videos and brand collaborations!' 
                : 'Showcasing my work across brand partnerships, cosplay creations, and dance content'}
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
          <div className="flex justify-center mb-12">
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
                        {item.category === 'brand-work' ? 'Brand Work' : item.category === 'cosplay' ? 'Cosplay' : 'Dance'}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className={`relative max-w-4xl w-full rounded-2xl overflow-hidden ${
                theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                  theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-1/2 relative" style={{ height: '500px' }}>
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 p-8 ${
                  theme === 'kawaii' ? 'text-pink-800' : 'text-gray-800'
                }`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 ${
                    theme === 'kawaii' 
                      ? 'bg-pink-200 text-pink-700' 
                      : 'bg-violet-100 text-violet-700'
                  }`}>
                    {selectedItem.category === 'brand-work' ? 'Brand Work' : selectedItem.category === 'cosplay' ? 'Cosplay' : 'Dance'}
                  </span>
                  
                  <h2 className={`text-2xl font-bold mb-4 ${
                    theme === 'kawaii' ? 'text-pink-600' : 'text-gray-900'
                  }`}>
                    {selectedItem.title}
                  </h2>
                  
                  <p className="mb-6">{selectedItem.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <span className={`font-medium w-24 ${
                        theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                      }`}>Date:</span>
                      <span>{selectedItem.date}</span>
                    </div>
                    
                    {selectedItem.client && (
                      <div className="flex">
                        <span className={`font-medium w-24 ${
                          theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                        }`}>Client:</span>
                        <span>{selectedItem.client}</span>
                      </div>
                    )}
                    
                    <div className="flex">
                      <span className={`font-medium w-24 ${
                        theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                      }`}>Category:</span>
                      <span>{selectedItem.category === 'brand-work' ? 'Brand Work' : selectedItem.category === 'cosplay' ? 'Cosplay' : 'Dance'}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    {selectedItem.category === 'brand-work' && (
                      <Link href="/contact" className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                        theme === 'kawaii'
                          ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200'
                          : 'bg-violet-600 text-white hover:bg-violet-700'
                      }`}>
                        {theme === 'kawaii' ? '✨ Work with Me! ✨' : 'Inquire about Collaborations'}
                      </Link>
                    )}
                    
                    {selectedItem.category === 'cosplay' && (
                      <Link href="/cosplay" className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                        theme === 'kawaii'
                          ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200'
                          : 'bg-violet-600 text-white hover:bg-violet-700'
                      }`}>
                        {theme === 'kawaii' ? '🎀 More Cosplays! 🎀' : 'Explore More Cosplays'}
                      </Link>
                    )}
                    
                    {selectedItem.category === 'dance' && (
                      <Link href="/dance" className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                        theme === 'kawaii'
                          ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200'
                          : 'bg-violet-600 text-white hover:bg-violet-700'
                      }`}>
                        {theme === 'kawaii' ? '💃 See Me Dance! 💃' : 'Watch Dance Videos'}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className={`py-20 ${
        theme === 'kawaii' ? 'bg-gradient-to-r from-pink-100 via-pink-50 to-purple-50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
            }`}>
              {theme === 'kawaii' ? '💕 Want to collaborate? 💕' : 'Interested in Working Together?'}
            </h2>
            
            <p className={`max-w-2xl mx-auto mb-8 ${
              theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
            }`}>
              {theme === 'kawaii'
                ? 'Looking for a digital creator to promote your brand? I\'d love to bring my kawaii style to your project!'
                : 'I partner with brands that align with my values and audience. Let\'s create engaging content together.'}
            </p>
            
            <Link href="/contact" className={`inline-block px-8 py-4 rounded-full font-medium text-lg transition-all ${
              theme === 'kawaii'
                ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
            }`}>
              {theme === 'kawaii' ? '✨ Let\'s Create Together! ✨' : 'Get in Touch'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 