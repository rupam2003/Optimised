
import ProblemDescription from '@/components/ProblemDescription';
import ProblemSubmission from '@/components/ProblemSubmission';
import { api } from '@/convex/_generated/api';
import { fetchQuery } from "convex/nextjs";
import React from 'react';

interface Params {

    id: string
  
}


const Page =  async ({params}:any) => {

  const resolvedParams:Params = await params;
  const problem = await fetchQuery(api.problems.getQuestion, {name: resolvedParams.id});
  const mappedBoilerplates = new Map(problem?.boilerplates?.map((o) => [o.language, o.boilerplate]));
  
  
  return (
    <>
    
    {problem && <div className='mx-3 gap-3 lg:h-[92vh] py-3 flex flex-col lg:flex-row justify-center'>
      <ProblemDescription questionName={problem.name||""} description={problem.description} />
      <ProblemSubmission questionName={problem.name||""} boilerplates={mappedBoilerplates}/>
      
    </div>}
    </>




    
    
  );
};

export default Page;

