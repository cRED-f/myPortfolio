"use client";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
export function MotionDiv1({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className: string;
  id: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.8,
      }}
      id={id}
    >
      {children}
    </motion.div>
  );
}

export function MotionDiv2({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <motion.div
      className={cn(className)}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      {children}
    </motion.div>
  );
}
export function MotionDiv3({
  children,
  className,
  index,
}: {
  children: React.ReactNode;
  className: string;
  index: number;
}) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.li
      className={cn(className)}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.li>
  );
}

export function MotionDiv4({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 2,
      }}
    >
      {children}
    </motion.div>
  );
}
export function MotionDiv5({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
    >
      {children}
    </motion.div>
  );
}
export function MotionDiv6({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.h1
      className={cn(className)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.8,
      }}
    >
      {children}
    </motion.h1>
  );
}
