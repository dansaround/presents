"use client";

import type { VideoBlock as VideoBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";
import { cn } from "@/lib/utils";

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

function getVimeoEmbedUrl(url: string): string | null {
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/;
  const match = url.match(vimeoRegex);
  if (match) {
    return `https://player.vimeo.com/video/${match[1]}?autoplay=0&loop=0&muted=0`;
  }
  return null;
}

export function VideoBlock({ block }: BlockComponentProps<VideoBlockType>) {
  const { platform, url, aspectRatio } = block;

  if (!url) return null;

  if (platform === "vimeo") {
    const embedUrl = getVimeoEmbedUrl(url);
    if (!embedUrl) return null;

    return (
      <div className="px-4 py-2">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-lg",
            aspectRatioClasses[aspectRatio]
          )}
        >
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  // Direct video
  return (
    <div className="px-4 py-2">
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg",
          aspectRatioClasses[aspectRatio]
        )}
      >
        <video
          src={url}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
