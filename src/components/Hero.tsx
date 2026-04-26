const Hero = () => (
  <section className="hero" aria-label="Introduction">
    {/* Background breathing rings */}
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-ring hero-ring-3" />
      <div className="hero-glow" />
      <div className="hero-center-dot" />
    </div>

    {/* Centered content */}
    <div className="hero-content">
      <p className="hero-eyebrow animate-in">Holistic healing &middot; Body, mind &amp; spirit</p>
      <h1 className="hero-headline animate-in delay-1">
        Your body has been<br />
        asking for <em>this.</em><br />
        So has your soul.
      </h1>
      <p className="hero-body animate-in delay-2">
        Begin with <strong>gentle movement</strong> to release what the body holds.
        Then <strong>breathing techniques</strong> to open and centre.
        Then <strong>guided meditation</strong> to let it go — deeply.
      </p>
      <div className="hero-seq animate-in delay-3">
        <span className="seq-step">Movement</span>
        <span className="seq-arrow">&rarr;</span>
        <span className="seq-step">Breathwork</span>
        <span className="seq-arrow">&rarr;</span>
        <span className="seq-step">Meditation</span>
      </div>
      <div className="hero-actions animate-in delay-4">
        <a href="#book" className="btn-primary">Begin your journey</a>
        <a href="#approach" className="btn-ghost">How it works</a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="hero-scroll animate-in delay-5" aria-hidden="true">
      <div className="hero-scroll-line" />
    </div>
  </section>
);

export default Hero;
