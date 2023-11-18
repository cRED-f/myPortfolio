import React from "react";
import { MotionDiv1 } from "../motionComp/MotionDiv";
export default function About() {
  return (
    <MotionDiv1
      className="h-screen md:h-[80vh] flex flex-col max-w-7xl mt-[10rem] md:mt-12 mx-auto scroll-mt-[10rem] items-center"
      id="about"
    >
      <h1 className="text-4xl font-bold">About Me</h1>

      <div className="w-[20rem] md:w-fit md:max-w-3xl mt-4 font-sans text-black dark:text-white  text-start ">
        {" "}
        <p>
          {" "}
          I am a passionate and ambitious third-year undergraduate student at
          North South University, with a strong foundation in various
          programming languages and technologies. My journey in the world of
          computer science has equipped me with a diverse skill set, making me
          proficient in languages such as C, C++, Java, Python, JavaScript, and
          TypeScript.
        </p>{" "}
        <br />
        <p>
          {" "}
          In addition to my programming expertise, I have hands-on experience
          with a range of cutting-edge technologies and frameworks. My web
          development skills include working with React.js and Next.js to build
          dynamic and interactive user interfaces. I am well-versed in backend
          development using Prisma for database management, and I have a solid
          understanding of database systems such as MySQL, Microsoft SQL Server,
          and MongoDB.{" "}
        </p>{" "}
        <br />
        <p>
          {" "}
          Throughout my academic journey, I have not only acquired technical
          skills but also developed a keen problem-solving mindset. I am
          passionate about leveraging technology to create innovative solutions
          and enhance user experiences.{" "}
        </p>{" "}
        <br />{" "}
        <p>
          As I continue to explore and expand my knowledge, I am excited about
          the endless possibilities that the world of software development
          offers. I am currently seeking opportunities to apply my skills and
          contribute to real-world projects.
        </p>
      </div>
    </MotionDiv1>
  );
}
