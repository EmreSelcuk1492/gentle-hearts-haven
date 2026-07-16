import { useState } from "react";

const testimonials = [
  {
    quote: "As an engineer grounded in science, I was skeptical. But after losing my job, my mom, and facing life's hardest moments, Asli's guidance helped me rediscover my worth and transform my outlook on life entirely.",
    attr: "Small Business Owner",
    place: "Washington State",
  },
  {
    quote: "After an incredible energy healing session with Asli, I felt lighter, more centred, and deeply uplifted. She has such a calming and intuitive presence that made it easy to fully open up.",
    attr: "Real Estate Professional",
    place: "Remote",
  },
  {
    quote: "Despite initial doubts, working with Asli helped me break out of a personal loop. Learning to focus and breathe properly showed me how effective these practices were for my personal growth.",
    attr: "Retired Corporate Professional",
    place: "Turkey",
  },
];

const Testimonials = () => {
  // order = [spotlight, leftSlot, rightSlot]. Slots are stable; clicking a slot
  // just swaps its testimonial with the spotlight's. Nothing unmounts.
  const [order, setOrder] = useState<[number, number, number]>([0, 1, 2]);

  const swapWithSpotlight = (slot: 1 | 2) => {
    setOrder((prev) => {
      const next = [...prev] as [number, number, number];
      [next[0], next[slot]] = [next[slot], next[0]];
      return next;
    });
  };

  const spotlight = testimonials[order[0]];

  return (
    <section className="testimonial-v2 testimonial-v2-editorial" aria-label="Client testimonials">
      <div className="testimonial-v2-inner">
        <article className="testimonial-v2-feature" aria-label="Featured testimonial" aria-live="polite">
          <p className="testimonial-v2-kicker">In their words</p>
          <span className="testimonial-v2-quote-mark" aria-hidden="true">&ldquo;</span>
          <blockquote className="testimonial-v2-feature-quote">
            {spotlight.quote}
          </blockquote>
          <footer className="testimonial-v2-feature-attr">
            <span className="testimonial-v2-name">{spotlight.attr}</span>
            <span className="testimonial-v2-place">{spotlight.place}</span>
          </footer>
        </article>

        <div className="testimonial-v2-row" aria-label="Other client stories">
          {([1, 2] as const).map((slot) => {
            const t = testimonials[order[slot]];
            return (
              <button
                key={slot}
                type="button"
                className="testimonial-v2-small testimonial-v2-small--button"
                onClick={() => swapWithSpotlight(slot)}
                aria-label={`Spotlight testimonial from ${t.attr}, ${t.place}`}
              >
                <blockquote className="testimonial-v2-small-quote">{t.quote}</blockquote>
                <p className="testimonial-v2-small-attr">
                  {t.attr} <span>· {t.place}</span>
                </p>
                <span className="testimonial-v2-small-cue" aria-hidden="true">
                  Read featured
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6h8M7 3l3 3-3 3" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
