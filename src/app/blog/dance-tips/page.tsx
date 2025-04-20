'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Dance Tips blog post data
const blogPosts = [
  {
    id: 1,
    title: 'How I Create Viral TikTok Transitions',
    excerpt: 'A behind-the-scenes look at my process for creating seamless dance transitions that go viral.',
    category: 'dance-tips',
    date: 'March 15, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Beginner\'s Guide to TikTok Choreography',
    excerpt: 'Simple steps to create your own dance routines, even if you don\'t have formal dance training.',
    category: 'dance-tips',
    date: 'February 12, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/454259564_1083318636205001_9211354481593696311_n.jpg',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: '5 Dance Moves Everyone Can Learn',
    excerpt: 'Master these five fundamental moves to elevate your dancing skills and impress your followers.',
    category: 'dance-tips',
    date: 'January 30, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'How to Find Your Dance Style',
    excerpt: 'Discover your unique movement style and integrate it into your choreography for more authentic content.',
    category: 'dance-tips',
    date: 'January 5, 2024',
    author: 'Alyssa Griffith',
    image: '/media/headshots/458042825_914504783786613_4060333813556286485_n.jpg',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'Music Selection: The Key to Great Dance Videos',
    excerpt: 'Learn how to choose the perfect track for your dance videos to maximize engagement and creativity.',
    category: 'dance-tips',
    date: 'December 18, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Dancing for the Camera: Positioning Tips',
    excerpt: 'Master the art of dancing specifically for video content with these camera-friendly techniques.',
    category: 'dance-tips',
    date: 'December 2, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
    readTime: '8 min read',
  },
];

export default function DanceTips() {
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
              {theme === 'kawaii' ? '💃 Dance Tips 💃' : 'Dance Tips & Tutorials'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Learn my favorite dance moves, transitions, and choreography tips!' 
                : 'Expert advice on dance techniques, choreography creation, and performance tips'}
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
                    Dance Tips
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
      
      {/* Newsletter Section */}
      <section className={`py-16 ${
        theme === 'kawaii' ? 'bg-pink-100' : 'bg-gray-100'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
            theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '✉️ Never Miss a Dance Tip! ✉️' : 'Subscribe for More Dance Content'}
          </h2>
          
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
          }`}>
            {theme === 'kawaii' 
              ? 'Sign up for my newsletter to get exclusive dance tutorials and tips sent straight to your inbox!'
              : 'Join my mailing list for exclusive tutorials, early access to new content, and personalized dance advice.'}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input 
              type="email"
              placeholder="Your email address"
              className={`w-full px-6 py-3 rounded-full ${
                theme === 'kawaii'
                  ? 'border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-200'
                  : 'border border-gray-300 focus:border-violet-500 focus:ring-violet-200'
              } focus:outline-none focus:ring-4`}
            />
            <button
              className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
                theme === 'kawaii'
                  ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                  : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
              }`}
            >
              {theme === 'kawaii' ? 'Subscribe ✨' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 