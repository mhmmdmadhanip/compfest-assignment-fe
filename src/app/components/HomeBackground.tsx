import React from 'react'
import Image from 'next/image';

const HomeBackground = () => {
  return (
    <div className='absolute w-full h-full'>
      <Image 
        src="hero-bg.svg"
        fill
        alt="Home Background"
        sizes='none'
        className='object-cover opacity-60'
      />
    </div>
  )
}

export default HomeBackground
