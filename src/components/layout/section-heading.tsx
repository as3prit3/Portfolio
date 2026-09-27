"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  backgroundText: string;
  children: React.ReactNode;
  heading: string;
}

const revealTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function SectionHeading({
  backgroundText,
  heading,
  children,
}: SectionHeadingProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex min-h-18 items-center justify-center md:min-h-45">
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={revealTransition}
          id={`${heading}-heading`}
          aria-hidden="true"
          className="
            max-w-full
            font-sans
            text-[clamp(38px,10vw,135px)]
            font-semibold
            uppercase
            leading-none
            tracking-widest
            text-secondary
            md:tracking-[0.15em]
          "
        >
          {backgroundText}
        </motion.h2>

        <motion.span
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            ...revealTransition,
            delay: 0.1,
          }}
          className="
            absolute
            max-w-full
            whitespace-nowrap
            px-4
            font-sans
            text-[20px]
            font-semibold
            uppercase
            tracking-[0.03em]
            text-foreground
            translate-y-4
            md:text-[clamp(32px,3.61vw,52px)]
            md:translate-y-6
            lg:translate-y-9
            xl:translate-y-13
          "
        >
          {children}
        </motion.span>
      </div>
    </div>
  );
}
