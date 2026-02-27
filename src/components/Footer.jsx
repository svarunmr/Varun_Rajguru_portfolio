export default function Footer() {
  return (
    <footer className="border-t border-[var(--text)]/20 py-10 text-center">
      <p className="text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Varun Rajguru
      </p>

      <p className="mt-1 text-xs text-[var(--muted)]">
        Designed & built with React and Tailwind CSS
      </p>
    </footer>
  );
}

