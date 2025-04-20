'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Cosplay DIY blog post data
const blogPosts = [
  {
    id: 1,
    title: 'My Favorite Cosplay Makeup Brands',
    excerpt: 'These are the makeup products I swear by for creating accurate and long-lasting cosplay looks.',
    category: 'cosplay-diy',
    date: 'March 8, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'How I Learned to Sew My Own Cosplay Costumes',
    excerpt: 'My journey from beginner to creating complex cosplay outfits, with tips for getting started.',
    category: 'cosplay-diy',
    date: 'February 5, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
    readTime: '9 min read',
  },
  {
    id: 3,
    title: 'My Favorite Anime Series of 2023',
    excerpt: 'A roundup of the anime shows that inspired my cosplays and creativity this past year.',
    category: 'cosplay-diy',
    date: 'January 18, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Creating Foam Armor for Beginners',
    excerpt: 'A step-by-step guide to working with EVA foam to create lightweight, durable armor pieces.',
    category: 'cosplay-diy',
    date: 'December 12, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'LED and Electronics for Cosplay',
    excerpt: 'How to safely incorporate lighting effects into your costumes for that extra wow factor.',
    category: 'cosplay-diy',
    date: 'November 27, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Styling Wigs: Tips and Tricks',
    excerpt: 'My process for turning a basic wig into the perfect character hairstyle, including heat styling.',
    category: 'cosplay-diy',
    date: 'November 5, 2023',
    author: 'Alyssa Griffith',
    image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
    readTime: '7 min read',
  },
];

export default function CosplayDIY() {
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
              {theme === 'kawaii' ? '🎭 Cosplay DIY 🎭' : 'Cosplay DIY Guides'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Learn how to make your own kawaii cosplays with my tutorials and tips!' 
                : 'Resources, techniques, and inspiration for creating professional-quality cosplays'}
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

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className={`rounded-xl overflow-hidden ${
                  theme === 'kawaii'
                    ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'kawaii' 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-violet-600 text-white'
                  }`}>
                    Cosplay DIY
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className={theme === 'kawaii' ? 'text-pink-600' : 'text-violet-600'}>
                      {post.date}
                    </span>
                    <span className={theme === 'kawaii' ? 'text-pink-500' : 'text-gray-500'}>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`mb-6 ${
                    theme === 'kawaii' ? 'text-pink-800' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className={`inline-block ${
                      theme === 'kawaii'
                        ? 'text-pink-500 hover:text-pink-700'
                        : 'text-violet-600 hover:text-violet-800'
                    } font-medium`}
                  >
                    {theme === 'kawaii' ? 'Read More ✨' : 'Read More →'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resource Section */}
      <section className={`py-16 ${
        theme === 'kawaii' ? 'bg-pink-100' : 'bg-gray-100'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${
            theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '🧰 Cosplay Resources 🧰' : 'Recommended Resources'}
          </h2>
          
          <div className={`rounded-xl p-8 ${
            theme === 'kawaii' 
              ? 'bg-white border-2 border-pink-200 shadow-lg' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
                }`}>
                  {theme === 'kawaii' ? '✨ My Favorite Supplies ✨' : 'Recommended Materials'}
                </h3>
                <ul className={`space-y-3 ${
                  theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                }`}>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    EVA Foam (5mm & 2mm thickness)
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Heat-resistant Worbla
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Fabric Paints & Primers
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Quality Synthetic Wigs
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Contact Lenses for Character Accuracy
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
                }`}>
                  {theme === 'kawaii' ? '🔍 Learning Resources 🔍' : 'Helpful Resources'}
                </h3>
                <ul className={`space-y-3 ${
                  theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                }`}>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Pattern Making Basics
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Foam Crafting Techniques
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Makeup Reference Guides
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Character Research Methods
                  </li>
                  <li className="flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      theme === 'kawaii' ? 'bg-pink-500' : 'bg-violet-500'
                    }`}></span>
                    Photography Tips for Cosplay
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/cosplay" 
                className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                  theme === 'kawaii'
                    ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                    : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
                }`}
              >
                {theme === 'kawaii' ? '🎀 See My Cosplays 🎀' : 'View Cosplay Gallery'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 