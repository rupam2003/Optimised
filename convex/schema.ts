import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
export default defineSchema({
  ...authTables,
  messages: defineTable({
    userId: v.id("users"),
    body: v.string(),
  }),
  questions: defineTable({
    name: v.string(),
    description: v.string(),
    cpp_boilerplate: v.string(),
    cpp_template: v.string(),
    java_boilerplate: v.optional(v.string()),
    java_template: v.optional(v.string()),
    difficulty:v.string(),
    testcases: v.array(v.object({
      input: v.any(),
      output: v.any(),
    })
    ),
    
  }),
  questionDescription: defineTable({
    name: v.string(),
    description: v.string(),
    difficulty:v.string(),
 
  }),
  question: defineTable({
    name: v.string(),
    language : v.string(),
    template : v.optional(v.string()),
    boilerplate : v.optional(v.string()),
    

    
    
  }),
});
