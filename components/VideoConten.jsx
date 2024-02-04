import React from 'react'
import { FaPlus } from "react-icons/fa"
import Image from 'next/image'
import demoimg from '../assets/unsplash_img.png'
const VideoConten = () => {
  return (
    <div className=' flex flex-wrap gap-9 px-6 lg:px-0'>
        <form>
        <input type="file" name="" id="fileinput" className=' opacity-0 absolute -z-10'/>
            <div className=' relative lg:w-[276px] md:w-[212px] w-[386px] lg:h-[312px] md:h-[212px] h-[386px]  bg-[#EDEDED] hover:bg-[#e7e7e7] ease-linear duration-200 rounded-[24px] cursor-pointer'>
                <label htmlFor='fileinput' className=' flex justify-center items-center h-full'>
                    <FaPlus color='#959595' size={32} className=' opacity-50'/>
                    <p className=' absolute bottom-9 text-wrap lg:w-[220px] lg:text-[14px] md:text-xs text-base text-center tracking-normal text-[#A0A0A0]'>You haven’t uploaded any videos with aBit yet. Add now!</p>
                </label>
            </div>
        </form>
        
    <div className=' relative lg:w-[276px] md:w-[212px] w-[386px] lg:h-[312px] md:h-[212px] h-[386px] bg-[#EDEDED] rounded-[24px] overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_3px_15px_rgba(0,0,0,0.7)] duration-300 ease-in-out'>
        <div className=' w-full h-1/3 bg-gradient-to-b from-black opacity-60 z-10'></div>
        <div className=' w-full absolute bottom-0 h-1/4 bg-gradient-to-b from-transparent to-black opacity-80 z-10'></div>
        <p className=' absolute font-bold lg:text-[16px] md:text-base text-xl text-white leading-6 uppercase z-10 lg:top-4 top-6 lg:left-4 left-6'>The Sound of Silence</p>
        <Image src={demoimg} alt='demo img' objectFit='cover' layout='fill' sizes='100vh' className=' h-full '/>
        <div className='absolute lg:bottom-[10px] md:bottom-[10px] bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 '>
            <div className=' flex flex-row lg:gap-10 md:gap-3 gap-10 backdrop-blur-md lg:py-[10px] md:py-[10px] py-6 lg:px-[20px] md:px-[20px] px-10 rounded-[12px] bg-white bg-opacity-20  text-white'>
            <div className=' flex flex-col gap-2'>
                <p className=' font-medium lg:text-[12px] md:text-[12px] text-base leading-3 '>Shares</p>
                <p className=' font-bold lg:text-[12px] text-base leading-3'>317</p>
            </div>
            <div className=' flex flex-col gap-2'>
                <p className=' font-medium lg:text-[12px] md:text-[12px] text-base leading-3'>Offered</p>
                <p className=' font-bold lg:text-[12px] text-base leading-3'>75%</p>
            </div>
            <div className=' flex flex-col gap-2'>
                <p className=' font-medium lg:text-[12px] md:text-[12px] text-base leading-3'>Raised</p>
                <p className=' font-bold lg:text-[12px] text-base leading-3'>$9510</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default VideoConten
