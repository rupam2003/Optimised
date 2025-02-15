import { action, internalQuery, mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { getAuthUserId } from "@convex-dev/auth/server";

export const submitCode = action({
    args:{
        code: v.string(),
        name: v.string(),
        language:v.string()
    },
    handler: async (ctx, args) => {
        const user = await getAuthUserId(ctx)
        if(!user)
            return {
                output: null,
                error: "Unauthorized Access"
            } 
        const code = args.code
        const question = await ctx.runQuery(internal.submit.getQuestion, 
            {
                name: args.name,
                language: args.language
            })
        if (!question) {
            return {
                output: null,
                error: "Question not found"
            }
        }
        let template:string = question.template!
        const newCode:string =  template.replace("// User code here", code)
        // if(args.language == "cpp")
        //     template = questions.cpp_template!
        // else if(args.language == "java")
        //     template = questions.java_template!
        // const newCode:string =  template.replace("// User code here", code)
        const {name,version} = getPistonConstants(args.language)
        

        const res = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language:args.language,
                version: version,
                files: [
                    {
                        name: name,
                        content: newCode
                    }
                ]
                })
            })    
            const data = await res.json()
            console.log(newCode)
            console.log(data) 
            if(data?.run?.stderr !== "") {
                return{
                    output: null,
                    error: data.run.stderr
                }
            }

            try {
                console.log(data.run.output);
                
                const output = JSON.parse(data.run.output)
                return {
                    output: output,
                    error:null
                }
            } catch (error) {
                console.log(error);
                
                return {
                    output: null,
                    error: "Error parsing output"}
            }
            
            
    }
})

export const question = internalQuery({
    args: {
        name: v.string(),
    },
    handler: async (ctx,args) => {
        const question = await ctx.db.query("questions").filter(q => q.eq(q.field("name"),args.name)).first();
        return question;
    },
})
//for new table
export const getQuestion = internalQuery({
    args: {
        name: v.string(),
        language:v.string()
    },
    handler: async (ctx,args) => {
        const question = await ctx.db.query("question")
        .filter(q => q.eq(q.field("name"),args.name))
        .filter(q => q.eq(q.field("language"),args.language)).first();

        
        return question;
    },
})


export const admin = mutation({
    args:{
        code: v.string(),
        name: v.string(),
        language:v.string()
    },
    handler: async (ctx,args) => {
        const code = args.code
        const question = await ctx.runQuery(internal.submit.getQuestion, 
            {
                name: args.name,
                language:args.language
            })
        console.log(question);
        
        if (!question) {
            return null
        }

        await ctx.db.patch(question._id, {template: args.code}) ;    
        
    },  
})

const getPistonConstants = (lang:string) =>{
    if(lang == "cpp") 
    return {
        name:"main.cpp",
        version: "10.2.0"      
    }
    else if(lang == "java") 
    return {
        name:"main.java",
        version: "15.0.2"      
    }
    return{
        name:"main.cpp",
        version: "10.2.0"      
    }
    

}