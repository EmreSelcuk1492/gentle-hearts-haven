const featured = {
  type: "Retreats",
  title: "Healing & Longevity Retreat",
  body: "An immersive multi-day experience designed to give you the time and space your healing deserves. Deeply restorative, beautifully held, structured to create lasting shifts.",
  details: [
    { label: "Format", value: "Multi-day immersion" },
    { label: "Location", value: "To be announced" },
    { label: "Audience", value: "Intimate group" },
  ],
};

const offerings = [
  {
    type: "Group sessions",
    title: "Guided movement, breathwork & meditation",
    body: "The same three-step sequence, held in an intimate group setting. A shared experience of release and inner stillness.",
    meta: "In person & online · Small groups",
  },
  {
    type: "Classes",
    title: "Learn the techniques for yourself",
    body: "Asli teaches the tools she uses in every session. Taught step by step, so you can build a daily practice of your own.",
    meta: "Beginners welcome · In person & online",
  },
  {
    type: "Corporate",
    title: "Wellness workshops for teams",
    body: "Asli brings her work into the workplace, supporting teams navigating high pressure, burnout, and demanding environments.",
    meta: "On-site or virtual · Customised",
  },
  {
    type: "Online events",
    title: "Virtual group sessions from anywhere",
    body: "All of the depth of a live session, held online. Available wherever you are, in English or Turkish.",
    meta: "EN & TR · Global access",
  },
];

const Events = () => (
  <section className="events-v2 events-v2-rebuilt" id="events" aria-labelledby="events-title-v2">
    <div className="events-v2-inner">
      <header className="events-v2-header reveal">
        <p className="section-label centered">Events &amp; gatherings</p>
        <h2 className="events-v2-h2" id="events-title-v2">
          Healing doesn't only happen <em>one at a time.</em>
        </h2>
        <p className="events-v2-lede">
          Asli is expanding her work beyond one-to-one sessions: into group experiences, retreats, and teaching.
        </p>
      </header>

      <article className="events-v2-featured reveal reveal-delay-1" aria-labelledby="featured-title-v2">
        <div className="events-v2-featured-meta">
          <span className="events-v2-featured-tag">Coming soon</span>
          <p className="events-v2-featured-type">{featured.type}</p>
        </div>
        <div className="events-v2-featured-body">
          <h3 className="events-v2-featured-title" id="featured-title-v2">{featured.title}</h3>
          <p className="events-v2-featured-text">{featured.body}</p>
          <dl className="events-v2-featured-details">
            {featured.details.map((d) => (
              <div key={d.label} className="events-v2-featured-detail">
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      <ul className="events-v2-cards reveal reveal-delay-2">
        {offerings.map((o) => (
          <li key={o.type} className="events-v2-card-new">
            <p className="events-v2-card-type">{o.type}</p>
            <h3 className="events-v2-card-title">{o.title}</h3>
            <p className="events-v2-card-body">{o.body}</p>
            <p className="events-v2-card-meta">{o.meta}</p>
          </li>
        ))}
      </ul>

      <aside className="events-notify-card reveal" aria-label="Get notified about upcoming events">
        <div className="events-notify-text">
          <p className="section-label">Stay in the loop</p>
          <h3 className="events-notify-headline">
            Be the first to know when <em>dates open.</em>
          </h3>
        </div>
        <div className="events-notify-action">
          <a
            href="mailto:threeclairs@outlook.com?subject=Keep%20me%20posted%20about%20upcoming%20events"
            className="btn-primary events-notify-btn"
          >
            Email to be notified
          </a>
          <p className="events-notify-note">Asli will reply personally when dates are announced.</p>
        </div>
      </aside>
    </div>
  </section>
);

export default Events;
