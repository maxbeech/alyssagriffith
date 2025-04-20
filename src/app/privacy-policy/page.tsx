'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/layout/ThemeProvider';

export default function PrivacyPolicyPage() {
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
      title: "Introduction",
      content: "This Privacy Policy explains how Alyssa Griffith ('we', 'us', or 'our') collects, uses, and discloses your personal information when you visit our website alyssagriffith.com (the 'Website'), interact with us, or use our services. We respect your privacy and are committed to protecting your personal information."
    },
    {
      title: "Information We Collect",
      content: "We may collect personal information that you provide directly to us, such as your name, email address, postal address, phone number, and any other information you choose to provide. We may also automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to process your requests, prevent fraudulent transactions, and to communicate with you about products, services, promotions, and events. We may also use your information to personalize your experience and to deliver content relevant to your interests."
    },
    {
      title: "Sharing Your Information",
      content: "We may share your personal information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service. We may also share your information if required by law or if we believe that such action is necessary to comply with the law or protect our rights."
    },
    {
      title: "Your Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the personal information we have about you. You can opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you transactional or relationship messages, such as emails about your account or our ongoing business relations."
    },
    {
      title: "Cookies and Similar Technologies",
      content: "We use cookies and similar tracking technologies to track the activity on our Website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Website."
    },
    {
      title: "Data Security",
      content: "We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure and we cannot guarantee the security of your personal information."
    },
    {
      title: "Children's Privacy",
      content: "Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date at the top of this page. You are advised to review this Privacy Policy periodically for any changes."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us at privacy@alyssagriffith.com"
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
            Privacy Policy
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
                For any questions or concerns about your privacy, please{' '}
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