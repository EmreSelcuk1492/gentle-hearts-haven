const CTA = () => (
  <section className="cta-section" id="book" aria-labelledby="cta-title">
    <div className="cta-inner reveal">
      <p className="cta-eyebrow">
        <span className="cta-rule" aria-hidden="true"></span>
        Your next step
        <span className="cta-rule" aria-hidden="true"></span>
      </p>

      <h2 className="cta-title" id="cta-title">
        Wherever you are right now — <em>that's where we begin.</em>
      </h2>

      <p className="cta-body">
        You don't need to have it figured out. You don't need to know exactly what you're carrying or what you need. The discovery call is simply a conversation — a chance for Asli to understand where you are.
      </p>

      <p className="cta-reassure">
        No pressure. No commitment. Just 30 minutes, and a genuine conversation.
      </p>

      <a href="mailto:hello@attainenergyhealing.com" className="btn-gold">
        Book your free discovery call
      </a>

      <p className="cta-below">
        Prefer another way?{" "}
        <a href="mailto:hello@attainenergyhealing.com">Send Asli a message directly.</a>
      </p>
    </div>

    <div className="three-things reveal reveal-delay-1">
      <div className="thing">
        <div className="thing-num">30</div>
        <div className="thing-title">Minutes</div>
        <div className="thing-body">
          A relaxed conversation — no forms, no intake process, no pressure to decide anything.
        </div>
      </div>
      <div className="thing">
        <div className="thing-num">0</div>
        <div className="thing-title">Commitment required</div>
        <div className="thing-body">
          The call is simply to see if this feels like the right fit for where you are right now.
        </div>
      </div>
      <div className="thing">
        <div className="thing-num">1</div>
        <div className="thing-title">Small step</div>
        <div className="thing-body">
          Most people say the hardest part was deciding to reach out. Everything after felt easier.
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
