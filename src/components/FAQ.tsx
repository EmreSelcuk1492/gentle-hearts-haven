import { useState } from "react";

const faqs = [
  {
    q: "I've tried other things. Why would this be any different?",
    a: "Most approaches to wellbeing work primarily at the level of thought — talking about what happened, analysing patterns, reframing beliefs. This work goes a step further. It addresses what the body is still holding: the emotional and energetic residue of experiences that the mind has processed but the body hasn't fully released.",
    em: "The work meets you at a level that words alone often can't reach.",
  },
  {
    q: "Do I need to be spiritual or believe in energy healing?",
    a: "Not at all. Some of Asli's most transformed clients have been engineers, financial professionals, and scientists who arrived with significant skepticism. The body and mind are not separate systems — emotional patterns, accumulated stress, and long-held weight are stored physically as well as mentally.",
    strong: "You don't need to believe in the method for the method to work.",
    after: " You simply need to be willing to show up and try.",
    link: { text: "Read the NIH research on mind-body connection →", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1456909/" },
  },
  {
    q: "Will I have to talk about my past or relive difficult things?",
    a: "No. This is not talk-based work. The session works through movement, breath, and guided meditation — not through conversation. Many clients find this to be a profound relief.",
    em: "You can begin to release something without having to explain it first.",
  },
  {
    q: "How many sessions will I need?",
    a: "Many clients notice a meaningful shift — feeling lighter, clearer, or more settled — after their very first session. Deeper change typically unfolds over a series of sessions. Asli will co-create a personal plan with you. There is no fixed programme — the pace is always yours.",
  },
  {
    q: "Is this available online, or do I need to be in person?",
    a: "Sessions are available both in person and remotely — and the work is equally effective either way. Asli works with clients across the world, in both English and Turkish. All you need is a quiet, uninterrupted space where you feel at ease.",
  },
  {
    q: "How is this different from therapy or counselling?",
    a: "Therapy works primarily through language and cognitive processing. This work addresses the body and the energetic dimension directly — where emotional patterns and long-held weight are often stored. Many clients work with both a therapist and Asli simultaneously, finding the two complementary.",
    strong: "This is not a replacement for professional mental health care.",
    after: " It is a different kind of support entirely.",
  },
  {
    q: "Is it safe if I have a medical condition?",
    a: "These sessions are a complementary personal wellbeing practice and are not a substitute for medical care. Asli's work supports the emotional and energetic dimensions of your experience — it does not diagnose, treat, or intervene in any medical condition. If you are uncertain, the free discovery call is the right place to start.",
  },
  {
    q: "What do I wear or bring to a session?",
    a: "Wear something comfortable that allows you to move freely. You'll need a quiet space with enough room to move, and a chair for the meditation. For in-person sessions, Asli will guide you through everything. Come as you are — there is nothing to prepare.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-inner">
        <div className="reveal faq-sidebar">
          <p className="section-label">Questions</p>
          <h2 className="section-title" id="faq-title">What you might be wondering</h2>
          <p className="faq-sub">
            Many people arrive here with questions — and with healthy skepticism. Both are welcome.
          </p>
        </div>
        <div className="faq-list reveal reveal-delay-1">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button
                className="faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="faq-question">{faq.q}</h3>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <p className="faq-answer">
                    {faq.a}
                    {faq.em && <> <em>{faq.em}</em></>}
                    {faq.strong && <> <strong>{faq.strong}</strong>{faq.after}</>}
                  </p>
                  {faq.link && (
                    <p className="faq-link-row">
                      <a
                        href={faq.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-link"
                      >
                        {faq.link.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-closing">
        <p className="faq-closing-quote">
          "The question isn't whether this will work. The question is whether you are <em>ready to find out.</em>"
        </p>
        <a href="#book" className="nav-cta">Book your free discovery call</a>
      </div>
    </section>
  );
};

export default FAQ;
