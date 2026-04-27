import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "As an engineer grounded in science, I was skeptical. But after losing my job, my mom, and facing life's hardest moments, Asli's guidance helped me rediscover my worth and transform my outlook on life entirely.",
    attr: "Small Business Owner · Washington State",
  },
  {
    quote: "After an incredible energy healing session with Asli, I felt lighter, more centred, and deeply uplifted. She has such a calming and intuitive presence that made it easy to fully open up.",
    attr: "Real Estate Professional",
  },
  {
    quote: "Despite initial doubts, working with Asli helped me break out of a personal loop. Learning to focus and breathe properly showed me how effective these practices were for my personal growth.",
    attr: "Retired Corporate Professional & Mother",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section" aria-label="Client testimonials">
      <div className="testimonial-inner reveal">
        <span className="quote-mark" aria-hidden="true">&ldquo;</span>
        <div className="testimonial-body-wrap">
          <div className="testimonial-body" key={active}>
            <blockquote className="testimonial-quote">
              {testimonials[active].quote}
            </blockquote>
            <p className="testimonial-attr">{testimonials[active].attr}</p>
          </div>
        </div>
        <nav className="testimonial-nav" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`t-dot${active === i ? " active" : ""}`}
              aria-label={`Testimonial ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              onClick={() => setActive(i)}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Testimonial;
