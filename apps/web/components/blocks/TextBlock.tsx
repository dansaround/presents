"use client";

import type { TextBlock as TextBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";
import { cn } from "@/lib/utils";

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function TextBlock({ block }: BlockComponentProps<TextBlockType>) {
  const { content, alignment } = block;

  if (!content) return null;

  return (
    <div className={cn("px-4 py-2", alignmentClasses[alignment])}>
      <div
        className="prose prose-sm md:prose-base dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
