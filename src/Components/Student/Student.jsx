"use client"
import React, { useContext } from 'react';
import { context } from '@/ContextData/ContexValue';
import { FaRegEdit } from 'react-icons/fa';
import Link from 'next/link';
import Lottie from 'lottie-react';
import loadding from "../../Images/loading.json"
import ProfileImage from "../../Images/profile.jpg"
import Image from 'next/image';

const Student = () => {
  const { students } = useContext(context);

 

  return (
    <div className='mt-5'>
      <div className='w-[90%] mx-auto'>
        <div>
          <h1 className='text-[20px] text-[--semi-color] font-bold'>Students</h1>
          <p className='text-gray-400'>Let’s check your updates today</p>
        </div>
        {
          students !== null ? (
            <table className='w-full border-y mt-5'>
              <thead className='text-center transition-all hover:shadow-lg'>
                <tr className='border-y bg-[--semi-color] text-white capitalize'>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className='space-y-3'>
                {students.map((stu) => (
                  <tr key={stu.id} className='border-y hover:bg-gray-200 hover:shadow-lg text-center transition-all'>
                    <td className='p-2'>
                      <div className='flex flex-col items-center gap-1'>
                        <Image alt="profile" className='w-[30px] h-[30px] rounded-full' src={ProfileImage} />
                        <span className='text-gray-300'>{stu.id}</span>
                      </div>
                    </td>
                    <td className='p-2'>{stu.firstName} {stu.lastName}</td>
                    <td className='p-2'>{stu.email}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='w-full h-screen flex justify-center items-center'>
              <Lottie className='w-[140px]' animationData={loadding} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Student;
