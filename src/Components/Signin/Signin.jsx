"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import  { context } from "@/ContextData/ContexValue";

const Signin = () => {
const {reg,getData,loading,showPassword,show} = useContext(context)

  return (
    <>
      <div className="pt-[100px] h-screen w-[90%] mx-auto mb-[50px]">
      <h1 className='text-[25px] capitalize text-[--semi-color] relative after:absolute after:content-[""] after:w-[50%] after:translate-x-[-50%] after:left-[50%] after:h-[2px] after:bg-[--semi-color] after:bottom-[-10px]   before:absolute before:content-[""] before:w-[15px] before:translate-x-[-50%] before:left-[50%] before:bottom-[-16px] before:h-[15px] before:rounded-full before:bg-[--semi-color]  font-bold mb-[30px] md:mb-[50px] text-center'>
      Administrator Login
      </h1>


         
          <div>
            <form onSubmit={reg} className=' w-[70%] mx-auto'>
                  
            <div className='relative w-full mt-[10px] md:mt-[15px] '>

<MdEmail className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
<input 
onChange={getData}
 className='outline-none w-full pl-[30px] bg-transparent text-[18px]  border-b-2 py-2  border-b-[#E4E4E4] '
 type="email"
  name="email" 
  id="email" 
  placeholder="example@gmail.com"
  />
</div>
<div className='relative w-full mt-[10px] md:mt-[15px] '>

<RiLockPasswordLine className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
<input onChange={getData} className='outline-none w-full pl-[30px] bg-transparent text-[18px]  border-b-2 py-2  border-b-[#E4E4E4] '
    type={`${show ? "password" : "text"}`}
    name="password" id="password" placeholder='password ' />
<span onClick={showPassword} className="absolute cursor-pointer right-2 top-3">{show ? <FaRegEye className="text-[20px] text-[--semi-color]" />:<IoMdEyeOff className="text-[20px] text-[--semi-color]" />}</span>

</div>
<button type="submit" className=' w-full mt-[10px] md:mt-[25px] text-[--semi-color] transition-all hover:bg-[--semi-color] hover:text-white font-bold capitalize  cursor-pointer border-2 border-[--semi-color] rounded-full px-4 py-[8px]' >
                        {loading ? <FaSpinner className="mx-auto text-[22px] animate-spin" /> : "Sign in"}

                    </button>
              <Link
                href="/Forgetpassword"
                className="mt-[10px] block font-bold hover:text-[#CBB0F8] text-[--semi-color] capitalize"
              >
                Forget password
              </Link>
            </form>
          </div>
        </div>
=    </>
  );
};

export default Signin;
