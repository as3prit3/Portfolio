"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.button
      type="button"
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
                max-w-2xl
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
          right-14
          top-1/2
          hidden
          h-20
          w-32
          -translate-y-35
          overflow-hidden
          rotate-8
          lg:block
          xl:right-50
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
  );
}
