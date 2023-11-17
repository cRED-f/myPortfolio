"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profile from "@/assets/images/profile.jpeg";
import { Button } from "../ui/button";
import { ArrowRight, FileDown, Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";
export default function Homepage() {
  return (
    <div className="h-[70vh] bg-red-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          className="mt-20 outline rounded-full outline-white shadow-2xl"
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 2,
          }}
        >
          <Image
            src={profile}
            height={100}
            width={100}
            alt="profile"
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          className="w-fit flex flex-col"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
        >
          <motion.h1
            className="break-words text-center mt-8 dark:text-white text-black text-2xl max-w-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.8,
            }}
          >
            <span className="font-bold flex justify-center ">
              Hi, I&apos;m Fahim.{" "}
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.8,
                }}
              >
                👋
              </motion.h1>
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
          </motion.h1>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-2 justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.8,
            }}
          >
            <div className="flex flex-col md:flex-row gap-3">
              <Button className="rounded-full px-8">
                Contact me
                <ArrowRight className="ml-2" />
              </Button>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
