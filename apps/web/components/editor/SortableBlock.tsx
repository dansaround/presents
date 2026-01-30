"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Eye, EyeOff, Trash2 } from "lucide-react";
import type { ProfileBlock } from "@presents/shared";
import { getBlockComponent } from "@/components/blocks/registry";
import { cn } from "@/lib/utils";

interface SortableBlockProps {
  block: ProfileBlock;
  profileData: {
    name: string;
    role?: string | null;
    description?: string | null;
    profileImage?: { url: string } | null;
    coverImage?: { url: string } | null;
  };
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const blockLabels: Record<string, string> = {
  "blocks.header": "Header",
  "blocks.socials": "Social Links",
  "blocks.cta": "CTA Button",
  "blocks.text": "Text",
  "blocks.image": "Image",
  "blocks.video": "Video",
  "blocks.youtube": "YouTube",
  "blocks.properties": "Properties",
  "blocks.action-card": "Action Card",
  "blocks.divider": "Divider",
};

export function SortableBlock({
  block,
  profileData,
  isSelected,
  onSelect,
  onDelete,
}: SortableBlockProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const BlockComponent = getBlockComponent(block.__component);
  const label = blockLabels[block.__component] || "Unknown Block";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "relative group rounded-lg border-2 transition-all",
        isDragging && "opacity-50 shadow-lg",
        isSelected
          ? "border-primary bg-primary/5"
          : "border-transparent hover:border-muted-foreground/30"
      )}
      onClick={onSelect}
    >
      {/* Block Header */}
      <div
        className={cn(
          "flex items-center justify-between px-2 py-1 bg-muted/50 rounded-t-md text-xs font-medium",
          "opacity-0 group-hover:opacity-100 transition-opacity",
          isSelected && "opacity-100"
        )}
      >
        <div className="flex items-center gap-2">
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <GripVertical className="w-4 h-4 text-muted-foreground" />
          </button>
          <span className="text-muted-foreground">{label}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1 hover:bg-destructive/10 hover:text-destructive rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Block Content */}
      <div className="pointer-events-none">
        {BlockComponent ? (
          <BlockComponent
            block={block}
            profileData={profileData}
            isEditing={true}
          />
        ) : (
          <div className="p-4 text-center text-muted-foreground text-sm">
            Unknown block type: {block.__component}
          </div>
        )}
      </div>
    </div>
  );
}
