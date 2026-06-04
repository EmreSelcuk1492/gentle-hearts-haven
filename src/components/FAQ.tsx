import { useState } from "react";

const faqs = [
  {
    q: "I've tried other things. Why would this be any different?",
    a: "Most approaches to wellbeing work primarily at the level of thought: talking, analysing, reframing. This work goes a step further. It addresses what the body is still holding: the emotional and energetic residue of experiences that the mind has processed but the body hasn't fully released.",
    em: "The work meets you at a level that words alone often can't reach.",
  },
  {
    q: "Do I need to be spiritual or believe in energy healing?",
    a: "Not at all. Some of Asli's most transformed clients have been engineers, financial professionals, and scientists who arrived with significant skepticism.",
    em: "You don't need to believe in the method for the method to work.",
    after: " You simply need to be willing to show up and try.",
  },
  {
    q: "Will I have to talk about my past or relive difficult things?",
    a: "No. This is not talk-based work. The session works through movement, breath, and guided meditation, not through conversation.",
    em: "You can begin to release something without having to explain it first.",
  },
  {
    q: "How many sessions will I need?",
    a: "Many clients notice a meaningful shift after their very first session. Deeper change typically unfolds over a series of sessions. Asli will co-create a personal plan with you. There is no fixed programme. The pace is always yours.",
  },
  {
    q: "Is this available online, or do I need to be in person?",
    a: "Sessions are available both in person and remotely, and the work is equally effective either way. Asli works with clients across the world, in English and Turkish.",
  },
];

const FAQV2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-v2" id="faq" aria-labelledby="faq-title-v2">
      <div className="faq-v2-inner">
        <header className="faq-v2-header">
          <p className="section-label centered">Questions</p>
          <h2 className="section-title" id="faq-title-v2" style={{ textAlign: "center" }}>
            What you might be wondering
          </h2>
          <p className="faq-v2-sub">
            Many people arrive here with questions, and with healthy skepticism. Both are welcome.
          </p>
        </header>

        <div className="faq-v2-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-v2-item${openIndex === i ? " open" : ""}`}>
              <button
                className="faq-v2-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="faq-v2-question">{faq.q}</h3>
                <span className="faq-v2-chev" aria-hidden="true">↓</span>
              </button>
              <div className="faq-v2-answer-wrap">
                <div className="faq-v2-answer-inner">
                  <p className="faq-v2-answer">
                    {faq.a}
                    {faq.em && <> <em>{faq.em}</em></>}
                    {faq.after && <>{faq.after}</>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQV2;
