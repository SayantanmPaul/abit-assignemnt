import Header from '@/components/Header'
import React from 'react'
import Release from '@/components/Release'
import VideoConten from '@/components/VideoConten'
import Footer from '@/components/Footer'
const page = () => {

  
  return (
    <div>  
      <div className='bg-[#292828] text-center'>
        <p 
          className=' text-2xl text-white leading-10 font-normal font-Gloria py-[18px] whitespace-nowrap overflow-hidden'>
            John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
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
