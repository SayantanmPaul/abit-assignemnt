import React from 'react'

const Release = () => {
    const data=[
        {
            val: '1',
            text: 'Shared Videos'
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
    <div className=' flex lg:flex-row md:flex-row flex-col lg:gap-[255px] gap-12 items-center h-fit px-4 lg:px-0'>
        <div className='flex flex-col lg:gap-[14px] gap-3'>
            <h2 className=' lg:text-[28px] text-2xl font-normal font-ptsherif leading-8'>Releases</h2>
            <p className=' lg:text-[16px] text-sm w-full text-[#565656] italic font-ptsherif leading-5 text-wrap tracking-normal'>Videos that you upload in collaboration with aBit appear here.</p>
        </div>  
        <div className=' flex flex-row lg:flex-row md:flex-row gap-[8px]'>
            {data.map((data, i)=>(
            <div key={i} className=' flex flex-row justify-center'>
            <div className=' bg-[#7A7A7A] w-[1px] h-full lg:mr-[16px] mr-3'></div>
            <div className=' flex flex-col w-[50%]'>
                <h3 key={data.val} className=' text-[#565656] font-bold lg:text-[16px] text-base'>{data.val}</h3>
                <p key={data.text} className='#696969  text-wrap lg:text-[14px] text-xs '>{data.text}</p>
            </div>
        </div>

        ))}
        </div>
    </div>
  )
}

export default Release
