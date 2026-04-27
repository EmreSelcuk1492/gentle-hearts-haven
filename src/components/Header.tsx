import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <a href="#" className="logo" aria-label="Attain Energy Healing — Home">
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
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a></li>
          <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        </ul>

        <a href="#book" className="nav-cta">Begin your journey</a>

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
