'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';
import { FaShoppingCart, FaHeart, FaSearch, FaStar, FaTruck } from 'react-icons/fa';

export default function ShopMerch() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  // Use real images from the media folder
  const merchandise = [
    {
      id: 1,
      name: 'Kawaii Dancer T-Shirt',
      description: 'Soft cotton t-shirt featuring my popular dance silhouette design',
      image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
      price: 29.99,
      category: 'Apparel',
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      bestSeller: true,
    },
    {
      id: 2,
      name: 'Cosplay Character Enamel Pin Set',
      description: 'Set of 3 high-quality enamel pins featuring my most popular cosplay characters',
      image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
      price: 18.99,
      category: 'Accessories',
      sizes: ['One Size'],
      inStock: true,
      bestSeller: false,
    },
    {
      id: 3,
      name: 'Dance Studio Tote Bag',
      description: 'Spacious canvas tote bag with my exclusive dancer design and inner pocket',
      image: '/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg',
      price: 24.99,
      category: 'Accessories',
      sizes: ['One Size'],
      inStock: true,
      bestSeller: true,
    },
    {
      id: 4,
      name: 'Limited Edition Hoodie',
      description: 'Premium quality hoodie with embroidered logo and exclusive art on the back',
      image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
      price: 54.99,
      category: 'Apparel',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      inStock: true,
      bestSeller: false,
    },
    {
      id: 5,
      name: 'Cosplay Character Acrylic Standee',
      description: 'Double-sided acrylic standee featuring my most popular character cosplay',
      image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
      price: 19.99,
      category: 'Collectibles',
      sizes: ['5 inch', '8 inch'],
      inStock: true,
      bestSeller: false,
    },
    {
      id: 6,
      name: 'Kawaii Sticker Pack',
      description: 'Set of 10 vinyl stickers featuring cute dance and cosplay designs',
      image: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
      price: 12.99,
      category: 'Stationery',
      sizes: ['One Size'],
      inStock: true,
      bestSeller: true,
    },
    {
      id: 7,
      name: 'Dance Performance Notebook',
      description: 'High-quality lined notebook with artwork inspired by my dance performances',
      image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
      price: 15.99,
      category: 'Stationery',
      sizes: ['A5', 'A4'],
      inStock: false,
      bestSeller: false,
    },
    {
      id: 8,
      name: 'Charm Bracelet',
      description: 'Adjustable bracelet with charms representing my most iconic cosplay characters',
      image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
      price: 22.99,
      category: 'Accessories',
      sizes: ['One Size'],
      inStock: true,
      bestSeller: false,
    },
  ];

  const filters = ['All', 'Apparel', 'Accessories', 'Stationery', 'Collectibles'];
  
  const filteredMerch = activeFilter === 'All' 
    ? merchandise 
    : merchandise.filter(item => item.category === activeFilter);

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
    banner: theme === 'kawaii' ? 'bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100' : 'bg-gradient-to-r from-violet-100 to-purple-50',
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
            {theme === 'kawaii' ? '🛍️ Official Merchandise 🛍️' : 'Official Merchandise'}
          </motion.h1>
          <motion.p 
            className={`text-lg max-w-3xl mx-auto ${styles.lightText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Treat yourself to exclusive merch featuring my kawaii designs! Perfect for dance and cosplay lovers~' 
              : 'Exclusive merchandise featuring original designs from my creative portfolio. Limited quantities available.'}
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

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMerch.map((item, index) => (
            <motion.div
              key={item.id}
              className={`rounded-xl overflow-hidden ${styles.card} transition-all duration-300 hover:scale-[1.02] ${styles.cardHover}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {item.bestSeller && (
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
                  <h3 className={`text-base font-bold line-clamp-1 ${styles.subheading}`}>{item.name}</h3>
                  <button className="text-red-400 hover:text-red-500 hover:scale-110 transition-transform">
                    <FaHeart />
                  </button>
                </div>
                
                <p className={`text-xs mb-3 line-clamp-2 ${styles.text}`}>
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-lg ${styles.price}`}>${item.price}</span>
                  
                  {item.inStock ? (
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
                  {item.sizes.map((size, i) => (
                    <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${styles.tag}`}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Shipping Banner */}
        <motion.div
          className={`mt-16 p-6 rounded-xl text-center ${styles.banner}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <FaTruck className={`text-4xl ${styles.heading}`} />
            <div>
              <h3 className={`text-xl font-bold ${styles.heading}`}>
                {theme === 'kawaii' ? '🎁 Free Shipping on Orders Over $50! 🎁' : 'Free Shipping on Orders Over $50'}
              </h3>
              <p className={`${styles.text}`}>
                {theme === 'kawaii' 
                  ? 'U.S. orders over $50 ship free! International shipping available~' 
                  : 'Complimentary standard shipping on all domestic orders over $50. International shipping available.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Customer Reviews */}
        <motion.div
          className={`mt-12 p-6 sm:p-8 rounded-xl ${theme === 'kawaii' ? 'bg-white border-2 border-pink-200' : 'bg-white border border-gray-200'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${styles.heading}`}>
            {theme === 'kawaii' ? '💬 Customer Love 💬' : 'Customer Reviews'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Sarah K.', 
                review: 'I absolutely love my kawaii t-shirt! The quality is amazing and the design is so cute. Will definitely be ordering more!',
                rating: 5,
                product: 'Kawaii Dancer T-Shirt',
              },
              { 
                name: 'Michael T.', 
                review: 'The enamel pin set exceeded my expectations. Really well-made and the designs are perfect representations of the characters.',
                rating: 5,
                product: 'Cosplay Character Enamel Pin Set',
              },
              { 
                name: 'Jessica R.', 
                review: 'My tote bag is perfect for carrying all my dance gear! Love the design and it\'s very sturdy. Shipping was super fast too!',
                rating: 4,
                product: 'Dance Studio Tote Bag',
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                className={`p-5 rounded-lg ${styles.card}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 mr-1" />
                  ))}
                </div>
                <p className={`text-sm mb-4 ${styles.text} italic`}>"{review.review}"</p>
                <div className="flex justify-between">
                  <span className={`text-sm font-semibold ${styles.subheading}`}>{review.name}</span>
                  <span className={`text-xs ${styles.lightText}`}>on {review.product}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bulk Orders */}
        <motion.div
          className={`mt-12 p-6 rounded-xl text-center ${styles.banner}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl font-bold mb-3 ${styles.heading}`}>
            {theme === 'kawaii' ? '✨ Fan Club & Bulk Orders ✨' : 'Fan Club & Bulk Orders'}
          </h3>
          <p className={`mb-5 max-w-2xl mx-auto ${styles.text}`}>
            {theme === 'kawaii' 
              ? 'Planning a fan club event or need merchandise in bulk? Contact me for special discounts~!' 
              : 'Special pricing available for fan club events and bulk merchandise orders. Contact for details.'}
          </p>
          <Link 
            href="/contact"
            className={`inline-flex items-center px-5 py-2.5 rounded-full font-medium ${styles.button} transition-all duration-300`}
          >
            {theme === 'kawaii' ? 'Contact for Fan Club Orders' : 'Inquire About Bulk Orders'}
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