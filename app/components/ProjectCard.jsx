

const ProjectCard = ({imgUrl , title , description}) => {
  return (
    <div>
     
     <div>
     <div className=' h-5 md:h-72 text-white rounded-t-xl relative'>
    style={{ background: `url(${imgUrl})`, backgroundSize:"cover"}}
    </div>
    <div className="overlay absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"> </div>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
     </div>
     </div>
  )
}

export default ProjectCard