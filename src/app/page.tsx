"use client"

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { fadeIn } from '@/lib/animations'

const Header = dynamic(() => import('@/components/custom/header'))
const HeroSection = dynamic(() => import('@/components/custom/hero'))
const AboutSection = dynamic(() => import('@/components/custom/about'))
const ProgramsSection = dynamic(() => import('@/components/custom/programs'))
const FacultySection = dynamic(() => import('@/components/custom/faculty'))
const NewsEventsSection = dynamic(() => import('@/components/custom/newsevents'))
const ContactSection = dynamic(() => import('@/components/custom/contact'))
const Footer = dynamic(() => import('@/components/custom/footer'))

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="grid bg-background items-center justify-center h-lvh w-lvw">
          <img src="/preloader.gif" alt="Loading..." />
        </div>
      }
    >
      <motion.main
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Header />
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <FacultySection />
        <NewsEventsSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </Suspense>
  )
}
