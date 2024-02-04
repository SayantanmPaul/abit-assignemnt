import Header from '@/components/Header'
import React from 'react'
import Release from '@/components/Release'
import VideoConten from '@/components/VideoConten'
import Footer from '@/components/Footer'
import CreatorTab from '@/components/Creatortab'
import Image from 'next/image'
import coverimage  from '/assets/coverimage.png'
const page = () => {
  const text="John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11."

  return (
    <div className=' flex flex-col justify-center'>  
      <Image src={coverimage} alt='cover image' objectFit='cover' className=" w-screen "/>
        <div className=' absolute bottom-36 left-24 max-w-[1240px] z-10' >
          <div className='mx-auto'>
            <CreatorTab/>
          </div>
        </div>
      <div className='bg-[#292828] text-center'>
        <p 
          className=' text-2xl text-white leading-10 font-normal py-[18px] whitespace-nowrap block font-gloria animate-marquee'>
            {text}{text}
        </p>
      </div>
      <div className=' flex flex-col items-center'>
      <div className=' flex flex-col max-w-[1240px] items-start py-[146px] gap-16'>
        <Release/>
        <VideoConten/>
        <br/>
      </div>
      <div className=' w-full h-[1px] bg-[#D8D8D8]'></div>
      <div className='max-w-[1240px] w-full py-[125px]'>
        <br/>
        <Footer/>
      </div>
      </div>
    </div>
  )
}

export default page
