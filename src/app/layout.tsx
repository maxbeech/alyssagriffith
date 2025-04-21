import type { Metadata } from 'next'
import { Outfit, Quicksand } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const quicksand = Quicksand({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-quicksand' 
})

export const metadata: Metadata = {
  title: 'Alyssa Griffith | Digital Creator & Influencer',
  description: 'Alyssa Griffith is a digital creator and influencer known for her viral dance videos, cosplay content, and engaging lifestyle content across social media platforms.',
  keywords: 'Alyssa Griffith, TikTok dancer, cosplay creator, digital influencer, content creator, dance transitions, kawaii cosplay',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alyssagriffith.com',
    title: 'Alyssa Griffith | Digital Creator & Influencer',
    description: 'Alyssa Griffith is a digital creator and influencer known for her viral dance videos, cosplay content, and engaging lifestyle content.',
    siteName: 'Alyssa Griffith',
    images: [
      {
        url: '/media/logo-icon_and_text.png',
        width: 1200,
        height: 630,
        alt: 'Alyssa Griffith',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alyssa Griffith | Digital Creator & Influencer',
    description: 'Alyssa Griffith is a digital creator and influencer known for her viral dance videos, cosplay content, and engaging lifestyle content.',
    images: ['/media/logo-icon_and_text.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 