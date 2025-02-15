"use client"

import { NotepadText } from 'lucide-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ProblemDescriptionProps {
    description: string
}

const ProblemDescription = ({description}:ProblemDescriptionProps) => {
  return (
    <div  className="flex flex-col bg-accent border-border border-[1px] rounded-lg ">
      <h1 className="flex items-center gap-2 text-md font-semibold border-b-[1px] border-border px-3 p-1">
      <NotepadText size={20}  color='green'/>
        Description
      </h1>
        <ReactMarkdown className="description px-2 py-1 overflow-y-scroll" remarkPlugins={[remarkGfm]}>
                {description}
        </ReactMarkdown>

    </div>
  )
}

export default ProblemDescription