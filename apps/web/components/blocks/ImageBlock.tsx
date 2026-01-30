"use client";

import Image from "next/image";
import Link from "next/link";
import type { ImageBlock as ImageBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";
import { cn } from "@/lib/utils";

const aspectRatioClasses = {
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-video",
  auto: "",
};

export function ImageBlock({ block }: BlockComponentProps<ImageBlockType>) {
  const { image, alt, link, aspectRatio } = block;

  if (!image?.url) return null;

  const imageElement = (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        aspectRatioClasses[aspectRatio]
      )}
    >
      <Image
        src={image.url}
        alt={alt || ""}
        fill={aspectRatio !== "auto"}
        width={aspectRatio === "auto" ? image.width || 800 : undefined}
        height={aspectRatio === "auto" ? image.height || 600 : undefined}
        className={cn(
          "object-cover",
          aspectRatio === "auto" && "w-full h-auto"
        )}
      />
    </div>
  );

  if (link) {
    return (
      <div className="px-4 py-2">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 transition-opacity"
        >
          {imageElement}
        </Link>
      </div>
    );
  }

  return <div className="px-4 py-2">{imageElement}</div>;
}
