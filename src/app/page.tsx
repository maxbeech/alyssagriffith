'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import { useTheme } from '@/components/layout/ThemeProvider';
import SlideIntoView from '@/components/ui/animations/SlideIntoView';
import HoverEffect from '@/components/ui/animations/HoverEffect';
import SmoothParallax from '@/components/ui/animations/SmoothParallax';

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
        <SlideIntoView direction="up" className="text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
            theme === 'kawaii' 
              ? 'text-pink-500' 
              : 'text-violet-700'
          }`}>
            {theme === 'kawaii' ? '✨ My Latest Dance Videos ✨' : 'Featured Content'}
          </h2>
        </SlideIntoView>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => {
            // Varied animations based on index
            const staggerDelay = 0.2 + (index * 0.15);
            const rotateValue = (index % 2 === 0 ? 1 : -1) * (theme === 'kawaii' ? 1 : 0);
            
            return (
              <SlideIntoView
                key={index}
                direction={index % 2 === 0 ? "up" : (index % 4 === 1 ? "right" : "left")}
                delay={staggerDelay}
              >
                <HoverEffect
                  className={`rounded-xl overflow-hidden ${
                    theme === 'kawaii' 
                      ? `transform rotate-${rotateValue} border-4 border-pink-300 shadow-pink-400/20` 
                      : 'border border-gray-200'
                  }`}
                  scale={1.05}
                  rotate={rotateValue === 1 ? -1 : rotateValue === -1 ? 1 : 0}
                  glow={true}
                  glowColor={theme === 'kawaii' 
                    ? 'rgba(236, 72, 153, 0.3)' 
                    : 'rgba(109, 40, 217, 0.2)'
                  }
                >
                  <div className="relative aspect-[9/16] w-full">
                    {/* Animated video border in kawaii theme */}
                    {theme === 'kawaii' && (
                      <>
                        <motion.div 
                          className="absolute inset-0 pointer-events-none z-10 border-[3px] border-pink-300 rounded-lg opacity-0"
                          animate={{
                            opacity: [0, 0.6, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div 
                          className="absolute -bottom-1 -right-1 z-10 bg-pink-400 text-white text-xs px-2 py-1 rounded-full shadow-md"
                          initial={{
                            scale: 0,
                            rotate: 15,
                          }}
                          animate={{
                            scale: 1,
                            rotate: [15, 10, 15, 20, 15]
                          }}
                          transition={{
                            scale: { delay: staggerDelay + 0.4, duration: 0.3, type: 'spring' },
                            rotate: { delay: staggerDelay + 0.4, duration: 4, repeat: Infinity, ease: 'easeInOut' }
                          }}
                        >
                          {['Dance', 'TikTok', 'New!', 'Popular'][index]}
                        </motion.div>
                      </>
                    )}
                
                    <video
                      src={video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <motion.div 
                      className={`absolute inset-0 flex items-center justify-center ${
                        theme === 'kawaii' 
                          ? 'bg-gradient-to-tr from-pink-500/80 to-purple-500/70' 
                          : 'bg-gradient-to-br from-violet-900/80 to-black/70'
                      }`}
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { 
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                    >
                      <motion.div
                        className="flex flex-col items-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{
                          y: 0,
                          opacity: 1,
                          transition: { 
                            duration: 0.3,
                            ease: [0.19, 1.0, 0.22, 1.0], // Apple's ease curve
                            staggerChildren: 0.1
                          }
                        }}
                      >
                        <motion.p
                          className="text-white font-medium mb-3 text-center px-2"
                          variants={{
                            hover: { 
                              y: 0, 
                              opacity: 1,
                              transition: { duration: 0.3 }
                            }
                          }}
                        >
                          {theme === 'kawaii' 
                            ? ['Viral dance cover!', 'Behind the scenes', 'Latest choreo', 'Fan favorite'][index]
                            : ['Featured performance', 'Exclusive content', 'New choreography', 'Popular upload'][index]
                          }
                        </motion.p>
                        
                        <motion.button 
                          className={`px-4 py-2 rounded-full font-medium flex items-center gap-1 ${
                            theme === 'kawaii' 
                              ? 'bg-white text-pink-500 shadow-md hover:shadow-lg' 
                              : 'bg-white text-violet-700 hover:bg-violet-50'
                          }`}
                          variants={{
                            hover: { 
                              y: 0, 
                              opacity: 1,
                              scale: 1,
                              transition: { duration: 0.3, delay: 0.1 }
                            }
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 10
                            }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {theme === 'kawaii' ? '💖 Watch Now 💖' : 'Watch Now'}
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </HoverEffect>
              </SlideIntoView>
            );
          })}
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
        <SlideIntoView
          direction="up"
          className="text-center mb-12"
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
        </SlideIntoView>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <SlideIntoView
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1 * index}
            >
              <HoverEffect
                scale={1.04}
                lift={10}
                glow={true}
                glowColor={theme === 'kawaii' 
                  ? 'rgba(236, 72, 153, 0.3)' 
                  : 'rgba(109, 40, 217, 0.2)'
                }
              >
                <div className={`relative aspect-square rounded-lg overflow-hidden ${
                  theme === 'kawaii' 
                    ? 'border-4 border-pink-200' 
                    : 'border border-gray-200'
                }`}>
                  <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '200px' }}>
                    <Image
                      src={image}
                      alt={`Social media post ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      priority={index < 3} // Prioritize first few images
                    />
                  </div>
                  <motion.div 
                    className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 ${
                      theme === 'kawaii' 
                        ? 'bg-gradient-to-r from-pink-500/70 to-purple-500/70' 
                        : 'bg-black/60'
                    }`}
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="text-white text-center p-4"
                      initial={{ y: 30, opacity: 0 }}
                      whileHover={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          delay: 0.05
                        }
                      }}
                    >
                      <p className="font-medium mb-2">
                        {theme === 'kawaii' ? '💕 Like this?' : 'See on Instagram'}
                      </p>
                      <motion.button 
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          theme === 'kawaii' 
                            ? 'bg-white text-pink-500 shadow-lg' 
                            : 'bg-white text-violet-700'
                        }`}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {theme === 'kawaii' ? '✨ Follow Me ✨' : 'Follow'}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </HoverEffect>
            </SlideIntoView>
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
        <SlideIntoView 
          direction="up" 
          className="text-center mb-16"
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
        </SlideIntoView>
        
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
            
            // Parallax settings
            const parallaxConfig = {
              speed: 0.3 + (index % 3) * 0.1,
              springConfig: {
                stiffness: 50 + (index % 3) * 20,
                damping: 15 + (index % 4) * 5,
                mass: 0.8 + (index % 2) * 0.4
              }
            };
            
            // Varied animation effects based on index
            const entranceVariants = [
              { 
                hidden: { opacity: 0, y: 100, x: -50, scale: 0.8, rotate: -10 }, 
                visible: { opacity: 1, y: 0, x: 0, scale: 1, rotate: theme === 'kawaii' ? (index - 3) * 3 : 0 }
              },
              { 
                hidden: { opacity: 0, y: -80, x: 30, scale: 0.7, rotate: 8 }, 
                visible: { opacity: 1, y: 0, x: 0, scale: 1, rotate: theme === 'kawaii' ? (index - 3) * 3 : 0 }
              },
              { 
                hidden: { opacity: 0, y: 50, x: -100, scale: 0.9, rotate: -5 }, 
                visible: { opacity: 1, y: 0, x: 0, scale: 1, rotate: theme === 'kawaii' ? (index - 3) * 3 : 0 }
              },
              { 
                hidden: { opacity: 0, y: -60, x: 80, scale: 0.8, rotate: 12 }, 
                visible: { opacity: 1, y: 0, x: 0, scale: 1, rotate: theme === 'kawaii' ? (index - 3) * 3 : 0 }
              },
            ][index % 4];
            
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
                  height: sizes[index].w.includes('md:w-') ? 'auto' : undefined, // Don't override height with auto
                  aspectRatio: '1/1'
                }}
                variants={entranceVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                {/* Smooth parallax effect on hover */}
                <HoverEffect
                  scale={1.1}
                  glow={true}
                  rotate={theme === 'kawaii' ? (index % 2 === 0 ? 2 : -2) : 0}
                  glowColor={theme === 'kawaii' 
                    ? 'rgba(236, 72, 153, 0.5)' 
                    : 'rgba(109, 40, 217, 0.25)'
                  }
                  className="w-full h-full"
                >
                  {/* SmoothParallax for subtle movement on scroll */}
                  <SmoothParallax
                    speed={parallaxConfig.speed}
                    offset={20}
                    direction={index % 2 === 0 ? "vertical" : "horizontal"}
                    springConfig={parallaxConfig.springConfig}
                    className="w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '200px' }}>
                        <Image
                          src={img}
                          alt={`Portfolio image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 176px, 208px"
                          priority={index < 4} // Prioritize loading the first few images
                        />
                      </div>
                      
                      {theme === 'kawaii' && (
                        <motion.div 
                          className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs px-2 py-1 rounded-full transform rotate-12 font-medium shadow-md"
                          initial={{ scale: 0 }}
                          animate={{ 
                            scale: 1, 
                            transition: {
                              type: "spring",
                              stiffness: 500,
                              damping: 15,
                              delay: 0.3 + (index * 0.1)
                            }
                          }}
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 20,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 10
                            }
                          }}
                        >
                          {['✨ Cute!', '💕 Kawaii!', '🌸 Love it!', '😍 Amazing!', '🔥 Hot!', '💫 Wow!', '✌️ Cool!', '💝 Perfect!'][index]}
                        </motion.div>
                      )}
                    </div>
                  </SmoothParallax>
                </HoverEffect>
              </motion.div>
            );
          })}
          
          {/* Enhanced decorative elements for kawaii mode */}
          {theme === 'kawaii' && (
            <>
              {[...Array(12)].map((_, i) => {
                // Create different animation patterns for decorations
                const animationTypes = [
                  {
                    // Twinkling stars
                    element: '✨',
                    size: 'text-3xl',
                    animateProps: {
                      opacity: 0.5,
                      scale: 1.5,
                      filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.6))'
                    },
                    transition: {
                      opacity: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.5 + Math.random()
                      },
                      scale: {
                        repeat: Infinity,
                        repeatType: "reverse", 
                        duration: 2 + Math.random()
                      },
                      filter: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                      }
                    }
                  },
                  {
                    // Floating hearts
                    element: '💖',
                    size: 'text-2xl',
                    animateProps: {
                      y: -15,
                      opacity: 1,
                      filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.4))',
                      rotate: 5
                    },
                    transition: {
                      y: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2 + Math.random() * 1.5
                      },
                      opacity: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                      },
                      filter: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2.5
                      },
                      rotate: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                      }
                    }
                  },
                  {
                    // Spinning flowers
                    element: '🌸',
                    size: 'text-2xl',
                    animateProps: {
                      rotate: 180,
                      scale: 1.2,
                      opacity: 1
                    },
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 5 + Math.random() * 1.5,
                        ease: "linear"
                      },
                      scale: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2.5
                      },
                      opacity: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2.5
                      }
                    }
                  }
                ][i % 3];
                
                return (
                  <motion.div
                    key={`deco-${i}`}
                    className={`absolute ${animationTypes.size} pointer-events-none`}
                    style={{ 
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0.8,
                      rotate: 0,
                      y: 0,
                      filter: 'drop-shadow(0 0 0px rgba(236, 72, 153, 0))'
                    }}
                    animate={animationTypes.animateProps}
                    transition={{
                      delay: i * 0.4,
                      ...animationTypes.transition
                    }}
                  >
                    {animationTypes.element}
                  </motion.div>
                );
              })}
              
              {/* Simplify gradient orbs */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute rounded-full opacity-20 pointer-events-none blur-3xl"
                  style={{
                    background: i === 0 
                      ? 'radial-gradient(circle, rgba(244,114,182,1) 0%, rgba(236,72,153,0) 70%)' 
                      : i === 1
                        ? 'radial-gradient(circle, rgba(168,85,247,1) 0%, rgba(168,85,247,0) 70%)'
                        : 'radial-gradient(circle, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0) 70%)',
                    width: `${200 + i * 50}px`,
                    height: `${200 + i * 50}px`,
                    left: i === 0 ? '-20%' : i === 1 ? '50%' : '120%',
                    top: i === 0 ? '20%' : i === 1 ? '70%' : '30%',
                  }}
                  animate={{
                    x: i === 0 ? 30 : i === 1 ? -30 : -30,
                    y: i === 0 ? 20 : i === 1 ? -20 : 20,
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 15 + i * 5,
                      ease: "easeInOut"
                    },
                    y: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 20 + i * 3,
                      ease: "easeInOut"
                    }
                  }}
                />
              ))}
            </>
          )}
        </div>
        
        <SlideIntoView
          direction="up"
          delay={0.6}
          className="text-center mt-10"
        >
          <HoverEffect
            scale={1.05}
            glow={true}
            glowColor={theme === 'kawaii' 
              ? 'rgba(236, 72, 153, 0.4)' 
              : 'rgba(109, 40, 217, 0.2)'
            }
          >
            <a
              href="/portfolio"
              className={`inline-block px-6 py-3 rounded-full text-lg font-medium ${
                theme === 'kawaii' 
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600' 
                  : 'bg-violet-700 text-white hover:bg-violet-800'
              }`}
            >
              <motion.span 
                className="inline-block"
                animate={{ 
                  x: 5
                }}
                transition={{ 
                  x: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }
                }}
              >
                {theme === 'kawaii' ? '✨ See Full Portfolio' : 'View Full Portfolio'}
              </motion.span>
              <motion.span 
                className="inline-block ml-1"
                animate={{ 
                  x: 3
                }}
                transition={{ 
                  x: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    delay: 0.2
                  }
                }}
              >
                {theme === 'kawaii' ? '✨' : '→'}
              </motion.span>
            </a>
          </HoverEffect>
        </SlideIntoView>
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
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        {/* Background animated elements for kawaii theme */}
        {theme === 'kawaii' && (
          <>
            <motion.div
              className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-pink-200/40 to-purple-200/40 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-200/40 to-pink-200/40 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </>
        )}

        <SlideIntoView
          direction="up"
          staggerChildren={true}
          staggerDelay={0.08}
        >
          <motion.h2 
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              theme === 'kawaii' 
                ? 'text-pink-500' 
                : 'text-violet-700'
            }`}
            whileInView={{
              textShadow: theme === 'kawaii' 
                ? ['0 0 0px rgba(236, 72, 153, 0)', '0 0 15px rgba(236, 72, 153, 0.4)', '0 0 0px rgba(236, 72, 153, 0)'] 
                : ['none', 'none', 'none'],
              transition: {
                textShadow: {
                  repeat: 3,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }
            }}
          >
            {theme === 'kawaii' 
              ? '💖 Join My Journey! 💖' 
              : 'Ready to Connect?'}
          </motion.h2>
          
          <motion.p 
            className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
              theme === 'kawaii' 
                ? 'text-pink-700' 
                : 'text-gray-700'
            }`}
          >
            {theme === 'kawaii' 
              ? 'Subscribe for exclusive content, behind-the-scenes looks, and special announcements!' 
              : 'Follow my work and connect for collaboration opportunities and the latest updates'}
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <HoverEffect
              scale={1.05}
              glow={true}
              glowColor={theme === 'kawaii' 
                ? 'rgba(236, 72, 153, 0.5)' 
                : 'rgba(109, 40, 217, 0.3)'
              }
            >
              <motion.a
                href="/subscribe"
                className={`px-8 py-4 rounded-full text-lg font-medium ${
                  theme === 'kawaii' 
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600' 
                    : 'bg-violet-700 text-white hover:bg-violet-800'
                }`}
                whileHover={{
                  boxShadow: theme === 'kawaii'
                    ? '0 20px 25px -5px rgba(236, 72, 153, 0.5)'
                    : 'none',
                  transition: {
                    duration: 0.3
                  }
                }}
              >
                <motion.span className="relative inline-block">
                  {theme === 'kawaii' 
                    ? (
                      <>
                        <motion.span
                          className="absolute top-0 right-0 -mr-5 -mt-5 text-sm"
                          animate={{
                            rotate: 20,
                            scale: 1.1
                          }}
                          transition={{
                            rotate: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 1
                            },
                            scale: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 1.2
                            }
                          }}
                        >
                          ✨
                        </motion.span>
                        <span>Subscribe Now</span>
                        <motion.span
                          className="ml-1 inline-block"
                          animate={{
                            rotate: 20,
                            scale: 1.1
                          }}
                          transition={{
                            rotate: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 1,
                              delay: 0.5
                            },
                            scale: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 1.2,
                              delay: 0.5
                            }
                          }}
                        >
                          ✨
                        </motion.span>
                      </>
                    ) 
                    : 'Subscribe'
                  }
                </motion.span>
              </motion.a>
            </HoverEffect>
            
            <HoverEffect
              scale={1.05}
              glow={true}
              glowColor={theme === 'kawaii' 
                ? 'rgba(236, 72, 153, 0.3)' 
                : 'rgba(109, 40, 217, 0.15)'
              }
            >
              <a
                href="/contact"
                className={`px-8 py-4 rounded-full text-lg font-medium ${
                  theme === 'kawaii' 
                    ? 'border-2 border-pink-400 text-pink-500 hover:bg-pink-100' 
                    : 'border border-violet-700 text-violet-700 hover:bg-violet-50'
                }`}
              >
                {theme === 'kawaii' 
                  ? (
                    <>
                      <motion.span 
                        className="inline-block mr-1"
                        animate={{
                          y: -3
                        }}
                        transition={{
                          y: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        💌
                      </motion.span>
                      <span>Contact Me</span>
                      <motion.span 
                        className="inline-block ml-1"
                        animate={{
                          y: -3
                        }}
                        transition={{
                          y: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: 0.5
                          }
                        }}
                      >
                        💌
                      </motion.span>
                    </>
                  ) 
                  : 'Contact Me'
                }
              </a>
            </HoverEffect>
          </div>
          
          {theme === 'kawaii' && (
            <div className="mt-12">
              <p className="text-pink-600 font-medium mb-3">Find me on social media!</p>
              <div className="flex justify-center gap-6">
                {['Instagram', 'TikTok', 'Twitter', 'YouTube'].map((platform, i) => (
                  <HoverEffect
                    key={platform}
                    scale={1.15}
                    lift={8}
                    rotate={i % 2 === 0 ? 5 : -5}
                    glow={true}
                    glowColor={'rgba(236, 72, 153, 0.4)'}
                  >
                    <motion.a
                      href={`#${platform.toLowerCase()}`}
                      className="relative w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
                      whileHover={{
                        boxShadow: '0 0 20px 5px rgba(236, 72, 153, 0.3)',
                      }}
                    >
                      <motion.span
                        animate={{
                          scale: 1.1
                        }}
                        transition={{
                          scale: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 3,
                            ease: "easeInOut",
                            delay: i * 0.2
                          }
                        }}
                      >
                        {i === 0 ? '📸' : i === 1 ? '🎵' : i === 2 ? '🐦' : '📱'}
                      </motion.span>
                      
                      {/* Fix ripple effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                          opacity: 0.5,
                          scale: 1.8,
                          transition: {
                            opacity: { 
                              repeat: Infinity,
                              repeatType: "reverse", 
                              duration: 1.2 
                            },
                            scale: { 
                              repeat: Infinity,
                              repeatType: "reverse", 
                              duration: 1.2 
                            }
                          }
                        }}
                        style={{
                          background: `radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%)`
                        }}
                      />
                    </motion.a>
                  </HoverEffect>
                ))}
              </div>
            </div>
          )}
        </SlideIntoView>
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