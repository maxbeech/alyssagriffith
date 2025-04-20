'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function ShopPage() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Theme-specific styling
  const styles = {
    bg: theme === 'kawaii' ? 'bg-gradient-to-b from-pink-50 via-white to-purple-50' : 'bg-white',
    heading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-400' : 'text-violet-500',
    card: theme === 'kawaii' 
      ? 'bg-white border-2 border-pink-200 shadow-pink-100' 
      : 'bg-white border border-gray-200',
    button: {
      primary: theme === 'kawaii'
        ? 'bg-pink-500 text-white hover:bg-pink-600'
        : 'bg-violet-700 text-white hover:bg-violet-800',
      secondary: theme === 'kawaii'
        ? 'border-2 border-pink-300 text-pink-500 hover:bg-pink-50'
        : 'border border-violet-200 text-violet-700 hover:bg-violet-50'
    },
    tag: theme === 'kawaii'
      ? 'bg-pink-100 text-pink-600'
      : 'bg-violet-100 text-violet-600',
    category: {
      active: theme === 'kawaii'
        ? 'bg-pink-500 text-white'
        : 'bg-violet-700 text-white',
      inactive: theme === 'kawaii'
        ? 'bg-white text-pink-500 border-pink-300 hover:bg-pink-50'
        : 'bg-white text-violet-700 border-violet-200 hover:bg-violet-50'
    }
  };
  
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'prints', name: 'Photo Prints' },
    { id: 'merch', name: 'Merchandise' },
    { id: 'digital', name: 'Digital Content' }
  ];
  
  // Shop products
  const products = [
    {
      id: 1,
      name: "Dance Tutorial Bundle",
      price: 29.99,
      category: "digital",
      image: "/media/social_post_examples_images/474172572_18478867738054326_1426034679285231887_n.jpg",
      badge: "Bestseller",
      description: "Complete set of my signature dance moves and transitions tutorials."
    },
    {
      id: 2,
      name: "Limited Edition Signed Print",
      price: 49.99,
      category: "prints",
      image: "/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg",
      badge: "Limited",
      description: "High-quality 12x18 print, personally signed with a custom message."
    },
    {
      id: 3,
      name: "Kawaii Dance Queen T-Shirt",
      price: 34.99,
      category: "merch",
      image: "/media/social_post_examples_images/454639965_819646490336570_3911857521876050171_n.jpg",
      description: "Soft cotton blend shirt featuring my exclusive Dance Queen design."
    },
    {
      id: 4,
      name: "Cosplay Makeup Guide",
      price: 19.99,
      category: "digital",
      image: "/media/social_post_examples_images/453674613_1200304997971720_4719456939149057248_n.jpg",
      description: "Detailed PDF guide with video tutorials for achieving my signature cosplay looks."
    },
    {
      id: 5,
      name: "Cherry Blossom Photo Collection",
      price: 39.99,
      category: "prints",
      image: "/media/social_post_examples_images/443941801_954849156648899_6091024799237260681_n.jpg",
      description: "Set of 5 premium glossy prints from my Japan cherry blossom photoshoot."
    },
    {
      id: 6,
      name: "Exclusive Emote Pack",
      price: 14.99,
      category: "digital",
      image: "/media/social_post_examples_images/436199024_2471597753040835_1972704636304979853_n.jpg",
      badge: "New",
      description: "Custom animated emotes for use on Twitch, Discord or other platforms."
    },
    {
      id: 7,
      name: "Alyssa Logo Hoodie",
      price: 59.99,
      category: "merch",
      image: "/media/headshots/324695521_877726689954167_8579818437583038834_n.jpg",
      description: "Cozy embroidered hoodie with my signature logo, available in multiple colors."
    },
    {
      id: 8,
      name: "Behind The Scenes Photobook",
      price: 89.99,
      category: "prints",
      image: "/media/headshots/450460427_2443248029204276_1470086694821789809_n.jpg",
      badge: "Limited",
      description: "Hardcover photobook showcasing exclusive behind-the-scenes content and personal notes."
    },
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
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
            {theme === 'kawaii' ? '🛍️ Kawaii Shop 🛍️' : 'Official Shop'}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Browse my exclusive collection of cute merch, signed prints, and digital goodies! ✨' 
              : 'Exclusive merchandise, photo prints, and digital content from Alyssa Griffith.'}
          </motion.p>
        </div>
        
        {/* Coming Soon Notice */}
        <motion.div 
          className={`mb-8 p-4 rounded-lg border ${
            theme === 'kawaii' ? 'border-pink-300 bg-pink-50 text-pink-800' : 'border-violet-300 bg-violet-50 text-violet-800'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center font-medium">
            {theme === 'kawaii' 
              ? '⚠️ Shop is in preview mode! Products cannot be purchased yet. Stay tuned for the official launch! ⚠️' 
              : 'Notice: Shop is currently in preview mode. Items shown are not available for purchase yet.'}
          </p>
        </motion.div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === category.id 
                  ? styles.category.active
                  : styles.category.inactive
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className={`rounded-xl overflow-hidden ${styles.card} shadow hover:shadow-lg transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${styles.tag}`}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <button 
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${styles.button.primary}`}
                    disabled
                  >
                    {theme === 'kawaii' ? 'Coming Soon ✨' : 'Coming Soon'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${styles.heading}`}>
            {theme === 'kawaii' ? '❓ Frequently Asked Questions ❓' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "When will the shop officially launch?",
                answer: "The official shop launch is coming soon! Sign up for my newsletter to be the first to know."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes! Once launched, we'll offer worldwide shipping with tracking on all physical products."
              },
              {
                question: "Are the prints signed by Alyssa?",
                answer: "All limited edition prints come hand-signed. Standard prints are not signed."
              },
              {
                question: "What's included in the digital downloads?",
                answer: "Digital products include high-resolution files and lifetime access to updates."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${
                  theme === 'kawaii' 
                    ? 'bg-white border-2 border-pink-200' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Newsletter Signup */}
        <motion.div
          className={`mt-16 p-8 rounded-2xl text-center ${
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
            {theme === 'kawaii' ? '🔔 Get Notified When Shop Opens! 🔔' : 'Stay Updated'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {theme === 'kawaii'
              ? 'Be the first to shop when we launch! Plus get exclusive discount codes and early access to limited items!'
              : 'Subscribe to receive notifications about shop launch, new product drops, and exclusive offers.'}
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
              {theme === 'kawaii' ? '✨ Notify Me ✨' : 'Notify Me'}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 