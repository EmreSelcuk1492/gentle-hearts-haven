const credentials = [
  "Certified Energy Healing Trainer & Specialist – Intuitive Guide",
  "English & Turkish",
];

const AboutStripV2 = () => (
  <section className="about-v2" id="about" aria-labelledby="about-title-v2">
    <div className="about-v2-inner">
      <div className="about-v2-image">
        <img src="/asli-portrait.webp" alt="Asli Selcuk, smiling warmly" loading="lazy" decoding="async" />
      </div>
      <div className="about-v2-content reveal">
        <p className="section-label">About Asli</p>
        <h2 className="section-title" id="about-title-v2">
          She has lived enough to know what you might be <em>carrying.</em>
        </h2>
        <p className="about-v2-body">
          Before she became an Energy Healer and Intuitive Guide, Asli Selcuk lived many lives. She built a career in corporate finance across three Fortune 500 companies, earned a Masters and her CPA, moved continents, and raised two boys &mdash; all while showing up fully in every role life asked of her.
        </p>
        <p className="about-v2-body">
          A turning point came when she sought guidance herself &mdash; looking for a way to balance her own life and the many challenges it held. What followed was a profound mental and emotional release of something she had been carrying for years. It was in that moment she knew: <em>this is what she is also meant to do</em> &mdash; to support people navigating the difficult terrain the world is offering, and the rich, complex tapestry of their individual lives.
        </p>
        <ul className="about-v2-creds" aria-label="Credentials">
          {credentials.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutStripV2;
