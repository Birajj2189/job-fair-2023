import React from 'react'
import { motion, spring } from "framer-motion"

const Main = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <motion.div
    initial={{opacity:0  }}
    animate={{opacity:1 }}
    transition={{duration:2}}
     className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Job Fair 2023</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
    </motion.div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <motion.div 
      initial={{opacity:0 , y:-30}}
      animate={{opacity:1 , y:0}}
      transition={{duration:1.5}}
      className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Authentic Cliche Forage</span>
        </div>
      </motion.div>
      <motion.div
     initial={{opacity:0, y:-30}}
     animate={{opacity:1, y:0}}
     transition={{duration:1.5}}
       className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
        </div>
      </motion.div>
      <motion.div
            initial={{opacity:0, y:-30}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1.5}}
       className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Coloring Book Ethical</span>
        </div>
      </motion.div>
      <motion.div
            initial={{opacity:0 , y:-30}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1.5}}
       className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Typewriter Polaroid Cray</span>
        </div>
      </motion.div>
      <motion.div
            initial={{opacity:0 , y:-30}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1.5}}
       className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Pack Truffaut Blue</span>
        </div>
      </motion.div>
      <motion.div
            initial={{opacity:0 , y:-30}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1.5}}
       className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">The Catcher In The Rye</span>
        </div>
      </motion.div>
    </div>
    <div className='flex items-center justify-center'>
          <motion.button
          initial={{x:'100vw'}}
          animate={{x:0}}
          transition={{type:'spring',stiffness:50,delay:1}}
          className="flex mx-2 w-48 h-20 justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">New Registration</motion.button>
          <motion.button
          initial={{x:'-100vw'}}
          animate={{x:0}}
          transition={{type:'spring',stiffness:50,delay:1}}
          className="flex mx-2 w-48 h-20 justify-center items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply Now</motion.button>
    </div>
  </div>
</section>  )
}

export default Main