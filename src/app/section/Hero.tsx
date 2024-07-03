import React from 'react'
import HomeBackground from '../components/HomeBackground';

const Hero = () => {
  return (
    <div className='relative min-h-screen flex flex-col overflow-hidden'>
      <HomeBackground />
      <div className='relative flex flex-col flex-grow justify-center px-48 gap-8 font-bold'>
        <div className='text-black w-max'>
          <p className='text-7xl max-w-xl'>Sea Salon: Beauty and Elegance Redefined</p>
        </div>
        <div className='bg-white rounded-[60px] w-max'>
          <div className='p-4 flex flex-row justify-between gap-16 items-center'>
            <p className='text-2xl '>Reserve and Feel a World Class Salon Services</p>
            <button className='text-xl font-light rounded-[60px] bg-[#384ece] py-2 px-4 text-white hover:scale-110 transition ease-in-out'>
              <span>Reserve Now!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
