import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45 },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Technologies and fundamentals I actively use to design,
            build, and optimize software systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--text)]/30 p-6
                       hover:border-[var(--text)]/60 transition-colors"
          >
            <h3 className="text-lg font-medium mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["C++", "Python", "JavaScript", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             border border-[var(--text)]/40
                             text-[var(--text)]/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend & Databases */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--text)]/30 p-6
                       hover:border-[var(--text)]/60 transition-colors"
          >
            <h3 className="text-lg font-medium mb-4">
              Backend & Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "REST APIs",
                "MySQL",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             border border-[var(--text)]/40
                             text-[var(--text)]/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI / ML */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--text)]/30 p-6
                       hover:border-[var(--text)]/60 transition-colors"
          >
            <h3 className="text-lg font-medium mb-4">
              AI / Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "YOLOv8",
                "CNNs",
                "OpenCV",
                "Gradio",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             border border-[var(--text)]/40
                             text-[var(--text)]/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CS Fundamentals */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--text)]/30 p-6
                       hover:border-[var(--text)]/60 transition-colors"
          >
            <h3 className="text-lg font-medium mb-4">
              CS Fundamentals
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "DBMS",
                "OOP",
                "Operating Systems",
                "Computer Networks",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             border border-[var(--text)]/40
                             text-[var(--text)]/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--text)]/30 p-6
                       hover:border-[var(--text)]/60 transition-colors"
          >
            <h3 className="text-lg font-medium mb-4">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git",
                "GitHub",
                "MySQL",
                "Linux",
                "Microsoft 365",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-sm rounded-full
                             border border-[var(--text)]/40
                             text-[var(--text)]/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Problem Solving */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--text)]/30 p-6
                       hover:border-[var(--text)]/60 transition-colors"
          >
            <h3 className="text-lg font-medium mb-3">
              Problem Solving
            </h3>
            <p className="text-sm text-[var(--text)]/80 leading-relaxed">
              Solved <strong>1100+</strong> DSA problems across{" "}
              <strong>LeetCode</strong> and{" "}
              <strong>GeeksforGeeks</strong>, covering arrays, trees,
              graphs, dynamic programming, and system-level thinking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
