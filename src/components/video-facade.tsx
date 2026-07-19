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
          title="Présentation de l’accompagnement par Axel"
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
          alt="Miniature de la présentation vidéo d’Axel"
          fill
          sizes="(max-width: 768px) 100vw, 1120px"
          priority
        />
      ) : (
        <div className="video-facade__placeholder" aria-hidden="true">
          <span className="video-facade__orbit" />
          <span className="video-facade__portrait">
            <VideoIcon />
            <small>Axel</small>
          </span>
        </div>
      )}
      <span className="eyebrow video-facade__badge">
        {hasVideo ? "Présentation d’Axel" : "Vidéo à venir"}
      </span>
      <button
        type="button"
        className="play-button"
        disabled={!hasVideo}
        aria-label={
          hasVideo
            ? "Lire la présentation vidéo d’Axel"
            : "Vidéo de présentation bientôt disponible"
        }
        onClick={() => {
          setLoaded(true);
          trackEvent("video_start", { video: "main" });
        }}
      >
        <PlayIcon />
      </button>
      {!hasVideo && (
        <p className="video-facade__note">La vidéo sera ajoutée ici sans ralentir la page.</p>
      )}
    </div>
  );
}
