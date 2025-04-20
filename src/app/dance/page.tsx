'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';
import { FaPlay, FaPause, FaInstagram, FaTiktok, FaYoutube, FaChevronRight } from 'react-icons/fa';

// Dance video data
const danceVideos = [
  {
    id: 1,
    title: 'K-Pop Dance Cover',
    description: 'Full choreography cover of a popular K-Pop song with costume',
    thumbnail: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
    videoUrl: '#', // Would be an actual video URL
    category: 'cover',
    featured: true,
    stats: {
      views: '125K+',
      likes: '15K+',
      shares: '2.3K+',
    }
  },
  {
    id: 2,
    title: 'Dance Tutorial: Basic Steps',
    description: 'Learn the fundamental steps used in most of my choreography',
    thumbnail: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
    videoUrl: '#', // Would be an actual video URL
    category: 'tutorial',
    featured: false,
    stats: {
      views: '95K+',
      likes: '12K+',
      shares: '1.7K+',
    }
  },
  {
    id: 3,
    title: 'Original Choreography',
    description: 'My original dance routine created for a special event',
    thumbnail: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
    videoUrl: '#', // Would be an actual video URL
    category: 'original',
    featured: true,
    stats: {
      views: '210K+',
      likes: '32K+',
      shares: '5.1K+',
    }
  },
  {
    id: 4,
    title: 'Anime Convention Performance',
    description: 'Live stage performance at AnimeExpo 2023',
    thumbnail: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
    videoUrl: '#', // Would be an actual video URL
    category: 'performance',
    featured: true,
    stats: {
      views: '178K+',
      likes: '28K+',
      shares: '4.2K+',
    }
  },
  {
    id: 5,
    title: 'Dance Tutorial: Advanced Moves',
    description: 'Step-by-step guide to more complex dance techniques',
    thumbnail: '/media/social_post_examples_images/436199024_2471597753040835_1972704636304979853_n.jpg',
    videoUrl: '#', // Would be an actual video URL
    category: 'tutorial',
    featured: false,
    stats: {
      views: '82K+',
      likes: '9K+',
      shares: '1.3K+',
    }
  },
  {
    id: 6,
    title: 'Collaboration Dance Cover',
    description: 'Special collaboration with other dancers for this vibrant performance',
    thumbnail: '/media/social_post_examples_images/439690397_1248280729539064_5138451564801685449_n.jpg',
    videoUrl: '#', // Would be an actual video URL
    category: 'cover',
    featured: false,
    stats: {
      views: '145K+',
      likes: '19K+',
      shares: '3.5K+',
    }
  },
];

// Featured Video Player component
const FeaturedVideo = () => {
  const { theme } = useTheme();
  const featuredVideos = danceVideos.filter(video => video.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeVideo = featuredVideos[activeIndex];
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '✨ Featured Performances ✨' : 'Featured Performances'}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main video display */}
          <div className="lg:col-span-3">
            <div className={`relative rounded-2xl overflow-hidden shadow-xl ${
              theme === 'kawaii' ? 'border-4 border-pink-300' : 'border border-gray-200'
            }`}>
              <div className="relative aspect-video">
                {/* For a real implementation, this would be a video player */}
                <Image
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                
                {/* Play/Pause overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={togglePlay} 
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      theme === 'kawaii'
                        ? 'bg-pink-500 text-white hover:bg-pink-600'
                        : 'bg-violet-600 text-white hover:bg-violet-700'
                    }`}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl ml-1" />}
                  </button>
                </div>
                
                {/* Video stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <div className="flex space-x-4 text-sm">
                    <div className="flex items-center">
                      <span className="mr-1">👁️</span>
                      <span>{activeVideo.stats.views}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">❤️</span>
                      <span>{activeVideo.stats.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">🔄</span>
                      <span>{activeVideo.stats.shares}</span>
                    </div>
                  </div>
                </div>
                
                {/* For kawaii theme */}
                {theme === 'kawaii' && (
                  <div className="absolute top-3 right-3 bg-pink-400 text-white px-3 py-1 rounded-full text-sm shadow-lg transform rotate-3">
                    So Kawaii~!
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Video info and playlist */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-sm uppercase tracking-wider mb-4 ${
                  theme === 'kawaii' 
                    ? 'bg-pink-100 text-pink-700' 
                    : 'bg-violet-100 text-violet-700'
                }`}>
                  {activeVideo.category}
                </span>
                
                <h3 className={`text-2xl font-bold mb-3 ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                }`}>
                  {activeVideo.title}
                </h3>
                
                <p className={`mb-6 ${
                  theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                }`}>
                  {activeVideo.description}
                </p>
                
                <div className={`p-4 rounded-lg mb-6 ${
                  theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'
                }`}>
                  <h4 className={`text-sm font-bold mb-3 ${
                    theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
                  }`}>
                    {theme === 'kawaii' ? '🎵 Find me on social media' : 'Follow me for more dance content'}
                  </h4>
                  
                  <div className="flex space-x-3">
                    <Link 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        theme === 'kawaii' 
                          ? 'bg-pink-200 text-pink-700 hover:bg-pink-300' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <FaInstagram className="text-xl" />
                    </Link>
                    <Link 
                      href="https://tiktok.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        theme === 'kawaii' 
                          ? 'bg-pink-200 text-pink-700 hover:bg-pink-300' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <FaTiktok className="text-xl" />
                    </Link>
                    <Link 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${
                        theme === 'kawaii' 
                          ? 'bg-pink-200 text-pink-700 hover:bg-pink-300' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <FaYoutube className="text-xl" />
                    </Link>
                  </div>
                </div>
                
                <h4 className={`text-sm font-bold mb-4 ${
                  theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
                }`}>
                  {theme === 'kawaii' ? '✨ More videos to watch' : 'More featured videos'}
                </h4>
                
                <div className="space-y-3">
                  {featuredVideos.map((video, index) => (
                    <div 
                      key={video.id}
                      onClick={() => setActiveIndex(index)}
                      className={`flex items-center p-2 rounded-lg cursor-pointer transition-all ${
                        index === activeIndex 
                          ? theme === 'kawaii'
                            ? 'bg-pink-100 border border-pink-300'
                            : 'bg-violet-50 border border-violet-200'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        {index === activeIndex && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              theme === 'kawaii'
                                ? 'bg-pink-500 text-white'
                                : 'bg-violet-600 text-white'
                            }`}>
                              <FaPlay className="text-xs ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <h5 className={`text-sm font-medium line-clamp-1 ${
                          theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                        }`}>
                          {video.title}
                        </h5>
                        <p className={`text-xs line-clamp-1 ${
                          theme === 'kawaii' ? 'text-pink-500' : 'text-gray-500'
                        }`}>
                          {video.stats.views} views
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dance categories section
const DanceCategories = () => {
  const { theme } = useTheme();
  const categories = [
    {
      title: 'K-Pop Covers',
      description: 'My interpretations of popular K-Pop choreographies',
      image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
      count: 24,
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step guides to learn various dance techniques',
      image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
      count: 15,
    },
    {
      title: 'Original Choreography',
      description: 'Dance routines I created from scratch',
      image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
      count: 8,
    },
    {
      title: 'Live Performances',
      description: 'Recordings of my stage performances at events',
      image: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
      count: 12,
    },
  ];
  
  return (
    <section className={`py-16 ${
      theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '💃 Dance Categories 💃' : 'Explore My Dance Videos'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg ${
                theme === 'kawaii' ? 'border-2 border-pink-200' : 'border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={`/dance/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative aspect-video">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className={`text-xs inline-block px-2 py-1 rounded-full mb-2 ${
                        theme === 'kawaii' 
                          ? 'bg-pink-400 text-white' 
                          : 'bg-violet-600 text-white'
                      }`}>
                        {category.count} videos
                      </div>
                      <h3 className="text-white text-lg font-bold">{category.title}</h3>
                    </div>
                  </div>
                </div>
                <div className={`p-4 ${
                  theme === 'kawaii' ? 'bg-white' : 'bg-white'
                }`}>
                  <p className={`text-sm ${
                    theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dance Tutorial Preview
const TutorialPreview = () => {
  const { theme } = useTheme();
  const steps = [
    'Warm-up routine to prepare your body',
    'Basic footwork patterns and timing practice',
    'Upper body movements and arm coordination',
    'Putting it all together with music',
    'Cool-down and stretching exercises',
  ];
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-sm uppercase tracking-wider mb-4 ${
              theme === 'kawaii' 
                ? 'bg-pink-100 text-pink-700' 
                : 'bg-violet-100 text-violet-700'
            }`}>
              Free Tutorial Preview
            </span>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
            }`}>
              {theme === 'kawaii' ? '✨ Learn To Dance With Me! ✨' : 'Learn My Dance Techniques'}
            </h2>
            
            <p className={`mb-8 text-lg ${
              theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
            }`}>
              {theme === 'kawaii' 
                ? 'Join my super cute dance tutorial series where I break down my favorite choreographies into easy steps that anyone can follow!' 
                : 'Access comprehensive step-by-step tutorials to learn dance techniques at your own pace'}
            </p>
            
            <div className="mb-8">
              <h3 className={`text-lg font-bold mb-4 ${
                theme === 'kawaii' ? 'text-pink-600' : 'text-gray-900'
              }`}>
                {theme === 'kawaii' ? '💫 What You\'ll Learn' : 'What You\'ll Learn'}
              </h3>
              
              <ul className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`inline-block w-6 h-6 rounded-full flex-shrink-0 mr-3 ${
                      theme === 'kawaii' 
                        ? 'bg-pink-200 text-pink-700' 
                        : 'bg-violet-100 text-violet-700'
                    } flex items-center justify-center text-xs font-bold`}>
                      {index + 1}
                    </span>
                    <span className={theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              href="/dance/tutorials"
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                theme === 'kawaii'
                  ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                  : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
              }`}
            >
              {theme === 'kawaii' ? '🎵 Browse All Tutorials 🎵' : 'Browse All Tutorials'}
              <FaChevronRight className="ml-2 text-sm" />
            </Link>
          </div>
          
          <div className={`relative rounded-xl overflow-hidden ${
            theme === 'kawaii' ? 'border-4 border-pink-300 shadow-xl' : 'border border-gray-200 shadow-xl'
          }`}>
            <div className="relative aspect-video">
              <Image
                src="/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg"
                alt="Dance Tutorial Preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                    theme === 'kawaii'
                      ? 'bg-pink-500 text-white hover:bg-pink-600'
                      : 'bg-violet-600 text-white hover:bg-violet-700'
                  }`}
                >
                  <FaPlay className="text-xl ml-1" />
                </button>
              </div>
              
              {/* Decorative elements for kawaii theme */}
              {theme === 'kawaii' && (
                <>
                  <div className="absolute top-4 right-4 bg-pink-400 text-white px-3 py-1 rounded-full text-sm shadow-lg transform rotate-3">
                    Tutorial~!
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-400 text-white px-3 py-1 rounded-full text-sm shadow-lg transform -rotate-3">
                    Learn with me!
                  </div>
                </>
              )}
            </div>
            
            <div className={`p-4 ${
              theme === 'kawaii' ? 'bg-white' : 'bg-white'
            }`}>
              <h3 className={`font-bold ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
              }`}>
                Beginner-Friendly K-Pop Dance Tutorial
              </h3>
              <p className={`text-sm ${
                theme === 'kawaii' ? 'text-pink-600' : 'text-gray-500'
              }`}>
                15 minute lesson • No experience required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Booking Information
const BookingInfo = () => {
  const { theme } = useTheme();
  
  const events = [
    {
      type: 'Conventions',
      description: 'Dance performances and meet & greets at anime, gaming, and pop culture conventions',
      icon: '🎭',
    },
    {
      type: 'Workshops',
      description: 'In-person dance workshops for groups of all skill levels and ages',
      icon: '👯',
    },
    {
      type: 'Corporate Events',
      description: 'Custom performances for company events, product launches, and promotional activities',
      icon: '🏢',
    },
    {
      type: 'Collaborations',
      description: 'Dance collaborations with other creators, brands, and organizations',
      icon: '🤝',
    },
  ];
  
  return (
    <section className={`py-16 ${
      theme === 'kawaii' ? 'bg-gradient-to-r from-pink-100 via-pink-50 to-purple-100' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '✨ Book Me For Your Event! ✨' : 'Performance Booking Information'}
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
          }`}>
            {theme === 'kawaii'
              ? 'I\'d love to perform at your next event! Check out the types of bookings I offer below.'
              : 'Available for a variety of performance opportunities and events. Inquire about availability and rates.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${
                theme === 'kawaii' 
                  ? 'bg-white border-2 border-pink-200 shadow-lg' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-2xl ${
                theme === 'kawaii' ? 'bg-pink-100' : 'bg-violet-100'
              }`}>
                {event.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
              }`}>
                {event.type}
              </h3>
              
              <p className={theme === 'kawaii' ? 'text-pink-800 mb-4' : 'text-gray-700 mb-4'}>
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className={`inline-block px-8 py-4 rounded-full font-medium transition-all ${
              theme === 'kawaii'
                ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
            }`}
          >
            {theme === 'kawaii' ? '✉️ Contact Me For Bookings ✉️' : 'Inquire About Booking'}
          </Link>
        </div>
      </div>
    </section>
  );
};

// Interactive elements section (Kawaii theme only)
const InteractiveSection = () => {
  const { theme } = useTheme();
  const [voteCount, setVoteCount] = useState<{[key: string]: number}>({
    'K-Pop': 35,
    'J-Pop': 28,
    'Original': 42,
    'Anime': 39,
  });
  
  // Only show this section in Kawaii theme
  if (theme !== 'kawaii') return null;
  
  const handleVote = (category: string) => {
    setVoteCount(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }));
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
          ✨ Vote For My Next Dance Cover! ✨
        </h2>
        
        <p className="text-center max-w-3xl mx-auto mb-12 text-pink-700">
          Help me decide what dance to learn next by voting for your favorite style below!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {Object.entries(voteCount).map(([category, count]) => (
            <motion.div
              key={category}
              className="bg-white rounded-xl p-4 border-2 border-pink-200 shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-pink-700 font-bold text-lg mb-3 text-center">{category}</h3>
              <div className="h-6 bg-pink-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"
                  style={{ width: `${Math.min(100, (count / 50) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-pink-600 text-sm">{count} votes</span>
                <span className="text-pink-600 text-xs">{Math.min(100, Math.round((count / 50) * 100))}%</span>
              </div>
              <button
                onClick={() => handleVote(category)}
                className="w-full py-2 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors shadow-md shadow-pink-200"
              >
                Vote {category}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-pink-700 italic">
            Thanks for voting! I'll announce the winning style in my next video~ 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Dance() {
  const { theme } = useTheme();
  
  return (
    <div className={theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-32 pb-16 ${
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
              {theme === 'kawaii' ? '💃 Dance With Me! 💃' : 'Dance Performances & Tutorials'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Discover my latest dance covers, tutorials, and kawaii performances!' 
                : 'Explore my choreography portfolio, instructional content, and live performances'}
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
      
      <FeaturedVideo />
      <DanceCategories />
      <TutorialPreview />
      <BookingInfo />
      <InteractiveSection />
    </div>
  );
} 