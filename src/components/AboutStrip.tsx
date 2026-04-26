const timeline = [
  { label: "Moved Continents", icon: "globe" },
  { label: "Corporate Finance", icon: "briefcase" },
  { label: "Masters in Finance · CPA", icon: "cap" },
  { label: "Mother of Two", icon: "heart" },
  { label: "Fortune 500 Leadership", icon: "chart" },
  { label: "Now: Healer & Trainer", icon: "lotus" },
];

const icons: Record<string, JSX.Element> = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4.5" ry="10" />
      <path d="M2 12h20" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 13h20" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3L1 9l11 6 9-4.91V17" />
      <path d="M5 13.18v4.82a9.38 9.38 0 0 0 7 3 9.38 9.38 0 0 0 7-3v-4.82" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  lotus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 21c0 0-4-3.5-4-8a4 4 0 0 1 8 0c0 4.5-4 8-4 8z" />
      <path d="M12 21c0 0-8-5-8-11a4.5 4.5 0 0 1 8 1" />
      <path d="M12 21c0 0 8-5 8-11a4.5 4.5 0 0 0-8 1" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const AboutStrip = () => (
  <section className="about-strip" id="about" aria-labelledby="about-title">
    <div className="about-image">
      <svg viewBox="0 0 400 580" width="400" height="580" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="400" height="580" fill="#D4E0DA" />
        <circle cx="200" cy="185" r="82" fill="#B8CFC8" opacity="0.5" />
        <rect x="128" y="258" width="144" height="250" rx="2" fill="#B8CFC8" opacity="0.35" />
        <line x1="80" y1="510" x2="320" y2="510" stroke="#B49450" strokeWidth="0.8" opacity="0.4" />
        <text x="200" y="535" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#7C9A8A" opacity="0.55" letterSpacing="2">ASLI SELCUK</text>
      </svg>
    </div>
    <div className="about-content reveal">
      <p className="section-label">About Asli</p>
      <h2 className="section-title" id="about-title">
        She has lived enough to know what you might be <em>carrying.</em>
      </h2>
      <p className="about-body">
        Before she became a healer, Asli Selcuk lived many lives. She built a career in corporate finance across three Fortune 500 companies, earned a Masters and her CPA, moved continents, and raised two boys — all while showing up fully in every role life asked of her. She knows from the inside what it means to be capable, accomplished, and quietly stretched beyond what you let anyone see.
      </p>
      <p className="about-body">
        The turning point came when she encountered the BEwell Science™ system — not as a professional seeking a new path, but as a person. Something emotional released that she had been carrying for years. Clarity returned. A lightness she hadn't felt in a long time came back. And with it, an immediate knowing: <em>this is what I am meant to do.</em>
      </p>
      <p className="about-body">
        Today, as a certified Trainer and Specialist at the World Institute for Incurable Diseases, Asli works with people wherever they are in life — whether they are in the middle of a demanding career, navigating a health challenge, raising a family, or simply feeling that something essential has gone quiet inside them. She understands each of these stages not just as a healer — <em>but as someone who has lived them.</em>
      </p>

      {/* Timeline */}
      <div className="about-timeline" aria-label="Asli's journey">
        <div className="timeline-line" aria-hidden="true" />
        {timeline.map((step, i) => (
          <div
            key={step.label}
            className={`timeline-node${i === timeline.length - 1 ? " timeline-node-active" : ""}`}
          >
            <div className="timeline-icon" aria-hidden="true">
              {icons[step.icon]}
            </div>
            <div className="timeline-dot" aria-hidden="true" />
            <span className="timeline-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStrip;
