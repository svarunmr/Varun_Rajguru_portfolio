import { motion as Motion, useReducedMotion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { aboutContent } from "../content/about";

function ProfileList({ label, items }) {
  return (
    <div className="engineering-profile__list">
      <h3>{label}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="engineering-profile section"
    >
      <Container>
        <div className="engineering-profile__layout">
          <Motion.div
            className="engineering-profile__primary"
            {...reveal}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeading
              id="about-title"
              eyebrow="Engineering Profile / 05"
              title="About"
            />
            <div className="engineering-profile__narrative">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            className="engineering-profile__secondary"
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            <ProfileList label="FOCUS" items={aboutContent.focus} />
            <ProfileList label="CURRENTLY" items={aboutContent.current} />
          </Motion.div>
        </div>
      </Container>
    </section>
  );
}
