import Header from '@/components/Header'
import React from 'react'
import Release from '@/components/Release'
import VideoConten from '@/components/VideoConten'
const page = () => {

  
  return (
    <div>  
      <div className='bg-[#292828] text-center'>
        <p 
          className=' text-2xl text-white leading-10 font-normal font-Gloria py-[18px] whitespace-nowrap overflow-hidden'>
            John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
        </p>
      </div>
      <div className=' flex justify-center'>
      <div className=' flex flex-col max-w-[1240px] items-start py-[146px] gap-16'>
        <Release/>
        <VideoConten/>
      </div>
      </div>
    </div>
  )
}

export default page
