import React from 'react';
import { TypeAnimation } from 'react-type-animation';


   


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
      <h1 className='text-white mb-4 sm:text-5xl lg:text-4xl font-extrabold'>
       <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'> 
       Hello! I am {""}
       </span>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Haripriya',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1000,
        'Ethereum developer',
        1000,
        'Front-end developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        
        </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
        Im a bd, fd
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-sky-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:big-slate-800 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV </span>
            </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 ;g'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250]'>
          <image
          src="./images/profile.jpeg"
          alt="hero-image"
          width={300}
          height={500}
        />
        </div>
        </div>
        </div>
    </section>
  );
};

export default HeroSection;

