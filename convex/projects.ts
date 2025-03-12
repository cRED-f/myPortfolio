import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

// Generate a URL for uploading an image to Convex storage
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// Create a new project with image reference
export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    link: v.string(),
    imageId: v.string(),
  },
  handler: async (ctx, args) => {
    // Validate the image ID exists in storage
    const exists = await ctx.storage.getUrl(args.imageId);
    if (!exists) {
      throw new ConvexError("Image not found in storage");
    }

    // Insert the project data
    return await ctx.db.insert("projects", {
      title: args.title,
      description: args.description,
      link: args.link,
      imageId: args.imageId,
      createdAt: Date.now(),
    });
  },
});

// Get all projects, sorted by createdAt (newest first)
export const getProjects = query({
  handler: async (ctx) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_createdAt")
      .order("desc")
      .collect();

    // Add image URLs to the projects
    return await Promise.all(
      projects.map(async (project) => {
        const imageUrl = await ctx.storage.getUrl(project.imageId);
        return {
          ...project,
          image: imageUrl,
        };
      })
    );
  },
});
