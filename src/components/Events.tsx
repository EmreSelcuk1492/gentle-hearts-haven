const events = [
  {
    type: "Group healing sessions",
    title: "Guided group movement, breathwork & meditation",
    body: "The same three-step session sequence — biomechanical movement, breathing techniques, and guided meditation — held in an intimate group setting. A shared experience of release, vitality, and inner stillness.",
    details: ["In person & online", "Small groups"],
  },
  {
    type: "Classes",
    title: "Learn the techniques for yourself",
    body: "Asli teaches the tools she uses in every session — so you can build a daily practice of your own. Gentle movement, breathing sequences, and guided meditation, taught step by step with the guidance to make them yours.",
    details: ["Beginners welcome", "In person & online"],
  },
  {
    type: "Retreats",
    title: "Healing & Longevity Retreat",
    body: "An immersive multi-day experience designed to give you the time and space your healing deserves. Deeply restorative, beautifully held, and structured to create lasting shifts — in how you feel, how you move, and how you meet your life.",
    details: ["Multi-day immersive", "Location TBC"],
    featured: true,
  },
  {
    type: "Corporate & workplace",
    title: "Wellness workshops for teams & organisations",
    body: "Asli brings her work into the workplace — supporting teams navigating high pressure, burnout, and the emotional weight of demanding environments. Practical, grounded, and immediately applicable. Drawing on her own background in Fortune 500 corporate environments, she speaks the language of the people in the room.",
    details: ["On-site or virtual", "Customised to your team"],
  },
  {
    type: "Online events",
    title: "Virtual group sessions — from anywhere in the world",
    body: "All of the depth of a live session, held online. Virtual group experiences make Asli's work accessible wherever you are — in English or Turkish, for clients around the world who are ready to begin.",
    details: ["English & Turkish", "Global access"],
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
            Asli is expanding her work beyond one-to-one sessions — into group experiences, retreats, and teaching. Each event follows the same intentional sequence: movement, breathwork, and guided meditation — held in community.
          </p>
          <div className="notify-form">
            <input className="notify-input" type="email" placeholder="Your email address" />
            <button className="notify-btn">Notify me when events launch</button>
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
