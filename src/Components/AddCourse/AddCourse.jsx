// "use client"
// import axios from 'axios'
// import Cookies from 'js-cookie'
// import React, { useState } from 'react'

// const AddCourse = () => {
//   const [course, setCourse] = useState({
//     title: "",
//     description: "",
//     shortDescription: "",
//     price: 0,
//     instructorId: "",
//     categoryId: "",
//     thumbnailUrl: "",
//     trailerVideoUrl: "",
//     level: 0,
//     prerequisites: "",
//     learningObjectives: "",
//     estimatedDuration: ""
//   })

//   const getData = (e)=>{
//     const inputName = e.target.id;
//     const inputValue = e.target.value;
//     const newUser = {...course}
//     newUser[inputName] = inputValue;
//     setCourse(newUser);
//     console.log(course)
//   }


//   const addCo = async ()=>
//   {
//     const token = Cookies.get("tokenAdmin");

// const {data} = await axios.post("http://elearningsystem.runasp.net/api/Course",course,{
//   headers:{
//     Authorization:`Bearer ${token} `
//   }
// })
// console.log(data)
//   }


//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     addCo()
//   }
//   return <>
//     <div className='w-full mx-auto'>
//       <div className='bg-white p-3'>
//         <div  >
//           <h1 className='text-[25px] text-[--semi-color] font-bold capitalize mt-2'>osama mohamed</h1>
//           <p className='text-[#47556E] text-[14px]   mt-2'>Let’s check your update today</p>
//         </div>
//         <p className='border-b mt-2 text-[20px] mb-2 pb-2 capitalize font-semibold'>General Information     </p>
//         <form onSubmit={handleSubmit}
//           action=""
//           className='w-[70%] mx-auto '>
//           <input type="text"
//             onChange={getData}
//             name="title"
//             id="title"
//             placeholder='course title '
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//           />
//           <input
//             type="text"
//             onChange={getData}
//             name="description"
//             placeholder='course description '
//             className='px-[5px] outline-none bg-transparent border bcapitalize rounded-lg py-[6px] w-full mt-[15px]'
//             id="description"
//           />
//           <input type="text"
//             onChange={getData}
//             name="shortDescription"
//             placeholder='shortDescription for course '
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             id="shortDescription"
//           />


//           <input type="number"
//             onChange={getData}
//             name="price"
//             placeholder='price'
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             id="price" />
//           <input type="text"
//             onChange={getData}
//             name="instructorId"
//             placeholder='instructorId'
//             className='px-[5px] outline-none bg-transparent border capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             id="instructorId" />

//           <input
//             type="text"
//             onChange={getData}
//             name="categoryId"
//             placeholder='categoryId'
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             id="categoryId" />

//           <input type="text"
//             onChange={getData}
//             name="thumbnailUrl"
//             id="thumbnailUrl"
//             placeholder='thumbnailUrl'
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'

//           />
//           <input type="text"
//             onChange={getData}
//             name="trailerVideoUrl"
//             id="trailerVideoUrl"
//             placeholder='trailerVideoUrl'
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'

//           />
//           <input type="number"
//             name="level"
//             id="level"
//             placeholder='level'
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'

//             onChange={getData} />
//           <input type="text"
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             name="prerequisites"
//             id="prerequisites"
//             placeholder='prerequisites' onChange={getData} />


// <input type="text"
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             name="learningObjectives"
//             id="learningObjectives"
//             placeholder='learningObjectives' onChange={getData} />

// <input type="text"
//             className='px-[5px] outline-none bg-transparent border  capitalize rounded-lg py-[6px] w-full mt-[15px]'
//             name="estimatedDuration"
//             id="estimatedDuration"
//             placeholder='estimatedDuration' onChange={getData} />

//           <input type="submit" value="Add course" className='transition-all hover:bg-[--semi-color] hover:text-white px-4 cursor-pointer block mx-auto font-bold border-2 rounded-lg border-[--semi-color] mt-[20px] py-[5px] text-[--semi-color]' />
//         </form>
//       </div>
//     </div>
//   </>
// }

// export default AddCourse