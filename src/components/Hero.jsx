import React from 'react'
import home from '../assets/home.jpeg'

const Hero = () => {
  return (
    <div className='max-w-[3440px] mx-auto p-4'>
        <div className='relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full flex text-white justify-center flex-col bg-black/20'>
                 <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                 <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-500'>Delivery</span></h1>
            </div>
            <img src={home} alt="" className='w-full object-cover'/>
        </div>
    </div>
  )
}

export default Hero