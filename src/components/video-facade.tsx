"use client";

import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function VideoFacade({ videoId }: { videoId: string }) {
  const hasTrackedStart = useRef(false);
  const hasVideo = /^[a-zA-Z0-9_-]{6,20}$/.test(videoId);

  if (!hasVideo) return null;

  return (
    <div className="video-frame">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0`}
        title="Présentation de mon accompagnement"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => {
          if (hasTrackedStart.current) return;
          hasTrackedStart.current = true;
          trackEvent("video_start", { video: "main", trigger: "autoplay" });
        }}
      />
    </div>
  );
}
