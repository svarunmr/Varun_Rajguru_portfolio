import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24
                 bg-[var(--bg)] text-[var(--text)]"
    >
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m Varun
        </motion.h1>

        {/* Subheading / description */}
        <motion.p
          className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span className="block font-medium text-[var(--text)]">
            Backend & AI-focused Software Engineer
          </span>

          <span className="block mt-3">
            I design and build scalable backend systems and ML-powered
            applications with a strong focus on clean architecture,
            performance, and real-world impact.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-medium
                       bg-[var(--text)] text-[var(--bg)]
                       transition-all duration-200
                       hover:-translate-y-0.5 hover:opacity-90
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--text)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-[var(--text)]/50
                       transition-all duration-200
                       hover:bg-[var(--text)]/5 hover:-translate-y-0.5
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--text)]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
