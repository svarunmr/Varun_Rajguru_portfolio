import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/useTheme";
import IconButton from "./ui/IconButton";
import {
  CloseIcon,
  GithubIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "./ui/icons";

const NAV_ITEMS = [
  { id: "projects", label: "WORK" },
  { id: "skills", label: "LAB" },
  { id: "about", label: "ABOUT" },
];

const OBSERVED_SECTIONS = ["home", ...NAV_ITEMS.map(({ id }) => id)];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.4, 0.6, 0.8] }
    );

    OBSERVED_SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const firstMenuLink = mobileMenuRef.current?.querySelector("a");
    firstMenuLink?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="container site-nav__inner">
        <a className="site-nav__brand" href="#home" aria-label="Go to homepage">
          VARUN.R
        </a>

        <div className="site-nav__desktop-links" aria-label="Main sections">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={
                active !== "home" && active === id ? "location" : undefined
              }
              className="site-nav__link"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="site-nav__actions">
          <a
            className="site-nav__github"
            href="https://github.com/svarunmr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Varun Rajguru on GitHub"
          >
            <GithubIcon />
          </a>

          <IconButton
            onClick={toggleTheme}
            label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "dark"}
            className="site-nav__theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>

          <IconButton
            ref={menuButtonRef}
            onClick={() => setMenuOpen((open) => !open)}
            label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="site-nav__menu-button"
          >
            <span className="site-nav__menu-icon" aria-hidden="true">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </span>
          </IconButton>
        </div>
      </div>

      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className={`site-nav__mobile-menu${menuOpen ? " is-open" : ""}`}
        hidden={!menuOpen}
      >
        <div className="container site-nav__mobile-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={
                active !== "home" && active === id ? "location" : undefined
              }
              onClick={closeMenu}
              className="site-nav__mobile-link"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/svarunmr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="site-nav__mobile-link"
          >
            GITHUB
          </a>
        </div>
      </div>
    </nav>
  );
}
