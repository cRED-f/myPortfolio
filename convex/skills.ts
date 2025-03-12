import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all skills grouped by orbit
export const getAll = query({
  handler: async (ctx) => {
    const skills = await ctx.db.query("skills").collect();

    // Group skills by orbitIndex
    const skillsByOrbit: Record<number, typeof skills> = {};
    skills.forEach((skill) => {
      if (!skillsByOrbit[skill.orbitIndex]) {
        skillsByOrbit[skill.orbitIndex] = [];
      }
      skillsByOrbit[skill.orbitIndex].push(skill);
    });

    return skillsByOrbit;
  },
});

// Create a new skill
export const create = mutation({
  args: {
    name: v.string(),
    iconName: v.string(),
    iconColor: v.string(),
    orbitIndex: v.number(),
    category: v.string(),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const skillId = await ctx.db.insert("skills", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return skillId;
  },
});

// Update an existing skill
export const update = mutation({
  args: {
    id: v.id("skills"),
    name: v.optional(v.string()),
    iconName: v.optional(v.string()),
    iconColor: v.optional(v.string()),
    orbitIndex: v.optional(v.number()),
    category: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;

    await ctx.db.patch(id, {
      ...fields,
      updatedAt: Date.now(),
    });

    return id;
  },
});

// Delete a skill
export const remove = mutation({
  args: {
    id: v.id("skills"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});
