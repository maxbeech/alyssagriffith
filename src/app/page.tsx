'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import { useTheme } from '@/components/layout/ThemeProvider';

// Video Grid Component
const VideoGrid = () => {
  const { theme } = useTheme();
  const videos = [
    "/media/social_post_examples_vertical_videos/videoplayback.mp4",
    "/media/social_post_examples_vertical_videos/videoplayback (1).mp4",
    "/media/social_post_examples_vertical_videos/videoplayback (2).mp4",
    "/media/social_post_examples_vertical_videos/videoplayback (3).mp4",
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
            theme === 'kawaii' 
              ? 'text-pink-500' 
              : 'text-violet-700'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {theme === 'kawaii' ? '✨ My Latest Dance Videos ✨' : 'Featured Content'}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg ${
                theme === 'kawaii' 
                  ? 'transform rotate-' + (index % 2 === 0 ? '1' : '-1') + ' hover:rotate-0 border-4 border-pink-300 shadow-pink-400/20' 
                  : 'border border-gray-200'
              } transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[9/16] w-full">
                <video
                  src={video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'kawaii' 
                    ? 'bg-pink-500/60' 
                    : 'bg-black/60'
                }`}>
                  <button className={`px-4 py-2 rounded-full font-medium ${
                    theme === 'kawaii' 
                      ? 'bg-white text-pink-500' 
                      : 'bg-white text-violet-700'
                  }`}>
                    {theme === 'kawaii' ? '💖 Watch Now 💖' : 'Watch Now'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Media Mosaic
const SocialMediaMosaic = () => {
  const { theme } = useTheme();
  const images = [
    "/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg",
    "/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg",
    "/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg",
    "/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg",
    "/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg",
    "/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg",
  ];

  return (
    <section className={`py-24 ${
      theme === 'kawaii' 
        ? 'bg-gradient-to-r from-pink-100 via-pink-50 to-purple-50' 
        : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'kawaii' 
              ? 'text-pink-500' 
              : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '📸 Instagram Highlights 📸' : 'Social Showcase'}
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'kawaii' 
              ? 'text-pink-700' 
              : 'text-gray-600'
          }`}>
            {theme === 'kawaii' 
              ? 'Check out my latest cosplays and cute content! Follow me for daily updates~' 
              : 'Explore my latest content and photography across social platforms'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative aspect-square rounded-lg overflow-hidden ${
                theme === 'kawaii' 
                  ? 'border-4 border-pink-200 shadow-lg' 
                  : 'border border-gray-200 shadow-md'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: theme === 'kawaii' 
                  ? '0 20px 25px -5px rgba(240, 171, 252, 0.25), 0 8px 10px -6px rgba(240, 171, 252, 0.25)' 
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Image
                src={image}
                alt={`Social media post ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                theme === 'kawaii' 
                  ? 'bg-gradient-to-r from-pink-500/70 to-purple-500/70' 
                  : 'bg-black/60'
              }`}>
                <div className="text-white text-center p-4">
                  <p className="font-medium mb-2">
                    {theme === 'kawaii' ? '💕 Like this?' : 'See on Instagram'}
                  </p>
                  <button className={`px-4 py-2 rounded-full text-sm font-medium ${
                    theme === 'kawaii' 
                      ? 'bg-white text-pink-500 shadow-lg' 
                      : 'bg-white text-violet-700'
                  }`}>
                    {theme === 'kawaii' ? '✨ Follow Me ✨' : 'Follow'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Floating Headshot Gallery
const FloatingHeadshotGallery = () => {
  const { theme } = useTheme();
  const headshots = [
    "/media/headshots/445887761_796726439208008_3385061216813286601_n.jpg",
    "/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg",
    "/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg",
    "/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg",
    "/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg",
    "/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg",
    "/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg",
    "/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'kawaii' 
              ? 'text-pink-500' 
              : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '👗 Cosplay Gallery 👗' : 'Portfolio Previews'}
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'kawaii' 
              ? 'text-pink-700' 
              : 'text-gray-600'
          }`}>
            {theme === 'kawaii' 
              ? 'Bringing your favorite characters to life with my unique style and energy!' 
              : 'Explore a selection of my professional work and creative projects'}
          </p>
        </motion.div>
        
        <div className="relative h-[650px] md:h-[750px]">
          {/* Floating images */}
          {headshots.map((img, index) => {
            // Better distributed positions to avoid overlap
            const positions = [
              { x: '5%', y: '10%' },     // Top left
              { x: '70%', y: '5%' },     // Top right
              { x: '35%', y: '25%' },    // Upper middle
              { x: '85%', y: '40%' },    // Middle right
              { x: '15%', y: '55%' },    // Middle left
              { x: '60%', y: '60%' },    // Lower middle right
              { x: '25%', y: '80%' },    // Lower middle left
              { x: '75%', y: '75%' },    // Bottom right
            ];
            
            // Get position for this image
            const position = positions[index];
            const zIndex = [3, 2, 4, 1, 3, 2, 4, 1][index]; // More controlled z-index
            
            // Varied sizes for different images
            const sizes = [
              { w: 'w-40 md:w-52' },
              { w: 'w-44 md:w-56' },
              { w: 'w-36 md:w-48' },
              { w: 'w-44 md:w-52' },
              { w: 'w-40 md:w-50' },
              { w: 'w-36 md:w-48' },
              { w: 'w-42 md:w-54' },
              { w: 'w-38 md:w-50' },
            ];
            
            return (
              <motion.div
                key={index}
                className={`absolute ${sizes[index].w} aspect-square rounded-lg overflow-hidden ${
                  theme === 'kawaii' 
                    ? 'border-4 border-pink-300 shadow-xl shadow-pink-400/30' 
                    : 'border border-gray-200 shadow-xl'
                }`}
                style={{
                  left: position.x,
                  top: position.y,
                  zIndex: zIndex,
                  transform: theme === 'kawaii' ? `rotate(${(index - 3) * 3}deg)` : 'none'
                }}
                initial={{ 
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                  y: 50 
                }}
                whileInView={{ 
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  zIndex: 50,
                  boxShadow: theme === 'kawaii' 
                    ? '0 25px 50px -12px rgba(240, 171, 252, 0.5)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Inner floating animation */}
                <motion.div 
                  className="w-full h-full"
                  animate={{
                    y: [0, -8, 0, 8, 0],
                    x: [0, 5, 0, -5, 0],
                    rotate: theme === 'kawaii' 
                      ? [(index - 3) * 0.5, (index - 3) * 0.5 + 2, (index - 3) * 0.5, (index - 3) * 0.5 - 2, (index - 3) * 0.5] 
                      : [0, 1, 0, -1, 0]
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src={img}
                    alt={`Portfolio image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 176px, 208px"
                  />
                  
                  {theme === 'kawaii' && (
                    <div className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs px-2 py-1 rounded-full transform rotate-12 font-medium shadow-md">
                      {['✨ Cute!', '💕 Kawaii!', '🌸 Love it!', '😍 Amazing!', '🔥 Hot!', '💫 Wow!', '✌️ Cool!', '💝 Perfect!'][index]}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
          
          {/* Decorative elements for kawaii mode */}
          {theme === 'kawaii' && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute text-3xl"
                  initial={{ 
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </>
          )}
        </div>
        
        <div className="text-center mt-10">
          <motion.a
            href="/portfolio"
            className={`inline-block px-6 py-3 rounded-full text-lg font-medium ${
              theme === 'kawaii' 
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600' 
                : 'bg-violet-700 text-white hover:bg-violet-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {theme === 'kawaii' ? '✨ See Full Portfolio ✨' : 'View Full Portfolio'}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

// Interactive Call to Action
const InteractiveCTA = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 ${
      theme === 'kawaii' 
        ? 'bg-gradient-to-b from-pink-100 to-purple-100' 
        : 'bg-gray-100'
    }`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
            theme === 'kawaii' 
              ? 'text-pink-500' 
              : 'text-violet-700'
          }`}>
            {theme === 'kawaii' 
              ? '💖 Join My Journey! 💖' 
              : 'Ready to Connect?'}
          </h2>
          
          <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
            theme === 'kawaii' 
              ? 'text-pink-700' 
              : 'text-gray-700'
          }`}>
            {theme === 'kawaii' 
              ? 'Subscribe for exclusive content, behind-the-scenes looks, and special announcements!' 
              : 'Follow my work and connect for collaboration opportunities and the latest updates'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/subscribe"
              className={`px-8 py-4 rounded-full text-lg font-medium ${
                theme === 'kawaii' 
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600' 
                  : 'bg-violet-700 text-white hover:bg-violet-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {theme === 'kawaii' ? '✨ Subscribe Now ✨' : 'Subscribe'}
            </motion.a>
            
            <motion.a
              href="/contact"
              className={`px-8 py-4 rounded-full text-lg font-medium ${
                theme === 'kawaii' 
                  ? 'border-2 border-pink-400 text-pink-500 hover:bg-pink-100' 
                  : 'border border-violet-700 text-violet-700 hover:bg-violet-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {theme === 'kawaii' ? '💌 Contact Me 💌' : 'Contact Me'}
            </motion.a>
          </div>
          
          {theme === 'kawaii' && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-pink-600 font-medium mb-3">Find me on social media!</p>
              <div className="flex justify-center gap-6">
                {['Instagram', 'TikTok', 'Twitter', 'YouTube'].map((platform, i) => (
                  <motion.a
                    key={platform}
                    href={`#${platform.toLowerCase()}`}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {i === 0 ? '📸' : i === 1 ? '🎵' : i === 2 ? '🐦' : '📱'}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoGrid />
      <SocialMediaMosaic />
      <FloatingHeadshotGallery />
      <InteractiveCTA />
    </main>
  );
} 