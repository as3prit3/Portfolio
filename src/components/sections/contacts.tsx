"use client";

import { Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";

const revealEase = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full overflow-hidden"
    >
      {/* Contact panel entrance */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.80,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.3,
          ease: revealEase,
        }}
        className="origin-bottom rounded-t-[40px] bg-[#0E0E10]"
      >
        <Container>
          <div className="mx-auto w-full max-w-360">
            {/* Contact */}
            <div className="flex flex-col items-center px-0 py-12">
              {/* Contact heading + description */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: revealEase,
                }}
                className="text-center"
              >
                <h2
                  id="contact-heading"
                  className="
                    font-display
                    text-[clamp(38px,8vw,110px)]
                    font-normal
                    italic
                    uppercase
                    leading-none
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  Get in touch
                </h2>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-90
                    text-[10px]
                    leading-[1.4]
                    text-[#A09FA3]
                    sm:max-w-105
                    sm:text-xs
                  "
                >
                  Have a question or want to work together? Drop me a message
                  and I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.3,
                  ease: revealEase,
                }}
                className="mt-8 w-full max-w-140"
              >
                <ContactForm />
              </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.65,
                delay: 0.4,
                ease: revealEase,
              }}
            >
              <div className="h-px w-full bg-linear-to-r from-white/8 via-white/25 to-white/8" />

              <div
                className="
                  flex
                  min-h-17
                  flex-col
                  items-center
                  justify-between
                  gap-4
                  py-5
                  sm:flex-row
                "
              >
                {/* Logo */}
                <Link
                  href="/"
                  aria-label="Home"
                  className="
                    font-nav
                    text-lg
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  HH
                </Link>

                {/* Copyright */}
                <p className="text-center text-[10px] text-[#77777C]">
                  © 2026 Houssam HADHADI. Built with Next.js &amp; Tailwind CSS
                </p>

                {/* Social links */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/houssam-hadhadi/"
                    aria-label="LinkedIn"
                    className="
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-[#77777C]
                      transition-colors
                      hover:border-white/30
                      hover:text-white
                    "
                  >
                    <FaLinkedinIn size={14} />
                  </a>

                  <a
                    href="https://github.com/as3prit3"
                    aria-label="GitHub"
                    className="
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-[#77777C]
                      transition-colors
                      hover:border-white/30
                      hover:text-white
                    "
                  >
                    <FaGithub size={14} />
                  </a>

                  <a
                    href="mailto:houssamhadhadi@gmail.com"
                    aria-label="Email"
                    className="
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-[#77777C]
                      transition-colors
                      hover:border-white/30
                      hover:text-white
                    "
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.footer>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
