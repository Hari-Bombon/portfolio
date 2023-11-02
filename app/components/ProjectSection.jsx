
"use client"
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion } from "framer-motion"



const ProjectData = [

    {
        id:1,
        title: "Food Website",
        description: "It is a static food ordering website",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEh3Ch31LRZeg83imAPCiwTcVshG4WbB6O3Ua_olRwrIP1pJepWecNvREHk1m6APUzh9Qr-Eu0I3IOlyLUbwPdEVseEE8b7ZJw8KdOtLEBf_DTLugBcN5_qx7bHj4OXlAQoILOKu-3NIaMUgQCoYqQvE3kkGYRLUk_ZVZv5rYd1OcFsgXfp4dMpWEWMdiFg",
        tag:["All", "Web"],
        gitUrl:"https://github.com/Hari-Bombon/Food-restaurant",
        previewUrl:"",
    },

    {
        id:2,
        title: "Car Animation",
        description: "hello",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEgvuymyumd-Tik900AjZzn2uaqd44c5Pvl23AMITe3ZbeDL71DKIkAQ8fRz6kCfMzhsJ2LvOy9Sat3peIM6Ek-cH3zcTBV4EQZH1dd-reelbWgQDADn4d9ibCMtqwy80Z-ifzlFM7WhYm01qV9O41jh629Gzi0PLOuwZEFEjM4hxmEPKvK6JfzquIv5aO4",
        tag:["All", "Mobile"],
        gitUrl:"https://github.com/Hari-Bombon/Car-animator",
        previewUrl:"https://hari-car.netlify.app",
    },

    {
        id:3,
        title: "Login/Sign-up",
        description: "hello",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEgohIJWx58KrlWnJrRhUfiyGUIXfdHvvdq_aR9jAgWi0ZAjTAFZjhhdDXerUGMxuUgRJqcZt6k4fsSu7ogKqRtZJCuKAw5kuS-UPP9yJZKzNrpj9F4yLgBbxbYioXyW5v0vft7lgn7IKdW1plZn_cHojOtUnGZQ5IZVEMBrbGZoyt_BaQzxfJviy85XeDk",
        tag:["All", "Web"],
        gitUrl:"https://github.com/Hari-Bombon/Login-with-signup-page",
        previewUrl:"https://logsignup.netlify.app",
    },

    {
        id:4,
        title: "Random-Quote Generator",
        description: " A random quote generator is a website that generates and displays random quotes, sayings, or phrases to users.",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEjdZI8oYYQeh83215DWyX7a5FA3JhKN4BGJFhV9Us_USMp897ESel7GxJuvzWAOwfZfxTGQ7QeGzKmtGPCX1mFPkY8wO4EbvNNoIm8TKr2cPMD-oaEOZBHQhnalKAM_Pilktg1nxpR34U23qiWj8p_s_EP1FqOAVb8sPrn1YMMqIDG-lG4fLMQn0ezMOdo",
        tag:["All", "Web"],
        gitUrl:"https://github.com/Hari-Bombon/Random-quote-generated",
        previewUrl:"https://random-qg.netlify.app",
    },

    
    {
      id:5,
      title: "Flowing hearts",
      description: "Show the cascading hearts through mouse movements.",
      images: "",
      tag:["All", "Web"],
      gitUrl:"https://github.com/Hari-Bombon/Heart-trail-animation",
      previewUrl:"https://flowheart.netlify.app",
  },

  {
    id:6,
    title: "Farm Tech",
    description:"Farmtech is a tool designed to assist the farming community in Tamil Nadu in optimizing crop production. Given the increasing global demand for food, there is a pressing need to address the imbalance in food supply",
    images:"",
    tag:["All", "Web"],
    gitUrl:"https://github.com/Hari-Bombon/FarmTech",
    previewUrl:"",
}
];

const ProjectSection =() =>{
    const [tag , setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return(
        <section id="project">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
            </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag
                onClick={handleTagChange}
                name='All'
                isSelected={tag === "All"}
            />

            <ProjectTag
                onClick={handleTagChange}
                name='Web'
                isSelected={tag === "All"}
            />

            <ProjectTag
                onClick={handleTagChange}
                name='Mobile'
                isSelected={tag === "All"}
            />
            
        </div>
 
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;