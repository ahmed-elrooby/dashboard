"use client"
import axios from 'axios';
import Joi from 'joi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
export const context = createContext();
const ContexValue = ({children}) => {
const [courses, setCourses] = useState([])
const [students, setStudents] = useState(null)
const [searchTerm, setSearchTerm] = useState("")
const [instructor, setInstructor] = useState([]);
const router = useRouter();
const basUrl = "http://elearningsystem.runasp.net";

  const logOut = () => {
    Cookies.remove("tokenAdmin");
    Cookies.remove("refReshTokenAdmin");
    router.push("/SignIn")
  };
  //students 

  const getstudents =async ()=>{
    const token = Cookies.get("tokenAdmin");
    try{
        const {data} = await axios.get(`${basUrl}/api/students`,{
            headers:{
                Authorization:`Bearer ${token} `
            }
        })
        setStudents(data.data);
    }catch(error){
        console.log(error)
        toast.error("there are not data ")
    }
  
}

// login page 
const [user, setUser] = useState({
  email: "",
  password: "",
});

// Loading state
const [loading, setLoading] = useState(false);

// Show password state
const [show, setShow] = useState(true);
const showPassword = () => {
  setShow((prevState) => !prevState);
};


// Get data from user
const getData = (e) => {
  const userName = e.target.id;
  const userValue = e.target.value;
  const newUser = { ...user };
  newUser[userName] = userValue;
  setUser(newUser);
};
  // Refresh token function
  const refReshFun = async () => {
    try {
      const { data } = await axios.get(`${basUrl}/api/Auth/refresh-token`,
        {
          accessToken: Cookies.get("tokenAdmin"),
          refreshToken: Cookies.get("refReshTokenAdmin"),
        }
      );
      Cookies.set("tokenAdmin", data.data.accessToken, { path: "/" });
    } catch (err) {
      console.log("Error refreshing token:", err);
      toast.error("Invalid email or password.");
      router.push("/SignIn"); // Redirect to SignIn page if refreshing fails
    }
  };

// Send data to login
const sendData = async () => {
  setLoading(true);
  try {
    const { data } = await axios.post(`${basUrl}/api/Auth/login`,
      user
    );
    console.log(user)
    Cookies.set("instructorId", data.data.id, { path: "/" });
        if (data.succeeded === true) {
      toast.success(`Welcome, Your account has been created successfully.`);
      Cookies.set("tokenAdmin", data.data.token, { path: "/" });
      Cookies.set("refReshTokenAdmin", data.data.refreshToken, { path: "/" });
      router.push("/");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    if (error.response?.status === 401) {
      // If 401 error, try refreshing the token
      await refReshFun();
      // Retry the original request
    
  }} finally {
    setLoading(false);
  }
};



// Regular expression validation
const reg = (e) => {
  e.preventDefault();
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
      .required(),
  });
  const joiResponse = schema.validate(user, { abortEarly: false });
  if (joiResponse.error === undefined) {
    sendData();
  } else {
    toast.error(
      "The password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special character."
    );
  }
};

// global search
const makeSearch = async ()=>{
  const token = Cookies.get("tokenAdmin");

  if(searchTerm.length === 0){
    setCourses([]);
    setInstructor([])
    return;
  }
  try{
    const res = await axios.get(`${basUrl}/api/Search/global?searchTerm=${searchTerm}`,{
      headers:{
        Authorization:`Bearer ${token} `
      }
    });
    // console.log(res.data.data.courses)
    setCourses(res.data.data.courses)
    setInstructor(res.data.data.instructors)
  }
  catch(e){
    console.log(e)
  }
 


}


// get instructors
const getInstructors = async ()=>{
    const token = Cookies.get("tokenAdmin")
    try{
      const {data} = await axios.get(`${basUrl}/api/instructors`,{
        headers:{
            Authorization:`Bearer ${token}`
        }

    })
    setInstructor(data.data)
    }
    catch(err){
      console.log(err)
    }
   
}

//delete course 
const Deleted = async (courseId)=>{
  const token = Cookies.get("tokenAdmin");

  try{
    const {data} = await axios.delete(`${basUrl}/api/Course/${courseId}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  if(data.succeeded === true ){
    setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    toast.success("Course deleted successfully");
  }
  }
  catch(err){
console.log(err);
toast.error("An error occurred while deleting the course");

  }
}

useEffect(() => {
  makeSearch();
  getstudents();

getInstructors()
 
}, [])

//get admin 
const [userData, setUserData] = useState([])
const getInstructorsAdmin = async () => {
  const instrId = Cookies.get("instructorId");
  const token = Cookies.get("tokenAdmin")

  const { data } = await axios.get(`${basUrl}/api/instructors/${instrId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  setUserData(data.data)
  console.log(data.data)
}
useEffect(() => {
  getInstructorsAdmin()
}, [])


//get cateogires
const [categories, setCategories] = useState([]);
const getCategories = async () => {
  const token = Cookies.get("tokenAdmin");

  try {
      const {data} = await axios.get(`${basUrl}/api/Category`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      setCategories(data.data ); 
      console.log(data.data)
  } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories");
  }
};

    useEffect(()=>{
        getCategories();

    },[])




  //search for courses only
  const [valueCategory, setValueCategory] = useState("")
  const getCategoryId = (e)=>{

    setValueCategory(e.target.value);
    setSearchTerm(e.target.value)
  }
  
  const searchCourses = async (e) => {
    e.preventDefault();
    if (!searchTerm) return; 
    
    const token = Cookies.get("tokenAdmin");

    try {
        const { data } = await axios.get(`${basUrl}/api/Course/search?searchTerm=${searchTerm}&pageNumber=1&pageSize=10&categoryId=${valueCategory}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(data);
        setCourses(data.data);  
    } catch (err) {
        console.error("Error during search:", err);
        toast.error("Failed to fetch courses");
    }
};

useEffect(() => {
  if (searchTerm && valueCategory) {
      searchCourses();
  }
}, [searchTerm, valueCategory]);


return <context.Provider value={{userData,searchCourses,getCategoryId,showPassword,show,Deleted,getData,reg,loading,categories, logOut,makeSearch,instructor,courses,setCourses, students,setSearchTerm,searchTerm  }}>
{children}
  </context.Provider>
}

export default ContexValue