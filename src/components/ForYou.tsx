import { useState } from "react";
import BookButton from "@/components/BookButton";

const signals = [
  "You are on a health journey that is taking an emotional and energetic toll, and are looking for additional personal support.",
  "You are a parent carrying the emotional weight of a child or teenager who is struggling.",
  "Work obligations have consumed your energy and your body is beginning to say no.",
  "Sleep has become a battle. Your mind won't quiet and your body won't rest.",
  "You feel angry, resentful, or stuck in a personal loop you haven't been able to break.",
  "Your sense of self-worth has quietly eroded, and you want to find your way back to yourself.",
  "You are carrying grief, sadness, or a sense of despair with no single clear cause.",
  "You are a skeptic, and that is completely welcome here.",
];

const ForYouV2 = () => {
  const [tipOpen, setTipOpen] = useState(false);

  return (
    <section className="for-you-section for-you-v2" id="services" aria-labelledby="for-you-title-v2">
      <div className="for-you-header">
        <p className="section-label centered">Who this is for</p>
        <h2 className="section-title" id="for-you-title-v2" style={{ textAlign: "center" }}>
          Life brought you here.<br />That's <em>enough.</em>
        </h2>
      </div>

      <div className="for-you-intro">
        <p>
          There is no prerequisite. You don't need a diagnosis, a label, or the right words for what you're carrying. Asli's clients arrive with all kinds of weight: a health journey that has taken an emotional toll, a grief that won't lift, a body that won't rest.
        </p>
        <p>
          What they share is this: something isn't working anymore. And they are ready, even if only a little, to try something different.
        </p>
      </div>

      <div className="signal-list">
        {signals.map((text, i) => (
          <div key={i} className="signal-row">
            <span className="signal-mark" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <p className="signal-text">{text}</p>
          </div>
        ))}
      </div>

      <div className="for-you-closing for-you-v2-closing">
        <p className="for-you-closing-body">
          These sessions are a personal wellbeing practice: natural, non-invasive, and deeply personalized. You will leave each session feeling lighter and more centred, equipped with tools to support your own balance between sessions.
          {" "}
          <span
            className={`info-tip info-tip--inline${tipOpen ? " info-tip--open" : ""}`}
            onMouseEnter={() => setTipOpen(true)}
            onMouseLeave={() => setTipOpen(false)}
          >
            <button
              type="button"
              className="info-tip-mark"
              aria-expanded={tipOpen}
              aria-describedby="for-you-v2-tip"
              aria-label="Important notice about these sessions"
              onClick={() => setTipOpen((v) => !v)}
              onFocus={() => setTipOpen(true)}
              onBlur={() => setTipOpen(false)}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
                <path d="M8 7.2V11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="8" cy="5" r="0.85" fill="currentColor" />
              </svg>
            </button>
            <span role="tooltip" id="for-you-v2-tip" className="info-tip-bubble">
              This is a complementary wellbeing practice. <em>Not a substitute for medical or psychological care.</em> If you are managing a medical condition, please continue working with your healthcare provider.
            </span>
          </span>
        </p>

        <BookButton className="btn-primary">Start your healing</BookButton>
      </div>
    </section>
  );
};

export default ForYouV2;
