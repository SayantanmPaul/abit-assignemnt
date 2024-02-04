import Header from '@/components/Header'
import React from 'react'
import Release from '@/components/Release'
const page = () => {

  
  return (
    <div>  
      <div className='bg-[#292828] text-center'>
        <p 
          className=' text-2xl text-white leading-10 font-normal font-Gloria py-[18px] whitespace-nowrap overflow-hidden'>
            John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
        </p>
      </div>
      <div className=' h-[846px] flex justify-center pt-[146px]'>
        <Release/>
      </div>
    </div>
  )
}

export default page
