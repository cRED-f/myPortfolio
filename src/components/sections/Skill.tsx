import { motion } from "framer-motion";
import React from "react";

import { languageSkills } from "@/lib/data";
import { MotionDiv3 } from "../motionComp/MotionDiv";
import Background from "../Background";
export default function Skill() {
  return (
    <Background>
      <div id="skills" className="h-[60vh]  scroll-mt-[10rem]">
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl font-bold">My Skills</h1>

          <div className="max-w-4xl  mt-10 ">
            <ul className="flex flex-wrap items-center justify-center gap-2 text-lg">
              {languageSkills.map((skill, index) => (
                <MotionDiv3
                  className="text-black shadow-sm shadow-black bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  index={index}
                >
                  {skill}
                </MotionDiv3>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Background>
  );
}
