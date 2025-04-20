'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function BrandWorkPage() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Theme-specific styling
  const styles = {
    bg: theme === 'portfolio' ? 'bg-white' : 'bg-pink-50',
    heading: theme === 'portfolio' ? 'text-violet-700' : 'text-pink-500',
    subheading: theme === 'portfolio' ? 'text-violet-500' : 'text-pink-400',
    card: theme === 'portfolio' 
      ? 'bg-white border-gray-200 shadow-gray-100' 
      : 'bg-white border-pink-200 shadow-pink-100',
    category: {
      active: theme === 'portfolio'
        ? 'bg-violet-700 text-white'
        : 'bg-pink-500 text-white',
      inactive: theme === 'portfolio'
        ? 'bg-white text-violet-700 border-violet-200 hover:bg-violet-50'
        : 'bg-white text-pink-500 border-pink-300 hover:bg-pink-50'
    }
  };
  
  // Brand work categories
  const categories = [
    { id: 'all', name: 'All Campaigns' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'tech', name: 'Tech' }
  ];
  
  // Brand work portfolio items
  const brandProjects = [
    {
      id: 1,
      title: "Summer Collection Campaign",
      brand: "StyleCo Apparel",
      category: "fashion",
      image: "/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg",
      description: "Led the social media campaign for StyleCo's summer collection, featuring dance transitions and styling tips."
    },
    {
      id: 2,
      title: "Skincare Product Launch",
      brand: "Luminous Beauty",
      category: "beauty",
      image: "/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg",
      description: "Created a series of beauty tutorials and skincare routines showcasing the new product line."
    },
    {
      id: 3,
      title: "Fitness Challenge",
      brand: "PowerFit Athletics",
      category: "lifestyle",
      image: "/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg",
      description: "Hosted a 30-day dance fitness challenge in partnership with PowerFit Athletics."
    },
    {
      id: 4,
      title: "Smartphone Camera Feature",
      brand: "TechNow Devices",
      category: "tech",
      image: "/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg",
      description: "Showcased the video capabilities of the new TechNow smartphone through creative dance content."
    },
    {
      id: 5,
      title: "Holiday Lookbook",
      brand: "Chic Boutique",
      category: "fashion",
      image: "/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg",
      description: "Created and modeled for a holiday lookbook featuring trending winter styles and accessories."
    },
    {
      id: 6,
      title: "Makeup Tutorial Series",
      brand: "Glam Cosmetics",
      category: "beauty",
      image: "/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg",
      description: "Produced a series of tutorial videos showcasing makeup looks using Glam's new palette."
    },
    {
      id: 7,
      title: "Wellness Retreat Coverage",
      brand: "ZenLife Wellness",
      category: "lifestyle",
      image: "/media/social_post_examples_images/453674613_1200304997971720_4719456939149057248_n.jpg",
      description: "Documented my experience at ZenLife's wellness retreat through vlogs and social content."
    },
    {
      id: 8,
      title: "Wireless Earbuds Promotion",
      brand: "SoundCore Audio",
      category: "tech",
      image: "/media/social_post_examples_images/454639965_819646490336570_3911857521876050171_n.jpg",
      description: "Created dance content highlighting the sound quality and wireless freedom of SoundCore earbuds."
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? brandProjects 
    : brandProjects.filter(project => project.category === activeCategory);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <main className={`${styles.bg} pt-24 min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${styles.heading}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Brand Collaborations
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'portfolio' 
              ? 'Explore my professional partnerships and brand campaigns across various industries.' 
              : 'Check out some of the amazing brands I\'ve worked with on fun and creative campaigns! ✨'}
          </motion.p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === category.id 
                  ? styles.category.active
                  : styles.category.inactive
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-xl overflow-hidden border shadow ${styles.card} hover:shadow-lg transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.brand}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className={`text-sm ${theme === 'portfolio' ? 'text-violet-500' : 'text-pink-500'} font-medium`}>
                      {project.brand}
                    </p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    theme === 'portfolio' 
                      ? 'bg-violet-100 text-violet-700' 
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <button 
                  className={`text-sm font-medium ${
                    theme === 'portfolio' 
                      ? 'text-violet-700 hover:text-violet-900' 
                      : 'text-pink-500 hover:text-pink-700'
                  }`}
                >
                  {theme === 'portfolio' ? 'View Case Study →' : 'See More Details →'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Collaboration CTA */}
        <motion.div
          className={`mt-24 p-8 rounded-2xl text-center ${
            theme === 'portfolio' 
              ? 'bg-violet-50 border border-violet-100' 
              : 'bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200'
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${styles.heading}`}>
            {theme === 'portfolio' ? 'Interested in Working Together?' : '✨ Let\'s Create Something Amazing! ✨'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {theme === 'portfolio'
              ? 'I partner with brands that align with my values and resonate with my audience. Let\'s discuss how we can create authentic content together.'
              : 'I love collaborating with brands that share my passion for creativity and fun! Reach out to see how we can work together!'}
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className={`px-6 py-3 rounded-lg font-medium text-white ${
                theme === 'portfolio' ? 'bg-violet-700 hover:bg-violet-800' : 'bg-pink-500 hover:bg-pink-600'
              }`}
            >
              {theme === 'portfolio' ? 'Contact for Collaborations' : '💌 Get in Touch 💌'}
            </Link>
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${styles.heading}`}>
            {theme === 'portfolio' ? 'Client Testimonials' : '💬 What Brands Say About Me 💬'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "Alyssa brought incredible energy and authenticity to our campaign. Her content outperformed our expectations by 300%.",
                author: "Jessica Chen",
                company: "Marketing Director, StyleCo Apparel",
                image: "/media/headshots/426606943_284228201348281_3962305712823699371_n.jpg"
              },
              {
                quote: "Working with Alyssa was seamless from concept to execution. Her creative input elevated our product launch significantly.",
                author: "Michael Davis",
                company: "Brand Manager, TechNow Devices",
                image: "/media/headshots/473446541_977202787649276_3226659530043287360_n.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-xl ${styles.card} border shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 