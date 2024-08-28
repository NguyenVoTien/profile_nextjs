'use client';


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const services =[
  {
    num:"01",
    title: "E-Commerce Website",
    description:'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    technologies: ["HTML", "CSS", "React", "Node.js", "portgreSQL"],
  },
  {
    num:"02",
    title: "Portfolio Website",
    description:'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ["HTML", "CSS", "React", "MUI"],
  },
  {
    num:"03",
    title: "Mosav app - Shopping app",
    description:'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    technologies: ["HTML", "CSS", "React-Native", "Postman", "mySQL", "Zalo-UI"],
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
     <div className="container mx-auto">
      <motion.div
        initial ={{opacity:0}}
        animate = {{
          opacity:1,
          transition:{delay:2.4, duration:0.4, ease:"easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
          {services.map((service,index) =>{
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center" >
                  <div className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-none text-white
                 group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/80 text-xl">{service.description}</p>
                {/* technologies */}
                <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
              <Button key={idx} className=" py-2 px-4 rounded">
                {tech}
              </Button>
              ))}
              </div>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
      </motion.div>
     </div>
    </section>
  )
}

export default Services
