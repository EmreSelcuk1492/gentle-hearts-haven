import { useState, useEffect } from "react";
import BookButton from "@/components/BookButton";

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "events", label: "Events" },
  { id: "faq", label: "FAQ" },
] as const;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Accent-underline the nav link of the section currently in view.
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });
        let best: string | null = null;
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });
        setActiveSection(best);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0, 0.15, 0.4, 0.8] }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav>
        <a href="#" className="logo" aria-label="Attain Energy Healing, Home">
          <svg className="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" stroke="#5E7866" strokeWidth="0.9" />
            <ellipse cx="20" cy="20" rx="8" ry="14.5" stroke="#5E7866" strokeWidth="0.9" />
            <line x1="4" y1="20" x2="36" y2="20" stroke="#5E7866" strokeWidth="0.9" />
            <circle cx="20" cy="20" r="2.5" fill="#C45F3C" />
          </svg>
          <div className="logo-text">
            <span className="logo-name">Attain</span>
            <span className="logo-tagline">Energy Healing</span>
          </div>
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`} role="list">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : undefined}
                aria-current={activeSection === id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="nav-drawer-actions">
            <BookButton className="btn-primary nav-drawer-cta">Begin your journey</BookButton>
            <a href="mailto:threeclairs@outlook.com" className="nav-drawer-email" onClick={() => setMenuOpen(false)}>
              Email Asli directly
            </a>
          </li>
        </ul>

        <div className="nav-cta-group">
          <BookButton className="nav-cta">Begin your journey</BookButton>
          <a
            href="mailto:threeclairs@outlook.com"
            className="nav-email"
            aria-label="Email Asli directly"
            title="Email Asli"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2.5" y="4" width="15" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M3 5.5L10 11L17 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
