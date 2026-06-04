import { dispatchBookingOpen, dispatchBookingPreload } from "@/lib/calendly";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" stroke="#5E7866" strokeWidth="0.9" opacity="0.65" />
            <ellipse cx="20" cy="20" rx="8" ry="14.5" stroke="#5E7866" strokeWidth="0.9" opacity="0.65" />
            <line x1="4" y1="20" x2="36" y2="20" stroke="#5E7866" strokeWidth="0.9" opacity="0.65" />
            <circle cx="20" cy="20" r="2.5" fill="#C45F3C" opacity="0.8" />
          </svg>
          <div className="logo-text">
            <span className="logo-name">Attain</span>
            <span className="logo-tagline">Energy Healing</span>
          </div>
        </div>
        <p className="footer-tagline">Heal what you're carrying. Move forward whole.</p>
      </div>
      <div>
        <p className="footer-nav-title">Navigate</p>
        <ul className="footer-nav-links">
          <li><a href="#about">About Asli</a></li>
          <li><a href="#services">Who this is for</a></li>
          <li><a href="#approach">The approach</a></li>
          <li><a href="#events">Events &amp; gatherings</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <button
              type="button"
              className="footer-nav-btn"
              onClick={(e) => { e.preventDefault(); dispatchBookingOpen(); }}
              onMouseEnter={dispatchBookingPreload}
              onFocus={dispatchBookingPreload}
              aria-haspopup="dialog"
            >
              Book a call
            </button>
          </li>
        </ul>
      </div>
      <div>
        <p className="footer-nav-title">Connect</p>
        <ul className="footer-nav-links">
          <li>
            <a href="mailto:threeclairs@outlook.com" className="footer-social-link">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-social-icon">
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>threeclairs@outlook.com</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/attainyourbestlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-social-icon">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-copy">&copy; 2026 Attain Energy Healing</span>
      <span className="footer-made">
        Made with
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-heart">
          <path
            d="M12 20.5s-7.2-4.35-9.4-9.05C1 7.7 3.3 4.5 6.6 4.5c2 0 3.5 1.1 4.4 2.6.9-1.5 2.4-2.6 4.4-2.6 3.3 0 5.6 3.2 4 6.95C19.2 16.15 12 20.5 12 20.5Z"
            fill="currentColor"
          />
        </svg>
        love
      </span>
    </div>
  </footer>
);

export default Footer;
