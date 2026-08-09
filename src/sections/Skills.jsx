import { motion as Motion, useReducedMotion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { skillGroups } from "../content/skills";

function SkillGroup({ group, className = "" }) {
  return (
    <article className={["technical-stack__group", className].filter(Boolean).join(" ")}>
      <header className="technical-stack__group-header">
        <span className="technical-stack__number">{group.number}</span>
        <h3>{group.label}</h3>
      </header>
      <p className="technical-stack__items">{group.items.join(" · ")}</p>
    </article>
  );
}

function AiGroup({ group }) {
  return (
    <article className="technical-stack__ai">
      <header className="technical-stack__ai-header">
        <span className="technical-stack__number">{group.number}</span>
        <h3>{group.label}</h3>
      </header>

      <div className="technical-stack__ai-groups">
        {group.subgroups.map((subgroup) => (
          <section className="technical-stack__ai-subgroup" key={subgroup.label}>
            <h4>{subgroup.label}</h4>
            <p>{subgroup.items.join(" · ")}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const groupsBeforeAi = skillGroups.filter((group) => group.id !== "ai-ml");
  const aiGroup = skillGroups.find((group) => group.id === "ai-ml");
  const upperGroups = groupsBeforeAi.slice(0, 3);
  const lowerGroups = groupsBeforeAi.slice(3);

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
            description="Technologies and foundations I use to design, build, and experiment."
          />
        </Motion.div>

        <div className="technical-stack__content">
          <Motion.div
            className="technical-stack__foundation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            {upperGroups.map((group) => (
              <SkillGroup group={group} key={group.id} />
            ))}
          </Motion.div>

          {aiGroup && (
            <Motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.14,
              }}
            >
              <AiGroup group={aiGroup} />
            </Motion.div>
          )}

          <Motion.div
            className="technical-stack__foundation technical-stack__foundation--lower"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {lowerGroups.map((group) => (
              <SkillGroup group={group} key={group.id} />
            ))}
          </Motion.div>
        </div>
      </Container>
    </section>
  );
}
