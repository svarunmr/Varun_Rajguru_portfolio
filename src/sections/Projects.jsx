import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 bg-[var(--bg)] text-[var(--text)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Selected Projects
          </h2>

          <p className="mt-4 text-[var(--muted)] max-w-xl mx-auto text-sm md:text-base">
            A collection of projects where I focused on system design,
            performance, and solving real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
