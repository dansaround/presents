"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ActionCardBlock as ActionCardBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";

export function ActionCardBlock({ block }: BlockComponentProps<ActionCardBlockType>) {
  const { image, title, subtitle, ctaText, ctaUrl } = block;

  return (
    <div className="px-4 py-2">
      <Link
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl bg-card border shadow-sm transition-all duration-200 hover:shadow-md hover:border-profile-primary/50"
      >
        {/* Card Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {image?.url ? (
            <Image
              src={image.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Sin imagen</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            {subtitle && (
              <p className="text-sm text-white/80 line-clamp-2">{subtitle}</p>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-4 flex items-center justify-between bg-background">
          <span className="font-medium text-sm text-profile-primary">
            {ctaText}
          </span>
          <ArrowRight className="w-5 h-5 text-profile-primary transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
