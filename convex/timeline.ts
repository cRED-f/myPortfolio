import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Query to get all timeline entries sorted by order
export const getTimeline = query({
  handler: async (ctx) => {
    const timeline = await ctx.db.query("timeline").order("desc").collect();
    return timeline;
  },
});

// Mutation to add a new timeline entry
export const addTimelineEntry = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("timeline", {
      title: args.title,
      content: args.content,
      order: args.order,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Mutation to update a timeline entry
export const updateTimelineEntry = mutation({
  args: {
    id: v.id("timeline"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...update } = args;
    const updatedFields = { ...update, updatedAt: Date.now() };
    return await ctx.db.patch(id, updatedFields);
  },
});

// Mutation to delete a timeline entry
export const deleteTimelineEntry = mutation({
  args: {
    id: v.id("timeline"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
