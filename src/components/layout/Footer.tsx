'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FaFacebookF, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const footerAnimationDelayed = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  });

  // Social media links
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/alyssagriffith',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@alyssagriffith',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    { 
      name: 'OnlyFans', 
      url: 'https://onlyfans.com/alyssagriffith',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm-1.286-6.57c-.347.024-.681.052-1.01.052-1.924 0-3.525-.998-3.525-3.627 0-2.827 1.723-4.333 4.194-4.333 2.332 0 3.83 1.423 3.83 3.828 0 2.176-1.068 3.309-2.756 3.309-.813 0-1.148-.391-1.177-.897h-.028c-.347.596-.898.897-1.528.897zm1.262-5.345c-.479 0-.796.389-.811 1.027h1.55c-.014-.638-.32-1.027-.739-1.027zm1.629 2.398h-3.382c.072.569.306.838.695.838.362 0 .594-.185.666-.48h1.905c-.188 1.077-1.244 1.77-2.558 1.77-1.514 0-2.64-.86-2.64-2.627 0-1.78 1.139-2.654 2.686-2.654 1.543 0 2.656.911 2.656 2.638-.001.183-.012.35-.028.515z"/>
        </svg>
      )
    },
    { 
      name: 'Twitch', 
      url: 'https://www.twitch.tv/alyssagriffith',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fillRule="evenodd" clipRule="evenodd"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/alyssagriffith',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  // Footer navigation links
  const portfolioNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const kawaiiNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Cosplay', href: '/cosplay' },
    { name: 'Dance', href: '/dance' },
    { name: 'Behind the Scenes', href: '/bts' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  const footerNavigation = theme === 'portfolio' ? portfolioNavigation : kawaiiNavigation;

  // Legal links
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  // Decide on styling based on theme
  const portfolioClasses = {
    background: 'bg-slate-900',
    text: 'text-white',
    heading: 'text-white',
    link: 'text-gray-400 hover:text-white transition-colors duration-300',
    socialIcon: 'text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110',
    border: 'border-gray-800'
  };

  const kawaiiClasses = {
    background: 'bg-pink-100',
    text: 'text-pink-800',
    heading: 'text-pink-600',
    link: 'text-pink-600 hover:text-pink-800 transition-colors duration-300',
    socialIcon: 'text-pink-500 hover:text-pink-700 transition-colors duration-300 hover:scale-110',
    border: 'border-pink-200'
  };

  const classes = theme === 'portfolio' ? portfolioClasses : kawaiiClasses;

  return (
    <footer className={`${classes.background} ${classes.text}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/media/logo-icon_only.png"
              alt="Alyssa Griffith Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="ml-3">
              <h2 className={`text-xl font-bold ${classes.heading}`}>Alyssa Griffith</h2>
              <p className={`text-sm ${theme === 'portfolio' ? 'text-gray-400' : 'text-pink-500'}`}>
                Digital Creator & Influencer
              </p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label={social.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${classes.heading}`}>About</h3>
            <p className={theme === 'portfolio' ? 'text-gray-400' : 'text-pink-700'}>
              {theme === 'portfolio' 
                ? 'Alyssa Griffith is a digital creator and influencer known for her viral dance videos, creative content, and engaging lifestyle posts across social media platforms.'
                : 'Alyssa-chan creates kawaii content, cute cosplays, and high-energy dance videos! Join the fun and become part of my community~! ✨🎀'}
            </p>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${classes.heading}`}>Quick Links</h3>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={classes.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${classes.heading}`}>Contact</h3>
            <p className={theme === 'portfolio' ? 'text-gray-400' : 'text-pink-700'}>
              For business inquiries:
              <br />
              <a href="mailto:business@alyssagriffith.com" className={`font-medium ${classes.heading}`}>
                business@alyssagriffith.com
              </a>
            </p>
            <p className={`mt-4 ${theme === 'portfolio' ? 'text-gray-400' : 'text-pink-700'}`}>
              For fan mail:
              <br />
              <a href="mailto:fans@alyssagriffith.com" className={`font-medium ${classes.heading}`}>
                fans@alyssagriffith.com
              </a>
            </p>
          </div>
        </div>
        
        <div className={`border-t ${classes.border} pt-8 flex flex-col md:flex-row justify-between text-sm`}>
          <p>&copy; {currentYear} Alyssa Griffith. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className={classes.link}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 