import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group cursor-pointer rounded-2xl
                 border border-[var(--text)]/25
                 p-6 transition-all duration-200
                 hover:-translate-y-1 hover:border-[var(--text)]/50
                 focus:outline-none
                 focus-visible:ring-2 focus-visible:ring-[var(--text)]/40
                 focus-visible:ring-offset-4"
    >
      {/* Title */}
      <h3 className="text-lg md:text-xl font-medium tracking-tight mb-2">
        {project.title}
      </h3>

      {/* Short description */}
      <p className="text-sm text-[var(--text)]/70 leading-relaxed mb-4">
        {project.shortDescription}
      </p>

      {/* Impact (optional but powerful) */}
      {project.impact && (
        <p className="text-xs text-[var(--muted)] mb-4">
          {project.impact}
        </p>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full
                       border border-[var(--text)]/30
                       text-[var(--text)]/75
                       transition-colors
                       group-hover:border-[var(--text)]/50"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
