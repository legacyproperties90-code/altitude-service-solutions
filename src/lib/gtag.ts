// GA4 event helpers — call these anywhere in the app
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export function pageview(url: string) {
  if (!window.gtag || !GA_ID) return;
  window.gtag("config", GA_ID, { page_path: url });
}

export function event(
  action: string,
  params: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: string | number | undefined;
  }
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}

// Conversion events — mark these as conversions in GA4 dashboard
export const track = {
  phoneCall:      (label = "unknown") => event("phone_call_click",  { event_category: "conversion", event_label: label }),
  whatsapp:       (label = "unknown") => event("whatsapp_click",    { event_category: "conversion", event_label: label }),
  quoteSubmit:    ()                  => event("generate_lead",     { event_category: "conversion", event_label: "quote_form" }),
  ctaClick:       (label: string)     => event("cta_click",         { event_category: "engagement", event_label: label }),
  scrollDepth:    (pct: number)       => event("scroll_depth",      { event_category: "engagement", event_label: `${pct}%`, value: pct }),
  formStart:      ()                  => event("form_start",        { event_category: "engagement", event_label: "quote_form" }),
  serviceSelect:  (service: string)   => event("service_selected",  { event_category: "engagement", event_label: service }),
};
