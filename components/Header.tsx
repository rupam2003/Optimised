"use client"

import { api } from '@/convex/_generated/api'
import { useAuthActions } from '@convex-dev/auth/react'
import { useQuery } from 'convex/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from './ui/button'



const Header = () => {

    const session = useQuery(api.users.viewer)
    return (
    <header className='font-bold border-b-[1px] backdrop-blur-2xl bg-opacity-20 z-50 sticky top-0   w-full  bg-black  '>
      <div className='mx-auto flex justify-between items-center max-w-[650px]'>
        
        <div className='flex justify-center items-center gap-2 ml-4 m-1.5'>
          <figure className='w-9 h-9  relative '>
            <Image className='rounded-full' src={"\code.png"} fill alt={"profile"}/>
          </figure>
          <h1 className='font-semibold text-xl '>Optimised</h1>
        </div>
        
        {
          <div className='flex gap-3 mr-3'>
            {
                session?.user?.image && 
                <div className='w-9 h-9  relative '>
                    <Image className='rounded-full' src={session?.user?.image} fill objectFit='contain' alt={"profile"}/>
                </div>
            }
            {session?.status == "authenticated" && <SignOut/>}
            {session?.status == "unauthenticated" && <SignInWithGoogle/>}
        </div>
 
        }
      </div>  
    </header>
  )
}

export default Header


function SignOut() {
    const session = useQuery(api.users.viewer)
    const router = useRouter()
    const { signOut } = useAuthActions();
    useEffect(() => {
      if(session?.status == "unauthenticated")
        router.push("/")
      
    }, [session,router])
    return (
      <Button
        className="flex-1"
        variant="outline"
        type="button"
        onClick={() => {
          signOut()    
        }}
      >
        Sign Out
      </Button>
    );
  }

function SignInWithGoogle() {
    const { signIn } = useAuthActions();
    const session = useQuery(api.users.viewer)
    const router = useRouter()
    useEffect(() => {
      if(session?.status == "unauthenticated")
       {
         router.push("/")
         router.refresh()
      } 
        
      
    }, [session])
    return (
      <Button
        className="flex-1"
        variant="outline"
        type="button"
        onClick={() => void signIn("google", { redirectTo: "/" })}
      >
        Sign In
      </Button>
    );
  }