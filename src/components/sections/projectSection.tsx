"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { MotionDiv4 } from "../motionComp/MotionDiv";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function ProjectSection() {
  // Replace static projects with data from Convex
  const projectsData = useQuery(api.projects.getProjects);
  const projects = useMemo(() => projectsData || [], [projectsData]);
  const isLoading = projects.length === 0;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    startIndex: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isPending, setIsPending] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayInterval, setAutoplayInterval] = useState(5000); // 5 seconds per slide

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setDirection(-1);
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setDirection(1);
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        // Determine direction based on current and target index
        setDirection(index > selectedIndex ? 1 : -1);
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, selectedIndex]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Temporarily pause autoplay when user interacts
  const pauseAutoplay = useCallback(() => {
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    const timer = setTimeout(() => setAutoplay(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Handle autoplay
  useEffect(() => {
    if (!autoplay || !emblaApi) return;

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        setIsPending(true);
        setTimeout(() => {
          scrollNext();
          setIsPending(false);
        }, 50);
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, emblaApi, autoplayInterval, scrollNext]);

  // Set up embla carousel
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    // Pause autoplay when user interacts with the carousel
    const onPointerDown = () => {
      pauseAutoplay();
    };

    emblaApi.on("pointerDown", onPointerDown);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
    };
  }, [emblaApi, onSelect, pauseAutoplay]);

  // Handle visibility changes (pause when tab is not visible)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setAutoplay(true);
      } else {
        setAutoplay(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Enhanced animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? 15 : -15,
      filter: "blur(8px)",
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      zIndex: 10,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5, ease: "easeOut" },
        rotateY: { duration: 0.5 },
        filter: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? -15 : 15,
      filter: "blur(8px)",
      zIndex: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        rotateY: { duration: 0.5 },
        filter: { duration: 0.4 },
      },
    }),
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Disable autoplay if no projects
  useEffect(() => {
    if (projects.length === 0) {
      setAutoplay(false);
    } else {
      setAutoplay(true);
    }
  }, [projects.length]);

  // Reset the carousel when projects change
  useEffect(() => {
    if (emblaApi && projects.length > 0) {
      emblaApi.reInit();
      setSelectedIndex(0);
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [projects, emblaApi]);

  return (
    <MotionDiv4 className="">
      <div className="flex flex-col overflow-hidden" id="projects">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Explore My <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Projects 🚀
                </span>
              </h1>
            </>
          }
        >
          <div className="relative w-full" style={{ perspective: "1000px" }}>
            {/* Loading State */}
            {isLoading ? (
              <div className="flex justify-center items-center h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <>
                {/* Carousel Container */}
                <div
                  className="overflow-hidden"
                  ref={emblaRef}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                >
                  <div className="flex">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project._id}
                        className="flex-[0_0_100%] min-w-0 relative p-4"
                        style={{
                          opacity: selectedIndex === index ? 1 : 0.3,
                          transform: `scale(${selectedIndex === index ? 1 : 0.85})`,
                          transition: "opacity 0.5s, transform 0.5s",
                        }}
                      >
                        <Link
                          href={project.link}
                          className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                          tabIndex={selectedIndex === index ? 0 : -1}
                        >
                          <div className="relative">
                            <motion.div
                              className="overflow-hidden rounded-2xl"
                              whileHover="hover"
                            >
                              <motion.div
                                className="relative"
                                variants={imageVariants}
                              >
                                <Image
                                  src={
                                    project.image || "/placeholder-project.jpg"
                                  }
                                  alt={project.title}
                                  height={720}
                                  width={1400}
                                  className="rounded-2xl object-cover w-full h-[70vh] brightness-[0.85] group-hover:brightness-100 transition-all duration-500"
                                  priority
                                  draggable={false}
                                />
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70"
                                  initial={{ opacity: 0.6 }}
                                  whileHover={{ opacity: 0.3 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.div>
                            </motion.div>

                            {selectedIndex === index && (
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 p-6"
                                variants={textContainerVariants}
                                initial="hidden"
                                animate="show"
                              >
                                <motion.h3
                                  className="text-3xl font-bold text-white drop-shadow-lg"
                                  variants={textItemVariants}
                                >
                                  {project.title}
                                </motion.h3>
                                <motion.p
                                  className="mt-3 text-gray-100 text-lg drop-shadow-lg"
                                  variants={textItemVariants}
                                >
                                  {project.description}
                                </motion.p>
                                <motion.div
                                  className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                                  variants={textItemVariants}
                                  whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                  }}
                                >
                                  View Project →
                                </motion.div>
                              </motion.div>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Navigation and other controls should only show if there are projects */}
                {projects.length > 0 && (
                  <>
                    {/* Slide Transition Animations */}
                    <AnimatePresence>
                      {isPending && (
                        <motion.div
                          className="absolute inset-0 z-20 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-black/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                          <motion.div
                            className="absolute inset-0"
                            initial={{ x: direction > 0 ? "100%" : "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: direction > 0 ? "-100%" : "100%" }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <motion.button
                      onClick={() => {
                        pauseAutoplay();
                        setIsPending(true);
                        setTimeout(() => {
                          scrollPrev();
                          setIsPending(false);
                        }, 50);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                      aria-label="Previous slide"
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        pauseAutoplay();
                        setIsPending(true);
                        setTimeout(() => {
                          scrollNext();
                          setIsPending(false);
                        }, 50);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-900/90 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-all"
                      aria-label="Next slide"
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </motion.button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                      {scrollSnaps.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            pauseAutoplay();
                            setIsPending(true);
                            setTimeout(() => {
                              scrollTo(index);
                              setIsPending(false);
                            }, 50);
                          }}
                          className={cn(
                            "w-3 h-3 rounded-full transition-all",
                            selectedIndex === index
                              ? "bg-blue-600 w-6"
                              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                          )}
                          aria-label={`Go to slide ${index + 1}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          animate={
                            selectedIndex === index
                              ? { scale: [1, 1.2, 1] }
                              : {}
                          }
                        />
                      ))}
                    </div>

                    {/* Autoplay Progress Indicator */}
                    {autoplay && (
                      <div className="w-full mt-2 px-4">
                        <motion.div
                          className="h-[2px] bg-blue-600 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: autoplayInterval / 1000,
                            ease: "linear",
                            repeatType: "loop",
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </ContainerScroll>
      </div>
    </MotionDiv4>
  );
}
