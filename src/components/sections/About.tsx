"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Spinner } from "@/components/ui/spinner"; // You may need to create this component

export function About() {
  // Fetch timeline data from Convex
  const timelineData = useQuery(api.timeline.getTimeline);

  // Loading state
  if (!timelineData) {
    return (
      <div className="w-full flex justify-center py-12" id="about">
        <Spinner />
      </div>
    );
  }

  // Transform database content (stored as string) to React elements
  const data = timelineData.map((item) => ({
    title: item.title,
    content: <div dangerouslySetInnerHTML={{ __html: item.content }} />,
  }));

  return (
    <div className="w-full" id="about">
      <Timeline data={data} />
    </div>
  );
}
