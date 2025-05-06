import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, hoverScale, pulse, scaleUp } from '@/lib/animations'
import { useState } from 'react'
import { Badge } from '../ui/badge'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"

// Faculty Section
export interface FacultyProps {
    name: string;
    position: string;
    image: string;
    bio: string;
    education: string[];
    expertise: string[];
    contact: string;
  }
  const FacultySection = () => {
    const [selectedFaculty, setSelectedFaculty] = useState<FacultyProps>();
    const [sheetOpen, setSheetOpen] = useState(false);
    const facultyData = [
      {
        name: "Dr. Benedict Doherty",
        position: "School Principal",
        image: "/temp/Benedict Doherty.png",
        bio: "Dr. Benedict Doherty has over 20 years of experience in educational leadership. He holds a Ph.D. in Educational Administration from the University of the Philippines and has implemented numerous innovative programs that have significantly improved student outcomes.",
        education: ["Ph.D. in Educational Administration, University of the Philippines", "M.A. in Education, Ateneo de Manila University", "B.S. in Mathematics, De La Salle University"],
        expertise: ["Educational Leadership", "Curriculum Development", "School Management", "Strategic Planning"],
        contact: "principal@jstnhs.edu.ph"
      },
      {
        name: "Prof. Ayah Wilkinson",
        position: "Science Department Head",
        image: "/temp/Ayah Wilkinson.png",
        bio: "Prof. Ayah Wilkinson leads our Science Department with passion and innovation. With a background in Molecular Biology and Science Education, she has developed a hands-on science curriculum that engages students in real-world scientific inquiry.",
        education: ["M.S. in Molecular Biology, University of Santo Tomas", "B.S. in Biology, University of the Philippines"],
        expertise: ["Biology", "Chemistry", "Environmental Science", "STEM Education"],
        contact: "science@jstnhs.edu.ph"
      },
      {
        name: "Ms. Alesha Barry",
        position: "Mathematics Teacher",
        image: "/temp/Alesha Barry.png",
        bio: "Ms. Alesha Barry makes mathematics accessible and engaging for all students. Her innovative teaching methods have helped improve math proficiency scores across all grade levels. She is dedicated to removing the fear of mathematics and building student confidence.",
        education: ["M.A. in Mathematics Education, Philippine Normal University", "B.S. in Mathematics, Mapua University"],
        expertise: ["Algebra", "Geometry", "Calculus", "Statistics"],
        contact: "math@jstnhs.edu.ph"
      },
      {
        name: "Ms. Adriana O'Sullivan",
        position: "English Department Head",
        image: "/temp/Adriana O'Sullivan.png",
        bio: "Ms. Adriana O'Sullivan brings creativity and passion to English language education. She has developed a comprehensive English curriculum that emphasizes critical thinking, creative writing, and effective communication skills essential for success in the 21st century.",
        education: ["M.A. in English Literature, University of San Carlos", "B.A. in English, Silliman University"],
        expertise: ["Literature", "Creative Writing", "Speech and Debate", "Language Arts"],
        contact: "english@jstnhs.edu.ph"
      }
    ];
    const badgeColors = [
      "bg-blue-500 text-white",
      "bg-green-500 text-white",
      "bg-purple-500 text-white",
      "bg-pink-500 text-white",
      "bg-yellow-500 text-black",
      "bg-red-500 text-white",
    ];
    const handleFacultyClick = (faculty: FacultyProps) => {
      setSelectedFaculty(faculty);
      setSheetOpen(true);
    };
  
    return (
      <motion.section
        id="faculty"
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
            <motion.h2 className="text-3xl font-bold mb-2">Our Faculty</motion.h2>
            <motion.p className="text-muted-foreground max-w-2xl mx-auto">Meet our dedicated team of educators</motion.p>
            <Separator className="my-4 mx-auto w-20 bg-blue-500" />
          </motion.div>
  
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {facultyData.map((faculty, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                transition={{ delay: index * 0.1 }}
                className='cursor-pointer'
                onClick={() => handleFacultyClick(faculty)}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-none shadow-sm h-full">
                    <motion.div
                      className="aspect-square relative flex items-center justify-center"
                      whileHover={scaleUp}
                    >
                      <motion.img
                        src={faculty.image}
                        alt={faculty.name}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    <CardHeader className="pt-4 pb-2 flex flex-col items-center justify-center">
                      <CardTitle className="text-lg">{faculty.name}</CardTitle>
                      <CardDescription><Badge className='bg-blue-500 text-white'>{faculty.position}</Badge></CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
  
          <motion.div
            className="text-center mt-10"
            variants={fadeInUp}>
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button className='bg-blue-500 hover:bg-blue-700 text-white'>View All Faculty</Button>
            </motion.div>
          </motion.div>
  
          {/* Faculty Detail Sheet */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetContent className="overflow-y-auto max-h-[90vh] p-6" side="bottom">
              {selectedFaculty && (
                <div className="space-y-6">
                  <SheetHeader>
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={selectedFaculty.image}
                          alt={selectedFaculty.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <SheetTitle className="text-2xl font-bold">{selectedFaculty.name}</SheetTitle>
                        <Badge className="mt-2 bg-blue-500 text-white">{selectedFaculty.position}</Badge>
                        <SheetDescription className="mt-4">{selectedFaculty.bio}</SheetDescription>
                      </div>
                    </div>
                  </SheetHeader>
  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Education</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedFaculty.education.map((edu, idx) => (
                            <li key={idx}>{edu}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
  
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Areas of Expertise</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {selectedFaculty.expertise.map((skill, idx) => {
                            const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)];
                            return (
                              <Badge key={idx} className={randomColor}>
                                {skill}
                              </Badge>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        {selectedFaculty.contact}
                      </p>
                    </CardContent>
                  </Card>
  
                  <SheetFooter>
                    <Button onClick={() => setSheetOpen(false)} className='w-fit text-sm h-auto bg-blue-500 text-white hover:bg-blue-700'>Close</Button>
                  </SheetFooter>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </motion.section>
    )
  }

  export default FacultySection;