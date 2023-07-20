import React from 'react'
import pic from '../assets/projects/Screenshot (2).png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Card = () => {
   
    const cardItems = [
      {
        id: 1,
        projectTitle: "The Coldest Sunset",
        describtion:
          "I'm someone who is highly driven by knowledge, that is the continuous process of learning new and additional things every day is fulfilling to me. Being in an organization that have a well structured vision and personal development will not be left out because it is very vital for creativity.",
        stack1: "react",

        stact2: "api",
        stack3: "node",
        github: <FaGithub size={30} />,
        live: <FaLinkedin size={30} />
      }
    ];

  return (
    <div className='w-full h-full dark:bg-[#0a192f] text-gray-900 bg-white dark:text-white'>
      {/*  */}
      <div className='p-2 pb-8 flex justify-center'>
        <p className='text-4xl font-bold inline border-b-4 border-[#1c6e8c] '>
          My works
        </p>
      </div>

      {/*  */}
      <div className='pt-10'>
        {cardItems.map(
          ({
            id,
            projectTitle,
            describtion,
            stack1,
            stact2,
            stack3,
            github,
            live
          }) => (
            <div
              key={id}
              className='max-w-sm rounded overflow-hidden shadow-lg border'
            >
              <img className='w-full' src={pic} alt='Sunset in the mountains' />
              <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{ projectTitle}</div>
                <p className='text-white-700 text-base'>
                {describtion}
                </p>
              </div>
              <div className='px-6 pt-4 pb-2 flex justify-evenly '>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  {stack1}
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                 {stact2}
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  {stack3}
                </span>
              </div>

              {/*  */}
              <div class='flex justify-around mt-4 space-x-3 md:mt-6 pb-6 dark:bg-[#0a192f] text-gray-900  bg-white dark:text-white'>
                <a
                  href='/'
                  class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
                >
                 {github}
                </a>
                <a
                  href='/'
                  class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
                >
                  {live}
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
