"use client";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { motion } from "framer-motion";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconMail,
  IconBrandOpenai,
  IconHome,
  IconBrain,
  IconUserMinus,
  IconBrandLinkedin,
} from "@tabler/icons-react";
export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About",
      icon: (
        <IconUserMinus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandOpenai className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },

    {
      title: "Skills",
      icon: (
        <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },

    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mr-islam-fahim",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/cRED-f",
    },
  ];
  return (
    <motion.div
      className="fixed bottom-0 md:bottom-1 w-full z-30"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
    >
      <motion.div
        className="flex  gap-1 items-center py-3 px-5"
        initial={{ y: 100, opacity: 1 }}
        animate={{ y: 0, opacity: 2 }}
      >
        <FloatingDock items={links} desktopClassName=" md:flex" />
        <DarkModeToggle />
      </motion.div>
    </motion.div>
  );
}
