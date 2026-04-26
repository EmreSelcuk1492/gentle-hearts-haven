import { useState } from "react";

const Testimonial = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonial-section" aria-label="Client testimonials">
      <div className="reveal">
        <span className="quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="testimonial-quote">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </blockquote>
        <p className="testimonial-attr">Lorem ipsum &middot; Dolor sit amet</p>
        <nav className="testimonial-nav" aria-label="Testimonial navigation">
          {[0, 1, 2].map((i) => (
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
