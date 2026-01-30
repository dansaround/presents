"use client";

import { X, Sun, Moon } from "lucide-react";
import type { ProfileTheme, ThemeMode, ThemePreset } from "@presents/shared";
import { cn } from "@/lib/utils";

interface ThemePickerProps {
  theme: ProfileTheme;
  onUpdate: (updates: Partial<ProfileTheme>) => void;
  onClose: () => void;
}

const presetColors: Record<ThemePreset, { primary: string; accent: string }> = {
  default: { primary: "#3b82f6", accent: "#8b5cf6" },
  warm: { primary: "#f97316", accent: "#ec4899" },
  cool: { primary: "#06b6d4", accent: "#6366f1" },
  vibrant: { primary: "#22c55e", accent: "#eab308" },
  minimal: { primary: "#71717a", accent: "#a1a1aa" },
};

export function ThemePicker({ theme, onUpdate, onClose }: ThemePickerProps) {
  const handlePresetChange = (preset: ThemePreset) => {
    const colors = presetColors[preset];
    onUpdate({
      preset,
      primaryColor: colors.primary,
      accentColor: colors.accent,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Theme Settings</h3>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-accent"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Mode Toggle */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Mode
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => onUpdate({ mode: "light" })}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 rounded-md border transition-all",
              theme.mode === "light"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-muted-foreground"
            )}
          >
            <Sun className="w-4 h-4" />
            Light
          </button>
          <button
            onClick={() => onUpdate({ mode: "dark" })}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 rounded-md border transition-all",
              theme.mode === "dark"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-muted-foreground"
            )}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
        </div>
      </div>

      {/* Preset Selection */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Color Preset
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(presetColors) as ThemePreset[]).map((preset) => {
            const colors = presetColors[preset];
            return (
              <button
                key={preset}
                onClick={() => handlePresetChange(preset)}
                className={cn(
                  "flex flex-col items-center gap-2 p-3 rounded-lg border transition-all",
                  theme.preset === preset
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground"
                )}
              >
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors.accent }}
                  />
                </div>
                <span className="text-xs capitalize">{preset}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="space-y-4">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Custom Colors
        </label>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Primary</span>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={theme.primaryColor}
                onChange={(e) => onUpdate({ primaryColor: e.target.value, preset: "default" as ThemePreset })}
                className="w-8 h-8 rounded cursor-pointer"
              />
              <input
                type="text"
                value={theme.primaryColor}
                onChange={(e) => onUpdate({ primaryColor: e.target.value, preset: "default" as ThemePreset })}
                className="w-20 px-2 py-1 text-xs border rounded bg-background font-mono"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Accent</span>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={theme.accentColor}
                onChange={(e) => onUpdate({ accentColor: e.target.value, preset: "default" as ThemePreset })}
                className="w-8 h-8 rounded cursor-pointer"
              />
              <input
                type="text"
                value={theme.accentColor}
                onChange={(e) => onUpdate({ accentColor: e.target.value, preset: "default" as ThemePreset })}
                className="w-20 px-2 py-1 text-xs border rounded bg-background font-mono"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Preview
        </label>
        <div
          className="p-4 rounded-lg"
          style={{
            background: theme.mode === "dark" ? "#1a1a1a" : "#ffffff",
            color: theme.mode === "dark" ? "#ffffff" : "#1a1a1a",
          }}
        >
          <div className="space-y-2">
            <div
              className="h-2 w-3/4 rounded"
              style={{ backgroundColor: theme.primaryColor }}
            />
            <div
              className="h-2 w-1/2 rounded"
              style={{ backgroundColor: theme.accentColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
