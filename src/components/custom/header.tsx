import { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { ThemeToggle } from "../theme-toggle";
import { Sidebar } from "../sidebar";

// Header Component
const Header = () => {
    const navItems = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#programs', label: 'Programs' },
      { href: '#faculty', label: 'Faculty' },
      { href: '#news', label: 'News & Events' },
      { href: '#contact', label: 'Contact' },
    ];
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <>
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            {/* Logo + Title */}
            <motion.div variants={fadeInLeft} className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
              <img
                src="/jstnhs-logo.png"
                alt="JSTNHS"
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">JST National High School</span>
            </motion.div>
  
            {/* Desktop Navigation */}
            <motion.nav
              variants={staggerContainer}
              className="hidden md:flex items-center gap-6"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium hover:text-blue-500 transition duration-300 ease-in-out"
                  variants={fadeInUp}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div variants={fadeInUp}>
                <ThemeToggle />
              </motion.div>
            </motion.nav>
  
            {/* Sidebar Toggle Button */}
            <motion.div variants={fadeInRight} className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </motion.div>
          </div>
        </motion.header>
  
        {/* Sidebar Navigation */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          navItems={navItems}
        />
      </>
    )
  }

  export default Header