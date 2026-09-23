"use client";

import { experiences } from "@/lib/data/experience";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full"
    >
      <Container>
        <div className="pt- pb-12 md:py-16">
          {/* Section heading */}
          <SectionHeading backgroundText="Experience">
            /Experience
          </SectionHeading>

          {/* Experience content */}
          <div className="mt-8 lg:mt-12">
            {/* =========================
                MOBILE / TABLET
                ========================= */}
            <div className="flex flex-col gap-6 lg:hidden">
              {experiences.map((experience) => (
                <article
                  key={experience.id}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#161618]
                    p-5

                    sm:p-6
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      font-poppins
                      text-[28px]
                      font-medium
                      leading-none
                      text-transparent
                      [-webkit-text-stroke:1.5px_#FFFFFF]
                      tracking-widest
                    "
                  >
                    {experience.id}
                  </div>

                  {/* Role */}
                  <h3
                    className="
                      mt-2
                      font-sans
                      text-base
                      font-medium
                      leading-tight
                      text-foreground

                      sm:text-lg
                    "
                  >
                    {experience.role}
                  </h3>

                  {/* Company + date */}
                  <div
                    className="
                      mt-2
                      flex
                      flex-wrap
                      items-baseline
                      justify-between
                      gap-x-4
                      gap-y-1
                      font-poppins
                      text-[10px]
                      font-medium
                      leading-tight
                      text-muted-foreground
                      uppercase
                    "
                  >
                    <span>{experience.company}</span>

                    <span className="normal-case">
                      {experience.period}
                    </span>
                  </div>

                  {/* Description paragraphs */}
                  <div
                    className="
                      mt-4
                      space-y-3
                      font-sans
                      text-xs
                      leading-[1.55]
                      text-muted-foreground
                    "
                  >
                    {experience.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* =========================
                DESKTOP TIMELINE
                ========================= */}
            <div ref={timelineRef} className="relative hidden lg:block">
              {/* Center line */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-0
                  bottom-0
                  w-px
                  -translate-x-1/2
                  bg-white/25
                "
              />

              {/* Animated timeline progress */}
              <motion.div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-0
                  bottom-0
                  w-px
                  -translate-x-1/2
                  origin-top
                  bg-white
                "
                style={{
                  scaleY: smoothProgress,
                }}
              />

              <div className="relative flex flex-col">
                {experiences.map((experience, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <article
                      key={experience.id}
                      className={`
                        relative
                        w-1/2

                        ${
                          isLeft
                            ? "self-start pr-10 text-left"
                            : "self-end pl-10 text-left"
                        }

                        ${index === 0 ? "pb-10" : ""}
                      `}
                    >
                      {/* Number */}
                      <div
                        className="
                          font-poppins
                          text-4xl
                          font-medium
                          leading-none
                          text-transparent
                          [-webkit-text-stroke:2px_#FFFFFF]
                          tracking-widest
                        "
                      >
                        {experience.id}
                      </div>

                      {/* Role */}
                      <h3
                        className="
                          mt-2
                          font-sans
                          text-2xl
                          font-medium
                          leading-tight
                          text-foreground
                        "
                      >
                        {experience.role}
                      </h3>

                      {/* Company + date */}
                      <div
                        className="
                          mt-2
                          flex
                          items-baseline
                          justify-between
                          gap-4
                          font-poppins
                          text-xs
                          font-medium
                          leading-tight
                          text-muted-foreground
                          uppercase
                        "
                      >
                        <span>{experience.company}</span>

                        <span className="shrink-0 normal-case">
                          {experience.period}
                        </span>
                      </div>

                      {/* Description paragraphs */}
                      <div
                        className="
                          mt-4
                          space-y-3
                          font-sans
                          text-sm
                          leading-relaxed
                          text-muted-foreground
                        "
                      >
                        {experience.description.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
