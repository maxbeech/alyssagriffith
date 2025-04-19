'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function SitemapPage() {
  const { theme } = useTheme();
  const [showingThemeFor, setShowingThemeFor] = useState<'portfolio' | 'kawaii'>('portfolio');
  
  // Portfolio theme sitemap structure
  const portfolioSitemap = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Press', url: '/press' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { name: 'Portfolio Overview', url: '/portfolio' },
        { name: 'Brand Work', url: '/portfolio/brand-work' },
        { name: 'Dance', url: '/portfolio/dance' },
        { name: 'Cosplay', url: '/portfolio/cosplay' },
      ],
    },
    {
      title: 'Blog Categories',
      links: [
        { name: 'Dance Tips', url: '/blog/dance-tips' },
        { name: 'Cosplay DIY', url: '/blog/cosplay-diy' },
        { name: 'Brand News', url: '/blog/brand-news' },
        { name: 'Lifestyle', url: '/blog/lifestyle' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms of Service', url: '/terms' },
      ],
    },
  ];

  // Kawaii theme sitemap structure
  const kawaiiSitemap = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'Cosplay', url: '/cosplay' },
        { name: 'Dance', url: '/dance' },
        { name: 'Behind the Scenes', url: '/bts' },
        { name: 'Shop', url: '/shop' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Cosplay Collections',
      links: [
        { name: 'Anime Characters', url: '/cosplay/anime' },
        { name: 'Video Game Characters', url: '/cosplay/games' },
        { name: 'Original Characters', url: '/cosplay/original' },
      ],
    },
    {
      title: 'Shop Categories',
      links: [
        { name: 'Prints', url: '/shop/prints' },
        { name: 'Merchandise', url: '/shop/merch' },
        { name: 'Digital Content', url: '/shop/digital' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms of Service', url: '/terms' },
      ],
    },
  ];

  // Select the appropriate sitemap based on the theme toggle
  const sitemap = showingThemeFor === 'portfolio' ? portfolioSitemap : kawaiiSitemap;

  // Theme-specific styling
  const portfolioStyles = {
    background: 'bg-white',
    text: 'text-slate-900',
    title: 'text-violet-600',
    subtitle: 'text-slate-700',
    categoryTitle: 'text-slate-800 border-slate-200',
    link: 'text-slate-600 hover:text-violet-700',
    toggleTheme: {
      active: 'bg-violet-100 text-violet-700',
      inactive: 'bg-slate-100 text-slate-500 hover:bg-slate-200'
    }
  };

  const kawaiiStyles = {
    background: 'bg-pink-50',
    text: 'text-pink-900',
    title: 'text-pink-600',
    subtitle: 'text-pink-700',
    categoryTitle: 'text-pink-800 border-pink-200',
    link: 'text-pink-700 hover:text-pink-500',
    toggleTheme: {
      active: 'bg-pink-200 text-pink-700',
      inactive: 'bg-slate-100 text-slate-500 hover:bg-slate-200'
    }
  };

  const styles = theme === 'portfolio' ? portfolioStyles : kawaiiStyles;

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <div className={`${styles.background} min-h-screen pt-28 pb-16`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${styles.title}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Site Map
          </motion.h1>
          <motion.p 
            className={`text-lg ${styles.subtitle} max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'portfolio' 
              ? 'A complete overview of all pages available on AlyssaGriffith.com' 
              : 'All the kawaii pages you can explore on Alyssa-chan\'s website~! ✨'}
          </motion.p>

          {/* Toggle buttons to switch between sitemap views */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                showingThemeFor === 'portfolio' ? styles.toggleTheme.active : styles.toggleTheme.inactive
              }`}
              onClick={() => setShowingThemeFor('portfolio')}
            >
              Portfolio Theme Pages
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                showingThemeFor === 'kawaii' ? styles.toggleTheme.active : styles.toggleTheme.inactive
              }`}
              onClick={() => setShowingThemeFor('kawaii')}
            >
              Kawaii Theme Pages
            </button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sitemap.map((category, index) => (
            <motion.div 
              key={category.title} 
              className="mb-8"
              variants={itemVariants}
            >
              <h2 className={`text-xl font-semibold pb-3 mb-4 border-b ${styles.categoryTitle}`}>
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.url}>
                    <Link 
                      href={link.url}
                      className={`block transition-all duration-300 hover:translate-x-1 ${styles.link}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 