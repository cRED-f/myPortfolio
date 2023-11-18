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
export default function Homepage() {
  return (
    <div className="h-[70vh] scroll-mt-[20rem]" id="home">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <MotionDiv4 className="mt-20 outline rounded-full outline-white shadow-2xl">
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
              Hi, I&apos;m Fahim. <MotionDiv6 className="">👋</MotionDiv6>
            </span>{" "}
            I&apos;m a{" "}
            <span className="font-bold">Full-Stack-Web Developer</span>.{" "}
            Passionate about crafting exceptional websites and apps that elevate
            digital experiences.. My main focus is on{" "}
            <span className="animate-pulse font-bold text-indigo-800 dark:text-indigo-300">
              React.js
            </span>{" "}
            &amp;{" "}
            <span className="animate-pulse font-bold text-indigo-800 dark:text-indigo-300">
              Next.js
            </span>{" "}
          </MotionDiv6>
          <MotionDiv1
            id=""
            className="flex flex-col md:flex-row items-center gap-2 justify-center mt-8"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <Link href="#contact">
                <Button className="rounded-full px-8">
                  Contact me
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button variant={"outline"} className="rounded-full px-8">
                Download Resume <FileDown className="ml-2" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Link href="https://www.linkedin.com/in/fahim-islam-23aa56296/">
                <Button className="rounded-full bg-blue-400 ">
                  <LinkedinIcon />
                </Button>
              </Link>
              <Link href="https://github.com/cRED-f">
                <Button className="rounded-full ">
                  <Github />
                </Button>
              </Link>
            </div>
          </MotionDiv1>
        </MotionDiv5>
      </div>
    </div>
  );
}
