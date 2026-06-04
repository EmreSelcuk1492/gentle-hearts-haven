const methods = [
  {
    number: "01",
    title: "Biomechanical movement",
    sub: "The body first, always",
    desc: "Every session begins with biomechanical exercises: deliberate movements that work with the body's own structure. The pace is always responsive to you.",
    moment: "Relief and vitality. Like they just cleaned out a room they'd forgotten was full.",
  },
  {
    number: "02",
    title: "Breathing techniques",
    sub: "The breath next, responsive",
    desc: "With the body open, we move into specific breathing techniques chosen for what you are carrying that day. The breath becomes a tool you take with you.",
    moment: "A clearing. Sometimes a softening, sometimes a surge of vitality. Always a return to themselves.",
  },
  {
    number: "03",
    title: "Guided meditation",
    sub: "The stillness last, purposeful",
    desc: "With the body open and the breath steady, we enter guided meditation personalised to your challenges, moving through release, gratitude, goodwill, forgiveness.",
    moment: "A deep quietness, and often the sense of having set something down and glimpsed something worth moving toward.",
  },
];

const MethodV2 = () => (
  <section className="method-v2" id="approach" aria-labelledby="method-title-v2">
    <div className="method-v2-inner">
      <header className="method-v2-header reveal">
        <p className="section-label centered">The approach</p>
        <h2 className="section-title" id="method-title-v2" style={{ textAlign: "center" }}>
          Three steps. One <em>continuous</em> experience.
        </h2>
        <p className="method-v2-intro">
          Each session follows the same intentional sequence, not because it is rigid, but because the order matters. The body must open before the breath can deepen. The breath must settle before the mind can truly release.
        </p>
      </header>

      <ol className="method-v2-list">
        {methods.map((m, i) => (
          <li
            key={m.number}
            className={`method-v2-step reveal reveal-delay-${Math.min(i + 1, 3)}`}
          >
            <div className="method-v2-step-head">
              <span className="method-v2-num" aria-hidden="true">{m.number}</span>
              <h3 className="method-v2-title">{m.title}</h3>
            </div>
            <p className="method-v2-sub">{m.sub}</p>
            <p className="method-v2-desc">{m.desc}</p>
            <p className="method-v2-moment">
              <span className="method-v2-moment-attr">What clients often experience</span>
              <span className="method-v2-moment-quote">{m.moment}</span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default MethodV2;
