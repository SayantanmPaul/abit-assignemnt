'use client'
import React from 'react'
import Image from 'next/image';
import {IoWallet,  IoNotifications} from 'react-icons/io5'
import { IoIosArrowDown } from "react-icons/io";
import navBg  from '/assets/nav-bg.png'

const Header = () => {
  return (
    <>
      <div className='bg-cover bg-center'>
        <Image src={navBg} alt='cover image' height={110} width={1920} className=" absolute w-screen h-full -z-10"/>
        <div className=' flex flex-row max-w-[1264px] m-auto items-center justify-between py-9'>
            <h1 className=' font-bold text-2xl leading-7 '>aBit</h1>
            <div className=' flex flex-row gap-4 items-center'>
                <button className=' border-[2px] border-[#764CC2] rounded-full px-[22px] py-[12.5px] font-bold text-xs leading-4 text-[#764CC2]'>
                    Share new video
                </button>
                <IoWallet size={32} className=' opacity-30'/>
                <IoNotifications size={32}  className=' opacity-30'/>
                <Image 
                  src='https://yt3.googleusercontent.com/iWkJUXam8nJBex6hpRRpobgvfWwBJdNntF1RxSuIxcSux36zdwUpVymuWBzSKV09QRef1Mq9=s176-c-k-c0x00ffffff-no-rj' alt='profile-img' width={120} 
                  height={120}
                  className=' w-8 h-8 border border-black rounded-full overflow-hidden'/>
                <IoIosArrowDown size={24} className=' opacity-40'/>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header