"use client"
import React, { useTransition , useState}from 'react'
import TabButton from './TabButton'


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

      <div>
        <h2 className=' text-white mb-4 sm:text-5xl lg:text-4xl font-extrabold'> 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> 
       About Me {""}
       </span></h2>
        <p className='text-base lg:text-lg'>I am  a front-end developer and web3 developer with a passion for creating and responsive web applications.
           I have experience working with Html , css , javascript , react , solidity and NFT . 
           I am a quick learner and team player . I am excited to learn and work with others to create amazing applications
           </p>
           <div className='flex flex-row mt-8'>
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
              certifications{""}
            </TabButton>
           </div>
      </div>
      </div>
      </section>
  )
}

export default AboutSection