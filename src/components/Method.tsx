const methods = [
  {
    number: "01",
    title: "Biomechanical movement",
    sub: "The body first — always",
    desc: "Every session begins with biomechanical exercises — deliberate movements that work with the body's own structure. The pace is always responsive to you. If you arrive tense, the work softens. If you arrive heavy, the movements build vitality and bring you back to life. No fitness level required.",
    moment: "Relief and vitality — like they just cleaned out a room they'd forgotten was full.",
  },
  {
    number: "02",
    title: "Breathing techniques",
    sub: "The breath next — always responsive",
    desc: "With the body open, we move into specific breathing techniques chosen for what you are carrying that day. For some it softens and brings stillness. For others it clears and energises. The breath becomes a tool you take with you — something to return to between sessions, whenever you need to find your centre again.",
    moment: "A clearing — sometimes a softening, sometimes a surge of vitality. Always a return to themselves.",
  },
  {
    number: "03",
    title: "Guided meditation",
    sub: "The stillness last — structured and purposeful",
    desc: "With the body open and the breath steady, we enter guided meditation personalised to your challenges — moving through release, gratitude, goodwill, forgiveness, and closing by directing your energy toward the future you are building. Nothing is rushed. Each layer prepares the ground for the next.",
    moment: "A deep quietness — and often the sense of having set something down and glimpsed something worth moving toward.",
  },
];

const Method = () => (
  <section className="method-section" id="approach" aria-labelledby="method-title">
    <div className="method-inner">
      <div className="method-header reveal">
        <p className="section-label">The approach</p>
        <h2 className="section-title" id="method-title">
          Three steps. One <em>continuous</em> experience.
        </h2>
        <p className="method-intro">
          Each session follows the same intentional sequence — not because it is rigid, but because the order matters. The body must open before the breath can deepen. The breath must settle before the mind can truly release.
        </p>
      </div>

      <div className="method-steps">
        {methods.map((m, i) => (
          <article
            key={m.number}
            className={`method-step${i % 2 === 1 ? " method-step-alt" : ""} reveal reveal-delay-${Math.min(i + 1, 3)}`}
          >
            <div className="method-step-number" aria-hidden="true">{m.number}</div>
            <div className="method-step-content">
              <div className="method-title-row">
                <div className="method-rule" />
                <h3 className="method-title">{m.title}</h3>
              </div>
              <p className="method-sub">{m.sub}</p>
              <p className="method-desc">{m.desc}</p>
              <blockquote className="method-moment">
                <p className="method-moment-label">What clients often experience</p>
                <p className="method-moment-text">{m.moment}</p>
              </blockquote>
            </div>
          </article>
        ))}
      </div>

      <div className="flow-band">
        <div className="flow-step">
          <span className="flow-num">01</span>
          <div>
            <div className="flow-name">Movement</div>
            <div className="flow-desc">Body opens</div>
          </div>
        </div>
        <span className="flow-arrow">&rarr;</span>
        <div className="flow-step">
          <span className="flow-num">02</span>
          <div>
            <div className="flow-name">Breathwork</div>
            <div className="flow-desc">Breath settles</div>
          </div>
        </div>
        <span className="flow-arrow">&rarr;</span>
        <div className="flow-step">
          <span className="flow-num">03</span>
          <div>
            <div className="flow-name">Meditation</div>
            <div className="flow-desc">Mind releases</div>
          </div>
        </div>
        <span className="flow-arrow">&rarr;</span>
        <div className="flow-step">
          <span className="flow-num flow-star">&#10022;</span>
          <div>
            <div className="flow-name flow-name-gold">You leave lighter</div>
            <div className="flow-desc">With tools to continue</div>
          </div>
        </div>
      </div>
    </div>

    <div className="method-closing">
      <p className="method-closing-text">
        Each session is <em>entirely personalized</em> — what you bring determines where we go.
      </p>
      <p className="method-closing-small">
        Sessions available in person or remotely, in English or Turkish. Each session ends with tools and practices you can take into your daily life.
      </p>
    </div>
  </section>
);

export default Method;
