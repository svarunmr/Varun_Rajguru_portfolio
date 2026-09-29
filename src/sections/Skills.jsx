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

      {group.subgroups ? (
        <div className="technical-stack__subgroups">
          {group.subgroups.map((subgroup) => (
            <section
              className="technical-stack__subgroup"
              key={subgroup.label}
            >
              <h4>{subgroup.label}</h4>
              <p className="technical-stack__items">
                {subgroup.items.join(" · ")}
              </p>
            </section>
          ))}
        </div>
      ) : (
        <p className="technical-stack__items">
          {group.items.join(" · ")}
        </p>
      )}
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
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <SectionHeading
            id="skills-title"
            eyebrow="Engineering Toolkit / 04"
            title="Technical Stack"
            description="Technologies, systems, and foundations I use to build software and solve problems."
          />
        </Motion.div>

        <div className="technical-stack__content">
          {skillGroups.map((group, index) => (
            <Motion.div
              key={group.id}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: "easeOut",
              }}
            >
              <SkillGroup group={group} />
            </Motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}