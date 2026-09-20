import { motion as Motion, useReducedMotion } from "framer-motion";
import { stats } from "../content/stats";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import StatNumber from "../components/stats/StatNumber";

const platformLabels = {
  leetcode: "LEETCODE",
  codechef: "CODECHEF",
  codeforces: "CODEFORCES",
};

export default function ProblemSolving() {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? { initial: false, whileInView: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="problem-solving"
      aria-labelledby="problem-solving-title"
      className="problem-solving section"
    >
      <Container>
        <Motion.div
          className="problem-solving__intro"
          {...revealProps}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionHeading
            id="problem-solving-title"
            eyebrow="Evidence / 02"
            title="Problem Solving"
            description="Consistent competitive programming practice focused on data structures, algorithms, and problem solving across multiple platforms."
          />
        </Motion.div>

        <Motion.div
          className="problem-solving__body"
          {...revealProps}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          <dl className="problem-solving__primary">
            <StatNumber
              value={stats.dsaProblems}
              suffix="+"
              label="DSA PROBLEMS"
              valueClassName="stat-number__value--primary"
            />
          </dl>

          <dl className="problem-solving__platforms">
            {Object.entries(stats.platforms).map(([platform, data]) => (
              <StatNumber
                key={platform}
                value={data.rating}
                label={platformLabels[platform] + " / RATING"}
                className="stat-number--platform"
                valueClassName="stat-number__value--platform"
              />
            ))}
          </dl>

          <nav
            className="problem-solving__platform-links"
            aria-label="Competitive programming profiles"
          >
            {stats.profileLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Varun Rajguru on ${label}`}
              >
                {label} <span aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <div className="problem-solving__secondary">
            <dl className="problem-solving__contest-stat">
              <StatNumber
                value={stats.contestsAttended}
                label="CONTESTS ATTENDED"
                valueClassName="stat-number__value--secondary"
              />
            </dl>

            <div className="problem-solving__active-panel">
              <dl>
                <StatNumber
                  value={stats.activeDays}
                  label="ACTIVE DAYS"
                  valueClassName="stat-number__value--secondary"
                />
              </dl>
              <div className="problem-solving__activity-grid" aria-hidden="true" />
            </div>
          </div>
        </Motion.div>
      </Container>
    </section>
  );
}
