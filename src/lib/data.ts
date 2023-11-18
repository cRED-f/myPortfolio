import chatharbor from "../assets/images/chatharbor.png";
import electrostore from "../assets/images/electrostore.png";
import dictonary from "../assets/images//dictonary.png";
import weather from "../assets/images/weather.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ChatHarbor",
    description:
      "ChatHarbor: Elevating Real-Time Communication - A SaaS Platform Project. This app built in Next.js",
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "nextauth",
      "Pusher.js",
      "shadcn-ui",
    ],
    imageUrl: chatharbor,
    link: "https://chatharbor-fahim.vercel.app/",
  },
  {
    title: "electrostore",
    description:
      "ElectroStore is a ecommerce web platfrom which offer various products such as mobile , laptop, accessories like mobile, headphones and smart watches etc..",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind",
      "Redux",
      "Tailwind",
      "MySql",
    ],
    imageUrl: electrostore,
    link: "https://electrostore-fahim.vercel.app/",
  },
  {
    title: "Dictionary App",
    description:
      "This is a simple Dictionary app built using Next.js. It allows users to search for word definitions and meanings.",
    tags: ["Next.js", "Tailwind", "DaisyUI", "WordAPI"],
    imageUrl: dictonary,
    link: "https://dictionary-app-fahim.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "This is a simple Weather app built using Next.js. It allows users to search for weather information of any city.",
    tags: ["Next.js", "Tailwind", "Axios", "OpenWeatherAPI"],
    imageUrl: weather,
    link: "https://weather-app-fahim.vercel.app/",
  },
] as const;

export const languageSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "Prisma",
  "Redux",
  "MongoDB",
  "MySql",
  "Microsoft SQL Server",
  "Python",
  "C",
  "C++",
  "Java",
  "Framer Motion",
] as const;
