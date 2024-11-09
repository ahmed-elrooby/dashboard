"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoList } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdReviews,MdLogout   } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { context } from '@/ContextData/ContexValue';


const Aside = () => {
  const {logOut} = useContext(context)
  return <>
<div className='bg-white min-h-screen pt-3 '>
<aside className='p-2 w-fit md:w-[240px]'>
    <div>
        <ul className='flex flex-col gap-3 '>
            <li>
                <Link className=' font-bold flex items-center gap-2 capitalize focus:bg-[#f1f5f9] text-[--semi-color] hover:bg-[#f1f5f9] py-2 px-4 rounded-lg' href="/">
                <IoList size={24}/>
                <h1 className='hidden md:block text-[19px]'>Dashboard</h1>
                </Link>
            </li>
      
            <li>
            <Link className=' font-bold flex items-center gap-2 capitalize focus:bg-[#f1f5f9] text-[--semi-color] hover:bg-[#f1f5f9] py-2 px-4 rounded-lg' href="/Student">
            <FaUserFriends size={24} />
            <h1 className='hidden md:block  text-[19px]'>students</h1>
            </Link>
            </li>
      
            <li>
            <Link className=' font-bold flex items-center gap-2 capitalize focus:bg-[#f1f5f9] text-[--semi-color] hover:bg-[#f1f5f9] py-2 px-4 rounded-lg' href="/Courses">
            <FaGraduationCap size={24} />
            <h1 className='hidden md:block text-[19px]'>courses</h1>
            </Link>
            </li>
            <li>
            <Link className=' font-bold flex items-center gap-2 capitalize focus:bg-[#f1f5f9] text-[--semi-color] hover:bg-[#f1f5f9] py-2 px-4 rounded-lg' href="/Teacher">
            <GiTeacher  size={24} />
            <h1 className='hidden md:block text-[19px]'>Teachers</h1>
            </Link>
            </li>
            <li>
            <Link className=' font-bold flex items-center gap-2 capitalize focus:bg-[#f1f5f9] text-[--semi-color] hover:bg-[#f1f5f9] py-2 px-4 rounded-lg' href="/FeedBack">
            <MdReviews size={24} />
            <h1 className='hidden md:block text-[19px]'>feedback</h1>
            </Link>
            </li>
            
           
            
            <li onClick={logOut} className='cursor-pointer font-bold flex items-center gap-2 capitalize focus:bg-[#f1f5f9] text-[--semi-color] hover:bg-[#f1f5f9] py-2 px-4 rounded-lg' href="/">
            <MdLogout  size={28} />
            <h1 className='hidden md:block text-[19px]' >log out</h1>
            </li>
            
        </ul>
    </div>
  </aside>
</div>
  </>
}

export default Aside