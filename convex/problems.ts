import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getQuestion = query({
    args: {
        name: v.string(),
    },
    handler: async (ctx,args) => {
        const questionDesc = await ctx.db.query("questionDescription").filter(q => q.eq(q.field("name"),args.name)).first();
        const questionTemplates = await ctx.db.query("question").filter(q => q.eq(q.field("name"),args.name)).collect();
        const boilerplates = questionTemplates.map(({template,_id, _creationTime,name ,...rest}) => rest)
        const question = {...questionDesc,boilerplates}
        return question;
    },
})


export const getAllQuestions = query({
    args: {},
    handler: async (ctx) => {
        const questions = await ctx.db.query("questionDescription").collect();
        
        return questions;
    },
})