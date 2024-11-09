"use client"
import React, { useState } from 'react'
import { FaRegEye, FaSpinner, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiBriefcase } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import axios from 'axios';
import Joi from 'joi';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { IoMdEyeOff } from 'react-icons/io';
import Link from 'next/link';


const SignUp = () => {
    const successMessage = () => toast.success("Account Created Successfully");
    const [loadding, setLoadding] = useState(false)
    const router = useRouter();
    const [instructor, setInstructor] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        expertise: "",
        biography: ""

    })
    const [show, setShow] = useState(false)
    const showPassword = () => {
        setShow((ele) => !ele)
    }

    //  http://elearningsystem.runasp.net/api/Auth/register-instructor
    // email 
    // password 
    // firstName string
    // lastName string
    // expertise string 
    // biography string

    // start logic 
    //get data from instructor

    const getData = (e) => {
        const instructorId = e.target.id;
        const instructorValue = e.target.value;
        const newInstruct = { ...instructor }
        newInstruct[instructorId] = instructorValue;
        setInstructor(newInstruct)

    }


    //post data
    const postData = async () => {
        setLoadding(true)
        try {

            const { data } = await axios.post("http://elearningsystem.runasp.net/api/Auth/register-instructor", instructor)
            if (data.succeeded === true) {
                successMessage();
                router.push("/SignIn")
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("The new password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");

        } finally {
            setLoadding(false)
        }

    }
    // regular 
    const regExp = (e) => {
        e.preventDefault();
        const schema = Joi.object({
            firstName: Joi.string().min(3).max(13).required(),
            lastName: Joi.string().min(3).max(13).required(),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
                .required(),
            password: Joi.string()
                .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
                .required(),
            expertise: Joi.string().required(),
            biography: Joi.string().required()

        })
        const res = schema.validate(instructor, { abortEarly: false });
        if (res.error === undefined) {
            postData()
        } else {
            toast.error("Please ensure all fields are filled in correctly.");

        }

    }

    return <>
        <div className='bg'>
            <div>
                <form action="" onSubmit={regExp} className=' w-[70%] mx-auto'>
                    <h1 className='text-[25px] capitalize text-[--semi-color] relative after:absolute after:content-[""] after:w-[80%] after:translate-x-[-50%] after:left-[50%] after:h-[2px] after:bg-[--semi-color] after:bottom-[-10px]   before:absolute before:content-[""] before:w-[15px] before:translate-x-[-50%] before:left-[50%] before:bottom-[-16px] before:h-[15px] before:rounded-full before:bg-[--semi-color]  font-bold mb-[30px] md:mb-[50px] text-center'>Create Admin Account</h1>
                    <div className='relative w-full '>

                        <FaUser className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
                        <input onChange={getData} className='outline-none w-full pl-[30px] bg-transparent text-[18px]  border-b-2 py-2  border-b-[#E4E4E4] ' type="text" name="firstName" id="firstName" placeholder='first Name' />
                    </div>

                    <div className='relative w-full mt-[10px] md:mt-[15px] '>

                        <FaUser className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
                        <input onChange={getData} className='outline-none w-full pl-[30px] bg-transparent text-[18px]  border-b-2 py-2  border-b-[#E4E4E4] ' type="text" name="lastName" id="lastName" placeholder='lirst Name' />
                    </div>
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
                            type={`${show ? "text" : "password"}`}
                            name="password" id="password" placeholder='password ' />
                        <span onClick={showPassword} className="absolute cursor-pointer right-2 top-3">{show ? <IoMdEyeOff className="text-[20px] text-[--semi-color]" /> : <FaRegEye className="text-[20px] text-[--semi-color]" />}</span>

                    </div>

                    <div className='relative w-full mt-[10px] md:mt-[15px] '>

                        <FiBriefcase className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
                        <input onChange={getData} className='outline-none w-full pl-[30px] bg-transparent text-[18px] capitalize border-b-2 py-2  border-b-[#E4E4E4] ' type="text" name="expertise" id="expertise" placeholder='your Field' />
                    </div>
                    <div className='relative w-full mt-[10px] md:mt-[15px] '>

                        <TiDocumentText className='text-gray-400 top-[10px] text-[19px] absolute left-0' />
                        <input onChange={getData} className='outline-none w-full pl-[30px] bg-transparent text-[18px] capitalize border-b-2 py-2  border-b-[#E4E4E4] ' type="text" name="biography" id="biography" placeholder=' your experience' />
                    </div>
                    <button type="submit" className=' w-full mt-[10px] md:mt-[25px] text-[--semi-color] transition-all hover:bg-[--semi-color] hover:text-white font-bold capitalize  cursor-pointer border-2 border-[--semi-color] rounded-full px-4 py-[8px]' >
                        {loadding ? <FaSpinner className="mx-auto text-[22px] animate-spin" /> : "Sign Up"}

                    </button>
                    <p className='mt-[10px]'>
                        Alreay have account?{" "}
                        <Link
                            href="/SignIn"
                            className="text-[--semi-color] transitin-all hover:text-[#CBB0F8] mt-[15px] font-bold"
                        >
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </>
}

export default SignUp
