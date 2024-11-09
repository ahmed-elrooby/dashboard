"use client"
import OrderedCourse from '@/Components/OrderedCourse/OrderedCourse'
import { context } from '@/ContextData/ContexValue';
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaBookOpen,FaChalkboardTeacher } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";



const Home = () => {
    const {students,instructor,userData} = useContext(context)
    return <>
        <div>
            <h1 className='text-[--semi-color] font-bold text-[22px] capitalize mb-3'>Welcome back, {userData.firstName} {userData.lastName} </h1>
            <div className='flex flex-col gap-2 md:flex-row mt-4 items-center justify-around'>
            <Link href="/Student" className='w-full'>
             <div className=' border border-[--semi-color] transition-all hover:shadow-lg hover:rotate-[-10deg] px-[20px] py-3 rounded-lg flex bg-white flex-col gap-4 items-start'>
                    <h1 className='text-[20px]  font-bold capitalize text-[--semi-color]'>total student </h1>
                    <div className='flex gap-4 items-center'>
                    <div className='bg-[#f1f5f9] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                        <MdGroups2 color='#8247FF' size={32} />  
                        </div>    
                        <h1 className='text-[20px] font-bold text-[--semi-color]'>{students?students.length:0}</h1>
                        </div>
                </div>
             </Link>


             <Link href="/Teacher" className='w-full'>
             <div className=' border border-[--semi-color] transition-all hover:shadow-lg hover:rotate-[-10deg] px-[20px] py-3 rounded-lg flex bg-white flex-col gap-4 items-start'>
                    <h1 className='text-[20px] capitalize font-bold text-[--semi-color]'>total teachers </h1>
                    <div className='flex gap-4 items-center'>
                    <div className='bg-[#f1f5f9] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                        <FaChalkboardTeacher color='#8247FF' size={32} />  
                        </div>    
                        <h1 className='font-bold text-[20px] text-[--semi-color]'>{instructor?instructor.length:0}</h1>
                        </div>
                </div>
             </Link>



                <div className='w-full border border-[--semi-color] transition-all hover:shadow-lg hover:rotate-[10deg] px-[20px] py-3 rounded-lg flex bg-white flex-col gap-4 items-start'>
                <h1 className='text-[20px] capitalize font-bold text-[--semi-color]'>total courses </h1>
                <div className='flex gap-[20px] items-center'>
                        <div className='bg-[#f1f5f9] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                        <FaBookOpen color='#8247FF' size={32} />  
                        </div>
         <h1 className='font-bold text-[--semi-color]'>2323</h1>
                    </div>
                </div>
            </div>
            <OrderedCourse />
        </div>
    </>
}

export default Home