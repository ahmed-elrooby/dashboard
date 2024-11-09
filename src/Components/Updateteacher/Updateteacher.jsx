"use client"
import { context } from '@/ContextData/ContexValue'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Updateteacher = () => {
  const router = useRouter();
  const { instructor } = useContext(context);
  const [update, setUpdate] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    expertise: "",
    biography: ""
  });
  const { id } = useParams();

  //write your logic
  //get data 
  const getData = (e) => {
    const updateName = e.target.id;
    const updateValue = e.target.value;

    const newUpdat = { ...update }
    newUpdat[updateName] = updateValue;
    setUpdate(newUpdat)
    console.log(update)
  }

  useEffect(() => {
    const selectedInstructor = instructor.find(teacher => teacher.id === id);
    if (selectedInstructor) {
      setUpdate({
        id: selectedInstructor.id,
        firstName: selectedInstructor.firstName,
        lastName: selectedInstructor.lastName,
        email: selectedInstructor.email,
        expertise: selectedInstructor.expertise,
        biography: selectedInstructor.biography
      });
    }
  }, [id, instructor]);

  //api
  const updateTech = async () => {
    const token = Cookies.get("tokenAdmin");
    try{
      const { data } = await axios.put(`http://elearningsystem.runasp.net/api/instructors/${update.id}`, update, {
        headers: {
          Authorization: `Bearer ${token} `
        }
      })
      if(data.statusCode === 200){ 
        toast.success("Instructor updated successfully")
        router.push("/Teacher")
      }
    }
    catch(err){
      console.log(err)
    }
   
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTech()
  }

  return <>
    <div className='w-full mx-auto'>
      <div className='bg-white p-3'>
        <div  >
          <h1 className='text-[25px] text-[--secondary-color] font-bold capitalize mt-2'>{update.firstName} {update.lastName}</h1>
          <p className='text-[#47556E] text-[14px]   mt-2'>Let’s check your update today</p>
        </div>
        <p className='border-b mt-2 text-[20px] mb-2 pb-2 capitalize font-semibold'>General Information     </p>
        <form onSubmit={handleSubmit} action="" className='w-[70%] mx-auto '>
          <input type="text" onChange={getData} name="id" id="id" placeholder='your id' className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]' readOnly defaultValue={update.id}
          />
          <input type="text" onChange={getData} name="firstName"
           placeholder='your firstName '
            className='px-[5px] outline-none bg-transparent border bcapitalize rounded-lg py-[6px] w-full mt-[15px]'
             id="firstName"
              defaultValue={update.firstName} />
          <input type="text" onChange={getData} name="lastName" placeholder='your lastName ' className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]' id="lastName" defaultValue={update.lastName} />
          <input type="email" onChange={getData} name="email" placeholder='your Email' className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]' id="email" defaultValue={update.email} />
          <input type="text" onChange={getData} name="expertise" placeholder='your expertise' className='px-[5px] outline-none bg-transparent border capitalize rounded-lg py-[6px] w-full mt-[15px]' id="expertise" defaultValue={update.expertise} />
          <input type="text" onChange={getData} name="biography" placeholder='your biography' className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]' id="biography" defaultValue={update.biography} />
          <input type="submit" value="Update" className='transition-all hover:bg-[--secondary-color] hover:text-white px-4 cursor-pointer block mx-auto font-bold border-2 rounded-lg border-[--secondary-color] mt-[20px] py-[5px] text-[--secondary-color]' />
        </form>
      </div>
    </div>
  </>
}

export default Updateteacher