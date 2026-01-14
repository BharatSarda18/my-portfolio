import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] ,display:'swap'})

export const metadata = {
  title: "Bharat Sarda | Full Stack Developer",
  description: "I'm Bharat Sarda, a passionate Full Stack Developer specializing in building modern web applications using React, NestJS, and MongoDB. Explore my projects, skills, and professional journey.",
  keywords: ["Bharat Sarda", "Full Stack Developer", "React Developer", "NestJS", "MongoDB", "Portfolio"],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
