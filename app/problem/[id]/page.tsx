
import ProblemDescription from '@/components/ProblemDescription';
import ProblemSubmission from '@/components/ProblemSubmission';
import { api } from '@/convex/_generated/api';
import { fetchQuery } from "convex/nextjs";
import React from 'react';

interface Params {

    id: string
  
}

// const twoSumMarkdown = `
// # Two Sum
// Given an array of integers \`nums\` and an integer \`target\`, return **indices** of the two numbers such that they add up to \`target\`.

// You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

// You can return the answer in **any order**.



// ### Example 1 :
// \`\`\` 
// Input: nums = [2,7,11,15], target = 9  
// Output: [0,1]  
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// \`\`\`

// ### Example 2 :

// \`\`\`
// Input: nums = [3,2,4], target = 6  
// Output: [1,2]
// \`\`\`

// ### Example 3 :
// \`\`\`
// Input: nums = [3,3], target = 6
// Output: [0,1]
// \`\`\`

// ## Constraints
// \`\`\`
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// \`\`\`
// **Only one valid answer exists.**

// ## Follow-up
// Can you come up with an algorithm that is less than O(n²) time complexity?
// `;


const Page =  async ({params}:any) => {

  const resolvedParams:Params = await params;
  const problem = await fetchQuery(api.problems.getQuestion, {name: resolvedParams.id});
  const mappedBoilerplates = new Map(problem?.boilerplates?.map((o) => [o.language, o.boilerplate]));
  
  
  return (
    <>
    
    {problem && <div className='mx-3 gap-3 lg:h-[92vh] py-3 flex flex-col lg:flex-row justify-center'>
      <ProblemDescription description={problem.description} />
      <ProblemSubmission questionName={problem.name||""} boilerplates={mappedBoilerplates}/>
      
    </div>}
    </>




    
    
  );
};

export default Page;

// "use client"
// import dynamic from 'next/dynamic';
// impr
// const Split = dynamic(() => import('react-split'), { ssr: false });

// export default function MyComponent() {
//   return (
//     <Split
//       sizes={[50, 50]}
//       minSize={100}
//       direction="horizontal"
//       style={{ display: 'flex', height: '100vh' }}
//     >
//       <div className='bg-red-900'>sdasdsd 1</div>
//       <div className='bg-red-900'>dasdsadsa 2</div>
//     </Split>
//   );
// }
