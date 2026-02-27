import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.4, 0.6, 0.8] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur
                 bg-[var(--bg)]/80 border-b border-[var(--text)]/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-sm md:text-base font-semibold tracking-tight
                     hover:opacity-80 transition-opacity"
        >
          Varun Rajguru
        </a>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm">
          {/* Internal links */}
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative transition-colors
                  ${
                    isActive
                      ? "text-[var(--text)]"
                      : "text-gray-400 hover:text-[var(--text)]"
                  }
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[var(--text)]/40
                  focus-visible:ring-offset-4`}
              >
                {label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-[var(--text)]" />
                )}
              </a>
            );
          })}

          {/* External links */}
          <a
            href="https://github.com/svarunmr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--text)] transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/svarunmr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--text)] transition-colors"
          >
            LeetCode
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 rounded-lg border border-[var(--text)]/30
                       px-2.5 py-1.5 text-sm
                       hover:border-[var(--text)]/60
                       transition-all
                       focus:outline-none focus-visible:ring-2
                       focus-visible:ring-[var(--text)]/40
                       focus-visible:ring-offset-4"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
