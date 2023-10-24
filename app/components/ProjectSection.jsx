"use Client"
import React , {usestate , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import {motion , useInView} from "framer-motion"

const ProjectData = [

    {
        id:1,
        title: "Food Website",
        description: "",
        images: "/images/projects/food.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },

    {
        id:2,
        title: "Car Animation",
        description: "",
        images: "/images/projects/car.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },

    {
        id:3,
        title: "Login/Sign-up",
        description: "",
        images: "/images/projects/ls.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },

    {
        id:4,
        title: "Random-Quote Generator",
        description: "",
        images: "/images/projects/qp.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
];

const ProjectSection =() =>{
    const [tag , setTag] = usestate("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>{
        project.tag.includes(tag)
    });
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
    {filteredProjects.map((project) => (
        <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            preview={project.preview}
        />
    ))}
</div>

        </section>
    )
}

export default ProjectSection