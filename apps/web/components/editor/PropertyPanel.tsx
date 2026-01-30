"use client";

import type { ProfileBlock, SocialLink } from "@presents/shared";
import { Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyPanelProps {
  block: ProfileBlock;
  onUpdate: (updates: Record<string, unknown>) => void;
}

export function PropertyPanel({ block, onUpdate }: PropertyPanelProps) {
  const renderFields = () => {
    switch (block.__component) {
      case "blocks.header":
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Header Settings</h3>
            <ToggleField
              label="Show Name"
              value={block.showName}
              onChange={(v) => onUpdate({ showName: v })}
            />
            <ToggleField
              label="Show Role"
              value={block.showRole}
              onChange={(v) => onUpdate({ showRole: v })}
            />
            <ToggleField
              label="Show Description"
              value={block.showDescription}
              onChange={(v) => onUpdate({ showDescription: v })}
            />
            <ToggleField
              label="Show Cover Image"
              value={block.showCoverImage}
              onChange={(v) => onUpdate({ showCoverImage: v })}
            />
          </div>
        );

      case "blocks.socials":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Social Links</h3>
              <button
                onClick={() => {
                  const links = [...(block.links || [])];
                  links.push({ platform: "instagram", url: "" });
                  onUpdate({ links } as any);
                }}
                className="p-1 rounded hover:bg-accent"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {block.links?.map((link, index) => (
              <div key={index} className="space-y-2 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <SelectField
                    label="Platform"
                    value={link.platform}
                    options={[
                      { value: "whatsapp", label: "WhatsApp" },
                      { value: "instagram", label: "Instagram" },
                      { value: "facebook", label: "Facebook" },
                      { value: "tiktok", label: "TikTok" },
                      { value: "linkedin", label: "LinkedIn" },
                      { value: "youtube", label: "YouTube" },
                      { value: "x", label: "X (Twitter)" },
                      { value: "threads", label: "Threads" },
                    ]}
                    onChange={(v) => {
                      const links = [...block.links!];
                      links[index] = { ...links[index], platform: v as SocialLink['platform'] };
                      onUpdate({ links } as any);
                    }}
                  />
                  <button
                    onClick={() => {
                      const links = block.links!.filter((_, i) => i !== index);
                      onUpdate({ links } as any);
                    }}
                    className="p-1 hover:bg-destructive/10 hover:text-destructive rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <TextField
                  label="URL"
                  value={link.url}
                  onChange={(v) => {
                    const links = [...block.links!];
                    links[index] = { ...links[index], url: v };
                    onUpdate({ links } as any);
                  }}
                  placeholder="https://..."
                />
              </div>
            ))}
          </div>
        );

      case "blocks.cta":
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">CTA Settings</h3>
            <TextField
              label="Button Text"
              value={block.text}
              onChange={(v) => onUpdate({ text: v })}
            />
            <TextField
              label="Link URL"
              value={block.url}
              onChange={(v) => onUpdate({ url: v })}
              placeholder="https://..."
            />
            <SelectField
              label="Style"
              value={block.style}
              options={[
                { value: "primary", label: "Primary" },
                { value: "secondary", label: "Secondary" },
                { value: "outline", label: "Outline" },
              ]}
              onChange={(v) => onUpdate({ style: v as any })}
            />
          </div>
        );

      case "blocks.text":
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Text Settings</h3>
            <TextAreaField
              label="Content"
              value={block.content}
              onChange={(v) => onUpdate({ content: v })}
              rows={6}
            />
            <SelectField
              label="Alignment"
              value={block.alignment}
              options={[
                { value: "left", label: "Left" },
                { value: "center", label: "Center" },
                { value: "right", label: "Right" },
              ]}
              onChange={(v) => onUpdate({ alignment: v as any })}
            />
          </div>
        );

      case "blocks.youtube":
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">YouTube Settings</h3>
            <TextField
              label="Video URL"
              value={block.url}
              onChange={(v) => onUpdate({ url: v })}
              placeholder="https://youtube.com/watch?v=..."
            />
            <TextField
              label="Caption (optional)"
              value={block.caption || ""}
              onChange={(v) => onUpdate({ caption: v || null })}
            />
          </div>
        );

      case "blocks.divider":
        return (
          <div className="space-y-4">
            <h3 className="font-semibold">Divider Settings</h3>
            <SelectField
              label="Height"
              value={block.height}
              options={[
                { value: "small", label: "Small" },
                { value: "medium", label: "Medium" },
                { value: "large", label: "Large" },
              ]}
              onChange={(v) => onUpdate({ height: v as any })}
            />
            <SelectField
              label="Style"
              value={block.style}
              options={[
                { value: "none", label: "None (spacer)" },
                { value: "line", label: "Line" },
                { value: "dots", label: "Dots" },
              ]}
              onChange={(v) => onUpdate({ style: v as any })}
            />
          </div>
        );

      default:
        return (
          <div className="text-center text-muted-foreground py-4">
            No properties available for this block type
          </div>
        );
    }
  };

  return <div className="space-y-4">{renderFields()}</div>;
}

// Helper components

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ToggleField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-medium">{label}</label>
      <button
        onClick={() => onChange(!value)}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
          value ? "bg-primary" : "bg-muted"
        )}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
            value ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
    </div>
  );
}
