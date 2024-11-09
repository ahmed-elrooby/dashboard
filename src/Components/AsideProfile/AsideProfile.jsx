import Link from 'next/link'
import React from 'react'
import { TbPasswordUser } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { RiAccountPinBoxFill } from "react-icons/ri";


const AsideProfile = () => {
  return <>
<div className='bg-white rounded-lg w-full md:w-[240px]  p-4 '>
<aside className='p-2  '>
    <div>
        <ul className='flex flex-col gap-3 '>
        <li className='border-b'>
        <Link
         className=' mb-3 group focus:text-white  flex items-center gap-2 capitalize focus:bg-[--semi-color] text-[#475569] hover:text-white hover:bg-[--semi-color] py-4 px-4 rounded-lg'
          href="/Profile">
                <div className='flex transition-all text-[--semi-color] group-focus:text-white group-hover:text-white group-focus:bg-[#8B5CF6] group-hover:bg-[#8B5CF6] items-center justify-center p-[9px] rounded-full bg-[--second-color]'>
                <IoSettings size={24}/>
                </div>
                <h1 className='text-[19px]'>general</h1>
                </Link>
            </li>
      
            <li className='border-b'>
            <Link
             className=' mb-3 group  focus:text-white flex items-center gap-2 capitalize focus:bg-[--semi-color] text-[#475569] hover:text-white hover:bg-[--semi-color] py-4 px-4 rounded-lg'
              href="Profile/Acoount">
            
            <div className='flex transition-all text-[--semi-color] group-focus:text-white group-hover:text-white group-focus:bg-[#8B5CF6] group-hover:bg-[#8B5CF6] items-center justify-center p-[9px] rounded-full bg-[--second-color]'>
            <RiAccountPinBoxFill size={24} />


</div>
            <h1 className='  text-[19px]'>account</h1>
            </Link>
            </li>
        
           
           
            
            <li >
            <Link
             className=' mb-3 group   flex items-center gap-2 capitalize focus:bg-[--semi-color] text-[#475569] hover:text-white focus:text-white hover:bg-[--semi-color] py-4 px-4 rounded-lg'
             href="/Profile/Changepassword">
                <div className='flex transition-all text-[--semi-color] group-focus:text-white group-hover:text-white group-focus:bg-[#8B5CF6] group-hover:bg-[#8B5CF6] items-center justify-center p-[9px] rounded-full bg-[--second-color]'>
                <TbPasswordUser size={28} />


</div>
            <h1 className=' text-[18px]'> password</h1>
            </Link>
            </li>
            
            
        </ul>
    </div>
  </aside>
</div>
  </>
}

export default AsideProfile;