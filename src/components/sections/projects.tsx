import { Container } from "@/components/layout/container";
import { projects } from "@/lib/data/projects";
import { ProjectItem } from "@/components/projects/project-item";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full"
    >
      <Container>
        <div className="py-12 md:py-6">
          {/* Section heading */}
          <div className="relative w-full overflow-hidden">
            <div className="relative flex min-h-[72px] items-center justify-center md:min-h-[180px]">
              <h2
                id="projects-heading"
                aria-hidden="true"
                className="
                  max-w-full
                  whitespace-nowrap
                  font-sans
                  text-[clamp(42px,10.42vw,149px)]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-widest
                  text-secondary
                  md:tracking-[0.15em]
                "
              >
                Portfolio
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
                /Selected Work
              </span>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-4 lg:mt-20">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
