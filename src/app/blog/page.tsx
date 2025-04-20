'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'How I Create Viral TikTok Transitions',
    excerpt: 'A behind-the-scenes look at my process for creating seamless dance transitions that go viral.',
    category: 'dance-tips',
    date: 'March 15, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'My Favorite Cosplay Makeup Brands',
    excerpt: 'These are the makeup products I swear by for creating accurate and long-lasting cosplay looks.',
    category: 'cosplay-diy',
    date: 'March 8, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/451054069_930525998766432_8420761959308580563_n.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Working with Brands: My Collaboration Process',
    excerpt: 'A transparent look at how I approach brand partnerships and create authentic sponsored content.',
    category: 'brand-news',
    date: 'February 28, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/454259564_1083318636205001_9211354481593696311_n.jpg',
    featured: true,
  },
  {
    id: 4,
    title: 'My Daily Content Creation Routine',
    excerpt: 'From morning to night, this is how I organize my day to maximize creativity and productivity.',
    category: 'lifestyle',
    date: 'February 20, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/448485172_1089729965450196_1766185261358962474_n.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Beginner\'s Guide to TikTok Choreography',
    excerpt: 'Simple steps to create your own dance routines, even if you don\'t have formal dance training.',
    category: 'dance-tips',
    date: 'February 12, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    featured: true,
  },
  {
    id: 6,
    title: 'How I Learned to Sew My Own Cosplay Costumes',
    excerpt: 'My journey from beginner to creating complex cosplay outfits, with tips for getting started.',
    category: 'cosplay-diy',
    date: 'February 5, 2024',
    author: 'Alyssa Griffith',
    image: '/media/social_post_examples_images/414071636_877656817460797_8060586933150239830_n.jpg',
    featured: false,
  },
  {
    id: 7,
    title: 'Responding to Comments: Building a Supportive Community',
    excerpt: 'How I maintain a positive online space and connect with my followers through thoughtful engagement.',
    category: 'lifestyle',
    date: 'January 25, 2024',
    author: 'Alyssa Griffith',
    image: '/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg',
    featured: false,
  },
  {
    id: 8,
    title: 'My Favorite Anime Series of 2023',
    excerpt: 'A roundup of the anime shows that inspired my cosplays and creativity this past year.',
    category: 'cosplay-diy',
    date: 'January 18, 2024',
    author: 'Alyssa Griffith',
    image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
    featured: false,
  },
  {
    id: 9,
    title: 'How Social Media Changed My Life',
    excerpt: 'Reflecting on my journey from posting for fun to becoming a full-time content creator.',
    category: 'lifestyle',
    date: 'January 10, 2024',
    author: 'Alyssa Griffith',
    image: '/media/headshots/458042825_914504783786613_4060333813556286485_n.jpg',
    featured: true,
  },
];

// Featured Posts Carousel
const FeaturedPostsCarousel = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Filter featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Handle autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % featuredPosts.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplayEnabled, featuredPosts.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplayEnabled(false);
  const handleMouseLeave = () => setAutoplayEnabled(true);

  return (
    <section 
      className="relative py-12 md:py-20 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '✨ Featured Posts ✨' : 'Featured Articles'}
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative" style={{ height: '500px' }}>
              <AnimatePresence mode="wait">
                {featuredPosts.map((post, index) => (
                  currentSlide === index && (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        <div className={`absolute inset-0 ${
                          theme === 'kawaii' 
                            ? 'bg-gradient-to-t from-pink-500/90 via-pink-500/70 to-transparent' 
                            : 'bg-gradient-to-t from-black/80 via-black/60 to-transparent'
                        }`}></div>
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                          <div className="max-w-3xl">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 ${
                              theme === 'kawaii' 
                                ? 'bg-pink-300 text-pink-800' 
                                : 'bg-violet-200 text-violet-800'
                            }`}>
                              {post.category === 'dance-tips' 
                                ? 'Dance Tips' 
                                : post.category === 'cosplay-diy' 
                                  ? 'Cosplay DIY' 
                                  : post.category === 'brand-news'
                                    ? 'Brand News'
                                    : 'Lifestyle'
                              }
                            </span>
                            
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                              {post.title}
                            </h3>
                            
                            <p className="text-white/90 text-lg mb-6 hidden md:block">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-white/80 text-sm">
                                {post.date}
                              </span>
                              
                              <Link 
                                href={`/blog/${post.id}`} 
                                className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                                  theme === 'kawaii'
                                    ? 'bg-white text-pink-500 hover:bg-pink-50 hover:scale-105'
                                    : 'bg-white text-violet-700 hover:bg-violet-50 hover:scale-105'
                                }`}
                              >
                                {theme === 'kawaii' ? '✨ Read More ✨' : 'Read Article'}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Slider controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? theme === 'kawaii' 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-violet-600 scale-125'
                    : theme === 'kawaii'
                      ? 'bg-pink-200 hover:bg-pink-300'
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full ${
              theme === 'kawaii' 
                ? 'bg-pink-400 text-white hover:bg-pink-500'
                : 'bg-violet-600 text-white hover:bg-violet-700'
            } focus:outline-none z-10`}
            onClick={() => setCurrentSlide((currentSlide - 1 + featuredPosts.length) % featuredPosts.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full ${
              theme === 'kawaii' 
                ? 'bg-pink-400 text-white hover:bg-pink-500'
                : 'bg-violet-600 text-white hover:bg-violet-700'
            } focus:outline-none z-10`}
            onClick={() => setCurrentSlide((currentSlide + 1) % featuredPosts.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Blog Posts Grid
const BlogPostsGrid = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Categories for filter
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'dance-tips', label: 'Dance Tips' },
    { id: 'cosplay-diy', label: 'Cosplay DIY' },
    { id: 'brand-news', label: 'Brand News' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ];
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <section className={`py-16 ${
      theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '📝 Blog Posts 📝' : 'Latest Articles'}
        </h2>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className={`inline-flex rounded-full p-1 ${
            theme === 'kawaii' ? 'bg-pink-100' : 'bg-white'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? theme === 'kawaii'
                      ? 'bg-pink-500 text-white shadow-md'
                      : 'bg-violet-600 text-white'
                    : theme === 'kawaii'
                      ? 'text-pink-700 hover:bg-pink-200'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Posts Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  theme === 'kawaii' 
                    ? 'bg-white border-2 border-pink-200 hover:shadow-pink-200'
                    : 'bg-white border border-gray-100 hover:shadow-lg'
                } transition-all duration-300 hover:-translate-y-2`}
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 ${
                      theme === 'kawaii' 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'bg-violet-100 text-violet-700'
                    }`}>
                      {post.category === 'dance-tips' 
                        ? 'Dance Tips' 
                        : post.category === 'cosplay-diy' 
                          ? 'Cosplay DIY' 
                          : post.category === 'brand-news'
                            ? 'Brand News'
                            : 'Lifestyle'
                      }
                    </span>
                    
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === 'kawaii' ? 'text-pink-800' : 'text-gray-900'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className={`mb-4 line-clamp-2 ${
                      theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
                    }`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className={`text-sm ${
                        theme === 'kawaii' ? 'text-pink-500' : 'text-gray-500'
                      }`}>
                        {post.date}
                      </span>
                      
                      <span className={`font-medium ${
                        theme === 'kawaii' 
                          ? 'text-pink-500 group-hover:text-pink-700' 
                          : 'text-violet-600 group-hover:text-violet-800'
                      } inline-flex items-center`}>
                        Read
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredPosts.length === 0 && (
          <div className={`text-center py-16 ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
          }`}>
            <p className="text-lg">No posts found in this category. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Newsletter signup
const NewsletterSignup = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-16 ${
      theme === 'kawaii' 
        ? 'bg-gradient-to-r from-pink-200 to-purple-200' 
        : 'bg-gradient-to-r from-violet-600 to-indigo-600'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`rounded-2xl p-8 md:p-12 ${
            theme === 'kawaii' 
              ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-lg border-2 border-pink-300' 
              : 'bg-white bg-opacity-10 backdrop-blur-md'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === 'kawaii' ? 'text-pink-600' : 'text-white'
            }`}>
              {theme === 'kawaii' ? '💌 Stay Updated with My Newsletter! 💌' : 'Subscribe to My Newsletter'}
            </h2>
            
            <p className={theme === 'kawaii' ? 'text-pink-700' : 'text-white text-opacity-90'}>
              {theme === 'kawaii' 
                ? 'Get exclusive kawaii content, behind-the-scenes peeks, and early access to new videos!' 
                : 'Stay informed with the latest content, exclusive tutorials, and special announcements'}
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className={`flex-grow px-4 py-3 rounded-full border ${
                theme === 'kawaii' 
                  ? 'border-pink-300 focus:border-pink-500 focus:ring-pink-500' 
                  : 'border-transparent bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-80 focus:border-white focus:ring-white'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              required
            />
            
            <button
              type="submit"
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                theme === 'kawaii'
                  ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-300/50 hover:scale-105'
                  : 'bg-white text-violet-700 hover:bg-opacity-90 hover:scale-105'
              }`}
            >
              {theme === 'kawaii' ? '✨ Subscribe ✨' : 'Subscribe'}
            </button>
          </form>
          
          <p className={`mt-4 text-center text-sm ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-white text-opacity-80'
          }`}>
            I respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default function Blog() {
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
              {theme === 'kawaii' ? '✍️ Blog & Tips ✍️' : 'Blog'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Tutorials, behind-the-scenes, and kawaii lifestyle content!' 
                : 'Dance tutorials, cosplay guides, and insights into the creator lifestyle'}
            </p>
          </motion.div>
        </div>

        {/* Decorative elements for kawaii theme */}
        {theme === 'kawaii' && (
          <>
            <motion.div 
              className="absolute -bottom-6 left-10 w-24 h-24 rounded-full bg-pink-200 opacity-70"
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
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-purple-300 opacity-70"
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
      
      <FeaturedPostsCarousel />
      <BlogPostsGrid />
      <NewsletterSignup />
    </div>
  );
} 