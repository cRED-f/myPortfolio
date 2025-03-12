"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function UploadProjectPage() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Convex mutations
  const generateUploadUrl = useMutation(api.projects.generateUploadUrl);
  const createProject = useMutation(api.projects.createProject);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !link || !selectedImage) {
      alert("Please fill in all fields and select an image");
      return;
    }

    try {
      setIsUploading(true);

      // Get upload URL from Convex
      const uploadUrl = await generateUploadUrl();

      // Upload image to Convex Storage
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage.type },
        body: selectedImage,
      });

      const { storageId } = await result.json();

      // Create project with image reference
      await createProject({
        title,
        description,
        link,
        imageId: storageId,
      });

      // Reset form and navigate
      setTitle("");
      setDescription("");
      setLink("");
      setSelectedImage(null);
      setImagePreview(null);

      alert("Project added successfully!");
      router.push("/#projects");
    } catch (error) {
      console.error("Error uploading project:", error);
      alert("Failed to upload project. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Add New Project</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="link" className="block text-sm font-medium mb-1">
            Project Link
          </label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-sm font-medium mb-1">
            Project Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />

          {imagePreview && (
            <div className="mt-3">
              <p className="text-sm mb-1">Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-60 object-contain rounded-lg"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className={`px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-colors
            ${isUploading ? "bg-blue-400 cursor-not-allowed" : "hover:bg-blue-700"}`}
        >
          {isUploading ? "Uploading..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}
