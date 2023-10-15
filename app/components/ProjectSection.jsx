import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectData = [
    {
        id:1,
        title: "Food Website",
        description: "",
        images: "/images/projects/food.png",
        tag:["All", "Web"],
    },

    {
        id:2,
        title: "Car Animation",
        description: "",
        images: "/images/projects/car.png",
        tag:["All", "Web"],
    },

    {
        id:3,
        title: "Login/Sign-up",
        description: "",
        images: "/images/projects/ls.png",
        tag:["All", "Web"],
    },

    {
        id:4,
        title: "Random-Quote Generator",
        description: "",
        images: "/images/projects/qp.png",
        tag:["All", "Web"],
    },
];

const ProjectSection =() =>{
    return(
        <>
        <h2>My Projects</h2>
        <div>{ProjectData.map((project) => <ProjectCard key ={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}</div>
        </>
    )
}

export default ProjectSection