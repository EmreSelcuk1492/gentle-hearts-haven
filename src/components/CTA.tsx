import BookButton from "@/components/BookButton";

const CTAV2 = () => (
  <section className="cta-v2" id="book" aria-labelledby="cta-title-v2">
    <div className="cta-v2-inner reveal">
      <p className="section-label centered">Your next step</p>

      <h2 className="section-title cta-v2-title" id="cta-title-v2">
        Wherever you are right now, <em>that's where we begin.</em>
      </h2>

      <p className="cta-v2-body">
        You don't need to have it figured out. The discovery call is simply a conversation, a chance for Asli to understand where you are. No pressure. No commitment. Just 30 minutes.
      </p>

      <BookButton className="btn-primary cta-v2-btn">
        Book your free discovery call
      </BookButton>

      <p className="cta-v2-below">
        Prefer another way?{" "}
        <a href="mailto:threeclairs@outlook.com">Send Asli a message directly.</a>
      </p>

      <dl className="cta-v2-meta">
        <div className="cta-v2-meta-item">
          <dt>30 min</dt>
          <dd>A relaxed conversation</dd>
        </div>
        <div className="cta-v2-meta-item">
          <dt>0</dt>
          <dd>Commitment required</dd>
        </div>
      </dl>
    </div>
  </section>
);

export default CTAV2;
