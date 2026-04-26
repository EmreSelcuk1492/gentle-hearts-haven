const signals = [
  "You are on a health journey that is taking an emotional and energetic toll — and are looking for additional personal support alongside your existing care",
  "You are a parent carrying the emotional weight of a child or teenager who is struggling",
  "Work obligations have consumed your energy and your body is beginning to say no",
  "Sleep has become a battle — your mind won't quiet and your body won't rest",
  "You feel angry, resentful, or stuck in a personal loop you haven't been able to break",
  "Your sense of self-worth has quietly eroded — and you want to find your way back to yourself",
  "You are carrying grief, sadness, or a sense of despair with no single clear cause",
  "You have explored other paths and something still feels unresolved at a deeper level",
  "You are a skeptic — and that is completely welcome here",
];

const ForYou = () => (
  <section className="for-you-section" id="services" aria-labelledby="for-you-title">
    {/* Header */}
    <div className="for-you-header reveal">
      <p className="section-label centered">Who this is for</p>
      <h2 className="section-title" id="for-you-title" style={{ textAlign: "center" }}>
        Life brought you here.<br />That's <em>enough.</em>
      </h2>
    </div>

    {/* Intro text */}
    <div className="for-you-intro reveal">
      <p>
        There is no prerequisite. You don't need a diagnosis, a label, or the right words for what you're carrying. Asli's clients arrive with all kinds of weight — a health journey that has taken an emotional and energetic toll, a grief that won't lift, a body that won't rest, a sense of self that has quietly eroded over time.
      </p>
      <p>
        What they share is this: something isn't working anymore. And they are ready — even if only a little — to try something different.
      </p>
    </div>

    {/* Full-width pull quote */}
    <div className="for-you-quote reveal">
      <blockquote>
        <p>"After an incredible energy healing session with Asli, I felt lighter, more centred, and deeply uplifted. She has such a calming and intuitive presence that made it easy to fully open up to the experience."</p>
        <cite>Real Estate Professional</cite>
      </blockquote>
    </div>

    {/* Signal grid */}
    <div className="signal-grid reveal">
      {signals.map((text, i) => (
        <div key={i} className="signal-item">
          <span className="signal-dot" aria-hidden="true" />
          {text}
        </div>
      ))}
    </div>

    {/* Closing */}
    <div className="for-you-closing reveal">
      <p>
        These sessions are a personal wellbeing practice — natural, non-invasive, and deeply personalized. You will leave each session feeling lighter and more centred, equipped with tools to support your own sense of balance and ease between sessions.
      </p>
      <p className="disclaimer">
        These sessions are a complementary personal wellbeing practice and are not a substitute for medical or psychological care. Please continue to work with your healthcare provider for any medical concerns.
      </p>
      <a href="#book" className="btn-gold">Start your journey</a>
    </div>
  </section>
);

export default ForYou;
