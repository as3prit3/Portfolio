import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
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
          <SectionHeading backgroundText="Portfolio">
            /Selected work
          </SectionHeading>

          {/* Projects */}
          <div className="mt-4 lg:mt-12">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
