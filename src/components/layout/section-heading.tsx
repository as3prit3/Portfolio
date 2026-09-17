import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  backgroundText: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  backgroundText,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid w-full place-items-center",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "col-start-1 row-start-1",
          "select-none whitespace-nowrap",
          "font-sans font-semibold uppercase leading-none",
          "text-[48px] tracking-widest",
          "text-section-heading",
          "lg:text-[150px] lg:tracking-[0.15em]",
        )}
      >
        {backgroundText}
      </div>

      <h2
        className={cn(
          "col-start-1 row-start-1",
          "z-10 self-end translate-y-2 lg:translate-y-7.5",
          "font-sans font-semibold uppercase",
          "text-[20px] leading-none tracking-[0.03em]",
          "text-foreground",
          "lg:text-[52px]",
        )}
      >
        {children}
      </h2>
    </div>
  );
}
