import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Feedback = () => {
    return (
        <div className='mt-5'>
            <div className='w-[90%] mx-auto'>
                    <div>
                        <h1 className='text-[20px] text-[--semi-color] font-bold'>student's feedback
                        </h1>
                        <p className='text-gray-400'>Let’s check your all feedback

</p>
                   
                </div>

                <table className='w-full  border-y mt-5'>
                    <thead className='text-center transition-all hover:shadow-lg'>
                        <tr className='border-y bg-[--semi-color] text-white capitalize'>
                            <th>#</th>
                            <th>content</th>
                            <th>name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='space-y-3'>
                        {[1, 2,3].map((_, index) => (
                            <tr key={index} className='border-y hover:bg-gray-200 hover:shadow-sm text-center transition-all p-2'>
                                <td> {index + 1}</td>
                                <td>the best place that give courses with good instructors</td>
                                <td>johan</td>
                                <td className='cursor-pointer  flex items-center justify-center text-[--semi-color]'><AiFillDelete className='transition-all hover:text-[--semi-color] hover:scale-[1.3]'/></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feedback;
