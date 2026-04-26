const credentials = [
  "Lorem Ipsum Certified",
  "Dolor Sit Specialist",
  "Bilingual EN · TR",
  "Amet Consectetur",
];

const AboutStrip = () => (
  <section className="about-strip" id="about" aria-labelledby="about-title">
    <div className="about-image">
      <svg viewBox="0 0 400 500" width="400" height="500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="400" height="500" fill="#D4E0DA" />
        <circle cx="200" cy="170" r="80" fill="#B8CFC8" opacity="0.5" />
        <rect x="130" y="240" width="140" height="220" rx="2" fill="#B8CFC8" opacity="0.35" />
        <line x1="80" y1="460" x2="320" y2="460" stroke="#B49450" strokeWidth="0.8" opacity="0.4" />
        <text x="200" y="490" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#7C9A8A" opacity="0.6" letterSpacing="2">PLACEHOLDER</text>
      </svg>
    </div>
    <div className="about-content reveal">
      <p className="section-label">Lorem ipsum</p>
      <h2 className="section-title" id="about-title">
        Quis autem vel eum iure reprehenderit qui in ea voluptate
      </h2>
      <p className="about-body">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <p className="about-body">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam.
      </p>
      <div className="credential-row">
        {credentials.map((c) => (
          <span key={c} className="credential-tag">{c}</span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStrip;
