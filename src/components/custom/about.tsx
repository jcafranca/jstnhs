import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'


// About Section
const AboutSection = () => {
    return (
      <motion.section
        id="about"
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
            <motion.h2 className="text-3xl font-bold mb-2">About Our School</motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto">Dedicated to providing quality education since 1985</motion.p>
            <Separator className="my-4 mx-auto w-20 bg-blue-500" />
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                subtitle: "Who we are, what we do",
                content: `We dream of Filipinos
                who passionately love their country
                and whose values and competencies
                enable them to realize their full potential
                and contribute meaningfully to building the nation.
  
                As a learner-centered public institution,
                the Department of Education
                continuously improves itself
                to better serve its stakeholders.`,
                type: "text"
              },
              {
                title: "Our Vision",
                subtitle: "What we aspire to be",
                content: `To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:
  
                          Students learn in a child-friendly, gender-sensitive, safe, and motivating environment.
                          Teachers facilitate learning and constantly nurture every learner.
                          Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.
                          Family, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners.`,
                type: "text"
              },
              {
                title: "Core Values",
                content: [
                  "Maka-Diyos",
                  "Maka-tao",
                  "Makakalikasan",
                  "Makabansa"
                ],
                type: "list"
              },
              {
                title: "Mandate",
                content: `The Department of Education was established through the Education Decree of 1863 as the Superior Commission of Primary Instruction under a Chairman. The Education agency underwent many reorganization efforts in the 20th century in order to better define its purpose vis a vis the changing administrations and charters. The present day Department of Education was eventually mandated through Republic Act 9155, otherwise known as the Governance of Basic Education act of 2001 which establishes the mandate of this agency.
  
                          The Department of Education (DepEd) formulates, implements, and coordinates policies, plans, programs and projects in the areas of formal and non-formal basic education. It supervises all elementary and secondary education institutions, including alternative learning systems, both public and private; and provides for the establishment and maintenance of a complete, adequate, and integrated system of basic education relevant to the goals of national development.`,
                type: "text"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn("col-span-3", item.title === "Mandate" ? 'col-span-3' : 'sm:col-span-1 md:col-span-1')}
              >
                <div className="h-full transition-all duration-300  bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm">
                  <div className="relative p-6 rounded-3xl sm:p-8">
                    <div className="mx-auto lg:mx-0">
                      <div className='flex flex-col items-center sm:items-start'>
                        {item.subtitle &&
                          <span className="bg-blue-500 rounded-[5px] text-white text-[7px] font-semibold py-1 px-3 inline-block uppercase tracking-wider">
                            {item.subtitle}
                          </span>}
                        <h1 className="mb-4 text-3xl font-bold">{item.title}</h1>
                      </div>
                      {item.type === "text" ? (
                        <p className="text-justify mb-6 text-muted-foreground">
                          {item.content}
                        </p>
                      ) : (
                        <div className='grid gap-1'>
                          {Array.isArray(item.content) && item.content.map((value, idx: number) => (
                            <Badge key={idx} className='bg-blue-500 text-white'>{value}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Background Stars */}
                    <div className="absolute inset-0 pointer-events-none">
                      <span className="absolute top-4 left-4 text-blue-400">✦</span>
                      <span className="absolute right-8 bottom-8 text-blue-300">✦</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div >
      </motion.section >
    )
  }
  export default AboutSection