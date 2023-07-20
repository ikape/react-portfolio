import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className='fixed w-full h-[80px] flex justify-between items-center px-4 
    dark:bg-[#0a192f] text-gray-900  bg-white dark:text-white'
    >
      <div>
        <h4 className='text-lg'>II</h4>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>My stacks</li>
        <li>My work</li>
        <li>Contact me</li>
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className='text-2xl cursor-pointer' />
          ) : (
            <MdNightsStay className='text-2xl cursor-pointer' />
          )}
        </div>
      </ul>

      {/* Toggle */}

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center dark:bg-[#0a192f] text-gray-900  bg-white dark:text-white"
        }
      >
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className='text-2xl cursor-pointer' />
          ) : (
            <MdNightsStay className='text-2xl cursor-pointer' />
          )}
        </div>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>My stack</li>
        <li className='py-6 text-4xl'>My works</li>
        <li className='py-6 text-4xl'>Contact me</li>
      </ul>

      {/* socials */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/*  */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          {/*  */}

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
