"use client"

import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import { Braces, CirclePlay, ListChecks, Loader, SquareTerminal } from 'lucide-react';
import { useAction, useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { handleEditorDidMount,handleEditorWillMount } from '@/lib/utils';


interface ProblemSubmissionProps {
  boilerplates: Map<string, string | undefined>
  questionName: string
}

type SubmissionResult = {
    output: any;
    error: null;
} | {
    output: null;
    error: string;
}


// #include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\n// User code here\n\nint main() {\n    // Hardcoded test cases\n    vector<pair<vector<int>, int>> inputs = {\n        {{2, 7, 11, 15}, 9},\n        {{3, 2, 4}, 6},\n        {{3, 3}, 6}\n    };\n    vector<vector<int>> expectedOutputs = {\n        {0, 1},\n        {1, 2},\n        {0, 1}\n    };\n\n    // Print JSON array opening bracket\n    cout << "[";\n\n    for (size_t i = 0; i < inputs.size(); ++i) {\n        vector<int> nums = inputs[i].first;\n        int target = inputs[i].second;\n        vector<int> expected = expectedOutputs[i];\n\n        vector<int> result = twoSum(nums, target);\n\n        // Check if the result matches the expected output\n        bool passed = (result == expected);\n\n        // Output JSON object for the test case\n        cout << "{";\n        cout << "\\"testCase\\": " << (i + 1) << ", ";\n        cout << "\\"passed\\": " << (passed ? "true" : "false") << ", ";\n        cout << "\\"expected\\": [" << expected[0] << ", " << expected[1] << "], ";\n        cout << "\\"got\\": [" << result[0] << ", " << result[1] << "]";\n        cout << "}";\n\n        // Add a comma if not the last test case\n        if (i < inputs.size() - 1) {\n            cout << ",";\n        }\n    }\n\n    // Print JSON array closing bracket\n    cout << "]";\n\n    return 0;\n}\n

const ProblemSubmission = ({boilerplates,questionName}:ProblemSubmissionProps) => {
  console.log(boilerplates);
  
  const [code, setCode] = useState<string|undefined>(boilerplates.get("cpp"))
  const [result, setResult] = useState<SubmissionResult|undefined>()
  const [isLoading, setIsLoading] =useState<boolean>(false)
  const [language, setLanguage] = useState<string>('cpp')
  const submitCode = useAction(api.submit.submitCode)
  const isAdmin = useQuery(api.users.isAdmin)
  const adminMutation = useMutation(api.submit.admin)
  


const handleClicked = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await submitCode({code: code||'',
    name: questionName,
    language:language

    })
    console.log(res)
    
    setResult(res)
    setIsLoading(false)
}


const handleAdmin = async (e:React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  //admin mutation
  const res = await adminMutation({code: code||'',
    name: questionName,
    language
})
  
}




const handleLangChange = async (value:string) => {
  
  setLanguage(value)
  setCode(undefined)
  await wait(100)
  setCode(boilerplates.get(value))
}


  return (
    <div className='flex flex-col gap-3'>
      <section className='relative lg:w-[45vw] bg-accent flex-[2] overflow-y-hidden flex flex-col rounded-lg border-[1px] border-border'>
        <h1 className='flex items-center gap-2 text-md font-semibold p-1 px-3 border-b-[1px] border-border'>
        <Braces size={18} color='yellow'/> 
        Code 
        <Select onValueChange={handleLangChange}>
          <SelectTrigger className="focus:ring-1 focus:ring-offset-0 font-medium h-[25px] w-[150px]">
            <SelectValue placeholder="C++" />
          </SelectTrigger>
          <SelectContent className='outline-none'>
            <SelectItem 
            
            value="cpp">C++</SelectItem>
            <SelectItem 
           
              value="java">Java</SelectItem>
            </SelectContent>
        </Select>
        </h1>
        
        
        <div className=' bg-accent min-h-[410px] flex-1 p-1 rounded-md '>
        {code && <Editor
        language={language}
         
        width="600px"
            height="400px"
            defaultValue={code}
           onChange={(value, event) => {
             setCode(value)
            navigator.clipboard.writeText("`"+value + "`")
           }}
            beforeMount={handleEditorWillMount}
            onMount={handleEditorDidMount}

            options={{
              fontSize:14,
              wordWrap: 'on',
              cursorStyle: 'line',
              cursorWidth: 2,
              cursorBlinking: 'expand',
              scrollbar: {
                verticalScrollbarSize: 0,
                },
                minimap: {enabled: false},
                
              }}
        />
      }
      </div>

        {isAdmin && <Button 
        onClick={handleAdmin} 
        variant={"secondary"}
        className=' flex gap-1 text-green-700 px-2 absolute bottom-3 right-40 font-bold rounded-md'>
          <CirclePlay color='green'/>Admin
        </Button>}
        <Button 
        onClick={handleClicked} 
        variant={"secondary"}
        className='flex gap-1 text-green-700 px-2 absolute bottom-3 right-3 font-bold rounded-md'>
          <CirclePlay color='green'/>Submit
        </Button>
      </section>

    {/* Test Case components */}
      <TestCases isLoading={isLoading} result={result}/>
    
    </div>
    
    
    
  )
}

export default ProblemSubmission


interface TestCasesProps { 
  result: SubmissionResult | undefined,
  isLoading:boolean
}

const TestCases = ({result,isLoading}:TestCasesProps) => {
  
  const [caseNo, setCaseNo] = useState<number>(0)
  
  return (
    <div className=' bg-accent rounded-lg border-[1px] border-border '>
      <h1 className='flex items-center gap-2 text-md font-semibold p-1 px-3 border-b-[1px] border-border'>
      <SquareTerminal size={20} color='orange'/>
      Output
      </h1>
      {isLoading
      ?<div className=' h-[150px] overflow-y-scroll flex items-center justify-center  gap-3 p-2'>
        <Loader className=' animate-spin'/>
        PLEASE WAIT...
      </div>
      :<div className=' h-[150px] overflow-y-scroll gap-3 p-2'>
        
        
        {
        //Error handling
          result?.error && <div className='text-red-500 rounded-md flex flex-col gap-2 font-semibold'>
            <h1>Error while executing --</h1>
            <p className='rounded-md lg:max-w-[500px]'>{result.error}</p>
          </div>
        }
        {
          result?.output && result.output.map((e:any,index:number) => {
            return <Button
            className={`${caseNo == index && "border-yellow-400" } m-1`}
            variant="outline" 
            onClick={() => setCaseNo(index)} 
            key={index}>
              Case {index+1}
            </Button>
          })
        }
        {result?.output && result.output.map((e:any,index:number) => {
          //Only render the selected case
          if(index!== caseNo)
            return null
          const style = "bg-[#233848]/40 p-3 rounded-md"
          return  <div key={index} className={`${e.passed?"text-green-500":"text-red-500"} w-full flex flex-col gap-3 p-2 rounded-md font-semibold`}>
              <h1 className={`${style}`}>Input: {e.input}</h1>
              <p className={`${style}`}>Expected: {JSON.stringify(e.expected)} </p>
              <p className={`${style}`}>Got: {JSON.stringify(e.got)}</p>
            </div> 
          })
        }
        </div>

        }
        
        

        </div>
  )
}



const wait = (delay:number) => new Promise((resolve) => setTimeout(resolve, delay))







