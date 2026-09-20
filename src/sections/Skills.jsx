import { motion as Motion, useReducedMotion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { skillGroups } from "../content/skills";

function SkillGroup({ group }) {
  return (
    <article className="technical-stack__group">
      <header className="technical-stack__group-header">
        <span className="technical-stack__number">{group.number}</span>
        <h3>{group.label}</h3>
      </header>
      <p className="technical-stack__items">{group.items.join(" · ")}</p>
    </article>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="technical-stack section"
    >
      <Container>
        <Motion.div
          className="technical-stack__intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            id="skills-title"
            eyebrow="Engineering Toolkit / 04"
            title="Technical Stack"
            description="Languages, backend technologies, systems, and computer science foundations I use to build software."
          />
        </Motion.div>

        <Motion.div
          className="technical-stack__content technical-stack__foundation"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          {skillGroups.map((group) => (
            <SkillGroup group={group} key={group.id} />
          ))}
        </Motion.div>
      </Container>
    </section>
  );
}
