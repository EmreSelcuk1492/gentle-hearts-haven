import { useState } from "react";
import BookButton from "@/components/BookButton";

/* Icon chips: small stroke icons enclosed in a tinted circle so they can fill
   a larger slot without being scaled past their intended size. */
const icons = {
  heart: (
    <path d="M12 20.5S3.5 15.3 3.5 9.6C3.5 6.9 5.6 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.4 0 4.5 1.9 4.5 4.6 0 5.7-8.5 10.9-8.5 10.9Z" />
  ),
  parent: (
    <>
      <circle cx="9" cy="7.5" r="3" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="17" cy="9.5" r="2.2" />
      <path d="M15.4 14.6c.5-.2 1-.3 1.6-.3 2.2 0 4 1.6 4 3.9" />
    </>
  ),
  work: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
    </>
  ),
  sleep: (
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
  ),
  loop: (
    <>
      <path d="M4 9.5a8 8 0 0 1 14-1.5M20 14.5a8 8 0 0 1-14 1.5" />
      <path d="M18 4v4h-4M6 20v-4h4" />
    </>
  ),
  bloom: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z" />
      <path d="M12 13c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6Z" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 16a4 4 0 0 1 .5-8 5 5 0 0 1 9.6 1.2A3.5 3.5 0 0 1 16.5 16H7Z" />
      <path d="M9 19.5v1M12.5 19.5v1M16 19.5v1" />
    </>
  ),
  question: (
    <>
      <path d="M4.5 18.5V7a2.5 2.5 0 0 1 2.5-2.5h10A2.5 2.5 0 0 1 19.5 7v6a2.5 2.5 0 0 1-2.5 2.5H8l-3.5 3Z" />
      <path d="M10.3 9.2A1.9 1.9 0 0 1 12 8.2c1 0 1.9.7 1.9 1.7 0 1.2-1.4 1.4-1.9 2.3" />
      <circle cx="12" cy="14.4" r="0.2" fill="currentColor" />
    </>
  ),
};

const signals: { icon: keyof typeof icons; text: string }[] = [
  { icon: "heart", text: "You are on a health journey that is taking an emotional and energetic toll, and are looking for additional personal support." },
  { icon: "parent", text: "You are a parent carrying the emotional weight of a child or teenager who is struggling." },
  { icon: "work", text: "Work obligations have consumed your energy and your body is beginning to say no." },
  { icon: "sleep", text: "Sleep has become a battle. Your mind won't quiet and your body won't rest." },
  { icon: "loop", text: "You feel angry, resentful, or stuck in a personal loop you haven't been able to break." },
  { icon: "bloom", text: "Your sense of self-worth has quietly eroded, and you want to find your way back to yourself." },
  { icon: "cloud", text: "You are carrying grief, sadness, or a sense of despair with no single clear cause." },
  { icon: "question", text: "You are a skeptic, and that is completely welcome here." },
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
        {signals.map(({ icon, text }) => (
          <div key={icon} className="signal-row">
            <span className="signal-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[icon]}
              </svg>
            </span>
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
