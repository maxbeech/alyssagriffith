'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';
import { FaArrowRight, FaHeart, FaChevronRight } from 'react-icons/fa';

export default function GamesCosplay() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  // Use real images from the media folder
  const cosplays = [
    {
      id: 1,
      name: 'D.Va',
      game: 'Overwatch',
      image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
      gallery: [
        '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
        '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
      ],
      type: 'FPS',
      description: 'Full D.Va bodysuit with LED-enhanced headset and custom-made blaster prop.',
      difficulty: 'Advanced',
      completionDate: '2023-05-10',
      likes: 1876,
    },
    {
      id: 2,
      name: '2B',
      game: 'NieR: Automata',
      image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
      gallery: [
        '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
        '/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg',
      ],
      type: 'RPG',
      description: 'Detailed recreation of 2B\'s outfit with handcrafted sword and blindfold.',
      difficulty: 'Advanced',
      completionDate: '2023-08-14',
      likes: 2103,
    },
    {
      id: 3,
      name: 'Zelda',
      game: 'The Legend of Zelda: Breath of the Wild',
      image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
      gallery: [
        '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
        '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
      ],
      type: 'Adventure',
      description: 'Princess Zelda ceremonial dress with detailed embroidery and accessories.',
      difficulty: 'Intermediate',
      completionDate: '2023-11-30',
      likes: 1650,
    },
    {
      id: 4,
      name: 'Tifa Lockhart',
      game: 'Final Fantasy VII',
      image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
      gallery: [
        '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
        '/media/thumbnails/456158798_1129903841764166_8022057778131917453_n.jpg',
      ],
      type: 'RPG',
      description: 'Tifa\'s classic outfit with premium leather gloves and accurate accessories.',
      difficulty: 'Intermediate',
      completionDate: '2024-01-15',
      likes: 1942,
    },
    {
      id: 5,
      name: 'Lara Croft',
      game: 'Tomb Raider',
      image: '/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg',
      gallery: [
        '/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg',
        '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
      ],
      type: 'Adventure',
      description: 'Modern Lara Croft with realistic props including bow and climbing axe.',
      difficulty: 'Intermediate',
      completionDate: '2023-03-18',
      likes: 1534,
    }
  ];

  const filters = ['All', 'RPG', 'Adventure', 'FPS'];
  
  const filteredCosplays = activeFilter === 'All' 
    ? cosplays 
    : cosplays.filter(cosplay => cosplay.type === activeFilter);

  // Define theme-specific styling
  const styles = {
    background: theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50',
    heading: theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600',
    text: theme === 'kawaii' ? 'text-pink-900' : 'text-gray-800',
    lightText: theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600',
    card: theme === 'kawaii' ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100' : 'bg-white border border-gray-200 shadow-md',
    cardHover: theme === 'kawaii' ? 'hover:border-pink-300 hover:shadow-pink-200' : 'hover:border-violet-200',
    button: theme === 'kawaii' ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white',
    buttonSecondary: theme === 'kawaii' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-violet-100 text-violet-700 hover:bg-violet-200',
    activeFilter: theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white',
    inactiveFilter: theme === 'kawaii' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
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
            {theme === 'kawaii' ? '🎮 Video Game Cosplays 🎮' : 'Video Game Cosplays'}
          </motion.h1>
          <motion.p 
            className={`text-lg max-w-3xl mx-auto ${styles.lightText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Check out my favorite gaming character cosplays! From RPGs to action adventures~' 
              : 'Explore my collection of video game character cosplays from various gaming universes'}
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

        {/* Cosplay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCosplays.map((cosplay, index) => (
            <motion.div
              key={cosplay.id}
              className={`rounded-xl overflow-hidden ${styles.card} transition-all duration-300 hover:scale-[1.02] ${styles.cardHover}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={cosplay.image}
                  alt={cosplay.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 to-transparent">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 ${styles.text}`}>
                    {cosplay.type}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-1 ${styles.subheading}`}>{cosplay.name}</h3>
                <p className={`text-sm mb-3 ${styles.lightText}`}>{cosplay.game}</p>
                
                <p className={`text-sm mb-4 line-clamp-2 ${styles.text}`}>
                  {cosplay.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <button className="text-red-500 hover:scale-110 transition-transform">
                      <FaHeart />
                    </button>
                    <span className={`text-sm ${styles.lightText}`}>{cosplay.likes}</span>
                  </div>
                  
                  <Link 
                    href={`/cosplay/games/${cosplay.id}`}
                    className={`inline-flex items-center px-3 py-1.5 rounded text-sm font-medium ${styles.button} transition-all duration-300`}
                  >
                    {theme === 'kawaii' ? 'See More ✨' : 'See Details'}
                    <FaArrowRight className="ml-1.5 text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Game Crossover Feature */}
        <motion.div
          className={`mt-16 p-6 sm:p-8 rounded-xl ${theme === 'kawaii' ? 'bg-gradient-to-r from-pink-200 to-purple-100' : 'bg-gradient-to-r from-violet-100 to-purple-50'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-3/5">
              <h3 className={`text-2xl font-bold mb-3 ${styles.heading}`}>
                {theme === 'kawaii' ? '⭐ Cosplay Voting Event ⭐' : 'Upcoming Cosplay Project'}
              </h3>
              <p className={`mb-4 ${styles.text}`}>
                {theme === 'kawaii' 
                  ? 'Help me choose my next video game character cosplay! Vote for your favorite and I\'ll create the winning character\'s costume~' 
                  : 'I\'m planning my next video game character cosplay and would love your input on which character to portray next'}
              </p>
              <Link 
                href="/contact"
                className={`inline-flex items-center px-5 py-2.5 rounded-full font-medium ${styles.button} transition-all duration-300`}
              >
                {theme === 'kawaii' ? 'Vote Now 🎮' : 'Submit Your Suggestion'}
                <FaChevronRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-2/5 relative h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden">
              <Image 
                src="/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg"
                alt="Cosplay voting event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/cosplay"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${styles.buttonSecondary} transition-all duration-300`}
          >
            {theme === 'kawaii' ? '← Back to All Cosplays' : 'Back to All Cosplays'}
          </Link>
        </div>
      </div>
    </div>
  );
} 