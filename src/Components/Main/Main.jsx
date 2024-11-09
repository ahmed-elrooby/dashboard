"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import ProfileImage from "../../Images/profile.jpg"

import { context } from '@/ContextData/ContexValue';
import { FaRegUser } from 'react-icons/fa';
const Profile = () => {
const {userData} = useContext(context)
  return <>
    <div className=' mx-auto w-full rounded-lg bg-white p-2 '>
      <div className=''>
        <h1 className='font-semibold text-[20px] my-4 border-b pb-2'>General Setting
        </h1>
        <div className=''>

          <div className=''>
            <Image className='p-[2px] border-2 border-[--semi-color] w-[50px] h-[50px] rounded-full' src={ProfileImage} alt='Profile' />

          </div>
          <div className='flex flex-col items-start mt-[20px] gap-4'>
            <div className='flex-col md:flex-row flex items-center gap-[50px] capitalize  text-[20px] '>
              <h4 className='flex items-center gap-3 pl-2 pr-[70px] rounded-sm py-[8px]  bg-[#F8FAFC]'>
                <FaRegUser size={18} /> {userData.firstName} </h4>
              <h4 className='flex items-center gap-3 pl-2 pr-[70px] py-[8px] rounded-sm  bg-[#F8FAFC]'>
                <FaRegUser size={18} /> {userData.lastName}</h4>
            </div>
            <h3 className='text-[20px] bg-[#F8FAFC] w-full p-2 rounded-sm'>{userData.email}</h3>
            <h1 className='capitalize text-[20px] bg-[#F8FAFC] w-full p-2 rounded-sm'>{userData.expertise}</h1>
            <h1 className='capitalize text-[20px] bg-[#F8FAFC] w-full p-2 rounded-sm'>{userData.biography}</h1>

          </div>
        </div>
      </div>
    </div>
  </>
}

export default Profile