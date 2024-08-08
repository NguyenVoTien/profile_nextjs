'use client';

import { motion } from "framer-motion";
import "swiper/css"
import {BsArrowUpRight} from "react-icons/bs"
import React ,{ useState } from "react";
import { Button } from "@/components/ui/button";
import {Swiper,SwiperSlide } from "swiper/react";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";



const projects =[
  {
    num:"01",
    catagory:"Frontend Stack Developer",
    title:"project 1",
    description:`Designed and developed user interfaces for web applications React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL", "Postgres", "Postman"],
    image:'/assets/work/thumb1.png',
    live:"",
    github:""
  },
  {
    num:"02",
    catagory:"Mobile App Developer",
    title:"project 2",
    description:`Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "Next.js", "Redis","Postman"],
    image:'/assets/work/thumb2.png',
    live:"",
    github:""
  },
  {
    num:"03",
    catagory:"WordPress Developer",
    title:"project 3",
    description:`Developed and maintained web applications using Mysql, PHP. Designed and implemented RESTful APIs to support frontend functionality. Conducted code reviews and mentored junior developers to improve code quality and efficiency.`,
    technologies: ["PHP", "Mysql", "Express.js", "Postman"],
    image:'/assets/work/thumb3.png',
    live:"",
    github:""
  },
  
]

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  };

  return (
    <motion.section 
      initial ={{opacity:0}}
      animate={{
        opacity:1, 
        transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"
      }
    }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project catagory */}
              <h2 className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.catagory} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.technologies.map((item,index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      <Button className="py-2 px-4 rounded">
                        {item}
                      </Button>
                    </li>
                  )
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* button */}
              <div className=""></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1}
              className="xl:h-[520] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center 
                    items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} alt="" fill className="object-cover"/>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* slider button */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] w-[44px]
              h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkPage
