import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="selected-work section"
    >
      <Container>
        <div className="selected-work__intro">
          <SectionHeading
            id="projects-title"
            eyebrow="Selected Work / 03"
            title="Selected Work"
            description="Projects where I experiment, build systems, and turn ideas into working software."
          />
        </div>

        {featuredProjects.length > 0 && (
          <div className="selected-work__featured" aria-label="Featured projects">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 1}
                featured
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}

        {secondaryProjects.length > 0 && (
          <div
            className="selected-work__secondary"
            aria-label="Additional projects"
          >
            {secondaryProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featuredProjects.length + index + 1}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}
      </Container>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
