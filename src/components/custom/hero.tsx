import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

// Hero Section
const HeroSection = () => {
    const plugin = useRef(
      Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    return (
      <motion.section
        id="home"
        className="py-20 md:py-28 relative overflow-hidden text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0  z-10" />
          {/* <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/campus-life.mp4" type="video/mp4" />
            
          </video> */}
          {/* Fallback image if video fails to load */}
          <Image
            src="/jst1.PNG"
            alt="School Campus Life"
            fill
            className="object-cover"
            priority
          />
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
          {/* Left: Text content */}
          <motion.div
            className="backdrop-blur-[3px] bg-current/5 p-10 rounded-lg"
            style={{
              boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`
            }}
            variants={fadeInLeft}
          >
            <motion.div
              className="text-4xl font-bold mb-4  md:text-5xl"
              variants={fadeInUp}
            >
              <h1 className='inline'>
                <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                  Welcome
                </span>{" "}
                to {" "}
              </h1>
              <h2 className='inline'>
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  Juan S. Tismo National High School
                </span>
                .
              </h2>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl mb-6"
              variants={fadeInUp}
            >
              Empowering students to achieve academic excellence and personal growth.
            </motion.p>
            <motion.div
              className="flex gap-4"
              variants={fadeInUp}
            >
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white">Enroll Now</Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button variant={"ghost"} className="border dark:hover:bg-white dark:hover:text-black border-white">Learn More</Button>
              </motion.div>
            </motion.div>
          </motion.div>
  
          {/* Right: Carousel */}
          <motion.div
            variants={fadeInRight}
          >
            <motion.div
              className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center "
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full h-full  flex items-center justify-center"
                  onMouseEnter={() => plugin.current?.play()}
                  onMouseLeave={() => plugin.current?.play()}
                >
                  <CarouselContent>
                    {["/students/1.jpg", "/students/2.jpg", "/students/3.jpg"].map((item, index) => (
                      <CarouselItem key={index} >
                        <div className="p-1">
                          <motion.div
                            className="h-96"
                            whileHover={scaleUp}
                          >
                            <img
                              src={item}
                              alt={""}
                              loading='lazy'
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </motion.div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className='text-black dark:text-white' />
                  <CarouselNext className='text-black dark:text-white' />
                </Carousel>
              </motion.div>
            </motion.div>
          </motion.div>
  
        </div>
      </motion.section>
    )
  }

  export default HeroSection