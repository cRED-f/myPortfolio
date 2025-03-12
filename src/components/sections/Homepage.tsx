import Image from "next/image";
import React from "react";
import profile from "@/assets/images/profile.jpeg";
import { Button } from "../ui/button";
import { ArrowRight, FileDown, Github, LinkedinIcon } from "lucide-react";
import {
  MotionDiv4,
  MotionDiv5,
  MotionDiv6,
  MotionDiv1,
} from "../motionComp/MotionDiv";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
export default function Homepage() {
  const words = ["React.js", "Next.js"];
  return (
    <div className="h-[65vh]  scroll-mt-[20rem]" id="home">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <MotionDiv4 className="mt-36 outline rounded-full outline-white shadow-2xl">
          <Image
            src={profile}
            height={100}
            width={100}
            alt="profile"
            className="rounded-full"
          />
        </MotionDiv4>

        <MotionDiv5 className="w-fit flex flex-col">
          <MotionDiv6 className="break-words text-center mt-8 dark:text-white text-black text-2xl max-w-3xl">
            <span className="font-bold flex justify-center ">
              Hi, I&apos;m Fahim {""}
              <MotionDiv6 className="">👋</MotionDiv6>
            </span>{" "}
            <br />
            <p className="text-3xl dark:text-white text-black">
              {" "}
              I&apos;m specializing in NLP, LLM, and Generative AI, alongside
              full-stack development with{" "}
              <FlipWords className="font-bold" words={words} />
            </p>
          </MotionDiv6>
        </MotionDiv5>
      </div>
    </div>
  );
}
