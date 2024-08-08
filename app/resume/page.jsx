'use client';


import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaUser,
  FaPhone, FaBriefcase, FaEnvelope, FaGlobe, FaTelegramPlane, FaLaptopCode, FaLanguage
}
  from "react-icons/fa";
import { SiPostgresql, SiMysql, SiWordpress, SiPhp, SiRedis, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { motion } from "framer-motion";


//* IMPORT
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


//* about data
const about = {
  title: "About Me",
  description: "I am a dedicated and versatile frontend stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including PHP, Wordpress, React, Next.js, Node.js, MySQL, PostgreSQL, and Redis,... My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.",
  info: [
    {
      fieldName: <FaUser />,
      fieldValue: "TienFrDev"
    },
    {
      fieldName: <FaPhone />,
      fieldValue: "(+84) 829 310 012"
    },
    {
      fieldName: <FaBriefcase />,
      fieldValue: "2+ Years "
    },
    {
      fieldName: <FaEnvelope />,
      fieldValue: "tienfrontend@gmail.com"
    },
    {
      fieldName: <FaGlobe />,
      fieldValue: " Viet Nam"
    },
    {
      fieldName: <FaTelegramPlane />,
      fieldValue: "@tienfrdev"
    },
    {
      fieldName: <FaLaptopCode />,
      fieldValue: "Freelance"
    },
    {
      fieldName: <FaLanguage />,
      fieldValue: "English, Vietnamese"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I am a dedicated and versatile frontend stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including PHP, Wordpress, React, Next.js, Node.js, MySQL, PostgreSQL, and Redis,... My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.",
  items: [
    {
      company: "Freelancer",
      position: "Mobile App Mosav Shop Developer - Frontend",
      duration: "2023 - Present"
    },
    {
      company: "Freelancer",
      position: "Frontend Stack Developer",
      duration: "2022 - 2023"
    },
    {
      company: "Freelancer",
      position: "Profile Website",
      duration: "2020 - 2022"
    },
    {
      company: "Freelancer",
      position: "WordPress Developer",
      duration: "2018 - 2020"
    },
    {
      company: "Freelancer",
      position: "Figma Design for website Sale",
      duration: "2018 - 2019"
    },

  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I was trained at Nha Trang University, participated in many online courses related to website programming and website design, and won an excellent student award in an online course on E-learning.",
  items: [
    {
      institution: "Online Course Platform",
      position: "Backend Stack Developer",
      duration: "Present"
    },
    {
      institution: "Online Course Platform",
      position: "Frontend Stack Developer",
      duration: "2023 - 01/2024"
    },
    {
      institution: "Codecademy",
      position: "Frontend Stack Developer",
      duration: "2022 - 2023"
    },
    {
      institution: "Figma tutorial onlien",
      position: "Design figma for website",
      duration: "2022 - 2023"
    },
    {
      institution: "Nha Trang University",
      position: "Basic web design",
      duration: "2018 - 2022"
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "I am a dedicated and versatile frontend stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including PHP, Wordpress, React, Next.js, Node.js, MySQL, PostgreSQL, and Redis,... ",
  skillList:
    [
      {
        icon: <SiPostgresql />,
        name: "PostgresSQL"
      },
      {
        icon: <SiMysql />,
        name: "MySQL"
      },
      {
        icon: <FaHtml5 />,
        name: "HTML 5"
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3"
      },
      {
        icon: <FaJs />,
        name: "JavaScript"
      },
      {
        icon: <FaReact />,
        name: "React.js"
      },
      {
        icon: <FaFigma />,
        name: "Figma"
      },
      {
        icon: <FaNodeJs />,
        name: "Node JS"
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js"
      },
      {
        icon: <SiPhp />,
        name: "PHP"
      },
      {
        icon: <SiRedis />,
        name: "Redis "
      },
      {
        icon: <SiWordpress />,
        name: "Workpress"
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css"
      },
    ]
}


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6 "
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 p-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 p-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
