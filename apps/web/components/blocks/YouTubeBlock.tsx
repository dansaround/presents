"use client";

import type { YouTubeBlock as YouTubeBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtu\.be\/)([^?\s]+)/,
    /(?:youtube\.com\/embed\/)([^?\s]+)/,
    /(?:youtube\.com\/shorts\/)([^?\s]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  return null;
}

export function YouTubeBlock({ block }: BlockComponentProps<YouTubeBlockType>) {
  const { url, caption } = block;

  if (!url) return null;

  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;

  return (
    <div className="px-4 py-2">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && (
        <p className="mt-2 text-sm text-muted-foreground text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
