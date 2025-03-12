import { api } from "../../convex/_generated/api";
import { useQuery, useMutation } from "convex/react";

// Map of icon names to actual React components
export const iconMap = {
  // Si icons
  SiTypescript: "SiTypescript",
  SiNextdotjs: "SiNextdotjs",
  SiExpress: "SiExpress",
  SiTailwindcss: "SiTailwindcss",
  SiPrisma: "SiPrisma",
  SiRedux: "SiRedux",
  SiMongodb: "SiMongodb",
  SiMysql: "SiMysql",
  SiC: "SiC",
  SiCplusplus: "SiCplusplus",
  SiFramer: "SiFramer",
  SiOpenai: "SiOpenai",
  SiTensorflow: "SiTensorflow",
  SiPytorch: "SiPytorch",

  // Fa icons
  FaHtml5: "FaHtml5",
  FaCss3Alt: "FaCss3Alt",
  FaJs: "FaJs",
  FaReact: "FaReact",
  FaNodeJs: "FaNodeJs",
  FaJava: "FaJava",
  FaPython: "FaPython",
  FaDatabase: "FaDatabase",
  FaServer: "FaServer",
  FaRobot: "FaRobot",
  FaBrain: "FaBrain",

  // Gi icons
  GiArtificialIntelligence: "GiArtificialIntelligence",
};

// Orbit configurations
export const orbitConfigs = [
  { radius: 130, speed: 100 }, // Frontend basics
  { radius: 190, speed: 120 }, // Frontend frameworks
  { radius: 250, speed: 140 }, // Backend & Databases
  { radius: 310, speed: 160 }, // Programming Languages
  { radius: 370, speed: 180 }, // AI & ML
];

// Hook to get all skills
export function useSkills() {
  const skills = useQuery(api.skills.getAll);
  console.log(skills);
  return skills;
}
