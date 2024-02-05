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
      <Image src={coverimage} alt='cover image' objectFit='cover' className="w-screen lg:h-auto h-[300px] object-cover"/>
        <div className=' absolute lg:top-[56%] md:top-80 top-40 lg:left-24 left-4 max-w-[1240px] z-10' >
          <div className='mx-auto'>
            <CreatorTab/>
          </div>
        </div>
      <div className='bg-[#292828] text-center overflow-hidden'>
        <p 
          className=' lg:text-2xl text-lg text-white leading-10 font-normal lg:py-[18px] py-3 whitespace-nowrap block font-gloria animate-marquee'>
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
      <div className='max-w-[1240px] w-full lg:py-[125px] py-[96px]'>
        <br/>
        <Footer/>
      </div>
      </div>
    </div>
  )
}

export default page
