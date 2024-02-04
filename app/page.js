import Header from '@/components/Header'
import React from 'react'

const page = () => {

  const data=[
    {
      val: '1',
      text: 'Shared Video'
    },
    {
      val: '$9510',
      text: 'Fund Raised'
    },
    {
      val: '317',
      text: 'Co-owner community'
    },
    {
      val: '$3804',
      text: 'Co-owner Earnings'
    },
  ]
  return (
    <div>  
      <div className='bg-[#292828] text-center'>
        <p 
          className=' text-2xl text-white leading-10 font-normal font-Gloria py-[18px] whitespace-nowrap overflow-hidden'>
            John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
        </p>
      </div>
      <div className=' h-[846px] flex justify-center pt-[146px]'>
        <div className=' flex flex-row lg:gap-[255px] h-fit'>
          <div className='flex flex-col gap-[14px]'>
            <h2 className=' lg:text-[28px] text-2xl font-normal font-Cormorant leading-8'>Releases</h2>
            <p className=' lg:text-[16px] text-sm w-[246px] lg:w-full md:w-full  text-[#565656] italic font-Cormorant leading-5 text-wrap tracking-normal'>Videos that you upload in collaboration with aBit appear here.</p>
          </div>  
          <div className=' flex flex-col lg:flex-row md:flex-row lg:gap-[77px] md:gap-2 gap-8'>
            {data.map((data,i)=>(
              <div key={i} className=' flex flex-row gap-[17px] '>
              <div className=' bg-[#7A7A7A] w-[1px] h-[61px]'></div>
              <div className=' flex flex-col'>
                <h3 key={i} className=' text-[#565656] font-bold text-[16px]'>{data.val}</h3>
                <p key={i} className='#696969 w-[60%] text-wrap text-[14px]'>{data.text}</p>
              </div>
            </div>

            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page
