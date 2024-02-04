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
    <div className=' flex flex-row gap-[255px] h-fit'>
        <div className='flex flex-col gap-[14px]'>
            <h2 className=' lg:text-[28px] text-2xl font-normal font-ptsherif leading-8'>Releases</h2>
            <p className=' lg:text-[16px] text-sm w-full text-[#565656] italic font-ptsherif leading-5 text-wrap tracking-normal'>Videos that you upload in collaboration with aBit appear here.</p>
        </div>  
        <div className=' flex flex-col lg:flex-row md:flex-row lg:gap-[22px] md:gap-2 gap-8'>
            {data.map((data, i)=>(
            <div key={i} className=' flex flex-row justify-center'>
            <div className=' bg-[#7A7A7A] w-[1px] h-full mr-[16px]'></div>
            <div className=' flex flex-col w-[50%]'>
                <h3 key={data.val} className=' text-[#565656] font-bold text-[16px]'>{data.val}</h3>
                <p key={data.text} className='#696969  text-wrap text-[14px] '>{data.text}</p>
            </div>
        </div>

        ))}
        </div>
    </div>
  )
}

export default Release
