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
        <div className="py-12 md:py-12">
          {/* Section heading */}
          <SectionHeading backgroundText="Portfolio" heading="projects">
            /Selected work
          </SectionHeading>

          {/* Projects */}
          <div className="mt-4 lg:mt-12">
            {projects.map((project, index) => (
              <ProjectItem key={project.id} project={project} animationDelay={index * 0.18 + 0.3}/>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
