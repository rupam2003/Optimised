import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getQuestion = query({
    args: {
        name: v.string(),
    },
    handler: async (ctx,args) => {
        const question = await ctx.db.query("questions").filter(q => q.eq(q.field("name"),args.name)).first();
        return question;
    },
})


export const getAllQuestions = query({
    args: {},
    handler: async (ctx) => {
        const questions = await ctx.db.query("questions").collect();
        const questionWithoutTemplates = questions.map(({cpp_template, java_template, ...rest}) => rest)
        return questionWithoutTemplates;
    },
})