"use client"

import { ChevronRight, NotepadText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ProblemDescriptionProps {
    description: string | undefined,
    questionName:string
}

const ProblemDescription = ({description,questionName}:ProblemDescriptionProps) => {
  return (
    <div  className="flex flex-col bg-accent border-border border-[1px] rounded-lg ">
      <section className="flex items-center justify-between text-md font-semibold border-b-[1px] border-border px-3 p-1">
      <h1 className='flex gap-2'>

      <NotepadText size={20}  color='green'/>
        Description
      </h1>
      <Link className='text-sky-600 hover:text-sky-400 flex items-center gap-1 ' href={`/submissions/${questionName}`}>
      
      Submissions
      <ChevronRight size={18} />
      </Link>
      
      </section>
        <ReactMarkdown className="description px-2 py-1 overflow-y-scroll" remarkPlugins={[remarkGfm]}>
                {description}
        </ReactMarkdown>

    </div>
  )
}

export default ProblemDescription