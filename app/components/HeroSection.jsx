import React from 'react';


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
      <h1 className='text-white mb-4 lg:text-4xl font-extrabold'>
        Hello! I am Haripriya
        </h1>
      <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
        Im a bd, fd
        </p>
        <div>
          <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
          <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
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

