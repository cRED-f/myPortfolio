import { projectsData } from "@/lib/data";
import React from "react";
import MyProject from "../sections/MyProject";
import Background from "../Background";
import { MotionDiv2 } from "../motionComp/MotionDiv";
export default function Projects() {
  return (
    <Background>
      <div
        className=" h-screen max-w-7xl  mx-auto scroll-mt-[10rem]"
        id="projects"
      >
        <div className="text-3xl text-center mt-[8rem] font-bold">Projects</div>

        <MotionDiv2 className="max-w-4xl h-[70vh] mx-auto mt-6 overflow-auto shadow-2xl shadow-black">
          <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <MyProject {...project} />
              </React.Fragment>
            ))}
          </div>
        </MotionDiv2>
      </div>
    </Background>
  );
}
