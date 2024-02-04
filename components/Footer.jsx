import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flex-row items-center justify-between '>
      <div className=' flex flex-col gap-[10px]'>
        <h1 className=' font-bold text-[#262626] text-[40px] leading-[48px]'>aBit</h1>
        <h3 className=' font-Cormorant text-[20px] leading-6 max-w-[312px]'>Changing the way in which creators and fans interact.</h3>
      </div>
      <div>
        <div className=' flex flex-row gap-[24px]'>
            <div className=' h-auto w-[1px] bg-[#9F9D9D]'></div>
            <div className=' flex flex-col gap-[18px]'>
                <p className=' font-bold text-[14px] text-[#262626] leading-4'>Home</p>
                <p className=' font-bold text-[14px] text-[#262626] leading-4'>Are you a Creator?</p>
                <p className=' font-bold text-[14px] text-[#262626] leading-4'>Support</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
