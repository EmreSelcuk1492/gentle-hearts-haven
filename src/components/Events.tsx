const events = [
  {
    type: "Retreats",
    title: "Healing & Longevity Retreat",
    body: "An immersive multi-day experience designed to give you the time and space your healing deserves. Deeply restorative, beautifully held, structured to create lasting shifts.",
    details: ["Multi-day", "Location TBC"],
    featured: true,
  },
  {
    type: "Group sessions",
    title: "Guided group movement, breathwork & meditation",
    body: "The same three-step session sequence — held in an intimate group setting. A shared experience of release, vitality, and inner stillness.",
    details: ["In person & online", "Small groups"],
  },
  {
    type: "Classes",
    title: "Learn the techniques for yourself",
    body: "Asli teaches the tools she uses in every session — so you can build a daily practice of your own. Taught step by step, with the guidance to make them yours.",
    details: ["Beginners welcome", "In person & online"],
  },
  {
    type: "Corporate",
    title: "Wellness workshops for teams",
    body: "Asli brings her work into the workplace — supporting teams navigating high pressure, burnout, and the emotional weight of demanding environments.",
    details: ["On-site or virtual", "Customised"],
  },
  {
    type: "Online events",
    title: "Virtual group sessions — from anywhere",
    body: "All of the depth of a live session, held online. Virtual group experiences make Asli's work accessible wherever you are — in English or Turkish.",
    details: ["EN & TR", "Global access"],
  },
];

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  if (event.featured) {
    return (
      <article className="event-card event-card-featured">
        <div>
          <span className="coming-soon">Coming soon</span>
          <div className="event-rule event-rule-gold" />
          <p className="event-type event-type-gold">{event.type}</p>
          <h3 className="event-title event-title-dark">{event.title}</h3>
        </div>
        <div>
          <p className="event-body event-body-dark">{event.body}</p>
          <div className="event-details">
            {event.details.map((d) => (
              <span key={d} className="event-detail event-detail-dark">{d}</span>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="event-card">
      <span className="coming-soon">Coming soon</span>
      <div className="event-rule" />
      <p className="event-type">{event.type}</p>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-body">{event.body}</p>
      <div className="event-details">
        {event.details.map((d) => (
          <span key={d} className="event-detail">{d}</span>
        ))}
      </div>
    </article>
  );
};

const Events = () => (
  <section className="events-section" id="events" aria-labelledby="events-title">
    <div className="events-inner">
      <div className="events-header reveal">
        <div>
          <p className="section-label">Events &amp; gatherings</p>
          <h2 className="section-title" id="events-title">
            Healing doesn't only happen <em>one at a time.</em>
          </h2>
        </div>
        <div>
          <p className="events-intro">
            Asli is expanding her work beyond one-to-one sessions — into group experiences, retreats, and teaching.
          </p>
          <div className="notify-form">
            <input className="notify-input" type="email" placeholder="Your email address" />
            <button className="notify-btn">Notify me</button>
          </div>
        </div>
      </div>

      <div className="events-grid reveal reveal-delay-1">
        {events.map((e) => (
          <EventCard key={e.type} event={e} />
        ))}
      </div>
    </div>
  </section>
);

export default Events;
