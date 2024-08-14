import React from 'react'
import { TiHeart } from "react-icons/ti";
export default function Footer() {
  return (
    <div className='w-screen flex flex-col items-center -mt-10'>
        <p className='text-[#4070f4] flex items-center gap-1 font-bold'><span>Made With</span><span className='text-red-500 dark:text-white text-[22px]'><TiHeart /></span><span>by Khine Zin Myint</span></p>
        <p className='text-slate-500 text-xs'>Copyright &copy; 2022</p>
    </div>
  )
}
