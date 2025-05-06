import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { Separator } from '../ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

// Contact Section
const ContactSection = () => {
    return (
      <motion.section
        id="contact"
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <motion.h2 className="text-3xl font-bold mb-2">Contact Us</motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto">Get in touch with our administration</motion.p>
            <Separator className="my-4 mx-auto w-20 bg-blue-500" />
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft}>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p>(123) 456-7890</p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>303343@deped.gov.ph</p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p>Barangay Dist III. National Road</p>
                    </div>
                  </motion.div>
  
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <path d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">School Hours</h4>
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
  
            <motion.div variants={fadeInRight}>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="flex flex-col gap-1.5"
                        variants={fadeInUp}
                        custom={0}
                      >
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input id="name" className="w-full p-2 border rounded-md" placeholder="Your Name" />
                      </motion.div>
                      <motion.div
                        className="flex flex-col gap-1.5"
                        variants={fadeInUp}
                        custom={1}
                      >
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
                      </motion.div>
                    </div>
                    <motion.div
                      className="flex flex-col gap-1.5"
                      variants={fadeInUp}
                      custom={2}
                    >
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" className="w-full p-2 border rounded-md" placeholder="Subject" />
                    </motion.div>
                    <motion.div
                      className="flex flex-col gap-1.5"
                      variants={fadeInUp}
                      custom={3}
                    >
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" rows={4} className="w-full p-2 border rounded-md" placeholder="Your Message"></Textarea>
                    </motion.div>
                    <motion.div
                      variants={fadeInUp}
                      custom={4}
                      whileHover={hoverScale}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white">Send Message</Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    )
  }

  export default ContactSection;