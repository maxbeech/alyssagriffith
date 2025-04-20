'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function SubscribePage() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Theme-specific styling
  const styles = {
    bg: theme === 'kawaii' ? 'bg-gradient-to-b from-pink-50 to-purple-50' : 'bg-gray-50',
    heading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-400' : 'text-violet-500',
    card: theme === 'kawaii' 
      ? 'bg-white border-2 border-pink-200 shadow-pink-100' 
      : 'bg-white border border-gray-200 shadow-gray-100',
    input: theme === 'kawaii'
      ? 'border-pink-200 focus:border-pink-400 focus:ring-pink-400'
      : 'border-gray-300 focus:border-violet-400 focus:ring-violet-400',
    checkbox: theme === 'kawaii'
      ? 'text-pink-500 border-pink-300 focus:ring-pink-500'
      : 'text-violet-600 border-gray-300 focus:ring-violet-500',
    button: {
      primary: theme === 'kawaii'
        ? 'bg-pink-500 hover:bg-pink-600 focus:ring-pink-400'
        : 'bg-violet-700 hover:bg-violet-800 focus:ring-violet-500',
      secondary: theme === 'kawaii'
        ? 'bg-white border-2 border-pink-300 text-pink-500 hover:bg-pink-50'
        : 'bg-white border border-violet-200 text-violet-700 hover:bg-violet-50'
    },
    plan: {
      free: {
        active: theme === 'kawaii'
          ? 'border-pink-500 bg-pink-50'
          : 'border-violet-500 bg-violet-50',
        inactive: theme === 'kawaii'
          ? 'border-pink-200 hover:border-pink-300'
          : 'border-gray-200 hover:border-violet-300'
      },
      premium: {
        active: theme === 'kawaii'
          ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-purple-50'
          : 'border-violet-500 bg-violet-50',
        inactive: theme === 'kawaii'
          ? 'border-pink-200 hover:border-pink-300'
          : 'border-gray-200 hover:border-violet-300'
      }
    }
  };
  
  // Interests options
  const interestOptions = [
    { id: 'dance', label: 'Dance Videos & Tutorials' },
    { id: 'cosplay', label: 'Cosplay & Costume Design' },
    { id: 'lifestyle', label: 'Lifestyle & Behind the Scenes' },
    { id: 'beauty', label: 'Beauty & Makeup Tips' },
    { id: 'exclusive', label: 'Exclusive Content' }
  ];
  
  // Handle interest selection
  const handleInterestChange = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ email, name, selectedPlan, interests });
    setIsSubmitted(true);
  };
  
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${styles.heading}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'kawaii' ? '💌 Join My Newsletter 💌' : 'Subscribe to My Newsletter'}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {theme === 'kawaii' 
              ? 'Get exclusive updates, behind-the-scenes content, and special announcements delivered straight to your inbox! ✨' 
              : 'Stay up to date with my latest content, collaborations, and exclusive offers by subscribing to my newsletter.'}
          </motion.p>
        </div>
        
        {!isSubmitted ? (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side - Form */}
            <motion.div variants={itemVariants}>
              <div className={`${styles.card} p-8 rounded-xl`}>
                <h2 className={`text-2xl font-semibold mb-6 ${styles.heading}`}>
                  {theme === 'kawaii' ? '✨ Sign Up Now ✨' : 'Sign Up Now'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg border ${styles.input} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg border ${styles.input} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <p className="block text-sm font-medium text-gray-700 mb-3">
                      I'm Interested In (Select all that apply)
                    </p>
                    <div className="space-y-3">
                      {interestOptions.map((option) => (
                        <div key={option.id} className="flex items-start">
                          <input
                            id={`interest-${option.id}`}
                            name={`interest-${option.id}`}
                            type="checkbox"
                            className={`h-5 w-5 rounded ${styles.checkbox}`}
                            checked={interests.includes(option.id)}
                            onChange={() => handleInterestChange(option.id)}
                          />
                          <label
                            htmlFor={`interest-${option.id}`}
                            className="ml-3 text-sm text-gray-700"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="block text-sm font-medium text-gray-700 mb-3">
                      Choose Your Subscription Plan
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Free Plan */}
                      <div
                        className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedPlan === 'free' 
                            ? styles.plan.free.active 
                            : styles.plan.free.inactive
                        }`}
                        onClick={() => setSelectedPlan('free')}
                      >
                        <input
                          type="radio"
                          name="plan"
                          id="free-plan"
                          className="sr-only"
                          checked={selectedPlan === 'free'}
                          onChange={() => setSelectedPlan('free')}
                        />
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg">Free</span>
                            <span className="text-gray-500">$0/month</span>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-2 mb-2">
                            <li>• Monthly newsletter</li>
                            <li>• Public content updates</li>
                            <li>• Event announcements</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Premium Plan */}
                      <div
                        className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedPlan === 'premium' 
                            ? styles.plan.premium.active 
                            : styles.plan.premium.inactive
                        }`}
                        onClick={() => setSelectedPlan('premium')}
                      >
                        {theme === 'kawaii' && (
                          <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                            ✨ Popular ✨
                          </div>
                        )}
                        <input
                          type="radio"
                          name="plan"
                          id="premium-plan"
                          className="sr-only"
                          checked={selectedPlan === 'premium'}
                          onChange={() => setSelectedPlan('premium')}
                        />
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg">Premium</span>
                            <span className={`${theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'}`}>$5/month</span>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-2 mb-2">
                            <li>• Weekly exclusive updates</li>
                            <li>• Early access to content</li>
                            <li>• Behind-the-scenes footage</li>
                            <li>• Subscriber-only discounts</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium ${styles.button.primary} focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                  >
                    {theme === 'kawaii' ? '✨ Subscribe Now ✨' : 'Subscribe Now'}
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By subscribing, you agree to our <a href="/privacy-policy" className={`${theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'}`}>Privacy Policy</a> and <a href="/terms" className={`${theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'}`}>Terms of Service</a>.
                  </p>
                </form>
              </div>
            </motion.div>
            
            {/* Right Side - Benefits */}
            <motion.div variants={itemVariants}>
              <div className={`${styles.card} p-8 rounded-xl`}>
                <h2 className={`text-2xl font-semibold mb-6 ${styles.heading}`}>
                  {theme === 'kawaii' ? '💕 Subscriber Benefits 💕' : 'Subscriber Benefits'}
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Exclusive Content",
                      description: "Get access to content that isn't shared anywhere else, including behind-the-scenes footage and special announcements.",
                      icon: "📸"
                    },
                    {
                      title: "Early Access",
                      description: "Be the first to know about new projects, collaborations, and upcoming events before they're announced publicly.",
                      icon: "🔔"
                    },
                    {
                      title: "Special Offers",
                      description: "Premium subscribers receive exclusive discounts on merchandise, digital content, and more.",
                      icon: "🎁"
                    },
                    {
                      title: "Direct Connection",
                      description: "Premium subscribers can reply directly to newsletters and get priority responses.",
                      icon: "💬"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full ${
                        theme === 'kawaii' ? 'bg-pink-100 text-2xl' : 'bg-violet-100 text-xl'
                      }`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image 
                        src="/media/headshots/450460427_2443248029204276_1470086694821789809_n.jpg" 
                        alt="Alyssa Griffith" 
                        width={64} 
                        height={64} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        {theme === 'kawaii' 
                          ? '"I love sharing exclusive content with my subscribers. Join my newsletter family today!" - Alyssa ✨' 
                          : '"I personally curate each newsletter to deliver the most valuable content to my subscribers." - Alyssa'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className={`${styles.card} p-8 rounded-xl text-center max-w-2xl mx-auto`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              {theme === 'kawaii' ? (
                <span className="text-6xl">✉️</span>
              ) : (
                <div className={`inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            
            <h2 className={`text-2xl font-semibold mb-4 ${styles.heading}`}>
              {theme === 'kawaii' ? '🎉 Thank You for Subscribing! 🎉' : 'Thank You for Subscribing!'}
            </h2>
            
            <p className="text-gray-600 mb-6">
              {theme === 'kawaii' 
                ? 'You\'re officially part of my newsletter family! Look out for cute and exciting updates in your inbox soon! ✨' 
                : 'Your subscription has been confirmed. You\'ll start receiving newsletters according to your selected preferences.'}
            </p>
            
            <div className="flex justify-center">
              <a
                href="/"
                className={`px-6 py-3 rounded-lg font-medium ${styles.button.secondary}`}
              >
                {theme === 'kawaii' ? '🏠 Return Home 🏠' : 'Return to Home'}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
} 