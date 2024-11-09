"use client"
import { context } from '@/ContextData/ContexValue';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

const Courses = () => {
    const { courses, categories, searchCourses,getCategoryId,Deleted } = useContext(context);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='pt-5 bg-white'>
            <div className='w-[90%] mx-auto'>
                <div>
                    <h1 className='text-[20px] text-[--semi-color] font-bold'>
                        Courses
                    </h1>
                    <p className='text-gray-400'>
                        Let's check your update today
                    </p>
                </div>

                <div className='flex justify-between items-center gap-4 mt-4'>
                    <div className='flex-1 max-w-[70%]'>
                        <form onSubmit={searchCourses} action="" className='w-full'>
                            <div className='flex relative w-full items-center'>
                                <IoMdSearch className='absolute left-1' color='#8247FF' size={24} />
                                <input 
 onChange={getCategoryId}                                    placeholder='Search' 
                                    className='border focus:border-[--semi-color] focus:border transition-all block w-full border-[#6B7280] outline-none py-[8px] pl-[30px] px-[15px] rounded-xl bg-[#F8FAFC]' 
                                    type="search" 
                                    name="search" 
                                    id="search" 
                                    autoComplete="off" 
                                />
                            </div> 
                            <button>search</button>
                        </form>
                    </div>

                    {/* Add Course button */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='bg-[--semi-color] text-white py-2 px-4 rounded-lg capitalize font-bold transition-all border-2 border-[--semi-color] hover:bg-white hover:text-[--semi-color] flex items-center gap-2 whitespace-nowrap'
                        >
                            + Add Course
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                <div className="py-1">
                                    <div className="block px-4 py-2 text-sm font-medium border-b text-[--semi-color]">
                                        Select Category
                                    </div>
                                    {categories?.map((ele) => (
                                        <Link
                                            key={ele.id}
                                            href={`Category/${ele.id}`}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[--semi-color] hover:text-white transition-all"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {ele.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <table className='w-full border-y mt-5'>
                    <thead className='text-center transition-all hover:shadow-lg'>
                        <tr className='border-y bg-[--semi-color] text-white capitalize'>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>category</th>
                            <th>Instructor</th>
                            <th>Level</th>
                            <th>Price</th>
                            <th>short Description</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-3">
                        {courses?.length > 0 ? (
                            courses.map((course, index) => (
                                <tr
                                    key={index}
                                    className='w-full border-y hover:bg-gray-200 hover:shadow-lg text-center transition-all'
                                >
                                    <td className='font-bold text-[--main-color]'>{index + 1}</td>
                                    <td>{course.title}</td>
                                    <td>{course.categoryName}</td>
                                    <td>{course.instructorName ? course.instructorName : "someone"}</td>
                                    <td>{course.level}</td>
                                    <td>{course.price}</td>
                                    <td>{course.shortDescription}</td>
                                    <td className="">
                                        <div className='flex gap-2 justify-center items-center'>
                                            <div className="p-1 cursor-pointer rounded-md flex items-center justify-center bg-[--semi-color] text-white">
                                                <FaRegEdit className='transition-all hover:scale-[1.3]' size={18} />
                                            </div>
                                            <div onClick={() => { Deleted(course.id) }} className="p-1 rounded-md cursor-pointer flex items-center justify-center bg-[--semi-color] text-white">
                                                <AiFillDelete className='transition-all hover:scale-[1.3]' size={18} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-4">No courses found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Courses;