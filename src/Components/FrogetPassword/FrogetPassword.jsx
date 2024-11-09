"use client"
import Image from 'next/image'
import React,{useState} from "react";
import { FaSpinner } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import axios from 'axios';
import Joi from 'joi';
import toast from 'react-hot-toast';

const ForgetPassword = () => {

  const [loading, setLoading] = useState(false);

const [email,setEmail] = useState(
  {
    email:""
  }
)
const getEmail = (e) => {
  const emailName = e.target.id;
  const emailValue = e.target.value;
  setEmail((prevEmail) => ({
    ...prevEmail,
    [emailName]: emailValue,
  }));
};


//send data 
const sendData = async () => {
  setLoading(true);
  try {
    const { data } = await axios.post(
      "http://elearningsystem.runasp.net/api/Auth/forgot-password",
      email
    );
    console.log(data)
    if (data.succeeded === true) {
      toast.success("If that email address is in our system, we have sent a password reset link to it.");

    } else {
      console.error("there are not error")

    }
  } catch (error) {
    toast.error(
      error?.response?.data.message || "An unexpected error occurred"
    );   } finally {
    setLoading(false);
  }
};

//regExp
let reg = (e) => {
  e.preventDefault();
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
 
  });
  const joiresponse = schema.validate(email, { abortEarly: false });
  if (joiresponse.error === undefined) {
    sendData();
  } else {
    toast.error(error?.response?.data.message);
    console.error(error?.response?.data.message)
  }
};



  return <>
  <div className="my-[100px] w-[90%] mx-auto">
  <h1 className='text-[25px] capitalize text-[--semi-color] relative after:absolute after:content-[""] after:w-[50%] after:translate-x-[-50%] after:left-[50%] after:h-[2px] after:bg-[--semi-color] after:bottom-[-10px]   before:absolute before:content-[""] before:w-[15px] before:translate-x-[-50%] before:left-[50%] before:bottom-[-16px] before:h-[15px] before:rounded-full before:bg-[--semi-color]  font-bold mb-[30px] md:mb-[50px] text-center'>
  Reset Password
  </h1>


<div>
<form action="" className=' w-[70%] mx-auto' onSubmit={reg} >
             
<div className='relative w-full mt-[10px] md:mt-[15px] '>

<MdOutlineMarkEmailRead className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
<input 
onChange={getEmail}
 className='outline-none w-full pl-[30px] bg-transparent text-[18px]  border-b-2 py-2  border-b-[##E4E4E4] '
 type="email"
  name="email" 
  id="email" 
  placeholder="example@gmail.com"
  />
</div>
               
<button type="submit" className=' w-full mt-[10px] md:mt-[25px] text-[--semi-color] transition-all hover:bg-[--semi-color] hover:text-white font-bold capitalize  cursor-pointer border-2 border-[--semi-color] rounded-full px-4 py-[8px]' >
                        {loading ? <FaSpinner className="mx-auto text-[22px] animate-spin" /> : "Send Email"}

                    </button>
  </form> 
</div>
  </div>
  
  </>
}

export default ForgetPassword
