export type AnalyticsEventName =
  | "page_view"
  | "cta_click"
  | "appointment_type_selected"
  | "video_start"
  | "video_progress"
  | "calendly_viewed"
  | "calendly_date_selected"
  | "appointment_scheduled";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event: name, ...payload };
  window.dataLayer?.push(detail);
  window.dispatchEvent(new CustomEvent("axel:analytics", { detail }));
}
