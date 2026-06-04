import { useState, useEffect, useRef } from "react";

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
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

  const swap = (next: number) => {
    if (next === featuredIndex || phase !== "idle") return;
    setFeaturedIndex(next);
    setPhase("out");
    timers.current.push(window.setTimeout(() => {
      setDisplayIndex(next);
      setPhase("in");
      timers.current.push(window.setTimeout(() => setPhase("idle"), 360));
    }, 220));
  };

  const featured = testimonials[displayIndex];
  const others = testimonials
    .map((t, i) => ({ t, i }))
    .filter(({ i }) => i !== featuredIndex);

  return (
    <section className="testimonial-v2 testimonial-v2-editorial" aria-label="Client testimonials">
      <div className="testimonial-v2-inner">
        <article className="testimonial-v2-feature reveal">
          <p className="testimonial-v2-kicker">In their words</p>
          <div
            className={`testimonial-v2-feature-stage testimonial-v2-feature-stage--${phase}`}
            aria-live="polite"
          >
            <blockquote className="testimonial-v2-feature-quote">
              {featured.quote}
            </blockquote>
            <footer className="testimonial-v2-feature-attr">
              <span className="testimonial-v2-name">{featured.attr}</span>
              <span className="testimonial-v2-place">{featured.place}</span>
            </footer>
          </div>
        </article>

        <div className="testimonial-v2-row" role="tablist" aria-label="Other client stories">
          {others.map(({ t, i }) => (
            <button
              key={i}
              type="button"
              role="tab"
              className="testimonial-v2-small testimonial-v2-small--button reveal"
              onClick={() => swap(i)}
              aria-label={`Spotlight testimonial from ${t.attr}, ${t.place}`}
            >
              <span className="testimonial-v2-small-spotlight" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Spotlight
              </span>
              <blockquote className="testimonial-v2-small-quote">{t.quote}</blockquote>
              <p className="testimonial-v2-small-attr">
                {t.attr} <span>· {t.place}</span>
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
