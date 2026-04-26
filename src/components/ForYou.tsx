const signals = [
  "Sed ut perspiciatis unde omnis iste natus error",
  "Nemo enim ipsam voluptatem quia voluptas sit",
  "Neque porro quisquam est qui dolorem ipsum",
  "Ut enim ad minima veniam nostrum exercitationem",
  "Quis autem vel eum iure reprehenderit qui in ea",
  "At vero eos et accusamus et iusto odio dignissimos",
  "Nam libero tempore cum soluta nobis est eligendi",
  "Temporibus autem quibusdam et aut officiis debitis",
];

const ForYou = () => (
  <section id="services" aria-labelledby="for-you-title">
    <div className="for-you">
      <div className="reveal">
        <p className="section-label">Lorem ipsum</p>
        <h2 className="section-title" id="for-you-title">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        </h2>
        <p className="for-you-body">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className="for-you-body">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <a href="#book" className="btn-gold" style={{ marginTop: "1rem" }}>
          Lorem ipsum dolor
        </a>
      </div>
      <div className="reveal reveal-delay-1">
        <ul className="signal-list" role="list">
          {signals.map((text, i) => (
            <li key={i} className="signal-item">
              <span className="signal-dot" aria-hidden="true"></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ForYou;
