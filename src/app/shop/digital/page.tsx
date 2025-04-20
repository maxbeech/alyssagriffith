'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';
import { FaShoppingCart, FaHeart, FaDownload, FaLock, FaPlay } from 'react-icons/fa';

export default function ShopDigital() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  // Use real images from the media folder
  const digitalItems = [
    {
      id: 1,
      name: 'Dance Tutorial Package',
      description: 'Complete tutorial series teaching my signature dance moves and choreography techniques',
      image: '/media/social_post_examples_images/449693276_405464155841619_4890705047996127555_n.jpg',
      price: 39.99,
      category: 'Tutorials',
      format: 'Video Series (MP4)',
      inStock: true,
      bestSeller: true,
      featured: true,
    },
    {
      id: 2,
      name: 'Cosplay Prop Creation Guide',
      description: 'Step-by-step guide to creating professional-looking cosplay props and accessories',
      image: '/media/social_post_examples_images/447485124_814782830599928_8633044856097844168_n.jpg',
      price: 24.99,
      category: 'Guides',
      format: 'PDF + Video Files',
      inStock: true,
      bestSeller: false,
      featured: false,
    },
    {
      id: 3,
      name: 'Exclusive Photoshoot Collection',
      description: 'High-resolution digital photos from my exclusive fantasy-themed photoshoot',
      image: '/media/headshots/456322981_1964378130671405_7252420836716404818_n.jpg',
      price: 19.99,
      category: 'Photos',
      format: 'Digital Images (JPG)',
      inStock: true,
      bestSeller: true,
      featured: false,
    },
    {
      id: 4,
      name: 'Makeup Transformation Course',
      description: 'Learn professional makeup techniques for cosplay and character transformations',
      image: '/media/social_post_examples_images/458284710_942743081204758_4893526817077071318_n.jpg',
      price: 34.99,
      category: 'Tutorials',
      format: 'Video Series (MP4)',
      inStock: true,
      bestSeller: false,
      featured: true,
    },
    {
      id: 5,
      name: 'Character Design Walkthrough',
      description: 'Watch my creative process for designing and bringing original characters to life',
      image: '/media/social_post_examples_images/460439528_1567662157166822_1758686213985836233_n.jpg',
      price: 17.99,
      category: 'Tutorials',
      format: 'Video + PDF Workbook',
      inStock: true,
      bestSeller: false,
      featured: false,
    },
    {
      id: 6,
      name: 'Kawaii Digital Sticker Pack',
      description: 'Collection of digital stickers featuring my kawaii characters and designs',
      image: '/media/social_post_examples_images/455245604_533683559091476_8697780699626447442_n.jpg',
      price: 9.99,
      category: 'Art',
      format: 'PNG (Transparent)',
      inStock: true,
      bestSeller: true,
      featured: false,
    },
    {
      id: 7,
      name: 'Dance Performance Background Music',
      description: 'Curated collection of copyright-free music perfect for dance performances',
      image: '/media/social_post_examples_images/413480406_268180242641239_910633806196981689_n.jpg',
      price: 14.99,
      category: 'Audio',
      format: 'MP3 Files',
      inStock: false,
      bestSeller: false,
      featured: false,
    },
    {
      id: 8,
      name: 'Content Creator Success Guide',
      description: 'Complete guide to building your brand as a cosplay and dance content creator',
      image: '/media/headshots/456384227_4730507360506675_4659362246313189324_n.jpg',
      price: 29.99,
      category: 'Guides',
      format: 'PDF eBook',
      inStock: true,
      bestSeller: false,
      featured: true,
    },
  ];

  const filters = ['All', 'Tutorials', 'Guides', 'Photos', 'Art', 'Audio'];
  
  const filteredItems = activeFilter === 'All' 
    ? digitalItems 
    : digitalItems.filter(item => item.category === activeFilter);

  // Featured items for showcase section
  const featuredItems = digitalItems.filter(item => item.featured);

  // Define theme-specific styling
  const styles = {
    background: theme === 'kawaii' ? 'bg-pink-50' : 'bg-white',
    heading: theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600',
    text: theme === 'kawaii' ? 'text-pink-900' : 'text-gray-800',
    lightText: theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600',
    card: theme === 'kawaii' ? 'bg-white border-2 border-pink-200 shadow-lg shadow-pink-100' : 'bg-white border border-gray-200 shadow-md',
    cardHover: theme === 'kawaii' ? 'hover:border-pink-300 hover:shadow-pink-200' : 'hover:border-violet-200',
    button: theme === 'kawaii' ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white',
    buttonOutline: theme === 'kawaii' ? 'border-2 border-pink-500 text-pink-500 hover:bg-pink-50' : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50',
    activeFilter: theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white',
    inactiveFilter: theme === 'kawaii' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    tag: theme === 'kawaii' ? 'bg-pink-100 text-pink-700' : 'bg-violet-100 text-violet-700',
    price: theme === 'kawaii' ? 'text-pink-600 font-bold' : 'text-violet-600 font-bold',
    banner: theme === 'kawaii' ? 'bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100' : 'bg-gradient-to-r from-violet-100 to-purple-50',
    divider: theme === 'kawaii' ? 'border-pink-200' : 'border-gray-200',
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
            {theme === 'kawaii' ? '💻 Digital Content 💻' : 'Digital Content'}
          </motion.h1>
          <motion.p 
            className={`text-lg max-w-3xl mx-auto ${styles.lightText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Instant download goodies to improve your cosplay, dance skills, and creativity! All digital items can be accessed immediately after purchase~' 
              : 'Premium digital content including tutorials, guides, and creative assets. All items available for instant download after purchase.'}
          </motion.p>
        </div>

        {/* Featured Content Showcase */}
        {featuredItems.length > 0 && (
          <motion.div 
            className={`mb-16 p-6 rounded-xl ${styles.banner}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className={`text-2xl font-bold mb-6 text-center ${styles.heading}`}>
              {theme === 'kawaii' ? '✨ Featured Content ✨' : 'Featured Digital Content'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`rounded-xl overflow-hidden ${styles.card} transition-all duration-300 hover:scale-[1.02] ${styles.cardHover}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                      <button className={`px-5 py-2.5 rounded-full font-medium ${styles.button} flex items-center`}>
                        <FaPlay className="mr-2" />
                        {theme === 'kawaii' ? 'Watch Preview' : 'Preview'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className={`text-xl font-bold mb-2 ${styles.subheading}`}>{item.name}</h3>
                    <p className={`text-sm mb-4 ${styles.text}`}>{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className={`text-lg ${styles.price}`}>${item.price}</span>
                      <button className={`px-4 py-2 rounded font-medium flex items-center ${styles.button}`}>
                        <FaShoppingCart className="mr-2" />
                        {theme === 'kawaii' ? 'Add to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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

        {/* Digital Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`rounded-xl overflow-hidden ${styles.card} transition-all duration-300 hover:scale-[1.02] ${styles.cardHover}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {item.bestSeller && (
                  <div className="absolute top-2 left-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      theme === 'kawaii' ? 'bg-pink-500 text-white' : 'bg-violet-600 text-white'
                    }`}>
                      {theme === 'kawaii' ? '✨ Best Seller' : 'Best Seller'}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <button className={`w-full py-2 rounded-full font-medium mb-2 ${styles.button} transition-all duration-300 flex items-center justify-center`}>
                      <FaDownload className="mr-2" />
                      Demo Preview
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-base font-bold line-clamp-1 ${styles.subheading}`}>{item.name}</h3>
                  <button className="text-red-400 hover:text-red-500 hover:scale-110 transition-transform">
                    <FaHeart />
                  </button>
                </div>
                
                <p className={`text-xs mb-3 line-clamp-2 ${styles.text}`}>
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-lg ${styles.price}`}>${item.price}</span>
                  
                  {item.inStock ? (
                    <button className={`px-3 py-1.5 rounded text-sm font-medium flex items-center ${styles.button} transition-all duration-300`}>
                      <FaShoppingCart className="mr-1.5 text-xs" />
                      Add to Cart
                    </button>
                  ) : (
                    <span className="px-3 py-1.5 rounded text-sm font-medium bg-gray-100 text-gray-500">
                      Out of Stock
                    </span>
                  )}
                </div>
                
                <div className="mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${styles.tag}`}>
                    {item.format}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Content Information */}
        <motion.div
          className={`mt-16 p-6 sm:p-8 rounded-xl ${theme === 'kawaii' ? 'bg-white border-2 border-pink-200' : 'bg-white border border-gray-200'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${styles.heading}`}>
            {theme === 'kawaii' ? '📱 How It Works 📱' : 'How Digital Content Works'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Purchase', 
                description: 'Choose your digital content and complete the checkout process',
                icon: <FaShoppingCart className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
              },
              { 
                title: 'Access', 
                description: 'Receive immediate access to your purchased content via email',
                icon: <FaLock className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
              },
              { 
                title: 'Download', 
                description: 'Download and enjoy your content on any of your devices',
                icon: <FaDownload className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className={`p-5 rounded-lg ${styles.card}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${
                  theme === 'kawaii' ? 'bg-pink-100' : 'bg-violet-100'
                }`}>
                  {step.icon}
                </div>
                <h4 className={`text-lg font-bold mb-2 ${styles.subheading}`}>{step.title}</h4>
                <p className={`text-sm ${styles.text}`}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bundle Offer */}
        <motion.div
          className={`mt-12 p-6 rounded-xl text-center ${styles.banner}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-xl font-bold mb-3 ${styles.heading}`}>
            {theme === 'kawaii' ? '🎁 Special Bundle Offer! 🎁' : 'Special Bundle Offer'}
          </h3>
          <p className={`mb-5 max-w-2xl mx-auto ${styles.text}`}>
            {theme === 'kawaii' 
              ? 'Get all my tutorials and guides in one mega bundle and save 40%! Limited time offer~' 
              : 'Purchase the complete digital content collection and save 40%. Limited time offer.'}
          </p>
          <Link 
            href="#bundle-offer"
            className={`inline-flex items-center px-5 py-2.5 rounded-full font-medium ${styles.button} transition-all duration-300`}
          >
            {theme === 'kawaii' ? 'View Bundle Details' : 'View Bundle Details'}
          </Link>
        </motion.div>
        
        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${
              theme === 'kawaii' ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'bg-violet-100 text-violet-700 hover:bg-violet-200'
            } transition-all duration-300`}
          >
            {theme === 'kawaii' ? '← Back to Shop' : 'Back to Shop'}
          </Link>
        </div>
      </div>
    </div>
  );
} 