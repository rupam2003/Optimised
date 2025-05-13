"use client"
import { DotBackground } from '@/components/DotBackground'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuthActions } from '@convex-dev/auth/react'
import { ChevronRight } from 'lucide-react'
const HomePage = () => {

  const session = useQuery(api.users.viewer)
  const { signIn } = useAuthActions();
  // Parent and child animation variants
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between child animations
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { filter: "blur(5px)", opacity: 0, y: 20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (

    <motion.div
      className="relative flex flex-col items-center"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <div className=' rounded-full absolute -top-40 shadow-[0_0_300px_220px_#0ff] opacity-25'></div>
      <motion.button
        className="bg-slate-800 mb-7 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-normal leading-6 text-white inline-block sm:mt-[20vh] mt-[10vh]"
        variants={childVariants}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>✨ Introducing Optimised</span>
          <ChevronRight size={16} />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </motion.button>

      <motion.h1
        className="sm:text-5xl text-3xl text-center font-bold tracking-tight"
        variants={childVariants}
      >
        Improve Your Coding Skills
      </motion.h1>

      <motion.h2
        className=" text-lg text-slate-400 text-center mt-0.5"
        variants={childVariants}
      >
        Practice, Learn, and Excel with Curated Problems
      </motion.h2>

      <motion.div className='my-6' variants={childVariants}>
        {session?.status == "unauthenticated"
          ? <Button
            onClick={() => void signIn("google", { redirectTo: "/" })}>
            GET STARTED
          </Button>

          : <Button asChild>
            <Link className='font-[800]' href={"/problems"}>GET STARTED</Link>
          </Button>
        }
      </motion.div>
      <motion.figure
        variants={{
          hidden: { filter: "blur(5px)", opacity: 0, y: 20 },
          visible: { filter: "blur(0px)", opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="p-2 border rounded-2xl my-10 shadow-2xl shadow-black bg-white/5">
        <div
          className="relative rounded-xl w-[90vw] aspect-[16/9.2]  md:w-[750px] sm:w-[600px]">
          <Image fill quality={100} className=" rounded-xl border" src={"/optimised-demo.png"} alt="sd" />
        </div>
      </motion.figure>
    </motion.div>





  )
}

export default HomePage