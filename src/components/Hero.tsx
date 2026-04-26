const Hero = () => (
  <section className="hero" aria-label="Introduction">
    {/* Animated background orbs */}
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-orb hero-orb-4" />
      <div className="hero-orb hero-orb-gold" />
    </div>

    <div className="hero-content">
      <p className="hero-eyebrow animate-in">Lorem ipsum · Dolor sit amet</p>
      <h1 className="hero-headline animate-in delay-1">
        Sed ut perspiciatis<br />
        unde <em>omnis.</em><br />
        Natus error sit<br />
        voluptatem.
      </h1>
      <p className="hero-body animate-in delay-2">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
      <div className="hero-actions animate-in delay-3">
        <a href="#book" className="btn-primary">Lorem ipsum dolor sit</a>
        <a href="#approach" className="btn-ghost">Amet consectetur</a>
      </div>
    </div>
  </section>
);

export default Hero;
