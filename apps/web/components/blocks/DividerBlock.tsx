"use client";

import type { DividerBlock as DividerBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";
import { cn } from "@/lib/utils";

const heightClasses = {
  small: "h-4",
  medium: "h-8",
  large: "h-16",
};

export function DividerBlock({ block }: BlockComponentProps<DividerBlockType>) {
  const { height, style } = block;

  if (style === "none") {
    return <div className={cn("w-full", heightClasses[height])} />;
  }

  if (style === "dots") {
    return (
      <div
        className={cn(
          "w-full flex items-center justify-center",
          heightClasses[height]
        )}
      >
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
    );
  }

  // Line style
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center px-8",
        heightClasses[height]
      )}
    >
      <div className="w-full h-px bg-border" />
    </div>
  );
}
