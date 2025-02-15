"use client"
import React, { useState } from 'react'

const Page = () => {
    const [state, setState] = useState<string>("#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\n// User code here\n\nint main() {\n    // Hardcoded test cases\n    vector<pair<vector<int>, int>> inputs = {\n        {{2, 7, 11, 15}, 9},\n        {{3, 2, 4}, 6},\n        {{3, 3}, 6}\n    };\n    vector<vector<int>> expectedOutputs = {\n        {0, 1},\n        {1, 2},\n        {0, 1}\n    };\n\n    // Print JSON array opening bracket\n    cout << \"[\";\n\n    for (size_t i = 0; i < inputs.size(); ++i) {\n        vector<int> nums = inputs[i].first;\n        int target = inputs[i].second;\n        vector<int> expected = expectedOutputs[i];\n\n        vector<int> result = twoSum(nums, target);\n\n        // Check if the result matches the expected output\n        bool passed = (result == expected);\n\n        // Output JSON object for the test case\n        cout << \"{\";\n        cout << \"\\\"testCase\\\": \" << (i + 1) << \", \";\n        cout << \"\\\"passed\\\": \" << (passed ? \"true\" : \"false\") << \", \";\n        cout << \"\\\"expected\\\": [\" << expected[0] << \", \" << expected[1] << \"], \";\n        cout << \"\\\"got\\\": [\" << result[0] << \", \" << result[1] << \"]\";\n        cout << \"}\";\n\n        // Add a comma if not the last test case\n        if (i < inputs.size() - 1) {\n            cout << \",\";\n        }\n    }\n\n    // Print JSON array closing bracket\n    cout << \"]\";\n\n    return 0;\n}\n")
    const [x,setX] = useState<string>('#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> numToIndex;\n    for (int i = 0; i < nums.size(); ++i) {\n        int complement = target - nums[i];\n        if (numToIndex.find(complement) != numToIndex.end()) {\n            return {numToIndex[complement], i};\n        }\n        numToIndex[nums[i]] = i;\n    }\n    return {};\n}\n\n\n\nint main() {\n    // Hardcoded test cases\n    vector<pair<vector<int>, int>> inputs = {\n        {{2, 7, 11, 15}, 9},\n        {{3, 2, 4}, 6},\n        {{3, 3}, 6}\n    };\n    vector<vector<int>> expectedOutputs = {\n        {0, 1},\n        {1, 2},\n        {0, 1}\n    };\n\n    // Print JSON array opening bracket\n    cout << \"[\";\n\n    for (size_t i = 0; i < inputs.size(); ++i) {\n        vector<int> nums = inputs[i].first;\n        int target = inputs[i].second;\n        vector<int> expected = expectedOutputs[i];\n\n        vector<int> result = twoSum(nums, target);\n\n        // Check if the result matches the expected output\n        bool passed = (result == expected);\n\n        // Output JSON object for the test case\n        cout << \"{\";\n        cout << \"\\\"testCase\\\": \" << (i + 1) << \", \";\n        cout << \"\\\"passed\\\": \" << (passed ? \"true\" : \"false\") << \", \";\n        cout << \"\\\"expected\\\": [\" << expected[0] << \", \" << expected[1] << \"], \";\n        cout << \"\\\"got\\\": [\" << result[0] << \", \" << result[1] << \"]\";\n        cout << \"}\";\n\n        // Add a comma if not the last test case\n        if (i < inputs.size() - 1) {\n            cout << \",\";\n        }\n    }\n\n    // Print JSON array closing bracket\n    cout << \"]\";\n\n    return 0;\n}\n')
    const handleClicked = (e:any) => {
        e.preventDefault()
        setState( (state) =>state =  state.replace('// User code here', 'vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> numToIndex;\n    for (int i = 0; i < nums.size(); ++i) {\n        int complement = target - nums[i];\n        if (numToIndex.find(complement) != numToIndex.end()) {\n            return {numToIndex[complement], i};\n        }\n        numToIndex[nums[i]] = i;\n    }\n    return {};\n}\n\n'))
        setState((state) => state = state.replaceAll("\n", "\\n"))
        setX((x) => x = x.replaceAll("\n", "\\n"))
        
        setX((x) => x = x.replaceAll("\"", "\\\""))
        
        console.log(state)
        
    }

    const handleClicked2= (e:any) => {
        e.preventDefault()
        setState((state) => state = state.replaceAll("\\n", "\n"))
         
        
        console.log(state)
        
    }
    return (
    <>
    <pre className='text-wrap'>{state}</pre>
    <button className='bg-blue-700' onClick={handleClicked}>Click me</button>  
    <button className='bg-blue-700' onClick={handleClicked2}>Click me2</button>
    
    <pre className='text-wrap'>{x}</pre>
    </>
)
}

export default Page


{/* <html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Space+Grotesk%3Awght%40400%3B500%3B700"
    />

    <title>Galileo Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div class="relative flex size-full min-h-screen flex-col bg-[#121921] dark group/design-root overflow-x-hidden" style='font-family: "Space Grotesk", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#253546] px-10 py-3">
          <div class="flex items-center gap-4 text-white">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CodeBuddy</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-white text-sm font-medium leading-normal" href="#">Problems</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Contests</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Leaderboard</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Explore</a>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#253546] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Docs</span>
            </button>
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://cdn.usegalileo.ai/sdxl10/e6de352d-793e-4425-a0e6-1b47403e0a22.png");'
            ></div>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap gap-2 p-4">
              <a class="text-[#94adc7] text-base font-medium leading-normal" href="#">Problem 1</a>
              <span class="text-[#94adc7] text-base font-medium leading-normal">/</span>
              <span class="text-white text-base font-medium leading-normal">A. The first question</span>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Problem</h2>
            <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              You are given a string consisting of n characters. You can perform the following operation at most k times: choose a position (not necessarily an integer) in the
              string and delete the character at that position. Your goal is to make the string a palindrome. A string a is a palindrome if it reads the same forward and backward.
              For example, strings "abba", "racecar" and "z" are palindromes, while strings "hello", "world" and "abc" are not. If it is impossible to make the string a palindrome,
              output -1. Otherwise, output the minimum number of characters you need to delete to make the string a palindrome.
            </p>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Input</h2>
            <div class="p-4 grid grid-cols-2">
              <div class="flex flex-col gap-1 border-t border-solid border-t-[#354c64] py-4 pr-2">
                <p class="text-[#94adc7] text-sm font-normal leading-normal">n (1 ≤ n ≤ 2*10^5) — the length of the string</p>
                <p class="text-white text-sm font-normal leading-normal">5</p>
              </div>
              <div class="flex flex-col gap-1 border-t border-solid border-t-[#354c64] py-4 pl-2">
                <p class="text-[#94adc7] text-sm font-normal leading-normal">k (0 ≤ k ≤ n) — the maximum number of operations you can perform</p>
                <p class="text-white text-sm font-normal leading-normal">2</p>
              </div>
              <div class="flex flex-col gap-1 border-t border-solid border-t-[#354c64] py-4 pr-2 col-span-2 pr-[50%]">
                <p class="text-[#94adc7] text-sm font-normal leading-normal">s (1 ≤ |s| ≤ 2*10^5) — the string</p>
                <p class="text-white text-sm font-normal leading-normal">aaxaa</p>
              </div>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Output</h2>
            <div class="p-4 grid grid-cols-2">
              <div class="flex flex-col gap-1 border-t border-solid border-t-[#354c64] py-4 pr-2">
                <p class="text-[#94adc7] text-sm font-normal leading-normal">-1 if it is impossible to make the string a palindrome</p>
                <p class="text-white text-sm font-normal leading-normal">1</p>
              </div>
              <div class="flex flex-col gap-1 border-t border-solid border-t-[#354c64] py-4 pl-2">
                <p class="text-[#94adc7] text-sm font-normal leading-normal">
                  Otherwise, output the minimum number of characters you need to delete to make the string a palindrome.
                </p>
                <p class="text-white text-sm font-normal leading-normal"></p>
              </div>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Examples</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#354c64] bg-[#1a2632] p-4 flex-col">
                <div class="text-white" data-icon="Terminal" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">Input</h2>
                  <p class="text-[#94adc7] text-sm font-normal leading-normal">5 2 aaxaa</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#354c64] bg-[#1a2632] p-4 flex-col">
                <div class="flex flex-col gap-1">
                  <h2 class="text-white text-base font-bold leading-tight">Output</h2>
                  <p class="text-[#94adc7] text-sm font-normal leading-normal">1</p>
                </div>
              </div>
            </div>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Run</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-white text-base font-medium leading-normal pb-2">Your solution</p>
                <textarea
                  placeholder="# Write your solution here..."
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#354c64] bg-[#1a2632] focus:border-[#354c64] min-h-36 placeholder:text-[#94adc7] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html> */}
