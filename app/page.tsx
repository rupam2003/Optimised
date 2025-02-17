"use client"
import { DotBackground } from '@/components/DotBackground'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"
const HomePage = () => {

   // Parent and child animation variants
   const parentVariants = {
    hidden: { opacity:  0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between child animations
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    
      <DotBackground>
      <motion.div
      className=" sm:my-[20vh] my-[10vh] flex flex-col items-center"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        className="bg-slate-800 mb-7 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        variants={childVariants}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>✨ Introducing Optimised</span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </motion.button>

      <motion.h1
        className="sm:text-5xl text-3xl text-center font-bold tracking-tight"
        variants={childVariants}
      >
        Master Your Coding Skills
      </motion.h1>

      <motion.h2
        className="sm:text-xl text-lg text-slate-400 text-center mt-0.5"
        variants={childVariants}
      >
        Practice, Learn, and Excel with Curated Problems
      </motion.h2>

      <motion.div className='my-6' variants={childVariants}>
        <Button asChild>
          <Link className='font-[800]' href={"/problems"}>GET STARTED</Link>
        </Button>
      </motion.div>

      
      </motion.div>
        
    </DotBackground>
      
        
    
  )
}

export default HomePage