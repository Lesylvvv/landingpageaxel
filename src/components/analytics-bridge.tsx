"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsBridge() {
  useEffect(() => {
    trackEvent("page_view", { page: "landing" });
  }, []);

  return null;
}

export function TrackedCta({
  href,
  location,
  children,
  className = "button",
}: {
  href: string;
  location: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => trackEvent("cta_click", { location })}
    >
      {children}
    </a>
  );
}
