"use client"
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { GoSignOut } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import imageProfile from "../../Images/profile.jpg";
import Image from 'next/image';
import { IoMdSearch } from "react-icons/io";
import { context } from '@/ContextData/ContexValue';
import logo from "../../Images/logo-full.svg"
import Cookies from 'js-cookie';

const Header = () => {
  const { logOut, makeSearch, setSearchTerm, searchTerm } = useContext(context);
  const token = Cookies.get("tokenAdmin");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    makeSearch(searchTerm); 
  };

  return (
    <div className='bg-white py-2'>
      <nav className='flex items-center w-[95%] justify-between mx-3'>
        <div className='flex items-center'>
          <Link href="/">
          <Image src={logo} className='w-[100px] h-[50px]  ml-3 ' alt='logo'/>
          </Link>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='flex relative items-center'>
            <IoMdSearch className='absolute left-1' color='#8247FF' size={24} />
            <input 
              onChange={handleChange} 
              placeholder='Search' 
              className='border focus:border-[--semi-color] focus:border transition-all border-[#6B7280] outline-none py-[8px] pl-[30px] px-[15px] rounded-full' 
              type="search" 
              name="search" 
              id="search" 
              autoComplete="off" 

            />
          </div>
        </form>
        <ul className='flex items-center gap-2'>
          <li className="relative w-full text-white">
            <span
              className="relative cursor-pointer flex gap-2 items-center text-[20px] font-bold w-full py-2 capitalize hover:text-[--semi-color]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Image
                src={imageProfile}
                className="rounded-full border-2 border-[--semi-color] p-1 w-[40px] h-[40px] transition-all hover:scale-110"
                alt="Profile"
                width={50}
                height={50}
              />
            </span>
            {isDropdownOpen && (
              <ul className="absolute bg-[--semi-color] border border-[--semi-color] shadow-lg mt-0 rounded-md  right-[20px] w-[150px] z-20">
                {
                  token ? (
                    <>
                      <li className="px-4 py-2 font-bold cursor-pointer hover:bg-[--second-color] hover:rounded-t-md hover:text-[--semi-color]">
                        <Link
                          onClick={() => setIsDropdownOpen(false)}
                          href="/Profile"
                          className="flex items-center w-full text-[22px] gap-2"
                        >
                          <FaRegUser /> Profile
                        </Link>
                      </li>
                      <li onClick={logOut}
                        className="px-4 flex items-center text-[22px] gap-2 py-2 w-full font-bold cursor-pointer hover:bg-[--second-color] hover:rounded-b-md hover:text-[--semi-color]"
                      >
                        <GoSignOut /> Log out
                      </li>
                    </>
                  ) : (
                    <li className="px-4 py-2 font-bold cursor-pointer hover:bg-[--second-color] hover:rounded-t-md hover:text-[--semi-color]">
                      <Link
                        href="/SignUp"
                        className="flex items-center w-full text-[22px] gap-2"
                      >
                        <FaRegUser /> Signup
                      </Link>
                    </li>
                  )
                }
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
