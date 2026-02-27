export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center justify-center bg-[var(--bg)] text-[var(--text)]"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Let’s build something meaningful
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-10">
          I’m open to software engineering roles, internships, and
          collaborations where I can solve real problems and grow as an
          engineer.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3">
          {/* Primary CTA */}
          <a
            href="mailto:varun.rajguru22@vit.edu"
            className="px-6 py-3 rounded-xl font-medium bg-[var(--text)] text-[var(--bg)]
                       transition-all duration-200
                       hover:-translate-y-0.5 hover:opacity-90
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--text)]"
          >
            Email Me
          </a>

          {/* Secondary links */}
          {[
            ["GitHub", "https://github.com/svarunmr"],
            ["LinkedIn", "https://www.linkedin.com/in/svarunmr/"],
            ["LeetCode", "https://leetcode.com/u/svarunmr/"],
            ["GeeksforGeeks", "https://www.geeksforgeeks.org/profile/svarunmr"],
            ["Codolio", "https://codolio.com/profile/svarunmr"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-[var(--text)]/40 text-sm
                         transition-all duration-200
                         hover:border-[var(--text)]
                         hover:bg-[var(--text)]/5
                         hover:-translate-y-0.5
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--text)]"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-gray-500">
          Designed & built by Varun
        </p>
      </div>
    </section>
  );
}
