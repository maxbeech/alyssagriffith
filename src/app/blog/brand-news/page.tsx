'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Brand News blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Working with Brands: My Collaboration Process',
    excerpt: 'A transparent look at how I approach brand partnerships and create authentic sponsored content.',
    category: 'brand-news',
    date: 'February 28, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/454259564_1083318636205001_9211354481593696311_n.jpg',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'My New Fashion Line Announcement',
    excerpt: 'Exciting news! I\'m launching a limited edition fashion collection inspired by my most popular looks.',
    category: 'brand-news',
    date: 'February 15, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Behind the Scenes: Beauty Brand Photoshoot',
    excerpt: 'Take a peek at what goes into creating content for a major beauty brand partnership.',
    category: 'brand-news',
    date: 'January 22, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'How I Choose Which Brands to Work With',
    excerpt: 'My guidelines and values when it comes to selecting brand partnerships that align with my audience.',
    category: 'brand-news',
    date: 'December 18, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Answering Your Brand Collaboration Questions',
    excerpt: 'I answer the most common questions I receive about working with brands as a digital creator.',
    category: 'brand-news',
    date: 'November 30, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'My Brand Partnership Toolkit: Essential Apps and Tools',
    excerpt: 'The software, equipment, and resources I use to deliver high-quality content for brand deals.',
    category: 'brand-news',
    date: 'November 10, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
    readTime: '5 min read',
    featured: false,
  },
];

export default function BrandNews() {
  const { theme } = useTheme();
  
  // Filter out featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
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
              {theme === 'kawaii' ? '📢 Brand News 📢' : 'Brand News & Collaborations'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Exciting announcements about my latest brand collabs and partnerships!' 
                : 'Stay updated on my latest brand partnerships, campaigns, and business ventures'}
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

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-10 ${
              theme === 'kawaii' ? 'text-pink-600 text-center' : 'text-violet-700'
            }`}>
              {theme === 'kawaii' ? '✨ Featured Announcements ✨' : 'Featured Updates'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className={`rounded-xl overflow-hidden ${
                    theme === 'kawaii'
                      ? 'bg-white border-2 border-pink-300 shadow-xl shadow-pink-100'
                      : 'bg-white border border-gray-200 shadow-xl'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                        theme === 'kawaii' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-violet-600 text-white'
                      }`}>
                        Brand News
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-3 text-sm">
                        <span className={theme === 'kawaii' ? 'text-pink-600' : 'text-violet-600'}>
                          {post.date}
                        </span>
                        <span className={theme === 'kawaii' ? 'text-pink-500' : 'text-gray-500'}>
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-4 ${
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
                        className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                          theme === 'kawaii'
                            ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                            : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
                        }`}
                      >
                        {theme === 'kawaii' ? 'Read Announcement ✨' : 'Read Full Post'}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 ${
            theme === 'kawaii' ? 'text-pink-600 text-center' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '📰 Latest Brand Updates 📰' : 'More Brand Articles'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
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
                    Brand News
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
      
      {/* Collaboration Inquiry Section */}
      <section className={`py-16 ${
        theme === 'kawaii' ? 'bg-pink-100' : 'bg-gray-100'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
            theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '💼 Work With Me! 💼' : 'Interested in a Collaboration?'}
          </h2>
          
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
          }`}>
            {theme === 'kawaii' 
              ? 'I love partnering with brands that match my vibe! Reach out for collaboration opportunities~'
              : 'I\'m open to strategic brand partnerships that align with my audience and values. Get in touch to discuss potential collaborations.'}
          </p>
          
          <Link 
            href="/contact" 
            className={`inline-block px-8 py-4 rounded-full font-medium text-lg transition-all ${
              theme === 'kawaii'
                ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-300/30 hover:scale-105'
                : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
            }`}
          >
            {theme === 'kawaii' ? '✉️ Contact Me ✉️' : 'Brand Inquiry Form'}
          </Link>
        </div>
      </section>
    </div>
  );
} 