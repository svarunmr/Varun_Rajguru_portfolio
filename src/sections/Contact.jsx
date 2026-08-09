import { motion as Motion, useReducedMotion } from "framer-motion";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const primaryLinks = [
  ["GitHub", "https://github.com/svarunmr"],
  ["LinkedIn", "https://www.linkedin.com/in/svarunmr/"],
];

const profileLinks = [
  ["LeetCode", "https://leetcode.com/u/svarunmr/"],
  ["GeeksforGeeks", "https://www.geeksforgeeks.org/profile/svarunmr"],
  ["Codolio", "https://codolio.com/profile/svarunmr"],
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="contact-section section"
    >
      <Container>
        <div className="contact-section__layout">
          <Motion.div
            className="contact-section__statement"
            {...reveal}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeading
              id="contact-title"
              eyebrow="Contact / Availability / 06"
              title="Let's build something meaningful."
              description="I'm open to software engineering roles, internships, and collaborations where I can solve real problems and grow as an engineer."
            />
          </Motion.div>

          <Motion.div
            className="contact-section__panel"
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
          >
            <div className="contact-section__availability">
              <span className="contact-section__label">AVAILABLE FOR</span>
              <ul>
                <li>Software Engineering</li>
                <li>Backend Engineering</li>
                <li>Technical Collaboration</li>
              </ul>
            </div>

            <div className="contact-section__actions">
              <span className="contact-section__label">CONTACT</span>
              <Button
                href="mailto:varun.rajguru22@vit.edu"
                variant="primary"
                aria-label="Email Varun Rajguru"
                className="contact-section__email"
              >
                EMAIL ME <span aria-hidden="true">→</span>
              </Button>

              <div className="contact-section__primary-links">
                {primaryLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Visit Varun Rajguru on " + label}
                  >
                    {label} <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-section__profiles">
              <span className="contact-section__label">ADDITIONAL PROFILES</span>
              <div>
                {profileLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Visit Varun Rajguru on " + label}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </Container>
    </section>
  );
}
