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
    { name: 'Home', href: '/' },
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
    { name: 'Home', href: '/' },
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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/media/logo-icon_only.png"
                alt="Alyssa Griffith Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${styles.logo}`}>
                  Alyssa Griffith
                </span>
                <span className={`text-xs font-medium transition-colors duration-300 ${styles.subLogo}`}>
                  {theme === 'portfolio' ? 'Digital Creator & Influencer' : 'Cosplay & Dance✨'}
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item: NavigationItem) => (
              item.children && item.children.length > 0 ? (
                <Popover key={item.name} className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`px-3 py-3 text-sm font-medium rounded-md inline-flex items-center transition-all duration-300 hover:scale-105 focus:outline-none ${
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
                  className={`px-3 py-3 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                    pathname === item.href
                      ? styles.link.active
                      : styles.link.inactive
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Theme Toggle Button */}
            <div className="hidden md:block ml-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'portfolio' 
                    ? 'bg-violet-100 text-violet-700 hover:bg-violet-200' 
                    : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                }`}
                variants={toggleVariants}
                animate={theme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <motion.span variants={toggleIconVariants} animate={theme}>
                  {theme === 'portfolio' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </motion.span>
              </motion.button>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className={`ml-2 inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 ${styles.cta}`}
            >
              {theme === 'portfolio' ? 'Work With Me' : 'Subscribe'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <motion.button
              onClick={toggleTheme}
              className={`mr-4 p-2 rounded-full transition-colors duration-300 ${
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-pink-500">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                )}
              </motion.span>
            </motion.button>

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
                                    : theme === 'portfolio' ? 'text-gray-700 hover:bg-gray-50' : 'text-pink-700 hover:bg-pink-50'
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