"use client"
import React from 'react'
import { AiFillDelete } from "react-icons/ai";

const OrderedCourse = () => {
  return <>
  <div className='mt-5'>
<div className='w-[90%] '>
    <h1 className='w-full p-2 text-center capitalize rounded-md bg-black text-white'>course ordered</h1>
    <table className='w-full border-y  mt-5'>
        <thead className='w-full  text-center transition-all hover:shadow-lg'>
            <tr className='border-y text-center   bg-[--semi-color] text-white capitalize transition-all  py-3 px-2 hover:shadow-lg '>
                <th>ordered id </th>
                <th>course id</th>
                <th>student email</th>
                <th>ordered date</th>
                <th>amount</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody className='space-y-3'>
                        {[1, 2,3].map((_, index) => (
                            <tr key={index} className='border-y hover:bg-gray-300 text-center transition-all p-2'>
                                <td> {index + 1}</td>
                                <td>now</td>
                                <td>now</td>
                                <td>now</td>
                                <td>now</td>
                                <td className='transition-alls cursor-pointer hover:text-[--semi-color] flex items-center justify-center  hover:scale-[1.3]'><AiFillDelete /></td>

                            </tr>
                        ))}
                    </tbody>
    </table>
</div>


  </div>
  </>
}

export default OrderedCourse