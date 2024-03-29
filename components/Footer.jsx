import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className=' flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:justify-between md:justify-between lg:gap-0 gap-6 px-6 lg:px-0'>
      <div className=' flex flex-col gap-[10px]'>
        <Link href='/'>
          <h1 className=' font-bold text-[#262626] text-[40px] leading-[48px] cursor-pointer'>aBit</h1>
        </Link>
        <h3 className=' font-ptsherif text-[20px] leading-6 max-w-[312px]'>Changing the way in which creators and fans interact.</h3>
      </div>
      <div>
        <div className=' flex flex-row lg:gap-[24px] gap-6'>
            <div className=' h-auto w-[1px] bg-[#9F9D9D]'></div>
            <div className=' flex flex-col gap-[18px]'>
                <Link href='/'>
                  <p className=' font-bold text-[14px] text-[#262626] leading-4 cursor-pointer'>Home</p>
                </Link>
                <p className=' font-bold text-[14px] text-[#262626] leading-4 cursor-pointer'>Are you a Creator?</p>
                <p className=' font-bold text-[14px] text-[#262626] leading-4 cursor-pointer'>Support</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
