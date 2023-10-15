"use client"
import React, { useTransition , useState}from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul className='list-disc pl-2'>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Solidity</li>
        <li>Etherjs</li>
      </ul>
    )
  },
  {
    title: "Education",
    id:"education",
    content:(
      <ul>
        <li>B.E Computer Science and Engineering</li>
        <li>Jaya Engineering College</li>
      </ul>
    )
  },

  {
    title: "Certifications",
    id:"certifications",
    content:(
      <ul>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    )
  }
]
const AboutSection = () => {
  const [tab , setTab] = useState("skills")
  const [isPending ,startTransition ] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
      <div className='mt-4 md:mt-0 text-left flex flex-col- h-full'></div>
      <div>
        <h2 className=' text-white mb-4 sm:text-5xl lg:text-4xl font-extrabold'> 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> 
       About Me {""}
       </span></h2>
        <p className='text-base lg:text-lg'>I am  a front-end developer and web3 developer with a passion for creating and responsive web applications.
           I have experience working with Html , css , javascript , react , solidity and NFT . 
           I am a quick learner and team player . I am excited to learn and work with others to create amazing applications
           </p>
           <div className='flex flex-row justify-start mt-8'>
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>

            <TabButton 
            selectTab={() => handleTabChange("certifications")} 
            active={tab === "certifications"}
            >
              {""}
              Certifications{""}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
      </section>
  )
}

export default AboutSection