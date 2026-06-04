const credentials = [
  "WIID Certified Trainer",
  "BEwell Science™ Specialist",
  "EN & TR",
];

const AboutStripV2 = () => (
  <section className="about-v2" id="about" aria-labelledby="about-title-v2">
    <div className="about-v2-inner">
      <div className="about-v2-image">
        <img src="/asli-portrait.png" alt="Asli Selcuk" />
      </div>
      <div className="about-v2-content reveal">
        <p className="section-label">About Asli</p>
        <h2 className="section-title" id="about-title-v2">
          She has lived enough to know what you might be <em>carrying.</em>
        </h2>
        <p className="about-v2-body">
          Before she became a healer, Asli Selcuk lived many lives. She built a career in corporate finance across three Fortune 500 companies, earned a Masters and her CPA, moved continents, and raised two boys, all while showing up fully in every role life asked of her.
        </p>
        <p className="about-v2-body">
          The turning point came when she encountered the BEwell Science&#8482; system, not as a professional seeking a new path, but as a person. <em>Something emotional released that she had been carrying for years.</em>
        </p>
        <ul className="about-v2-creds" aria-label="Credentials">
          {credentials.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutStripV2;
