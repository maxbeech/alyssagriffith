'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';
import { FaShoppingCart, FaHeart, FaSearch, FaTag } from 'react-icons/fa';

export default function ShopPrints() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  // Use real images from the media folder
  const prints = [
    {
      id: 1,
      name: 'Cherry Blossom Cosplay',
      description: 'Limited edition print featuring my Sakura cosplay surrounded by cherry blossoms',
      image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
      price: 24.99,
      category: 'Cosplay',
      sizes: ['8x10', '11x14', '16x20'],
      inStock: true,
      bestSeller: true,
    },
    {
      id: 2,
      name: 'Dance Performance',
      description: 'High-quality print of my K-pop dance performance at AnimeExpo 2023',
      image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
      price: 19.99,
      category: 'Dance',
      sizes: ['8x10', '11x14'],
      inStock: true,
      bestSeller: false,
    },
    {
      id: 3,
      name: 'Fantasy Portrait',
      description: 'Professional fantasy-themed portrait with custom backdrop and lighting',
      image: '/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg',
      price: 29.99,
      category: 'Portrait',
      sizes: ['8x10', '11x14', '16x20', '24x36'],
      inStock: true,
      bestSeller: true,
    },
    {
      id: 4,
      name: 'Gothic Elegance',
      description: 'Dark and elegant portrait showcasing gothic fashion and accessories',
      image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
      price: 24.99,
      category: 'Portrait',
      sizes: ['8x10', '11x14', '16x20'],
      inStock: true,
      bestSeller: false,
    },
    {
      id: 5,
      name: 'Summer Festival',
      description: 'Vibrant print from the summer festival photoshoot with traditional Japanese elements',
      image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
      price: 22.99,
      category: 'Seasonal',
      sizes: ['8x10', '11x14'],
      inStock: true,
      bestSeller: false,
    },
    {
      id: 6,
      name: 'Kawaii Collection',
      description: 'Set of three mini prints featuring my most popular kawaii cosplays',
      image: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
      price: 34.99,
      category: 'Cosplay',
      sizes: ['5x7 Set of 3'],
      inStock: true,
      bestSeller: true,
    },
    {
      id: 7,
      name: 'Neon Dreams',
      description: 'Cyberpunk-inspired photoshoot with neon lighting and futuristic setting',
      image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
      price: 27.99,
      category: 'Portrait',
      sizes: ['8x10', '11x14', '16x20'],
      inStock: false,
      bestSeller: false,
    },
    {
      id: 8,
      name: 'Winter Wonderland',
      description: 'Seasonal photoshoot in a beautiful snow-covered landscape',
      image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
      price: 22.99,
      category: 'Seasonal',
      sizes: ['8x10', '11x14'],
      inStock: true,
      bestSeller: false,
    },
  ];

  const filters = ['All', 'Cosplay', 'Dance', 'Portrait', 'Seasonal'];
  
  const filteredPrints = activeFilter === 'All' 
    ? prints 
    : prints.filter(print => print.category === activeFilter);

  // Define theme-specific styling
  const styles = {
    background: theme === 'kawaii' ? 'bg-pink-50' : 'bg-white',
    heading: theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600',
    text: theme === 'kawaii' ? 'text-pink-900' : 'text-gray-800',
    lightText: theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600',
    card: theme === 'kawaii' ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100' : 'bg-white border border-gray-200 shadow-md',
    cardHover: theme === 'kawaii' ? 'hover:border-pink-300 hover:shadow-pink-200' : 'hover:border-violet-200',
    button: theme === 'kawaii' ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white',
    buttonOutline: theme === 'kawaii' ? 'border-2 border-pink-500 text-pink-500 hover:bg-pink-50' : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50',
    activeFilter: theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white',
    inactiveFilter: theme === 'kawaii' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    tag: theme === 'kawaii' ? 'bg-pink-100 text-pink-700' : 'bg-violet-100 text-violet-700',
    price: theme === 'kawaii' ? 'text-pink-600 font-bold' : 'text-violet-600 font-bold',
  };

  return (
    <div className={`${styles.background} min-h-screen pt-28 pb-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${styles.heading}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'kawaii' ? '🖼️ Art Prints 🖼️' : 'Photography & Art Prints'}
          </motion.h1>
          <motion.p 
            className={`text-lg max-w-3xl mx-auto ${styles.lightText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Decorate your space with adorable prints from my photoshoots and cosplay sessions! Each print is signed with love~' 
              : 'High-quality, professionally printed photographs from my portfolio. All prints are signed and include a certificate of authenticity.'}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter ? styles.activeFilter : styles.inactiveFilter
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Print Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrints.map((print, index) => (
            <motion.div
              key={print.id}
              className={`rounded-xl overflow-hidden ${styles.card} transition-all duration-300 hover:scale-[1.02] ${styles.cardHover}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={print.image}
                  alt={print.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {print.bestSeller && (
                  <div className="absolute top-2 left-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                    }`}>
                      {theme === 'kawaii' ? '✨ Best Seller' : 'Best Seller'}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <button className={`w-full py-2 rounded-full font-medium mb-2 ${styles.button} transition-all duration-300 flex items-center justify-center`}>
                      <FaSearch className="mr-2" />
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-base font-bold line-clamp-1 ${styles.subheading}`}>{print.name}</h3>
                  <button className="text-red-400 hover:text-red-500 hover:scale-110 transition-transform">
                    <FaHeart />
                  </button>
                </div>
                
                <p className={`text-xs mb-3 line-clamp-2 ${styles.text}`}>
                  {print.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-lg ${styles.price}`}>${print.price}</span>
                  
                  {print.inStock ? (
                    <button className={`px-3 py-1.5 rounded text-sm font-medium flex items-center ${styles.button} transition-all duration-300`}>
                      <FaShoppingCart className="mr-1.5 text-xs" />
                      Add to Cart
                    </button>
                  ) : (
                    <span className="px-3 py-1.5 rounded text-sm font-medium bg-gray-100 text-gray-500">
                      Out of Stock
                    </span>
                  )}
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {print.sizes.map((size, i) => (
                    <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${styles.tag}`}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Print Information Section */}
        <motion.div
          className={`mt-16 p-6 sm:p-8 rounded-xl ${theme === 'kawaii' ? 'bg-white border-2 border-pink-200' : 'bg-white border border-gray-200'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${styles.heading}`}>
            {theme === 'kawaii' ? '✨ About My Prints ✨' : 'Print Information'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Premium Quality', 
                description: 'All prints are produced on archival-quality photo paper for vibrant colors and longevity',
                icon: '🌟',
              },
              { 
                title: 'Authenticity', 
                description: 'Each print is personally signed and includes a certificate of authenticity',
                icon: '📜',
              },
              { 
                title: 'Shipping', 
                description: 'Carefully packaged in protective materials and shipped in sturdy tubes or flat mailers',
                icon: '📦',
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-5 rounded-lg ${styles.card}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-2xl ${
                  theme === 'kawaii' ? 'bg-pink-100' : 'bg-violet-100'
                }`}>
                  {item.icon}
                </div>
                <h4 className={`text-lg font-bold mb-2 ${styles.subheading}`}>{item.title}</h4>
                <p className={`text-sm ${styles.text}`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Limited Edition Notice */}
        <motion.div
          className={`mt-12 p-6 rounded-xl text-center ${
            theme === 'kawaii' 
              ? 'bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100' 
              : 'bg-gradient-to-r from-violet-100 to-purple-50'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl font-bold mb-3 ${styles.heading}`}>
            {theme === 'kawaii' ? '🎀 Limited Edition Collections 🎀' : 'Limited Edition Collections'}
          </h3>
          <p className={`mb-5 max-w-2xl mx-auto ${styles.text}`}>
            {theme === 'kawaii' 
              ? 'I release special themed print collections throughout the year! Subscribe to be notified when new limited edition prints drop~' 
              : 'New print collections are released quarterly with limited availability. Subscribe to receive notifications about upcoming releases.'}
          </p>
          <Link 
            href="/subscribe"
            className={`inline-flex items-center px-5 py-2.5 rounded-full font-medium ${styles.button} transition-all duration-300`}
          >
            <FaTag className="mr-2" />
            {theme === 'kawaii' ? 'Get Notified About New Drops!' : 'Subscribe for Notifications'}
          </Link>
        </motion.div>
        
        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${
              theme === 'kawaii' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-violet-100 text-violet-700 hover:bg-violet-200'
            } transition-all duration-300`}
          >
            {theme === 'kawaii' ? '← Back to Shop' : 'Back to Shop'}
          </Link>
        </div>
      </div>
    </div>
  );
} 