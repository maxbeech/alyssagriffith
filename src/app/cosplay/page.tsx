'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

// Cosplay character data
const cosplayCharacters = [
  {
    id: 1,
    name: 'Anime Character 1',
    series: 'Popular Anime Series',
    description: 'One of my favorite characters to cosplay, with a detailed costume that took over a month to create.',
    image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Game Character 1',
    series: 'Popular Video Game',
    description: 'This costume features handcrafted armor pieces and a custom wig styling.',
    image: '/media/social_post_examples_images/443941801_954849156648899_6091024799237260681_n.jpg',
    featured: false,
  },
  {
    id: 3,
    name: 'Anime Character 2',
    series: 'Fantasy Anime',
    description: 'My take on this beloved character includes custom fabric printing and LED lighting elements.',
    image: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'Movie Character',
    series: 'Sci-Fi Film',
    description: 'This futuristic costume incorporates 3D printed components and weathering techniques.',
    image: '/media/social_post_examples_images/453674613_1200304997971720_4719456939149057248_n.jpg',
    featured: false,
  },
  {
    id: 5,
    name: 'Game Character 2',
    series: 'RPG Game',
    description: 'A fan-favorite character with a complicated magical weapon that I recreated using resin casting.',
    image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
    featured: true,
  },
  {
    id: 6,
    name: 'Anime Character 3',
    series: 'Magical Girl Anime',
    description: 'This transformation costume features detachable pieces and color-changing elements.',
    image: '/media/social_post_examples_images/454639965_819646490336570_3911857521876050171_n.jpg',
    featured: false,
  },
];

// Featured cosplay showcase
const FeaturedCosplay = () => {
  const { theme } = useTheme();
  const featuredCosplays = cosplayCharacters.filter(char => char.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCosplay = featuredCosplays[activeIndex];
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '✨ Featured Cosplays ✨' : 'Featured Cosplays'}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div 
            className={`relative rounded-2xl overflow-hidden shadow-xl ${
              theme === 'kawaii' ? 'border-4 border-pink-300' : 'border border-gray-200'
            }`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[3/4]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCosplay.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeCosplay.image}
                    alt={activeCosplay.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Image overlays for kawaii theme */}
            {theme === 'kawaii' && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 right-4 bg-pink-400 text-white px-3 py-1 rounded-full text-sm shadow-lg transform rotate-3">
                  Kawaii~!
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-400 text-white px-3 py-1 rounded-full text-sm shadow-lg transform -rotate-3">
                  So cute!
                </div>
              </div>
            )}
          </motion.div>
          
          {/* Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCosplay.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-sm uppercase tracking-wider mb-4 ${
                  theme === 'kawaii' 
                    ? 'bg-pink-100 text-pink-700' 
                    : 'bg-violet-100 text-violet-700'
                }`}>
                  {activeCosplay.series}
                </span>
                
                <h3 className={`text-3xl font-bold mb-4 ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                }`}>
                  {activeCosplay.name}
                </h3>
                
                <p className={`mb-8 text-lg ${
                  theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                }`}>
                  {activeCosplay.description}
                </p>
                
                <div className="flex space-x-2 mb-8">
                  {featuredCosplays.map((cosplay, index) => (
                    <button
                      key={cosplay.id}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeIndex === index
                          ? theme === 'kawaii' 
                            ? 'bg-pink-500 scale-125' 
                            : 'bg-violet-600 scale-125'
                          : theme === 'kawaii'
                            ? 'bg-pink-200 hover:bg-pink-300'
                            : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`View ${cosplay.name}`}
                    />
                  ))}
                </div>
                
                <Link 
                  href={`/portfolio/cosplay`} 
                  className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                    theme === 'kawaii'
                      ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                      : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
                  }`}
                >
                  {theme === 'kawaii' ? '🎀 View All Cosplays 🎀' : 'View All Cosplays'}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Interactive Character Map
const CharacterMap = () => {
  const { theme } = useTheme();
  const [selectedCharacter, setSelectedCharacter] = useState<null | typeof cosplayCharacters[0]>(null);
  
  return (
    <section className={`py-16 ${
      theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '🎭 Cosplay Character Map 🎭' : 'Cosplay Gallery'}
        </h2>
        
        <p className={`text-center max-w-3xl mx-auto mb-12 ${
          theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
        }`}>
          {theme === 'kawaii' 
            ? 'Click on a character to learn more about my cosplay creation process!' 
            : 'Explore my cosplay portfolio and learn about the creative process behind each character'}
        </p>
        
        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {cosplayCharacters.map((character) => (
            <motion.div
              key={character.id}
              className={`relative cursor-pointer rounded-xl overflow-hidden ${
                theme === 'kawaii' 
                  ? 'border-2 border-pink-200 shadow-md' 
                  : 'border border-gray-200 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCharacter(character)}
            >
              <div className="relative aspect-square">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'kawaii'
                    ? 'bg-gradient-to-t from-pink-500/90 to-pink-500/50'
                    : 'bg-gradient-to-t from-black/80 to-black/40'
                } flex items-end`}>
                  <div className="p-3 text-white">
                    <p className="font-bold text-sm truncate">{character.name}</p>
                    <p className="text-xs truncate">{character.series}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Selected Character Details */}
        <AnimatePresence>
          {selectedCharacter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-xl ${
                theme === 'kawaii' 
                  ? 'bg-white border-2 border-pink-200 shadow-lg' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
                  }`}>
                    {selectedCharacter.name}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'
                  }`}>
                    {selectedCharacter.series}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className={`p-2 rounded-full ${
                    theme === 'kawaii' 
                      ? 'bg-pink-100 text-pink-500 hover:bg-pink-200' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative rounded-lg overflow-hidden aspect-square">
                  <Image
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <p className={`mb-4 ${
                    theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'
                  }`}>
                    {selectedCharacter.description}
                  </p>
                  
                  <div className={`p-4 rounded-lg ${
                    theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'
                  }`}>
                    <h4 className={`text-sm font-bold mb-2 ${
                      theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
                    }`}>
                      {theme === 'kawaii' ? '✂️ Creation Process' : 'Creation Process'}
                    </h4>
                    <ul className={`text-sm space-y-2 ${
                      theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
                    }`}>
                      <li className="flex items-start">
                        <span className={`inline-block w-5 h-5 rounded-full flex-shrink-0 mr-2 ${
                          theme === 'kawaii' ? 'bg-pink-200 text-pink-700' : 'bg-violet-100 text-violet-700'
                        } flex items-center justify-center text-xs font-bold`}>
                          1
                        </span>
                        <span>Research and reference gathering</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-5 h-5 rounded-full flex-shrink-0 mr-2 ${
                          theme === 'kawaii' ? 'bg-pink-200 text-pink-700' : 'bg-violet-100 text-violet-700'
                        } flex items-center justify-center text-xs font-bold`}>
                          2
                        </span>
                        <span>Pattern drafting and material selection</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-5 h-5 rounded-full flex-shrink-0 mr-2 ${
                          theme === 'kawaii' ? 'bg-pink-200 text-pink-700' : 'bg-violet-100 text-violet-700'
                        } flex items-center justify-center text-xs font-bold`}>
                          3
                        </span>
                        <span>Construction, fitting, and adjustments</span>
                      </li>
                      <li className="flex items-start">
                        <span className={`inline-block w-5 h-5 rounded-full flex-shrink-0 mr-2 ${
                          theme === 'kawaii' ? 'bg-pink-200 text-pink-700' : 'bg-violet-100 text-violet-700'
                        } flex items-center justify-center text-xs font-bold`}>
                          4
                        </span>
                        <span>Prop creation and finishing details</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Cosplay Tips Section
const CosplayTips = () => {
  const { theme } = useTheme();
  
  const tips = [
    {
      title: 'Planning & Research',
      description: 'Start with thorough reference gathering and break down complex costumes into manageable components.',
      icon: '📝',
    },
    {
      title: 'Material Selection',
      description: 'Choose fabrics and materials that match the character while being comfortable and practical to wear.',
      icon: '🧵',
    },
    {
      title: 'Prop Making',
      description: 'Explore different materials like EVA foam, Worbla, or 3D printing for creating durable and lightweight props.',
      icon: '⚔️',
    },
    {
      title: 'Makeup Techniques',
      description: 'Practice character makeup looks in advance and invest in quality products for better results and comfort.',
      icon: '💄',
    },
  ];
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
          theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '💡 Cosplay Tips & Tricks 💡' : 'Cosplay Tips & Resources'}
        </h2>
        
        <p className={`text-center max-w-3xl mx-auto mb-12 ${
          theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
        }`}>
          {theme === 'kawaii' 
            ? 'Here are some of my favorite cosplay tips to help you create amazing costumes!' 
            : 'Helpful advice from my experience to assist with your own cosplay creations'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${
                theme === 'kawaii' 
                  ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100' 
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
                {tip.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
              }`}>
                {tip.title}
              </h3>
              
              <p className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/blog?category=cosplay-diy"
            className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
              theme === 'kawaii'
                ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200 hover:scale-105'
                : 'bg-violet-600 text-white hover:bg-violet-700 hover:scale-105'
            }`}
          >
            {theme === 'kawaii' ? '✨ Read My Cosplay Guides ✨' : 'Read My Cosplay Guides'}
          </Link>
        </div>
      </div>
    </section>
  );
};

// Interactive elements section
const InteractiveSection = () => {
  const { theme } = useTheme();
  const [emoteCount, setEmoteCount] = useState<{[key: string]: number}>({
    '❤️': 0,
    '🎀': 0,
    '✨': 0,
    '🌸': 0,
  });
  
  // Only show this section in Kawaii theme
  if (theme !== 'kawaii') return null;
  
  const handleEmoteClick = (emote: string) => {
    setEmoteCount(prev => ({
      ...prev,
      [emote]: prev[emote] + 1
    }));
    
    // Add floating animation for the clicked emote
    const container = document.getElementById('emote-container');
    if (container) {
      const emoteEl = document.createElement('div');
      emoteEl.innerText = emote;
      emoteEl.className = 'absolute text-2xl pointer-events-none';
      emoteEl.style.left = `${Math.random() * 80 + 10}%`;
      emoteEl.style.bottom = '0';
      emoteEl.style.animation = 'float 2s ease-out forwards';
      container.appendChild(emoteEl);
      
      setTimeout(() => {
        container.removeChild(emoteEl);
      }, 2000);
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
          ✨ Kawaii Cosplay Zone ✨
        </h2>
        
        <p className="text-center max-w-3xl mx-auto mb-12 text-pink-700">
          Show your support by clicking the emotes below! Let me know which cosplays you love the most!
        </p>
        
        <div className="relative h-40 mb-8" id="emote-container">
          {/* Floating emotes will be added here dynamically */}
        </div>
        
        <div className="flex justify-center space-x-6">
          {Object.keys(emoteCount).map((emote) => (
            <motion.button
              key={emote}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleEmoteClick(emote)}
            >
              <span className="text-4xl mb-2">{emote}</span>
              <span className="bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                {emoteCount[emote]}
              </span>
            </motion.button>
          ))}
        </div>
        
        <style jsx global>{`
          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) scale(1.5);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default function Cosplay() {
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
              {theme === 'kawaii' ? '🎀 Kawaii Cosplays 🎀' : 'Cosplay Portfolio'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'Explore my super cute character transformations and cosplay adventures!' 
                : 'A showcase of my character designs, costume creations, and cosplay projects'}
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
      
      <FeaturedCosplay />
      <CharacterMap />
      <CosplayTips />
      <InteractiveSection />
    </div>
  );
} 