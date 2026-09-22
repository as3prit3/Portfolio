
interface SectionHeadingProps {
  backgroundText: string;
  children: React.ReactNode;
}

export function SectionHeading({
  backgroundText,
  children,
}: SectionHeadingProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex min-h-18 items-center justify-center md:min-h-45">
        <h2
          id="experience-heading"
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
        </h2>

        <span
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
        </span>
      </div>
    </div>
  );
}
