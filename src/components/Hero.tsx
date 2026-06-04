import BookButton from "@/components/BookButton";

const HeroV2 = () => (
  <section className="hero hero-v2" aria-label="Introduction">
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-glow" />
      <svg className="hero-logo-mark" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="hero-mark-ring hero-mark-ring-1" cx="200" cy="200" r="185" stroke="#5E7866" strokeWidth="0.8" />
        <ellipse className="hero-mark-ring hero-mark-ring-2" cx="200" cy="200" rx="80" ry="145" stroke="#5E7866" strokeWidth="0.8" />
        <line className="hero-mark-line" x1="40" y1="200" x2="360" y2="200" stroke="#5E7866" strokeWidth="0.8" />
        <circle className="hero-mark-glow" cx="200" cy="200" r="40" stroke="#C45F3C" strokeWidth="0.6" />
        <circle className="hero-mark-dot" cx="200" cy="200" r="8" fill="#C45F3C" />
      </svg>
    </div>

    <div className="hero-content hero-content-v2">
      <p className="section-label centered animate-in">Holistic healing</p>
      <h1 className="hero-headline animate-in delay-1">
        Your body has been<br />
        asking for <em>this.</em><br />
        So has your soul.
      </h1>
      <p className="hero-body animate-in delay-2">
        Begin with <strong>gentle movement</strong> to release what the body holds.
        Then <strong>breathing techniques</strong> to open and centre.
        Then <strong>guided meditation</strong> to let it go, deeply.
      </p>
      <div className="hero-actions animate-in delay-3">
        <div className="hero-cta-group">
          <BookButton className="btn-primary">Begin your journey</BookButton>
          <a href="mailto:threeclairs@outlook.com" className="hero-cta-email">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2.5" y="4" width="15" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M3 5.5L10 11L17 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Email Asli</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroV2;
