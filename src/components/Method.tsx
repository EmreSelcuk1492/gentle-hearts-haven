const methods = [
  {
    number: "01",
    title: "Biomechanical movement",
    sub: "The body first — always",
    desc: "Every session begins with biomechanical exercises — deliberate movements that work with the body's own structure. The pace is always responsive to you.",
    moment: "Relief and vitality — like they just cleaned out a room they'd forgotten was full.",
  },
  {
    number: "02",
    title: "Breathing techniques",
    sub: "The breath next — responsive",
    desc: "With the body open, we move into specific breathing techniques chosen for what you are carrying that day. The breath becomes a tool you take with you.",
    moment: "A clearing — sometimes a softening, sometimes a surge of vitality. Always a return to themselves.",
  },
  {
    number: "03",
    title: "Guided meditation",
    sub: "The stillness last — purposeful",
    desc: "With the body open and the breath steady, we enter guided meditation personalised to your challenges — moving through release, gratitude, goodwill, forgiveness.",
    moment: "A deep quietness — and often the sense of having set something down and glimpsed something worth moving toward.",
  },
];

const Method = () => (
  <section className="method-section" id="approach" aria-labelledby="method-title">
    <div className="method-layout">
      {/* Left — sticky header text */}
      <div className="method-sidebar reveal">
        <p className="section-label">The approach</p>
        <h2 className="section-title" id="method-title">
          Three steps. One <em>continuous</em> experience.
        </h2>
        <p className="method-intro">
          Each session follows the same intentional sequence — not because it is rigid, but because the order matters. The body must open before the breath can deepen. The breath must settle before the mind can truly release.
        </p>

        <div className="method-flow reveal" aria-label="Session flow: Movement, Breathwork, Meditation, You leave lighter">
          <svg className="flow-svg" viewBox="0 0 270 340" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            {/* Connecting line — draws itself */}
            <line x1="32" y1="32" x2="32" y2="308" stroke="#F2D4C2" strokeWidth="1.5" />
            <line
              className="flow-line-draw"
              x1="32" y1="32" x2="32" y2="308"
              stroke="#C45F3C" strokeWidth="1.5"
              strokeDasharray="276"
              strokeDashoffset="276"
            />

            {/* Node 1 — Movement */}
            <circle className="flow-node flow-node-1" cx="32" cy="32" r="7" fill="#FBE9DD" stroke="#C45F3C" strokeWidth="1.5" />
            <circle className="flow-dot flow-dot-1" cx="32" cy="32" r="2.5" fill="#C45F3C" />
            <text className="flow-svg-num flow-fade-1" x="54" y="28" fill="#9C4427" fontFamily="'Fraunces', serif" fontStyle="italic" fontSize="16" fontWeight="300">01</text>
            <text className="flow-svg-name flow-fade-1" x="54" y="43" fill="#3A2A22" fontFamily="'Inter Tight', sans-serif" fontSize="11" fontWeight="500" letterSpacing="0.18em">MOVEMENT</text>
            <text className="flow-svg-desc flow-fade-1" x="54" y="57" fill="#8C7868" fontFamily="'Inter Tight', sans-serif" fontSize="10">Body opens</text>

            {/* Node 2 — Breathwork */}
            <circle className="flow-node flow-node-2" cx="32" cy="124" r="7" fill="#FBE9DD" stroke="#C45F3C" strokeWidth="1.5" />
            <circle className="flow-dot flow-dot-2" cx="32" cy="124" r="2.5" fill="#C45F3C" />
            <text className="flow-svg-num flow-fade-2" x="54" y="120" fill="#9C4427" fontFamily="'Fraunces', serif" fontStyle="italic" fontSize="16" fontWeight="300">02</text>
            <text className="flow-svg-name flow-fade-2" x="54" y="135" fill="#3A2A22" fontFamily="'Inter Tight', sans-serif" fontSize="11" fontWeight="500" letterSpacing="0.18em">BREATHWORK</text>
            <text className="flow-svg-desc flow-fade-2" x="54" y="149" fill="#8C7868" fontFamily="'Inter Tight', sans-serif" fontSize="10">Breath settles</text>

            {/* Node 3 — Meditation */}
            <circle className="flow-node flow-node-3" cx="32" cy="216" r="7" fill="#FBE9DD" stroke="#C45F3C" strokeWidth="1.5" />
            <circle className="flow-dot flow-dot-3" cx="32" cy="216" r="2.5" fill="#C45F3C" />
            <text className="flow-svg-num flow-fade-3" x="54" y="212" fill="#9C4427" fontFamily="'Fraunces', serif" fontStyle="italic" fontSize="16" fontWeight="300">03</text>
            <text className="flow-svg-name flow-fade-3" x="54" y="227" fill="#3A2A22" fontFamily="'Inter Tight', sans-serif" fontSize="11" fontWeight="500" letterSpacing="0.18em">MEDITATION</text>
            <text className="flow-svg-desc flow-fade-3" x="54" y="241" fill="#8C7868" fontFamily="'Inter Tight', sans-serif" fontSize="10">Mind releases</text>

            {/* Node 4 — You leave lighter */}
            <circle className="flow-node flow-node-4" cx="32" cy="308" r="9" fill="#C45F3C" />
            <circle className="flow-glow flow-glow-4" cx="32" cy="308" r="15" fill="none" stroke="#C45F3C" strokeWidth="1" opacity="0" />
            <text className="flow-svg-num flow-fade-4" x="54" y="301" fill="#9C4427" fontFamily="'Fraunces', serif" fontStyle="italic" fontSize="16" fontWeight="300">&#10022;</text>
            <text className="flow-svg-name flow-fade-4" x="54" y="316" fill="#9C4427" fontFamily="'Inter Tight', sans-serif" fontSize="11" fontWeight="500" letterSpacing="0.18em">YOU LEAVE LIGHTER</text>
            <text className="flow-svg-desc flow-fade-4" x="54" y="330" fill="#8C7868" fontFamily="'Inter Tight', sans-serif" fontSize="10">With tools to continue</text>
          </svg>
        </div>
      </div>

      {/* Right — stacked cards */}
      <div className="method-cards">
        {methods.map((m, i) => (
          <article
            key={m.number}
            className={`method-step reveal reveal-delay-${Math.min(i + 1, 3)}`}
          >
            <div className="method-step-number" aria-hidden="true">{m.number}</div>
            <div className="method-step-content">
              <div className="method-rule" />
              <h3 className="method-title">{m.title}</h3>
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
    </div>
  </section>
);

export default Method;
