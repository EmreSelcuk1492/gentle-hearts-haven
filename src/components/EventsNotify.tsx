import { useState, FormEvent } from "react";
import { subscribeEmail, isSubscribeConfigured } from "@/lib/subscribe";

type Status = "idle" | "loading" | "success" | "already" | "invalid" | "error";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAILTO =
  "mailto:threeclairs@outlook.com?subject=Keep%20me%20posted%20about%20upcoming%20events";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12.5l4.5 4.5L19 7"
      pathLength={1}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EventsNotify = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [shaking, setShaking] = useState(false);

  const trimmed = email.trim();
  const isValid = EMAIL_RE.test(trimmed);
  const done = status === "success" || status === "already";
  const loading = status === "loading";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!isValid) {
      setStatus("invalid");
      setShaking(true);
      return;
    }
    setStatus("loading");
    const result = await subscribeEmail(trimmed);
    if (result === "success" || result === "already") {
      setStatus(result);
      setEmail("");
    } else {
      setStatus("error");
    }
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
    <aside
      className={`events-notify-card reveal${done ? " events-notify-card--done" : ""}`}
      aria-label="Get notified about upcoming events"
    >
      {done ? (
        <div className="events-notify-done" role="status" aria-live="polite">
          <span className="events-notify-check" aria-hidden="true">
            <CheckIcon />
          </span>
          <p className="events-notify-done-title">
            {status === "already" ? "You're already on the list" : "You're on the list"}
          </p>
          <p className="events-notify-done-sub">
            {status === "already"
              ? "We'll be in touch the moment dates open."
              : "We'll email you the moment dates open."}
          </p>
        </div>
      ) : (
        <>
          <div className="events-notify-text">
            <p className="section-label">Stay in the loop</p>
            <h3 className="events-notify-headline">
              Be the first to know when <em>dates open.</em>
            </h3>
          </div>

          <form
            className="events-notify-action"
            onSubmit={handleSubmit}
            noValidate
            aria-busy={loading}
          >
            <div
              className={`events-notify-field${shaking ? " is-shake" : ""}${
                status === "invalid" ? " is-invalid" : ""
              }`}
              onAnimationEnd={() => setShaking(false)}
            >
              <span className="events-notify-inputwrap">
                <label htmlFor="events-notify" className="visually-hidden">Email address</label>
                <input
                  id="events-notify"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="your@email.com"
                  className="events-notify-input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "invalid" || status === "error") setStatus("idle");
                  }}
                  aria-invalid={status === "invalid"}
                  aria-describedby={
                    status === "invalid" || status === "error" ? "events-notify-msg" : undefined
                  }
                  disabled={loading}
                  required
                />
                <span
                  className={`events-notify-valid${isValid && !loading ? " is-shown" : ""}`}
                  aria-hidden="true"
                >
                  <CheckIcon />
                </span>
              </span>
              <button type="submit" className="btn-primary events-notify-btn" disabled={loading}>
                {loading && <span className="events-notify-spinner" aria-hidden="true" />}
                <span>{loading ? "Adding…" : "Notify me"}</span>
              </button>
            </div>

            <p
              id="events-notify-msg"
              className="events-notify-msg"
              role={status === "invalid" || status === "error" ? "alert" : undefined}
              data-show={status === "invalid" || status === "error"}
            >
              {status === "invalid" && "Please enter a valid email address."}
              {status === "error" && (
                <>
                  Something went wrong. Please <a href={MAILTO}>email Asli directly</a> instead.
                </>
              )}
            </p>
          </form>
        </>
      )}
    </aside>
  );
};

export default EventsNotify;
