'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Lifestyle blog post data
const blogPosts = [
  {
    id: 1,
    title: 'How I Stay Productive as a Content Creator',
    excerpt: 'My daily routines, planning strategies, and productivity tools that help me balance content creation with life.',
    category: 'lifestyle',
    date: 'March 15, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/459815099_18413869224009861_4007166260175773038_n.jpg',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'My Morning Routine: Finding Balance in Busy Days',
    excerpt: 'The rituals and habits I use to start my day with intention and set myself up for creative success.',
    category: 'lifestyle',
    date: 'March 2, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/411272835_356889383562354_2624937933051677018_n.jpg',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Creating a Workspace That Inspires Creativity',
    excerpt: 'How I designed my home office to maximize productivity, comfort, and creative inspiration.',
    category: 'lifestyle',
    date: 'February 18, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/433107761_761244952691095_3208033364620983022_n.jpg',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Self-Care Practices for Digital Creators',
    excerpt: 'How I prioritize mental health and prevent burnout while managing a demanding content schedule.',
    category: 'lifestyle',
    date: 'February 5, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/453093761_18413249050009861_5551372075599209051_n.jpg',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'What I Eat in a Day: Balancing Nutrition and Enjoyment',
    excerpt: 'My approach to food that fuels my active lifestyle while still enjoying what I eat.',
    category: 'lifestyle',
    date: 'January 22, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/440020395_1137664430949437_1920548185505794179_n.jpg',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Finding Communities That Help You Grow',
    excerpt: 'How I found my people online and in real life, and why community is essential for creators.',
    category: 'lifestyle',
    date: 'January 10, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/448507539_1093254585198664_7357171825444782233_n.jpg',
    readTime: '5 min read',
  },
  {
    id: 7,
    title: 'My Favorite Books for Personal Development',
    excerpt: 'The books that have shaped my mindset, creativity, and approach to content creation.',
    category: 'lifestyle',
    date: 'December 28, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/444246747_863421285482617_2471862623241055993_n.jpg',
    readTime: '9 min read',
  },
  {
    id: 8,
    title: 'Travel Essentials: What I Pack for Content Creation Trips',
    excerpt: 'My go-to gear, tech, and personal items for creating content while traveling.',
    category: 'lifestyle',
    date: 'December 12, 2023',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/456252398_1092847731905016_1535932733262334870_n.jpg',
    readTime: '7 min read',
  },
];

export default function Lifestyle() {
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
              {theme === 'kawaii' ? '💖 Lifestyle & Inspiration 💖' : 'Lifestyle & Wellness'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Tips, inspiration, and peeks into my daily life as a creator~' 
                : 'Insights into my daily routines, wellness practices, and personal growth journey'}
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

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
              theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
            }`}>
              {theme === 'kawaii' ? '✨ Welcome to My World ✨' : 'Behind the Scenes'}
            </h2>
            <p className={`text-lg mb-8 ${
              theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
            }`}>
              {theme === 'kawaii'
                ? 'Dive into my personal journey of balancing creativity, wellness, and the daily life of being a content creator! Here I share my routines, inspirations, and the real moments behind the posts~'
                : 'In this section, I share the honest reality of creator life beyond the filtered posts. From productivity strategies to self-care practices, these articles offer a glimpse into how I navigate my personal and professional journey.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Productivity', 'Wellness', 'Creator Life'].map((category, index) => (
              <motion.div
                key={category}
                className={`rounded-xl overflow-hidden relative ${
                  theme === 'kawaii'
                    ? 'border-2 border-pink-300 shadow-lg shadow-pink-100'
                    : 'border border-gray-200 shadow-lg'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`p-8 h-full ${
                  theme === 'kawaii'
                    ? category === 'Productivity' 
                      ? 'bg-gradient-to-br from-pink-100 to-pink-200'
                      : category === 'Wellness'
                        ? 'bg-gradient-to-br from-purple-100 to-purple-200' 
                        : 'bg-gradient-to-br from-blue-100 to-blue-200'
                    : category === 'Productivity'
                      ? 'bg-gradient-to-br from-gray-50 to-gray-100'
                      : category === 'Wellness'
                        ? 'bg-gradient-to-br from-violet-50 to-violet-100'
                        : 'bg-gradient-to-br from-indigo-50 to-indigo-100'
                }`}>
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      {category === 'Productivity' ? (
                        <span className="text-4xl">{theme === 'kawaii' ? '📝' : '⏱️'}</span>
                      ) : category === 'Wellness' ? (
                        <span className="text-4xl">{theme === 'kawaii' ? '🧘‍♀️' : '✨'}</span>
                      ) : (
                        <span className="text-4xl">{theme === 'kawaii' ? '🎨' : '📱'}</span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                    }`}>
                      {category}
                    </h3>
                    <p className={`mb-6 ${
                      theme === 'kawaii' ? 'text-pink-800' : 'text-gray-600'
                    }`}>
                      {category === 'Productivity' 
                        ? 'Tips for staying organized and making the most of your creative time.'
                        : category === 'Wellness'
                          ? 'My approach to physical and mental wellbeing as a digital creator.'
                          : 'Honest insights into the realities of building a creator career.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 ${
            theme === 'kawaii' ? 'text-pink-600 text-center' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '📚 Latest Lifestyle Posts 📚' : 'Latest Articles'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'kawaii' 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-violet-600 text-white'
                  }`}>
                    Lifestyle
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
                  
                  <h3 className={`text-lg font-bold mb-3 ${
                    theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`mb-6 text-sm ${
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
                    } font-medium text-sm`}
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-10 rounded-2xl ${
            theme === 'kawaii' 
              ? 'bg-white border-2 border-pink-300 shadow-xl'
              : 'bg-white shadow-xl'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
                }`}>
                  {theme === 'kawaii' ? '✉️ Join My Newsletter! ✉️' : 'Weekly Lifestyle Insights'}
                </h3>
                <p className={`${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
                } mb-4`}>
                  {theme === 'kawaii' 
                    ? 'Subscribe for exclusive lifestyle tips, self-care ideas, and behind-the-scenes peeks that I don\'t share anywhere else~'
                    : 'Get productivity tips, wellness resources, and creator insights delivered directly to your inbox every week.'}
                </p>
                <div className="flex items-start space-x-2 mb-2">
                  <div className="text-green-500">✓</div>
                  <div className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                    Weekly tips and inspiration
                  </div>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <div className="text-green-500">✓</div>
                  <div className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                    Exclusive content not on social
                  </div>
                </div>
                <div className="flex items-start space-x-2 mb-2">
                  <div className="text-green-500">✓</div>
                  <div className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                    Early access to new resources
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className={`block mb-2 font-medium ${
                      theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                    }`}>
                      First Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`w-full px-4 py-3 rounded-lg ${
                        theme === 'kawaii'
                          ? 'border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-pink-50'
                          : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
                      }`} 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block mb-2 font-medium ${
                      theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                    }`}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-3 rounded-lg ${
                        theme === 'kawaii'
                          ? 'border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-pink-50'
                          : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full px-6 py-4 rounded-lg font-medium transition-all ${
                      theme === 'kawaii'
                        ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                        : 'bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg'
                    }`}
                  >
                    {theme === 'kawaii' ? 'Subscribe Now! 💌' : 'Subscribe to Newsletter'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 