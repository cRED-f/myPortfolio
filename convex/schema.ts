import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  timeline: defineTable({
    title: v.string(),
    content: v.string(), // We'll store HTML content as a string
    order: v.number(), // For controlling the display order
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  }),

  skills: defineTable({
    name: v.string(),
    iconName: v.string(), // Store the icon name (e.g., "FaHtml5", "SiTypescript")
    iconColor: v.string(), // Store the hex color code
    orbitIndex: v.number(), // Which orbit this skill belongs to (0-4)
    category: v.string(), // E.g., "frontend", "backend", "language", "AI"
    featured: v.optional(v.boolean()), // Optional flag for featured skills
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  }),

  // Table for storing project information
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    link: v.string(),
    imageId: v.string(), // Reference to the stored image in Convex storage
    createdAt: v.number(), // Timestamp
  }).index("by_createdAt", ["createdAt"]),
});
