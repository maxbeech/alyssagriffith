'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Contact form component
const ContactForm = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      });
      // Clear success message after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden ${
      theme === 'kawaii' 
        ? 'border-2 border-pink-200' 
        : 'border border-gray-200'
    }`}>
      <div className={`px-6 py-8 ${
        theme === 'kawaii' ? 'bg-pink-50' : 'bg-white'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '✉️ Send Me a Message! ✉️' : 'Get in Touch'}
        </h3>
        
        {formStatus === 'success' && (
          <motion.div 
            className={`mb-6 p-4 rounded-lg ${
              theme === 'kawaii' ? 'bg-green-100 text-green-700' : 'bg-green-100 text-green-800'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thank you for your message! I'll get back to you as soon as possible.
          </motion.div>
        )}
        
        {formStatus === 'error' && (
          <motion.div 
            className={`mb-6 p-4 rounded-lg ${
              theme === 'kawaii' ? 'bg-red-100 text-red-700' : 'bg-red-100 text-red-800'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Oops! Something went wrong. Please try again.
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label 
                htmlFor="name" 
                className={`block mb-2 text-sm font-medium ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'kawaii' 
                    ? 'border-pink-300 focus:border-pink-500 focus:ring-pink-500' 
                    : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
                } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className={`block mb-2 text-sm font-medium ${
                  theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === 'kawaii' 
                    ? 'border-pink-300 focus:border-pink-500 focus:ring-pink-500' 
                    : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
                } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                placeholder="john.doe@example.com"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label 
              htmlFor="inquiryType" 
              className={`block mb-2 text-sm font-medium ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
              }`}
            >
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formState.inquiryType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'kawaii' 
                  ? 'border-pink-300 focus:border-pink-500 focus:ring-pink-500' 
                  : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              required
            >
              <option value="general">General Inquiry</option>
              <option value="business">Business Collaboration</option>
              <option value="press">Press/Media</option>
              <option value="fan">Fan Message</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label 
              htmlFor="subject" 
              className={`block mb-2 text-sm font-medium ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'kawaii' 
                  ? 'border-pink-300 focus:border-pink-500 focus:ring-pink-500' 
                  : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              placeholder="What's this regarding?"
              required
            />
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="message" 
              className={`block mb-2 text-sm font-medium ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-700'
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === 'kawaii' 
                  ? 'border-pink-300 focus:border-pink-500 focus:ring-pink-500' 
                  : 'border-gray-300 focus:border-violet-500 focus:ring-violet-500'
              } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
              theme === 'kawaii'
                ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-200/50'
                : 'bg-violet-600 text-white hover:bg-violet-700'
            }`}
          >
            {theme === 'kawaii' ? '✨ Send Message ✨' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Contact information
const ContactInfo = () => {
  const { theme } = useTheme();
  
  const contactDetails = [
    {
      icon: <FaEnvelope className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
      label: 'Email',
      value: 'contact@alyssagriffith.com',
      link: 'mailto:contact@alyssagriffith.com',
    },
    {
      icon: <FaInstagram className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
      label: 'Instagram',
      value: '@alyssagriffith',
      link: 'https://www.instagram.com/alyssagriffith',
    },
    {
      icon: <FaTiktok className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
      label: 'TikTok',
      value: '@alyssagriffith',
      link: 'https://www.tiktok.com/@alyssagriffith',
    },
    {
      icon: <FaMapMarkerAlt className={theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600'} />,
      label: 'Location',
      value: 'Los Angeles, CA',
      link: null,
    },
  ];
  
  return (
    <div>
      <h3 className={`text-2xl font-bold mb-6 ${
        theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
      }`}>
        {theme === 'kawaii' ? '📱 Contact Info 📱' : 'Contact Information'}
      </h3>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              theme === 'kawaii' ? 'bg-pink-100' : 'bg-violet-100'
            }`}>
              {detail.icon}
            </div>
            
            <div>
              <p className={`text-sm font-medium ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-500'
              }`}>
                {detail.label}
              </p>
              {detail.link ? (
                <a 
                  href={detail.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-lg font-medium ${
                    theme === 'kawaii' 
                      ? 'text-pink-800 hover:text-pink-600' 
                      : 'text-gray-900 hover:text-violet-700'
                  } transition-colors`}
                >
                  {detail.value}
                </a>
              ) : (
                <p className={`text-lg font-medium ${
                  theme === 'kawaii' ? 'text-pink-800' : 'text-gray-900'
                }`}>
                  {detail.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-10">
        <h3 className={`text-2xl font-bold mb-6 ${
          theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '⏰ Business Hours ⏰' : 'Business Hours'}
        </h3>
        
        <div className={`p-6 rounded-xl ${
          theme === 'kawaii' 
            ? 'bg-pink-50 border-2 border-pink-200' 
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                Monday - Friday
              </span>
              <span className="font-medium">9:00 AM - 6:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                Saturday
              </span>
              <span className="font-medium">10:00 AM - 4:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                Sunday
              </span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
          
          <p className={`mt-4 text-sm ${
            theme === 'kawaii' ? 'text-pink-700' : 'text-gray-600'
          }`}>
            Response times may vary. Please allow 24-48 hours for a reply.
          </p>
        </div>
      </div>
    </div>
  );
};

// FAQ section
const FAQ = () => {
  const { theme } = useTheme();
  
  const faqs = [
    {
      question: 'How can I collaborate with you?',
      answer: 'I work with brands that align with my values and audience. Please use the contact form and select "Business Collaboration" to discuss partnership opportunities.',
    },
    {
      question: 'Do you offer dance tutorials?',
      answer: 'Yes! I regularly share dance tutorials on my social media platforms and provide more in-depth tutorials through my website and newsletter.',
    },
    {
      question: 'Can I request a specific cosplay?',
      answer: 'I\'m always open to suggestions! While I can\'t promise to create every requested cosplay, I do consider fan suggestions when planning future content.',
    },
    {
      question: 'Are you available for events or conventions?',
      answer: 'Yes, I attend select conventions and events throughout the year. For appearance requests, please use the contact form with details about your event.',
    },
  ];
  
  return (
    <section className={`py-16 ${
      theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-10 text-center ${
          theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700'
        }`}>
          {theme === 'kawaii' ? '❓ Frequently Asked Questions ❓' : 'Frequently Asked Questions'}
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${
                theme === 'kawaii' 
                  ? 'bg-white border-2 border-pink-200 shadow-md shadow-pink-100' 
                  : 'bg-white border border-gray-200 shadow-md'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'kawaii' ? 'text-pink-700' : 'text-gray-900'
              }`}>
                {faq.question}
              </h3>
              <p className={theme === 'kawaii' ? 'text-pink-800' : 'text-gray-700'}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Contact() {
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
              {theme === 'kawaii' ? '📞 Let\'s Connect! 📞' : 'Contact Me'}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              {theme === 'kawaii' 
                ? 'I\'d love to hear from you! Send me a message for collabs, questions, or just to say hi!' 
                : 'Get in touch for collaboration inquiries, press opportunities, or general questions'}
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
      
      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
} 