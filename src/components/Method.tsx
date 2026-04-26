const methods = [
  {
    number: "01",
    title: "Lorem ipsum dolor",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
  },
  {
    number: "02",
    title: "Consectetur adipiscing",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
  },
  {
    number: "03",
    title: "Amet sit voluptatem",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
  },
];

const Method = () => (
  <section className="method-section" id="approach" aria-labelledby="method-title">
    <div className="method-inner">
      <div className="reveal">
        <p className="section-label">Lorem ipsum</p>
        <h2 className="section-title" id="method-title">Dolor sit amet consectetur</h2>
      </div>

      <div className="methods-grid">
        {methods.map((m, i) => (
          <article key={m.number} className={`method-card reveal reveal-delay-${i + 1}`}>
            <span className="method-number" aria-hidden="true">{m.number}</span>
            <div className="method-rule"></div>
            <h3 className="method-title">{m.title}</h3>
            <p className="method-desc">{m.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Method;
