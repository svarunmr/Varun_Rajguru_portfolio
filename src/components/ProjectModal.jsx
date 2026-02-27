import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelectors =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const focusableElements =
      modalRef.current?.querySelectorAll(focusableSelectors) || [];

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && focusableElements.length > 0) {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4
                     bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            aria-describedby="project-description"
            className="relative max-w-2xl w-full max-h-[90vh]
                       overflow-y-auto rounded-2xl
                       bg-[var(--bg)] text-[var(--text)]
                       border border-[var(--text)]/20
                       p-6 md:p-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-sm
                         opacity-60 hover:opacity-100 transition
                         focus:outline-none focus-visible:ring-2
                         focus-visible:ring-[var(--text)]/40
                         focus-visible:ring-offset-4"
            >
              ✕
            </button>

            {/* Image */}
            {project.images?.length > 0 && (
              <img
                src={project.images[0]}
                alt={`${project.title} preview`}
                className="w-full rounded-xl mb-6
                           border border-[var(--text)]/20"
              />
            )}

            {/* Title */}
            <h3
              id="project-title"
              className="text-2xl font-semibold tracking-tight mb-2"
            >
              {project.title}
            </h3>

            {/* Role + Impact */}
            {(project.role || project.impact) && (
              <p className="text-xs text-[var(--muted)] mb-4">
                {project.role && <span>{project.role}</span>}
                {project.role && project.impact && " · "}
                {project.impact && <span>{project.impact}</span>}
              </p>
            )}

            {/* Description */}
            <p
              id="project-description"
              className="text-sm text-[var(--text)]/70 leading-relaxed mb-6"
            >
              {project.description}
            </p>

            {/* Problem */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Problem</h4>
              <p className="text-sm text-[var(--text)]/70 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Approach</h4>
              <ul className="list-disc list-inside space-y-1
                             text-sm text-[var(--text)]/70">
                {project.approach.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Deployment */}
            {project.deployment && (
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Deployment</h4>
                <p className="text-sm text-[var(--text)]/70">
                  {project.deployment}
                </p>
              </div>
            )}

            {/* Future improvements */}
            {project.future && (
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">
                  Future Improvements
                </h4>
                <p className="text-sm text-[var(--text)]/70">
                  {project.future}
                </p>
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full
                             border border-[var(--text)]/30
                             text-[var(--text)]/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline
                           text-[var(--text)]/80
                           hover:text-[var(--text)]"
              >
                View on GitHub →
              </a>

              <button
                onClick={onClose}
                className="text-sm px-4 py-2 rounded-lg
                           border border-[var(--text)]/30
                           hover:border-[var(--text)]/60
                           transition
                           focus:outline-none focus-visible:ring-2
                           focus-visible:ring-[var(--text)]/40
                           focus-visible:ring-offset-4"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
