import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
      <h1 className='text-white mb-4 lg:text-4xl font-extrabold'>
        Hello! I am Haripriya
        </h1>
      <p className='text-[#ADB7BE] text-lg lg:text-xl'>
        Im a bd, fd
        </p>
        </div>
        <div className='col-span-5'></div>
        </div>
    </section>
  );
};

export default HeroSection;

