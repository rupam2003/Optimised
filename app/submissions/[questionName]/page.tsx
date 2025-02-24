import ProblemDescription from '@/components/ProblemDescription';

import { api } from '@/convex/_generated/api';
import { convexAuthNextjsToken } from '@convex-dev/auth/nextjs/server';
import { fetchQuery } from "convex/nextjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react';
import { Code } from '@/components/Code';
import { CalendarCheck2, NotepadText } from 'lucide-react';

interface Params {

    questionName: string
  
}


const Page =  async ({params}:any) => {

  const resolvedParams:Params = await params;
  const problem = await fetchQuery(api.problems.getQuestion, 
    {name: resolvedParams.questionName}
  );
  const submissions = await fetchQuery(api.submit.getSubmissions,
    { question:resolvedParams.questionName},
    { token: await convexAuthNextjsToken() }
  )
  
  const LANGUAGE_NAMES = new Map([
    ["cpp", "C++"],
    ["java", "Java"],
  ]);
  
  
  return (
    <>
    
    {problem && <div className='mx-3 gap-3 lg:h-[92vh] py-3 flex flex-col lg:flex-row justify-center'>
      <ProblemDescription questionName={problem.name||""} description={problem.description} />
      
      {/* SUBMISSIONS COMPONENT */}
      <div className='h-full rounded-lg font-semibold bg-accent lg:min-w-[45vw] border border-border'>
      
      <h1 className=' p-1 px-3 border-b flex items-center gap-2'>
      <CalendarCheck2 size={18} color='yellow'/>
        Submissions
      </h1>
      <div className='px-3 lg:max-h-[80vh] mb-10 overflow-y-scroll'>

        {
          submissions.reverse().map((e) =>{
            const date = new Date(e._creationTime)
            return <Accordion key={e._id} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className='flex'>
                {e.passed
                ?<>
                  <h1 className='text-lg font-bold text-green-600'>Right Answer</h1> 
                  <h1 className='text-lg font-bold text-green-600'>{LANGUAGE_NAMES.get(e.language)}</h1> 
                  <h1 className='text-lg font-bold text-green-600'>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</h1> 
                </>
                :<>
                  <h1 className='text-lg font-bold text-red-600'>Wrong Answer</h1> 
                  <h1 className='text-lg font-bold text-red-600'>{LANGUAGE_NAMES.get(e.language)}</h1> 
                  <h1 className='text-lg font-bold text-red-600'>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</h1> 
                </> 
                }
                
              </AccordionTrigger>
              <AccordionContent>
                <Code code={e.code} lang={e.language}/>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          })
        }

        </div>
        

    </div>
      
      
    </div>}
    </>




    
    
  );
};

export default Page;

