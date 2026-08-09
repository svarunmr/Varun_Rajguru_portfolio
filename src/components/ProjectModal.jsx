import { useEffect, useRef } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import IconButton from "./ui/IconButton";
import { CloseIcon } from "./ui/icons";

function getMetricEntries(metrics) {
  return Object.entries(metrics || {});
}

function NarrativeBlock({ title, children }) {
  if (!children) return null;

  return (
    <section className="project-modal__narrative-block">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return undefined;

    triggerRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const focusableSelectors =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        modalRef.current?.querySelectorAll(focusableSelectors) || []
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus?.();
    };
  }, [project, onClose]);

  const motionState = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0, scale: 1 } }
    : {
        initial: { opacity: 0, y: 18, scale: 0.99 },
        animate: { opacity: 1, y: 0, scale: 1 },
      };

  return (
    <AnimatePresence>
      {project && (
        <Motion.div
          className="project-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <Motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            tabIndex={-1}
            className="project-modal"
            {...motionState}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
          >
            <header className="project-modal__header">
              <div className="project-modal__eyebrow">
                <span>{project.category}</span>
                {project.featured && <span>FEATURED</span>}
              </div>
              <IconButton
                ref={closeButtonRef}
                label={"Close details for " + project.title}
                onClick={onClose}
                className="project-modal__close"
              >
                <CloseIcon />
              </IconButton>
            </header>

            <div className="project-modal__headline">
              <h2 id="project-modal-title">{project.title}</h2>
              <p id="project-modal-description">{project.shortDescription}</p>
            </div>

            {project.images?.length > 0 && (
              <div className="project-modal__media">
                {project.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={project.title + " project preview"}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            )}

            {project.technologies?.length > 0 && (
              <div className="project-modal__technologies">
                <span className="project-modal__section-label">TECHNOLOGIES</span>
                <p>{project.technologies.join(" · ")}</p>
              </div>
            )}

            <div className="project-modal__body">
              <div className="project-modal__narrative">
                <NarrativeBlock title="OVERVIEW">
                  <p>{project.description}</p>
                </NarrativeBlock>

                {project.problem && (
                  <NarrativeBlock title="PROBLEM">
                    <p>{project.problem}</p>
                  </NarrativeBlock>
                )}

                {project.approach?.length > 0 && (
                  <NarrativeBlock title="APPROACH">
                    <ul>
                      {project.approach.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </NarrativeBlock>
                )}

                {project.highlights?.length > 0 && (
                  <NarrativeBlock title="HIGHLIGHTS">
                    <ul>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </NarrativeBlock>
                )}

                {project.deployment && (
                  <NarrativeBlock title="DEPLOYMENT">
                    <p>{project.deployment}</p>
                  </NarrativeBlock>
                )}

                {project.future && (
                  <NarrativeBlock title="FUTURE IMPROVEMENTS">
                    <p>{project.future}</p>
                  </NarrativeBlock>
                )}
              </div>

              {(project.status ||
                project.date ||
                getMetricEntries(project.metrics).length > 0) && (
                <aside className="project-modal__metadata">
                  <span className="project-modal__section-label">
                    PROJECT METADATA
                  </span>
                  {project.status && (
                    <div>
                      <span>STATUS</span>
                      <strong>{project.status}</strong>
                    </div>
                  )}
                  {project.date && (
                    <div>
                      <span>DATE</span>
                      <strong>{project.date}</strong>
                    </div>
                  )}
                  {getMetricEntries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <span>{key.toUpperCase()}</span>
                      <strong>{String(value)}</strong>
                    </div>
                  ))}
                </aside>
              )}
            </div>

            {(project.github || project.demo) && (
              <footer className="project-modal__actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"View " + project.title + " source code"}
                  >
                    VIEW CODE <span aria-hidden="true">→</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"View live demo of " + project.title}
                  >
                    LIVE DEMO <span aria-hidden="true">→</span>
                  </a>
                )}
              </footer>
            )}
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
