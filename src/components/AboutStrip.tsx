const credentials = [
  "WIID Certified Trainer",
  "BEwell Science\u2122 Specialist",
  "EN & TR",
];

const AboutStrip = () => (
  <section className="about-strip" id="about" aria-labelledby="about-title">
    <div className="about-image">
      <img src="/asli-portrait.png" alt="Asli Selcuk" className="about-image-placeholder" />
    </div>
    <div className="about-content reveal">
      <p className="section-label">About Asli</p>
      <h2 className="section-title" id="about-title">
        She has lived enough to know what you might be <em>carrying.</em>
      </h2>
      <p className="about-body">
        Before she became a healer, Asli Selcuk lived many lives. She built a career in corporate finance across three Fortune 500 companies, earned a Masters and her CPA, moved continents, and raised two boys — all while showing up fully in every role life asked of her.
      </p>
      <p className="about-body">
        The turning point came when she encountered the BEwell Science&#8482; system — not as a professional seeking a new path, but as a person. <em>Something emotional released that she had been carrying for years.</em>
      </p>

      <div className="about-credentials" aria-label="Credentials">
        {credentials.map((cred) => (
          <span key={cred} className="credential-tag">
            <span className="credential-dot" aria-hidden="true" />
            {cred}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStrip;
