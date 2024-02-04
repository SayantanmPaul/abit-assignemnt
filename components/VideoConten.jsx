import React from 'react'
import { FaPlus } from "react-icons/fa"
import Image from 'next/image'
import demoimg from '../assets/unsplash_img.png'
const VideoConten = () => {
  return (
    <div className=' flex flex-wrap gap-9'>
        <div className=' relative w-[276px] h-[312px] bg-[#EDEDED] hover:bg-[#e7e7e7] ease-linear duration-50 rounded-[24px] cursor-pointer'>
            <div className=' flex justify-center items-center h-full'>
                <FaPlus color='#959595' size={32} className=' opacity-50'/>
                <p className=' absolute bottom-9 text-wrap w-[220px] text-[14px] text-center tracking-normal text-[#A0A0A0]'>You haven’t uploaded any videos with aBit yet. Add now!</p>
            </div>
        </div>
    <div className=' relative w-[276px] h-[312px] bg-[#EDEDED] rounded-[24px] overflow-hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_3px_15px_rgba(0,0,0,0.7)] duration-300 ease-in-out'>
        <div className=' w-full h-1/3 bg-gradient-to-b from-black opacity-60'></div>
        <div className=' w-full absolute bottom-0 h-1/4 bg-gradient-to-b from-transparent to-black opacity-80'></div>
        <Image src={demoimg} alt='demo img' objectFit='cover' layout='fill' sizes='100vh' className=' h-full '/>
        <div className='absolute bottom-[10px] left-1/2 transform -translate-x-1/2 cursor-pointer '>
            <div className=' flex flex-row gap-10 backdrop-blur-md py-[10px] px-[20px] rounded-[12px] bg-white bg-opacity-20  text-white'>
            <div className=' flex flex-col gap-2'>
                <p className=' font-medium text-[12px] leading-3 '>Shares</p>
                <p className=' font-bold text-[12px] leading-3'>317</p>
            </div>
            <div className=' flex flex-col gap-2'>
                <p className=' font-medium text-[12px] leading-3'>Offered</p>
                <p className=' font-bold text-[12px] leading-3'>75%</p>
            </div>
            <div className=' flex flex-col gap-2'>
                <p className=' font-medium text-[12px] leading-3'>Raised</p>
                <p className=' font-bold text-[12px] leading-3'>$9510</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default VideoConten
