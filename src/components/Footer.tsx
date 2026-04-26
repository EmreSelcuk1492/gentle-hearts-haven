const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" stroke="#7C9A8A" strokeWidth="0.9" opacity="0.6" />
            <ellipse cx="20" cy="20" rx="8" ry="14.5" stroke="#7C9A8A" strokeWidth="0.9" opacity="0.6" />
            <line x1="4" y1="20" x2="36" y2="20" stroke="#7C9A8A" strokeWidth="0.9" opacity="0.6" />
            <circle cx="20" cy="20" r="2.5" fill="#B49450" opacity="0.7" />
          </svg>
          <div className="logo-text">
            <span className="logo-name">Attain</span>
            <span className="logo-tagline">Energy Healing</span>
          </div>
        </div>
        <p className="footer-tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <p className="footer-nav-title">Navigate</p>
        <ul className="footer-nav-links">
          <li><a href="#about">Lorem Ipsum</a></li>
          <li><a href="#services">Dolor Sit</a></li>
          <li><a href="#approach">Amet Consectetur</a></li>
          <li><a href="#faq">Adipiscing</a></li>
          <li><a href="#book">Elit Sed</a></li>
        </ul>
      </div>
      <div>
        <p className="footer-nav-title">Connect</p>
        <ul className="footer-nav-links">
          <li><a href="mailto:hello@example.com">hello@example.com</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Lorem Ipsum, USA</a></li>
          <li><a href="#">Dolor sit amet remotely</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-copy">&copy; 2026 Attain Energy Healing &middot; Lorem Ipsum. All rights reserved.</span>
      <ul className="footer-social">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
