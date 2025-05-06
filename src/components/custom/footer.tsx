import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

// Footer Section
const Footer = () => {
    return (
      <motion.footer
        className="text-white py-12 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              src="/jst.png"
              alt="Footer Background"
              fill
              className="object-cover opacity-10"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/90 to-gray-950/95 dark:from-gray-900/90 dark:via-gray-900/95 dark:to-gray-950/98" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.h3 className="text-xl font-bold mb-4 flex items-center gap-1.5">
                <img src="/jstnhs-logo.png" alt="Logo" className="w-10 h-10" />
                JST National High School
              </motion.h3>
              <motion.p className="text-gray-400 dark:text-gray-300 mb-4">Empowering students to achieve academic excellence and personal growth since 1985.</motion.p>
              <motion.div
                className="flex space-x-4"
                variants={staggerContainer}
              >
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
  
            <motion.div variants={fadeInUp} custom={1}>
              <motion.h3 className="text-lg font-semibold mb-4">Quick Links</motion.h3>
              <motion.ul
                className="space-y-2"
                variants={staggerContainer}
              >
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About Us" },
                  { href: "#programs", label: "Programs" },
                  { href: "#faculty", label: "Faculty" },
                  { href: "#news", label: "News & Events" },
                  { href: "#contact", label: "Contact" }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInLeft}
                    custom={index}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
                      whileHover={{ x: 5, color: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
  
            <motion.div variants={fadeInUp} custom={2}>
              <motion.h3 className="text-lg font-semibold mb-4">Resources</motion.h3>
              <motion.ul
                className="space-y-2"
                variants={staggerContainer}
              >
                {[
                  { href: "#", label: "Student Portal" },
                  { href: "#", label: "Parent Portal" },
                  { href: "#", label: "Library" },
                  { href: "#", label: "Calendar" },
                  { href: "#", label: "Careers" },
                  { href: "#", label: "Alumni" }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInLeft}
                    custom={index}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white"
                      whileHover={{ x: 5, color: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
  
            <motion.div variants={fadeInUp} custom={3}>
              <motion.h3 className="text-lg font-semibold mb-4">Subscribe</motion.h3>
              <motion.p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</motion.p>
              <motion.div
                className="flex gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                <Input type="email" placeholder="Your Email" className="p-2 w-full rounded-l-md focus:outline-none" />
                <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                  <Button variant={"default"} className='bg-blue-500 hover:bg-blue-700 text-white'>Subscribe</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
  
          <motion.div variants={fadeInUp}>
            <Separator className="my-8 bg-gray-800 dark:bg-gray-700" />
          </motion.div>
  
          <motion.div
            className="text-center text-gray-500 dark:text-gray-400 text-sm"
            variants={fadeInUp}
            custom={4}
          >
            <motion.p>&copy; {new Date().getFullYear()} JST National High School. All rights reserved.</motion.p>
          </motion.div>
        </div>
      </motion.footer>
    )
  }

  export default Footer