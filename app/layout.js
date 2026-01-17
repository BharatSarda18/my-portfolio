import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] ,display:'swap'})

export const metadata = {
  title: "Bharat Sarda | Full Stack Developer",
  description: "I'm Bharat Sarda, a passionate Full Stack Developer specializing in building modern web applications using React, NestJS, and MongoDB. Explore my projects, skills, and professional journey.",
  keywords: ["Bharat Sarda", "Full Stack Developer", "React Developer", "NestJS", "MongoDB", "Portfolio"],
  manifest: "/manifest.json",
  themeColor: "#2563eb",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bharat Sarda",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Bharat Sarda Portfolio",
    title: "Bharat Sarda | Full Stack Developer",
    description: "I'm Bharat Sarda, a passionate Full Stack Developer specializing in building modern web applications using React, NestJS, and MongoDB.",
  },
  twitter: {
    card: "summary",
    title: "Bharat Sarda | Full Stack Developer",
    description: "I'm Bharat Sarda, a passionate Full Stack Developer specializing in building modern web applications using React, NestJS, and MongoDB.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
