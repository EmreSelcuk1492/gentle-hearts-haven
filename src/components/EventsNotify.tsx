import { useState, FormEvent } from "react";
import { subscribeEmail, isSubscribeConfigured } from "@/lib/subscribe";

type Status = "idle" | "loading" | "success" | "already" | "error" | "invalid";

const MAILTO =
  "mailto:threeclairs@outlook.com?subject=Keep%20me%20posted%20about%20upcoming%20events";

const EventsNotify = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const done = status === "success" || status === "already";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    const result = await subscribeEmail(email);
    setStatus(result === "unconfigured" ? "error" : result);
    if (result === "success" || result === "already") setEmail("");
  };

  // Before Supabase keys are configured, keep the honest mailto fallback.
  if (!isSubscribeConfigured) {
    return (
      <aside className="events-notify-card reveal" aria-label="Get notified about upcoming events">
        <div className="events-notify-text">
          <p className="section-label">Stay in the loop</p>
          <h3 className="events-notify-headline">
            Be the first to know when <em>dates open.</em>
          </h3>
        </div>
        <div className="events-notify-action">
          <a href={MAILTO} className="btn-primary events-notify-btn">Email to be notified</a>
          <p className="events-notify-note">Asli will reply personally when dates are announced.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="events-notify-card reveal" aria-label="Get notified about upcoming events">
      <div className="events-notify-text">
        <p className="section-label">Stay in the loop</p>
        <h3 className="events-notify-headline">
          Be the first to know when <em>dates open.</em>
        </h3>
      </div>

      {done ? (
        <div className="events-notify-action" role="status" aria-live="polite">
          <p className="events-notify-success">
            {status === "already"
              ? "You're already on the list — we'll be in touch."
              : "You're on the list. We'll email you when dates open."}
          </p>
        </div>
      ) : (
        <form className="events-notify-action" onSubmit={handleSubmit} noValidate>
          <div className="events-notify-field">
            <label htmlFor="events-notify" className="visually-hidden">Email address</label>
            <input
              id="events-notify"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="your@email.com"
              className="events-notify-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "invalid" || status === "error") setStatus("idle");
              }}
              aria-invalid={status === "invalid"}
              aria-describedby={status === "invalid" || status === "error" ? "events-notify-msg" : undefined}
              disabled={status === "loading"}
              required
            />
            <button
              type="submit"
              className="btn-primary events-notify-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Adding…" : "Notify me"}
            </button>
          </div>
          {status === "invalid" && (
            <p id="events-notify-msg" className="events-notify-msg" role="alert">
              Please enter a valid email address.
            </p>
          )}
          {status === "error" && (
            <p id="events-notify-msg" className="events-notify-msg" role="alert">
              Something went wrong. Please{" "}
              <a href={MAILTO}>email Asli directly</a> instead.
            </p>
          )}
        </form>
      )}
    </aside>
  );
};

export default EventsNotify;
