import React from 'react'
import pic from '../assets/projects/Screenshot (2).png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Card = () => {
  return (
    <div className='w-full h-screen dark:bg-[#0a192f] text-gray-900 bg-white dark:text-white'>
      {/*  */}
      <div className='p-2  flex justify-center'>
        <p className='text-4xl font-bold inline border-b-4 border-[#1c6e8c] '>
          My works
        </p>
      </div>

      {/*  */}
      <div class='max-w-sm rounded overflow-hidden shadow-lg border'>
        <img class='w-full' src={pic} alt='Sunset in the mountains' />
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
          <p class='text-white-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class='px-6 pt-4 pb-2 flex justify-evenly '>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            React
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Api
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Css
          </span>
        </div>

        {/*  */}
        <div class='flex justify-around mt-4 space-x-3 md:mt-6 pb-6'>
          <a
            href='/'
            class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='/'
            class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
