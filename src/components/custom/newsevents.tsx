
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '../ui/separator'

// News & Events Section
const NewsEventsSection = () => {
    return (
      <motion.section
        id="news"
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}>
  
            <motion.h2 className="text-3xl font-bold mb-2">News & Events</motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto">Stay updated with the latest happenings at our school</motion.p>
            <Separator className="my-4 mx-auto w-20 bg-blue-500" />
          </motion.div>
  
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {[
              {
                title: "Annual Science Fair 2023",
                date: "October 15, 2023",
                excerpt: "Students showcase innovative science projects and compete for top honors.",
                image: "/temp/download.jpg"
              },
              {
                title: "Sports Festival Kickoff",
                date: "November 5, 2023",
                excerpt: "A week-long celebration of athletics featuring various sports competitions."
                , image: "/temp/images.jpg"
              },
              {
                title: "Parent-Teacher Conference",
                date: "December 10, 2023",
                excerpt: "An opportunity for parents to discuss their child's academic progress."
                , image: "/temp/Parents-sit-down-for-a-parent-teacher-conference.jpg"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full">
                    <motion.div
                      className="h-48 bg-blue-100 flex items-center justify-center"
                      whileHover={scaleUp}
                    >
                      {news.image === "" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                      ) : (
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.div>
                    <CardHeader>
                      <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                      <CardTitle>{news.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{news.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button size={"sm"} className="bg-blue-500 hover:bg-blue-700 text-white">
                        Read more →
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
  
          <motion.div
            className="text-center mt-10"
            variants={fadeInUp}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button variant="default" className='bg-blue-500 hover:bg-blue-700 text-white'>View All News & Events</Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    )
  }

  export default NewsEventsSection;