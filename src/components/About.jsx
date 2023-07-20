import React from "react";

export const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen dark:bg-[#0a192f] text-gray-900 bg-white dark:text-white'
    >
      {/* container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#1c6e8c]'>
              Welcome
            </p>
          </div>

          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi, <span>I'm Isaac,</span>nice to meet you. Please take a look
              around
            </p>
          </div>

          <div className=''>
            <p>
              I'm someone who is highly driven by knowledge, that is the
              continuous process of learning new and additional things every day
              is fulfilling to me. Being in an organization that have a well
              structured vision and personal development will not be left out
              because it is very vital for creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
