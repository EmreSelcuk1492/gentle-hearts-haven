import { useEffect, useRef, useState } from "react";
import { getCalendlyEmbedUrl } from "@/lib/calendly";

const BookingModal = () => {
  const [rendered, setRendered] = useState(false);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const url = getCalendlyEmbedUrl();

  useEffect(() => {
    const preload = () => setRendered(true);
    const onOpen = () => {
      setRendered(true);
      setOpen(true);
    };
    const onClose = () => setOpen(false);

    window.addEventListener("booking:preload", preload);
    window.addEventListener("booking:open", onOpen);
    window.addEventListener("booking:close", onClose);

    const win = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    const schedule = win.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2500));
    const handle = schedule(preload);

    return () => {
      window.removeEventListener("booking:preload", preload);
      window.removeEventListener("booking:open", onOpen);
      window.removeEventListener("booking:close", onClose);
      if (win.cancelIdleCallback && typeof handle === "number") {
        win.cancelIdleCallback(handle);
      } else if (typeof handle === "number") {
        clearTimeout(handle);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      className={`booking-modal${open ? " booking-modal--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-hidden={!open}
    >
      <button
        type="button"
        className="booking-modal-backdrop"
        onClick={() => setOpen(false)}
        aria-label="Close booking dialog"
        tabIndex={open ? 0 : -1}
      />
      <div className="booking-modal-card" role="document">
        <header className="booking-modal-header">
          <div className="booking-modal-title-group">
            <p className="section-label">Discovery call</p>
            <h3 className="booking-modal-title" id="booking-modal-title">
              Pick a time that <em>works for you.</em>
            </h3>
            <p className="booking-modal-sub">
              30 minutes, no commitment. Asli will be in touch right after.
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="booking-modal-close"
            onClick={() => setOpen(false)}
            aria-label="Close booking dialog"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="booking-modal-body">
          {rendered && url ? (
            <iframe
              key={url}
              src={url}
              title="Book a discovery call"
              className={`booking-modal-iframe${loaded ? " is-loaded" : ""}`}
              onLoad={() => setLoaded(true)}
              loading="eager"
            />
          ) : null}
          {(!rendered || !loaded) && (
            <div className="booking-modal-skeleton" aria-hidden="true">
              <div className="booking-modal-skeleton-pulse" />
              <p className="booking-modal-skeleton-text">Loading availability…</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
