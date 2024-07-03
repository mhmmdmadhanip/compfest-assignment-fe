'use client'
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className='relative min-h-screen h-max flex overflow-hidden w-full'>
      <div className='w-full flex items-center py-16 px-20'>
        <div className='text-4xl flex flex-col gap-8'>
          <p className='text-6xl font-bold'>About Us</p>
          <p>SEA Salon is your ultimate destination for beauty and elegance. Our services include haircuts and styling, manicures and pedicures, and facial treatments. With easy booking and personalized care, you can relax and enjoy a luxurious experience. </p>
        </div>
      </div>
      <div className='w-max flex justify-end'>
        <div className='relative flex' >
          <img src="aboutus-img.svg" alt="About Us Image" className='object-cover w-full h-full'/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
