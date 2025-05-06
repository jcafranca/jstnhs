import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'


// Programs Section
const ProgramsSection = () => {
    return (
      <motion.section
        id="programs"
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
            <motion.h2 className="text-3xl font-bold mb-2">Academic Programs</motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive educational tracks designed for student success</motion.p>
            <Separator className="my-4 mx-auto w-20 bg-blue-500" />
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Science, Technology, Engineering & Mathematics",
                description: "Focused on developing critical thinking and problem-solving skills in STEM fields.",
                icon: "🔬"
              },
              {
                title: "Humanities & Social Sciences",
                description: "Explores literature, history, philosophy, and the social sciences.",
                icon: "📚"
              },
              {
                title: "Business & Entrepreneurship",
                description: "Prepares students for careers in business, finance, and entrepreneurship.",
                icon: "💼"
              },
              {
                title: "Arts & Design",
                description: "Nurtures creativity through visual arts, music, dance, and theater.",
                icon: "🎨"
              },
              {
                title: "Sports & Physical Education",
                description: "Develops physical fitness, teamwork, and sportsmanship.",
                icon: "⚽"
              },
              {
                title: "Information & Communications Technology",
                description: "Builds skills in computer science, programming, and digital media.",
                icon: "💻"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full">
                    <CardHeader className="pb-2">
                      <motion.div
                        className="text-4xl mb-2"
                        whileHover={pulse}
                      >
                        {program.icon}
                      </motion.div>
                      <CardTitle className='text-sm'>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button size={"sm"} className='bg-blue-500 hover:bg-blue-700 text-white'>Learn more →</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    )
  }

  export default ProgramsSection;