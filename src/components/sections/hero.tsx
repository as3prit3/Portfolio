import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/../public/removed-bg.png";
import HeroPic from "@/../public/HeroPic.png";
import MobileVersion from "@/../public/MobileVersion.png";

import { skills } from "@/lib/data/skills";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="w-full">
      <Container>
        <div className="pt-6 sm:pt-16 lg:pt-14">
          {/* Name */}
          <h1
            id="hero-title"
            className="font-sans text-[48px] font-semibold uppercase leading-[1.2] tracking-[0.06em] sm:text-[52px] md:text-center lg:text-[76px]"
          >
            <span className="mr-2 block text-transparent [-webkit-text-stroke:1px_#FFFFFF] md:inline">
              Houssam
            </span>

            <span className="block text-foreground md:inline">
              Hadhadi
            </span>
          </h1>

          {/* Main hero composition */}
          <div className="mt-6 lg:relative lg:mt-0 lg:min-h-107.5">
            {/* Portrait */}
            <div className="relative mx-auto aspect-3/4 w-full overflow-hidden rounded-xl bg-secondary lg:absolute lg:bottom-0 lg:left-1/2 lg:w-105 lg:max-w-none lg:-translate-x-1/2 lg:translate-y-22 lg:rounded-none lg:bg-transparent">
              <Image
                src={MobileVersion}
                alt="Portrait of Houssam Hadhadi"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 420px"
                className="object-cover object-top grayscale lg:scale-110 lg:max-h-92.5 lg:translate-y-2"
              />
            </div>

            {/* Introduction */}
            <div className="mt-6 max-w-md lg:absolute lg:bottom-40 lg:left-0 lg:mt-0 lg:max-w-70">
              <h2 className="font-sans text-2xl font-semibold leading-tight">
                Software Engineer
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-xs">
                I'm a software engineer who builds clean, reliable web
                applications from front to back. Currently focused on React
                and Node, with an eye for code that's easy to read and
                maintain.
              </p>

              <Link
                href="/Resume.pdf"
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-medium text-secondary transition-transform hover:scale-[1.02] md:px-5 md:py-2.5"
              >
                Download CV
                <span aria-hidden="true">↓</span>
              </Link>
            </div>

            {/* Tech stack */}
            <div className="mt-6 lg:absolute lg:right-0 lg:bottom-50 lg:mt-0 lg:w-62.5">
              <p className="mb-4 border-l-3 border-l-white pl-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground lg:text-[14px]">
                TECH STACK
              </p>

              <ul className="flex flex-wrap gap-2">
                {skills.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-tech-card-border bg-tech-card px-2.5 py-1 text-[12px] text-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


// let me describe the idea for you, for  the mobile version the card will contain the project title and description showen when clicked an overlay that include the image and project detail is shown. But for the desktop version the card initialy will only show the project title but when hover the description is shown and also a small image shows on top of the hovered card and when clicked the same happems an overlay appears
