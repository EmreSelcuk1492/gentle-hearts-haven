const Footer = () => (
  <footer>
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
          <li><a href="#book">Book a call</a></li>
        </ul>
      </div>
      <div>
        <p className="footer-nav-title">Connect</p>
        <ul className="footer-nav-links">
          <li><a href="mailto:hello@attainenergyhealing.com">hello@attainenergyhealing.com</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Washington State, USA</a></li>
          <li><a href="#">Sessions available remotely</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-copy">&copy; 2026 Attain Energy Healing &middot; Asli Selcuk. All rights reserved.</span>
      <ul className="footer-social">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
