import { motion as Motion, useReducedMotion } from "framer-motion";
import EngineeringSignal from "../components/EngineeringSignal";
import Button from "../components/ui/Button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0, x: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section id="home" aria-labelledby="hero-title" className="hero section">
      <div className="container hero__grid">
        <Motion.div
          className="hero__content"
          initial={reveal.initial}
          animate={reveal.animate}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="type-label hero__eyebrow">Software Engineer</p>

          <h1 id="hero-title" className="type-display hero__title">
            <span>I BUILD</span>
            <span>SYSTEMS</span>
            <span>AND SOLVE</span>
            <span>HARD PROBLEMS.</span>
          </h1>

          <p className="hero__specialties type-mono">
            Backend <span aria-hidden="true">·</span> Algorithms{" "}
            <span aria-hidden="true">·</span> AI
          </p>

          <p className="hero__description type-body-lg">
            I design and build scalable backend systems and ML-powered
            applications with a focus on clean architecture, performance, and
            real-world impact.
          </p>

          <div className="hero__actions">
            <Button href="#projects" variant="primary">
              VIEW WORK
            </Button>
            <Button
              href="https://github.com/svarunmr"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Button>
          </div>

          <div className="hero__metadata" aria-label="Engineering focus areas">
            <span>BACKEND</span>
            <span>ALGORITHMS</span>
            <span>AI</span>
          </div>
        </Motion.div>

        <Motion.div
          className="hero__signal-wrap"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.12 }}
        >
          <EngineeringSignal />
        </Motion.div>
      </div>

      <a
        className="hero__scroll"
        href="#problem-solving"
        aria-label="Scroll to problem solving"
      >
        <span>SCROLL TO EXPLORE</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
