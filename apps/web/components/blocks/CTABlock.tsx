"use client";

import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import type { CTABlock as CTABlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";
import { cn } from "@/lib/utils";

const styleVariants = {
  primary:
    "bg-profile-primary text-white hover:opacity-90",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline:
    "border-2 border-profile-primary text-profile-primary hover:bg-profile-primary hover:text-white",
};

export function CTABlock({ block }: BlockComponentProps<CTABlockType>) {
  const { text, url, vcfFile, style } = block;

  // If there's a VCF file, it's a contact download
  const isContactDownload = !!vcfFile;
  const href = isContactDownload && typeof vcfFile === 'string' ? vcfFile : url;

  return (
    <div className="flex justify-center px-4 py-2">
      <Link
        href={href}
        target={isContactDownload ? "_self" : "_blank"}
        rel={isContactDownload ? undefined : "noopener noreferrer"}
        download={isContactDownload ? true : undefined}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-base transition-all duration-200 min-w-[200px]",
          styleVariants[style]
        )}
      >
        {isContactDownload ? (
          <Download className="w-5 h-5" />
        ) : (
          <ExternalLink className="w-5 h-5" />
        )}
        {text}
      </Link>
    </div>
  );
}
