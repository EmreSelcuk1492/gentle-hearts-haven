const signals: {
  text: string;
  tone: string;
  wide?: boolean;
}[] = [
  {
    text: "You are on a health journey that is taking an emotional and energetic toll — and are looking for additional personal support.",
    tone: "cream",
  },
  {
    text: "You are a parent carrying the emotional weight of a child or teenager who is struggling.",
    tone: "warm",
  },
  {
    text: "Work obligations have consumed your energy and your body is beginning to say no.",
    tone: "glow",
  },
  {
    text: "Sleep has become a battle — your mind won't quiet and your body won't rest.",
    tone: "foam",
  },
  {
    text: "You feel angry, resentful, or stuck in a personal loop you haven't been able to break.",
    tone: "outline",
  },
  {
    text: "Your sense of self-worth has quietly eroded — and you want to find your way back to yourself.",
    tone: "rose",
  },
  {
    text: "You are carrying grief, sadness, or a sense of despair with no single clear cause.",
    tone: "warm",
  },
  {
    text: "You are a skeptic — and that is completely welcome here.",
    tone: "accent",
    wide: true,
  },
];

const ForYou = () => (
  <section className="for-you-section" id="services" aria-labelledby="for-you-title">
    <div className="for-you-header reveal">
      <p className="section-label centered">Who this is for</p>
      <h2 className="section-title" id="for-you-title" style={{ textAlign: "center" }}>
        Life brought you here.<br />That's <em>enough.</em>
      </h2>
    </div>

    <div className="for-you-intro reveal">
      <p>
        There is no prerequisite. You don't need a diagnosis, a label, or the right words for what you're carrying. Asli's clients arrive with all kinds of weight — a health journey that has taken an emotional toll, a grief that won't lift, a body that won't rest.
      </p>
      <p>
        What they share is this: something isn't working anymore. And they are ready — even if only a little — to try something different.
      </p>
    </div>

    <div className="signal-mosaic reveal">
      {signals.map((s, i) => (
        <div
          key={i}
          className={[
            "mosaic-cell",
            `mosaic-cell--${s.tone}`,
            s.wide ? "mosaic-cell--wide" : "",
          ].filter(Boolean).join(" ")}
        >
          <span className="mosaic-num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="mosaic-text">{s.text}</span>
        </div>
      ))}
    </div>

    <div className="for-you-closing reveal">
      <p>
        These sessions are a personal wellbeing practice — natural, non-invasive, and deeply personalized. You will leave each session feeling lighter and more centred, equipped with tools to support your own sense of balance between sessions.
      </p>
      <p className="disclaimer">
        These sessions are a complementary personal wellbeing practice and are not a substitute for medical or psychological care. Please continue to work with your healthcare provider for any medical concerns.
      </p>
      <a href="#book" className="btn-gold">Start your journey</a>
    </div>
  </section>
);

export default ForYou;
