"use client";

import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { PlayIcon, VideoIcon } from "./icons";

export function VideoFacade({ videoId }: { videoId: string }) {
  const [loaded, setLoaded] = useState(false);
  const hasVideo = /^[a-zA-Z0-9_-]{6,20}$/.test(videoId);

  if (loaded && hasVideo) {
    return (
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Présentation de mon accompagnement"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={`video-facade${hasVideo ? " has-video" : ""}`}>
      {hasVideo ? (
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Miniature de ma présentation vidéo"
          fill
          sizes="(max-width: 768px) calc(100vw - 28px), 940px"
          priority
        />
      ) : (
        <div className="video-facade__placeholder" aria-hidden="true">
          <span className="video-facade__orbit" />
          <span className="video-facade__portrait">
            <VideoIcon />
            <small>A.</small>
          </span>
        </div>
      )}
      <span className="eyebrow video-facade__badge">
        Ma présentation
      </span>
      <button
        type="button"
        className="play-button"
        disabled={!hasVideo}
        aria-label={
          hasVideo
            ? "Lire ma présentation vidéo"
            : "Présentation vidéo indisponible"
        }
        onClick={() => {
          setLoaded(true);
          trackEvent("video_start", { video: "main" });
        }}
      >
        <PlayIcon />
      </button>
      {!hasVideo && (
        <p className="video-facade__note">
          Tu peux poursuivre la page et découvrir comment je peux t’aider.
        </p>
      )}
    </div>
  );
}
