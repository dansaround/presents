"use client";

import {
  User,
  Share2,
  MousePointerClick,
  Type,
  Image,
  Play,
  Youtube,
  Home,
  LayoutGrid,
  Minus,
} from "lucide-react";
import type { BlockType } from "@presents/shared";

interface BlockPaletteProps {
  onAddBlock: (type: BlockType) => void;
}

const paletteItems: Array<{
  type: BlockType;
  label: string;
  icon: React.ElementType;
  description: string;
}> = [
  {
    type: "blocks.header",
    label: "Header",
    icon: User,
    description: "Profile header",
  },
  {
    type: "blocks.socials",
    label: "Socials",
    icon: Share2,
    description: "Social links",
  },
  {
    type: "blocks.cta",
    label: "CTA",
    icon: MousePointerClick,
    description: "Action button",
  },
  {
    type: "blocks.text",
    label: "Text",
    icon: Type,
    description: "Rich text",
  },
  {
    type: "blocks.image",
    label: "Image",
    icon: Image,
    description: "Single image",
  },
  {
    type: "blocks.video",
    label: "Video",
    icon: Play,
    description: "Video embed",
  },
  {
    type: "blocks.youtube",
    label: "YouTube",
    icon: Youtube,
    description: "YouTube video",
  },
  {
    type: "blocks.properties",
    label: "Properties",
    icon: Home,
    description: "Property listings",
  },
  {
    type: "blocks.action-card",
    label: "Card",
    icon: LayoutGrid,
    description: "Card with CTA",
  },
  {
    type: "blocks.divider",
    label: "Divider",
    icon: Minus,
    description: "Separator",
  },
];

export function BlockPalette({ onAddBlock }: BlockPaletteProps) {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
        Add Blocks
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {paletteItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.type}
              onClick={() => onAddBlock(item.type)}
              className="flex flex-col items-center gap-1 p-3 rounded-lg border border-transparent hover:border-primary hover:bg-primary/5 transition-all text-center"
            >
              <Icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
