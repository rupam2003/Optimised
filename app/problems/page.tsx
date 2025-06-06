import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';
import Link from 'next/link';
import React from 'react'



const Page = async () => {
    const problems = await fetchQuery(api.problems.getAllQuestions);
    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-xl font-semibold text-center mt-10 mb-5 text-neutral-300">
                List of questions...
            </h1>
            {
                problems.map((problem: any, index: number) => {
                    const name: string = problem.name.replace(/-/g, " ")
                    return (
                        <Button
                            className='w-[95%] lg:w-[50%] h-12 my-2 text-md justify-between hover:bg-[#233848]/40'
                            variant={"outline"}
                            key={name}
                            asChild>

                            <Link href={`/problem/${problem.name}`} >
                                <h1 className=' hover:text-blue-400 capitalize font-bold'>{index + 1}. {name}</h1>
                                <h2 className='text-green-600'>{problem.difficulty}</h2>
                            </Link>
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default Page