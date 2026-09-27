"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectOverlay } from "./project-overlay";

interface ProjectItemProps {
  project: Project;
  animationDelay?: number;
}

export function ProjectItem({ project, animationDelay = 0, }: ProjectItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.9,
          delay: animationDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          initial="rest"
          whileHover="hover"
          whileFocus="hover"
          className="
            group
            relative
            flex
            w-full
            items-center
            justify-between
            border-b-2
            border-primary/70
            px-3
            py-5
            text-left
            transition-colors
            duration-300
            hover:bg-[#262626]
            focus-visible:outline-2
            focus-visible:outline-offset-[-2px]
            focus-visible:outline-white
            md:px-4
            md:py-6
            lg:px-6
            lg:py-7
          "
        >
          {/* Content */}
          <div className="min-w-0">
            {/* Desktop */}
            <div className="hidden lg:grid">
              {/* Initial title */}
              <motion.h3
                variants={{
                  rest: {
                    opacity: 1,
                  },
                  hover: {
                    opacity: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  col-start-1
                  row-start-1
                  self-center
                  font-sans
                  text-3xl
                  font-semibold
                  leading-tight
                  text-foreground
                "
              >
                {project.title}
              </motion.h3>

              {/* Hover content */}
              <motion.div
                variants={{
                  rest: {
                    opacity: 0,
                  },
                  hover: {
                    opacity: 1,
                  },
                }}
                transition={{
                  delay: 0.18,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  col-start-1
                  row-start-1
                  self-center
                "
              >
                <h3
                  className="
                    font-sans
                    text-3xl
                    font-semibold
                    leading-tight
                    text-foreground
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-md
                    font-sans
                    text-sm
                    font-normal
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  {project.description}
                </p>
              </motion.div>
            </div>

            {/* Mobile / tablet */}
            <div className="lg:hidden">
              <h3
                className="
                  font-sans
                  text-base
                  font-semibold
                  leading-tight
                  text-foreground
                  md:text-2xl
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-2
                  font-sans
                  text-xs
                  font-normal
                  leading-relaxed
                  text-muted-foreground
                  md:mt-3
                "
              >
                {project.description}
              </p>
            </div>
          </div>

          {/* Project preview */}
          <motion.div
            variants={{
              rest: {
                opacity: 0,
                scale: 0.96,
              },
              hover: {
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{
              delay: 0.18,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              right-30
              top-1/2
              hidden
              h-40
              w-50
              -translate-y-35
              overflow-hidden
              rounded-sm
              rotate-8
              lg:block
              xl:right-35
              xl:h-40
              xl:w-56
            "
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          </motion.div>

          {/* Arrow */}
          <ArrowUpRight
            aria-hidden="true"
            className="
              ml-6
              size-5
              shrink-0
              text-foreground
              transition-transform
              duration-300
              group-hover:translate-x-1
              md:size-7
            "
          />
        </motion.button>
      </motion.div>

      <ProjectOverlay
        project={isOpen ? project : null}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
