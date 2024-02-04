import React from 'react'
import Image from 'next/image'
import tabBg  from '/assets/tab-bg.png'
import userImg from '../assets/user_img.png'
const CreatorTab = () => {
return (
    <div>
        <div className=' relative bg-cover bg-center rounded-[24px] overflow-hidden backdrop-blur-xl flex drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]'>
        <Image src={tabBg} alt='cover image' layout='fill' objectFit='cover' sizes='100vh'/>
        <div className=' flex flex-row  justify-center items-center'>
            <div className=' h-56 z-10 hover:scale-105 transform overflow-hidden ease-in-out duration-500'>
                <Image 
                src={userImg} 
                alt='profile-img' 
                width={720} 
                height={720}
                className=' h-full w-full'/>
            </div>
            <div className=' flex flex-col items-start justify-center gap-[20px] z-10 px-[30px] py-[24px]'>
                <div className=' flex flex-row gap-[30px]'>
                    <h2 className=' font-bold text-[24px] leading-5 tracking-wide'>DAN MACE</h2>
                    <p className=' text-[#696969] text-[14px] leading-5'>/Johny_Films/</p>
                </div>
                <div className='flex flex-col max-w-[260px] gap-1 '>
                    <h4 className=' font-bold text-[14px] leading-4 text-[#696969]'>Bio</h4>
                    <p className=' text-[14px] leading-4 text-[#696969] text-wrap'>Simply a film fan creating original content for YouTube. Let’s Collaborate.</p>
                </div>

                <div className=' w-full bg-black  bg-opacity-60 rounded-[4px] border border-black'>
                    <button className='w-1/2'>
                        <p className=' bg-[#E6E6E6] backdrop-blur border border-black rounded-[3px]  text-[#313131] text-[14px] font-ptsherif
                        py-[2px] px-9'>Creator</p>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CreatorTab
