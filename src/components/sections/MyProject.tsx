import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
//props type
type props = (typeof projectsData)[number];

export default function MyProject({
  title,
  description,
  tags,
  imageUrl,
  link,
}: props) {
  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href={link}
        className="group flex mt-2 flex-col md:flex-row bg-gray-300/50 justify-center transition duration-300 ease-in-out 
        transform hover:scale-105 hover:-translate-x-3
         hover:translate-y-3 "
      >
        <div className="flex flex-col   text-black dark:text-white">
          <div className="pr-4 pl-8 pt-8">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-sm break-words w-[16rem] mt-4 text-start">
              {description}
            </p>
            <div className="flex gap-2 mt-10 w-[20rem] flex-wrap">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-gray-300/50 px-2 py-1  rounded-full text-xs"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={imageUrl}
            alt="project"
            className="mx-auto mt-4 w-[18rem] h-[16rem] 
           "
          />
        </div>
      </Link>
    </div>
  );
}
