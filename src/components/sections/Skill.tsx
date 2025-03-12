"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
  SiFramer,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaServer,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import Background from "../Background";
import { useSkills, orbitConfigs, iconMap } from "../../lib/skillsData";

// Map string icon names to actual React components
const getIconComponent = (iconName: string, iconColor: string) => {
  const icons: Record<string, React.ReactNode> = {
    // Si icons
    SiTypescript: <SiTypescript className={`text-[${iconColor}]`} />,
    SiNextdotjs: <SiNextdotjs className={`text-[${iconColor}]`} />,
    SiExpress: <SiExpress className={`text-[${iconColor}]`} />,
    SiTailwindcss: <SiTailwindcss className={`text-[${iconColor}]`} />,
    SiPrisma: <SiPrisma className={`text-[${iconColor}]`} />,
    SiRedux: <SiRedux className={`text-[${iconColor}]`} />,
    SiMongodb: <SiMongodb className={`text-[${iconColor}]`} />,
    SiMysql: <SiMysql className={`text-[${iconColor}]`} />,
    SiC: <SiC className={`text-[${iconColor}]`} />,
    SiCplusplus: <SiCplusplus className={`text-[${iconColor}]`} />,
    SiFramer: <SiFramer className={`text-[${iconColor}]`} />,
    SiOpenai: <SiOpenai className={`text-[${iconColor}]`} />,
    SiTensorflow: <SiTensorflow className={`text-[${iconColor}]`} />,
    SiPytorch: <SiPytorch className={`text-[${iconColor}]`} />,

    // Fa icons
    FaHtml5: <FaHtml5 className={`text-[${iconColor}]`} />,
    FaCss3Alt: <FaCss3Alt className={`text-[${iconColor}]`} />,
    FaJs: <FaJs className={`text-[${iconColor}]`} />,
    FaReact: <FaReact className={`text-[${iconColor}]`} />,
    FaNodeJs: <FaNodeJs className={`text-[${iconColor}]`} />,
    FaJava: <FaJava className={`text-[${iconColor}]`} />,
    FaPython: <FaPython className={`text-[${iconColor}]`} />,
    FaDatabase: <FaDatabase className={`text-[${iconColor}]`} />,
    FaServer: <FaServer className={`text-[${iconColor}]`} />,
    FaRobot: <FaRobot className={`text-[${iconColor}]`} />,
    FaBrain: <FaBrain className={`text-[${iconColor}]`} />,

    // Gi icons
    GiArtificialIntelligence: (
      <GiArtificialIntelligence className={`text-[${iconColor}]`} />
    ),
  };

  return icons[iconName] || <FaDatabase className={`text-[${iconColor}]`} />; // Default fallback icon
};

export default function Skill() {
  // State to track hovered skill for highlighting
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // State for stars with empty initial value
  const [stars, setStars] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      blinkDuration: number;
    }>
  >([]);

  // Fetch skills data from Convex
  const skillsByOrbit = useSkills() as Record<string, any[]>;

  // Generate stars only on client-side
  useEffect(() => {
    // Generate some stars for the background
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      blinkDuration: Math.random() * 3 + 1,
    }));

    setStars(generatedStars);
  }, []);

  // Function to render orbital skills
  const renderOrbitalSkills = () => {
    // If data is still loading
    if (!skillsByOrbit) {
      return <div className="text-center text-white">Loading skills...</div>;
    }

    return Object.keys(skillsByOrbit).map((orbitIndexStr) => {
      const orbitIndex = parseInt(orbitIndexStr);
      const orbitConfig = orbitConfigs[orbitIndex] || {
        radius: 180 + orbitIndex * 85, // Increased from 150 + 70
        speed: 100 + orbitIndex * 20,
      };
      const orbit = {
        radius: orbitConfig.radius,
        speed: orbitConfig.speed,
        skills: skillsByOrbit[orbitIndexStr],
      };

      return (
        <motion.div
          key={orbitIndex}
          className="absolute rounded-full border border-purple-500/20"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
            top: "50%",
            left: "50%",
            marginLeft: -orbit.radius,
            marginTop: -orbit.radius,
            pointerEvents: "none",
          }}
          initial={{ rotate: Math.random() * 360 }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: orbit.speed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {orbit.skills.map((skill, skillIndex) => {
            const angle = (360 / orbit.skills.length) * skillIndex;
            const x = Math.cos((angle * Math.PI) / 180) * orbit.radius;
            const y = Math.sin((angle * Math.PI) / 180) * orbit.radius;
            const skillId = `${orbitIndex}-${skillIndex}`;
            const isHovered = hoveredSkill === skillId;

            return (
              <motion.div
                key={skillIndex}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  zIndex: isHovered ? 50 : orbitIndex + 1,
                  pointerEvents: "auto",
                }}
                whileHover={{
                  scale: 1.3, // Increased from 1.2
                  zIndex: 50,
                }}
                onHoverStart={() => setHoveredSkill(skillId)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div
                  className={`
                    bg-gray-800/70 backdrop-blur-md text-white py-2 px-2 rounded-full
                    shadow-lg flex items-center gap-3 cursor-pointer
                    transition-all duration-300 border border-purple-500/30 min-w-[110px] justify-center
                    ${isHovered ? "bg-purple-800/70 shadow-purple-500/40 border-purple-400/70" : ""}
                  `}
                  whileHover={{
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                  }}
                >
                  <span className="text-2xl">
                    {" "}
                    {/* Increased from text-xl */}
                    {getIconComponent(skill.iconName, skill.iconColor)}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      );
    });
  };

  return (
    <Background>
      <div id="skills" className="py-16 scroll-mt-[10rem]">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl font-bold relative mb-4"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
            <motion.div
              className="h-1 w-24 bg-purple-500 mt-2 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h1>

          <div className="relative w-full h-[750px] mt-12 overflow-visible">
            {/* Stars background */}
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                }}
                animate={{
                  opacity: [star.opacity, star.opacity * 0.5, star.opacity],
                }}
                transition={{
                  duration: star.blinkDuration,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}

            {/* Orbital rings with skills */}
            {renderOrbitalSkills()}
          </div>
        </motion.div>
      </div>
    </Background>
  );
}
