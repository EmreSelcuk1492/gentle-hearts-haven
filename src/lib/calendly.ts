export function getCalendlyEmbedUrl(): string | null {
  const base = import.meta.env.VITE_CALENDLY_URL as string | undefined;
  if (!base) return null;
  try {
    const url = new URL(base);
    if (typeof window !== "undefined") {
      url.searchParams.set("embed_domain", window.location.host);
    }
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("primary_color", "C45F3C");
    url.searchParams.set("text_color", "2C1D17");
    url.searchParams.set("background_color", "F7EFE3");
    url.searchParams.set("hide_gdpr_banner", "1");
    return url.toString();
  } catch {
    return base;
  }
}

export function dispatchBookingPreload() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("booking:preload"));
}

export function dispatchBookingOpen() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("booking:open"));
}
