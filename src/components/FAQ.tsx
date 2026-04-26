const faqs = [
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    q: "Nemo enim ipsam voluptatem quia voluptas?",
    a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    q: "Ut enim ad minima veniam nostrum?",
    a: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
  },
  {
    q: "Neque porro quisquam est qui dolorem?",
    a: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    q: "At vero eos et accusamus et iusto?",
    a: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
];

const FAQ = () => (
  <section className="faq-section" id="faq" aria-labelledby="faq-title">
    <div className="faq-inner">
      <div className="reveal">
        <p className="section-label">Lorem ipsum</p>
        <h2 className="section-title" id="faq-title">Dolor sit amet consectetur</h2>
        <p style={{ fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.85, fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
        </p>
      </div>
      <div className="faq-list reveal reveal-delay-1">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3 className="faq-question">{faq.q}</h3>
            <p className="faq-answer">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
