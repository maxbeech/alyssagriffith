'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function TermsOfServicePage() {
  const { theme } = useTheme();
  
  // Theme-specific styling
  const styles = {
    bg: theme === 'kawaii' ? 'bg-pink-50' : 'bg-gray-50',
    heading: theme === 'kawaii' ? 'text-pink-600' : 'text-violet-700',
    subheading: theme === 'kawaii' ? 'text-pink-500' : 'text-violet-600',
    card: theme === 'kawaii' 
      ? 'bg-white border-pink-200 shadow-pink-100' 
      : 'bg-white border-gray-200',
    link: theme === 'kawaii' ? 'text-pink-500 hover:text-pink-700' : 'text-violet-700 hover:text-violet-900'
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

  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using the website alyssagriffith.com (the 'Website'), you agree to be bound by these Terms of Service (the 'Terms'). If you do not agree to all the terms and conditions of this agreement, you may not access the Website or use any services."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify or replace these Terms at any time. It is your responsibility to check the Terms periodically for changes. Your continued use of the Website following the posting of any changes to the Terms constitutes acceptance of those changes."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the Website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server."
    },
    {
      title: "User Accounts",
      content: "When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the Website and for any activities or actions under your password."
    },
    {
      title: "Intellectual Property",
      content: "The Website and its original content, features, and functionality are and will remain the exclusive property of Alyssa Griffith and her licensors. The Website is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Alyssa Griffith."
    },
    {
      title: "User-Generated Content",
      content: "By posting, uploading, or otherwise making available any content or submitting any materials to the Website, you grant us a non-exclusive, perpetual, irrevocable, royalty-free, fully paid, worldwide license to use, copy, modify, create derivative works from, distribute, publicly display and perform such content in connection with the services provided through the Website."
    },
    {
      title: "Links to Other Websites",
      content: "Our Website may contain links to third-party websites or services that are not owned or controlled by Alyssa Griffith. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Alyssa Griffith shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Website will immediately cease."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall Alyssa Griffith, nor her directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website."
    },
    {
      title: "Disclaimer",
      content: "Your use of the Website is at your sole risk. The Website is provided on an 'AS IS' and 'AS AVAILABLE' basis. The Website is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about these Terms, please contact us at terms@alyssagriffith.com"
    }
  ];

  return (
    <div className={`${styles.bg} pt-24 pb-16 min-h-screen`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl font-bold mb-4 ${styles.heading}`}>
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last Updated: April 28, 2024
          </p>
        </motion.div>
        
        <motion.div
          className={`bg-white rounded-xl shadow-sm overflow-hidden border ${
            theme === 'kawaii' ? 'border-pink-200' : 'border-gray-200'
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="p-6 sm:p-8">
            {sections.map((section, index) => (
              <motion.div 
                key={index} 
                className={`mb-8 ${index !== 0 ? 'pt-8 border-t border-gray-100' : ''}`}
                variants={itemVariants}
              >
                <h2 className={`text-xl font-semibold mb-4 ${styles.subheading}`}>
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
            
            <motion.div 
              className="mt-12 pt-6 border-t border-gray-100 text-center text-gray-600 text-sm"
              variants={itemVariants}
            >
              <p>
                By using our website, you confirm that you have read, understood, and agree to these Terms of Service. If you have any questions, please{' '}
                <a href="/contact" className={`font-medium ${styles.link}`}>
                  contact us
                </a>
                .
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 