"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectOverlayProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectOverlay({
  project,
  onClose,
}: ProjectOverlayProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            md:p-6
            lg:p-8
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-overlay-title"
            className="
              relative
              flex
              h-[90vh]
              w-[90vw]
              max-w-350
              flex-col
              overflow-hidden
              rounded-[24px]
              bg-background

              md:h-[75vh]
              md:w-[75vw]

              lg:flex-row
              lg:max-h-200
            "
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                text-foreground
                transition-opacity
                duration-200
                hover:opacity-60
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-white
                md:right-6
                md:top-6
              "
            >
              <X
                className="size-8"
                strokeWidth={1.5}
              />
            </button>

            {/* Project image */}
            <div
              className="
                relative
                h-60
                w-full
                shrink-0
                overflow-hidden
                bg-[#141718]

                md:h-[50%]

                lg:h-full
                lg:w-[50%]
              "
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 100vw,
                  48vw
                "
                className="
                  object-contain
                  object-center
                "
              />
            </div>

            {/* Scrollable project content */}
            <div
              className="
                hide-scrollbar
                flex
                w-full
                flex-1
                flex-col
                overflow-y-auto
                overscroll-contain
                scroll-smooth
                px-6
                pb-10
                pt-8

                md:px-8
                md:pb-12
                md:pt-10

                lg:w-[52%]
                lg:flex-none
                lg:px-12
                lg:py-14
              "
            >
              {/* Title */}
              <h2
                id="project-overlay-title"
                className="
                  pr-10
                  font-sans
                  text-[32px]
                  font-normal
                  leading-tight
                  text-foreground

                  md:text-[36px]
                "
              >
                {project.title}
              </h2>

              {/* Overview */}
              <section className="mt-8 md:mt-10">
                <h3
                  className="
                    border-l-4
                    border-foreground
                    pl-3
                    font-sans
                    text-base
                    lg:text-lg
                    font-semibold
                    uppercase
                    tracking-[0.03em]
                    text-foreground
                  "
                >
                  Overview
                </h3>

                <p
                  className="
                    mt-4
                    font-sans
                    text-[12px]
                    md:text-[14px]
                    lg:text-base
                    font-normal
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  {project.overview}
                </p>
              </section>

              {/* Key Features */}
              <section className="mt-8 md:mt-10">
                <h3
                  className="
                    border-l-4
                    border-foreground
                    pl-3
                    font-sans
                    text-base
                    lg:text-lg
                    font-semibold
                    uppercase
                    tracking-[0.03em]
                    text-foreground
                    xl:text-xl
                  "
                >
                  Key Features
                </h3>

                <ul
                  className="
                    mt-4
                    list-disc
                    space-y-2
                    pl-6
                    font-sans
                    text-[12px]
                    md:text-[14px]
                    lg:text-base
                    font-normal
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  {project.features.map((feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech Stack */}
              <section className="mt-8 pb-2 md:mt-10">
                <h3
                  className="
                    border-l-4
                    border-foreground
                    pl-3
                    font-sans
                    text-base
                    lg:text-lg
                    font-semibold
                    uppercase
                    tracking-[0.03em]
                    text-foreground
                    xl:text-xl
                  "
                >
                  Tech Stack
                </h3>

                <ul
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-[#161618]
                        px-4
                        py-2
                        font-mono
                        text-xs
                        md:text-sm
                        text-foreground
                      "
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
