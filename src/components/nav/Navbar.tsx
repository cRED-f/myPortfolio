"use client";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.div
      className="sticky  md:top-6 top-0 z-30 bg-gray-300/50 rounded-none 
     md:shadow-xl md:rounded-full w-fit mx-auto dark:bg-[#111926] backdrop-blur-3xl bg-opacity-20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center py-3 px-5"
        initial={{ y: -100, opacity: 1 }}
        animate={{ y: 0, opacity: 2 }}
      >
        {/* menus */}
        <div className="flex gap-6 flex-wrap items-center justify-center dark:text-white text-black">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.hash}
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              {link.name}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      </motion.div>
    </motion.div>
  );
}
