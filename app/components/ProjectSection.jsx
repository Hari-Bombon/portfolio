
"use client"
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';



const ProjectData = [

    {
        id:1,
        title: "Food Website",
        description: "hello",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEh3Ch31LRZeg83imAPCiwTcVshG4WbB6O3Ua_olRwrIP1pJepWecNvREHk1m6APUzh9Qr-Eu0I3IOlyLUbwPdEVseEE8b7ZJw8KdOtLEBf_DTLugBcN5_qx7bHj4OXlAQoILOKu-3NIaMUgQCoYqQvE3kkGYRLUk_ZVZv5rYd1OcFsgXfp4dMpWEWMdiFg",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },

    {
        id:2,
        title: "Car Animation",
        description: "hello",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEgvuymyumd-Tik900AjZzn2uaqd44c5Pvl23AMITe3ZbeDL71DKIkAQ8fRz6kCfMzhsJ2LvOy9Sat3peIM6Ek-cH3zcTBV4EQZH1dd-reelbWgQDADn4d9ibCMtqwy80Z-ifzlFM7WhYm01qV9O41jh629Gzi0PLOuwZEFEjM4hxmEPKvK6JfzquIv5aO4",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },

    {
        id:3,
        title: "Login/Sign-up",
        description: "hello",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEgohIJWx58KrlWnJrRhUfiyGUIXfdHvvdq_aR9jAgWi0ZAjTAFZjhhdDXerUGMxuUgRJqcZt6k4fsSu7ogKqRtZJCuKAw5kuS-UPP9yJZKzNrpj9F4yLgBbxbYioXyW5v0vft7lgn7IKdW1plZn_cHojOtUnGZQ5IZVEMBrbGZoyt_BaQzxfJviy85XeDk",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },

    {
        id:4,
        title: "Random-Quote Generator",
        description: "hello",
        images: "https://blogger.googleusercontent.com/img/a/AVvXsEjdZI8oYYQeh83215DWyX7a5FA3JhKN4BGJFhV9Us_USMp897ESel7GxJuvzWAOwfZfxTGQ7QeGzKmtGPCX1mFPkY8wO4EbvNNoIm8TKr2cPMD-oaEOZBHQhnalKAM_Pilktg1nxpR34U23qiWj8p_s_EP1FqOAVb8sPrn1YMMqIDG-lG4fLMQn0ezMOdo",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    }
];

const ProjectSection =() =>{
    const [tag , setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
  return(
        <section ref ={ref}>
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
 
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {ProjectData.map((project) => (
        <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.images}
            gitUrl={project.gitUrl}
            preview={project.preview}
        />
    ))}
</div>

        </section>
    )
}

export default ProjectSection