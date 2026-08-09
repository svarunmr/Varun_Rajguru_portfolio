import { motion as Motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({
  project,
  index,
  featured = false,
  onClick,
}) {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
      };
  const metadata = [project.status, project.date].filter(Boolean);
  const metrics = Object.entries(project.metrics || {});
  const availableLinks = [
    project.github && { href: project.github, label: "VIEW CODE" },
    project.demo && { href: project.demo, label: "VIEW DEMO" },
  ].filter(Boolean);
  const cardClassName = [
    "project-card",
    featured ? "project-card--featured" : "project-card--secondary",
  ].join(" ");

  return (
    <Motion.article
      className={cardClassName}
      data-project-slug={project.slug}
      {...motionProps}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <button
        type="button"
        className="project-card__trigger"
        onClick={onClick}
        aria-label={"View details for " + project.title}
      >
        <span className="project-card__index" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>

        <span className="project-card__content">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__title">{project.title}</span>
          <span className="project-card__description">
            {project.shortDescription}
          </span>

          <span className="project-card__details">
            <span className="project-card__technologies">
              {project.technologies.join(" · ")}
            </span>
            {metadata.length > 0 && (
              <span className="project-card__metadata">
                {metadata.join(" · ")}
              </span>
            )}
            {metrics.length > 0 && (
              <span className="project-card__metadata">
                {metrics
                  .map(([key, value]) => key + ": " + value)
                  .join(" · ")}
              </span>
            )}
          </span>

          <span className="project-card__view">
            VIEW PROJECT <span aria-hidden="true">→</span>
          </span>
        </span>
      </button>

      {availableLinks.length > 0 && (
        <div className="project-card__links" aria-label="Project links">
          {availableLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}
    </Motion.article>
  );
}
