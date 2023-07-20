import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
// import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
// import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
// import Mongo from "../assets/mongo.png";

export const Skills = () => {

const techs = [
  {
    id: 1,
    src: HTML,
    title: "HTML",
    style: "shadow-orange-500"
  },
  {
    id: 2,
    src: CSS,
    title: "CSS",
    style: "shadow-blue-500"
  },
  {
    id: 3,
    src: JavaScript,
    title: "JAVASCRIPT",
    style: "shadow-yellow-500"
  },
  {
    id: 4,
    src: Node,
    title: "NODE",
    style: "shadow-green-500"
  },
  {
    id: 5,
    src: GitHub,
    title: "GITHUB",
    style: "shadow-gray-500"
  },
  {
    id: 6,
    src: Tailwind,
    title: "TAILWIND",
    style: "shadow-sky-400"
  }
];


  return (
    <div
      name='skills'
      className='w-full h-screen dark:bg-[#0a192f] text-gray-900 bg-white dark:text-white'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#1c6e8c] '>
            Skills
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${style}`}
            >
              <img className='w-20 mx-auto' src={src} alt='icon' />
              <p className='my-4'>{title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
