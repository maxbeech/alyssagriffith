'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from './layout/ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Theme-specific navigation structure with dropdown menus
  const portfolioNavigation = [
    { name: 'About', href: '/about' },
    { 
      name: 'Portfolio', 
      href: '/portfolio',
      children: [
        { name: 'Brand Work', href: '/portfolio/brand-work' },
        { name: 'Dance', href: '/portfolio/dance' },
        { name: 'Cosplay', href: '/portfolio/cosplay' },
      ],
    },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const kawaiiNavigation = [
    { name: 'Cosplay', href: '/cosplay' },
    { name: 'Dance', href: '/dance' },
    { name: 'Behind the Scenes', href: '/bts' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  // Select navigation based on theme
  const navigation = theme === 'portfolio' ? portfolioNavigation : kawaiiNavigation;

  // Type definition for navigation items
  type NavigationItem = {
    name: string;
    href: string;
    children?: Array<{ name: string; href: string; }>;
  };

  // Social media links
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'Snapchat', 
      url: 'https://www.snapchat.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.36-.135-.553-.045-.195-.105-.42-.164-.575-1.889-.284-2.921-.703-3.146-1.273-.03-.074-.045-.149-.045-.224-.015-.239.165-.449.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.007-.593c-.105-1.636-.225-3.651.307-4.837C7.392 1.77 10.739.778 11.727.778l.419.015z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      )
    }
  ];

  // Theme-specific styling
  const portfolioStyles = {
    bg: isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent',
    logo: isScrolled ? 'text-slate-900' : 'text-white',
    subLogo: isScrolled ? 'text-slate-600' : 'text-slate-200',
    link: {
      active: isScrolled ? 'text-violet-700 bg-violet-50' : 'text-white bg-white/10 backdrop-blur-sm',
      inactive: isScrolled ? 'text-gray-700 hover:text-violet-700' : 'text-white hover:bg-white/10',
    },
    cta: 'text-white bg-violet-600 hover:bg-violet-700',
    mobileMenu: 'text-slate-700 bg-white',
    mobileMenuHeader: 'text-violet-700',
    toggleIcon: isScrolled ? 'text-violet-600' : 'text-white',
    social: isScrolled ? 'text-gray-500 hover:text-violet-600' : 'text-white hover:text-violet-200',
  };

  const kawaiiStyles = {
    bg: isScrolled ? 'bg-pink-50/95 backdrop-blur-md shadow-md' : 'bg-transparent',
    logo: isScrolled ? 'text-pink-600' : 'text-white',
    subLogo: isScrolled ? 'text-pink-400' : 'text-pink-200',
    link: {
      active: isScrolled ? 'text-pink-500 bg-pink-50' : 'text-white bg-white/10 backdrop-blur-sm',
      inactive: isScrolled ? 'text-pink-700 hover:text-pink-500' : 'text-white hover:bg-white/10',
    },
    cta: 'text-white bg-pink-400 hover:bg-pink-500',
    mobileMenu: 'text-pink-700 bg-pink-50',
    mobileMenuHeader: 'text-pink-500',
    toggleIcon: isScrolled ? 'text-pink-500' : 'text-white',
    social: isScrolled ? 'text-pink-400 hover:text-pink-600' : 'text-white hover:text-pink-200',
  };

  const styles = theme === 'portfolio' ? portfolioStyles : kawaiiStyles;

  // Theme toggle button animation
  const toggleVariants = {
    portfolio: { rotate: 0 },
    kawaii: { rotate: 360 },
  };
  
  const toggleIconVariants = {
    portfolio: { scale: 1 },
    kawaii: { scale: 1.2 },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${styles.bg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo and navigation in a more compact layout */}
        <div className="flex flex-col items-center">
          {/* Mobile controls visible only on small screens */}
          <div className="w-full flex justify-between lg:hidden mb-2">
            <div className="flex-1 flex justify-start">
              {/* Mobile theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'portfolio' 
                    ? 'bg-violet-100 hover:bg-violet-200'
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label="Toggle theme"
                variants={toggleVariants}
                animate={theme}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <motion.span 
                  variants={toggleIconVariants}
                  animate={theme}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'portfolio' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                </motion.span>
              </motion.button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${styles.toggleIcon}`}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
            
          {/* Logo centered on its own row */}
          <motion.div 
            className="flex-shrink-0 flex justify-center mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Image
                src="/media/logo-icon_only.png"
                alt="Alyssa Griffith Logo"
                width={30}
                height={30}
                className="w-7 h-7"
              />
            </Link>
          </motion.div>
          
          {/* Name centered on its own row */}
          <motion.div
            className="mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${styles.logo}`}>
                Alyssa Griffith
              </span>
            </Link>
          </motion.div>
          
          {/* Social icons centered on their own row */}
          <motion.div
            className="flex justify-center space-x-3 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${styles.social}`}
                aria-label={social.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon.props.children}
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="flex items-center justify-center space-x-2">
              {/* Theme toggle button on the left side of navigation row */}
              <motion.button
                onClick={toggleTheme}
                className={`relative px-5 py-2 mr-2 rounded-full overflow-hidden transition-colors shadow-sm
                  ${theme === 'portfolio' 
                    ? 'bg-violet-100 border border-violet-200' 
                    : 'bg-pink-100 border border-pink-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <div className="flex items-center space-x-2">
                  {theme === 'portfolio' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs font-medium text-violet-700">Pro Mode</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-xs font-medium text-pink-600">Kawaii Mode</span>
                    </>
                  )}
                </div>
              </motion.button>

              {navigation.map((item: NavigationItem) => (
                item.children && item.children.length > 0 ? (
                  <Popover key={item.name} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`px-3 py-2 text-sm font-medium rounded-md inline-flex items-center transition-all duration-300 hover:scale-105 focus:outline-none ${
                            pathname.startsWith(item.href)
                              ? styles.link.active
                              : styles.link.inactive
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 w-56 sm:px-0 z-10">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className={theme === 'portfolio' ? 'bg-white' : 'bg-pink-50'}>
                                {item.children && item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                                      pathname === child.href
                                        ? theme === 'portfolio' ? 'text-violet-700 bg-violet-50' : 'text-pink-600 bg-pink-100'
                                        : theme === 'portfolio' ? 'text-gray-700' : 'text-pink-700'
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                      pathname === item.href
                        ? styles.link.active
                        : styles.link.inactive
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${styles.cta}`}
              >
                {theme === 'portfolio' ? 'Work With Me' : 'Subscribe'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={`mobile-menu-container absolute right-0 top-0 h-full w-4/5 max-w-xs ${styles.mobileMenu}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <h2 className={`text-lg font-semibold ${styles.mobileMenuHeader}`}>Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4 py-6 overflow-y-auto h-[calc(100%-73px)]">
                <div className="flex flex-col space-y-1">
                  {navigation.map((item: NavigationItem) => (
                    <Fragment key={item.name}>
                      {item.children && item.children.length > 0 ? (
                        <>
                          <div className="px-4 py-2 text-base font-medium text-gray-500">
                            {item.name}
                          </div>
                          <div className="pl-4">
                            {item.children && item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block px-4 py-2 text-base font-medium rounded-md ${
                                  pathname === child.href
                                    ? theme === 'portfolio' ? 'text-violet-700 bg-violet-50' : 'text-pink-600 bg-pink-100'
                                    : theme === 'portfolio' ? 'text-gray-700' : 'text-pink-700'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`px-4 py-3 text-base font-medium rounded-md ${
                            pathname === item.href
                              ? theme === 'portfolio' ? 'text-violet-700 bg-violet-50' : 'text-pink-600 bg-pink-100'
                              : theme === 'portfolio' ? 'text-gray-700 hover:bg-gray-50' : 'text-pink-700 hover:bg-pink-50'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Fragment>
                  ))}

                  {/* Social Media Links - Mobile */}
                  <div className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      Follow me
                    </div>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${theme === 'portfolio' ? 'text-gray-600 hover:text-violet-600' : 'text-pink-500 hover:text-pink-700'}`}
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className={`w-full block text-center px-4 py-2 rounded-md text-base font-medium ${styles.cta}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {theme === 'portfolio' ? 'Work With Me' : 'Subscribe'}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 