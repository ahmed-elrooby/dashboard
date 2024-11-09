"use client"
import { context } from '@/ContextData/ContexValue';
import Link from 'next/link';
import React, {  useContext } from 'react';
import { FaRegEdit } from 'react-icons/fa';

const TeacherPage = () => {
const {instructor} = useContext(context)
    
    return (
        <div className='mt-5'>
            <div className='w-[90%] mx-auto'>
                    <div>
                        <h1 className='capitalize text-[20px] text-[--semi-color] font-bold'>teachers
                        </h1>
                        <p className='text-gray-400'>Let’s check your update today

</p>
                    </div>
                    

                <table className='w-full  border-y mt-5'>
                    <thead className='text-center transition-all hover:shadow-lg'>
                        <tr className='border-y bg-[--semi-color] text-white capitalize'>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>expertise</th>
                            <th>biography</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='space-y-3'>
                        {instructor?.map((instr, index) => (
                            <tr key={index} className='border-y hover:bg-gray-100 hover:shadow-lg text-center transition-all p-2'>
                                <td className='text-[--semi-color] font-bold'> {index + 1}</td>
                                <td>{instr.firstName} {instr.lastName}</td>
                                <td>{instr.email}</td>
                                <td>{instr.expertise}</td>
                                <td>{instr.biography}</td>
                                <td className='flex  items-center justify-center'>
                                    <div className='p-[5px] cursor-pointer rounded-md flex items-center justify-center bg-[--semi-color] text-white'>
<Link href={`Teacher/${instr.id}`}>
<FaRegEdit className='transition-all hover:scale-[1.2]' size={18} />

</Link>
                                    </div>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherPage;
