"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-50">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: -18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <nav
            aria-label="Main navigation"
            className="flex items-center justify-between py-4 lg:py-6"
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Houssam Hadhadi home"
              onClick={closeMenu}
              className="relative z-60 font-nav text-[22px] font-semibold leading-none transition-opacity hover:opacity-70 lg:text-2xl"
            >
              HH
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-nav text-sm font-semibold leading-none transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="
                relative
                z-60
                flex
                size-10
                items-center
                justify-center
                rounded-full
                transition-colors
                hover:bg-white/10
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-white
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <X className="size-6" strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <Menu className="size-6" strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </motion.div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
           initial={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(100% 0 0 0)",
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#0E0E10]
              lg:hidden
            "
          >
            <div className="flex h-full flex-col px-6 sm:px-24 py-10">
              {/* Navigation links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-1 flex-col justify-center"
              >
                <ul className="space-y-5">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{
                        opacity: 0,
                        y: 24,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.12 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="
                          group
                          flex
                          w-fit
                          items-center
                          gap-3
                          font-sans
                          text-[clamp(42px,12vw,64px)]
                          font-semibold
                          uppercase
                          leading-none
                          tracking-[-0.02em]
                          text-foreground
                        "
                      >
                        <span
                          className="
                            transition-all
                            duration-300
                            ease-out
                            group-hover:translate-x-2
                            group-hover:opacity-70
                          "
                        >
                          {item.label}
                        </span>

                        <span
                          aria-hidden="true"
                          className="
                            text-lg
                            opacity-0
                            -translate-x-2
                            transition-all
                            duration-300
                            ease-out
                            group-hover:translate-x-0
                            group-hover:opacity-60
                            sm:text-xl
                          "
                        >
                          →
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom information */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  items-end
                  justify-between
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <span className="font-nav text-xs text-muted-foreground">
                  Software Engineer
                </span>

                <span className="font-nav text-xs text-muted-foreground">
                  HH
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
