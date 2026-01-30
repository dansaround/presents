"use client";

import { useState, useCallback, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { Profile, ProfileBlock, BlockType } from "@presents/shared";
import { SortableBlock } from "./SortableBlock";
import { BlockPalette } from "./BlockPalette";
import { PropertyPanel } from "./PropertyPanel";
import { ThemePicker } from "./ThemePicker";
import { ProfileRenderer } from "@/components/profile/ProfileRenderer";
import { updateProfile, publishProfile, unpublishProfile } from "@/lib/strapi";
import { Save, Eye, EyeOff, Undo, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorCanvasProps {
  initialProfile: Profile;
}

export function EditorCanvas({ initialProfile }: EditorCanvasProps) {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);

  // Debounced auto-save
  useEffect(() => {
    if (!isDirty) return;

    const timer = setTimeout(async () => {
      setIsSaving(true);
      await updateProfile(profile.id, {
        blocks: profile.blocks,
        theme: profile.theme,
        name: profile.name,
        role: profile.role,
        description: profile.description,
      } as any);
      setIsSaving(false);
      setIsDirty(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDirty, profile]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setProfile((prev) => {
        const oldIndex = prev.blocks.findIndex((b) => b.id === active.id);
        const newIndex = prev.blocks.findIndex((b) => b.id === over.id);

        return {
          ...prev,
          blocks: arrayMove(prev.blocks, oldIndex, newIndex) as ProfileBlock[],
        };
      });
      setIsDirty(true);
    }
  }, []);

  const addBlock = useCallback((type: BlockType) => {
    const newBlock = createDefaultBlock(type);
    setProfile((prev) => ({
      ...prev,
      blocks: [...prev.blocks, newBlock] as ProfileBlock[],
    }));
    setSelectedBlockId(newBlock.id);
    setIsDirty(true);
  }, []);

  const updateBlock = useCallback((blockId: string, updates: Record<string, unknown>) => {
    setProfile((prev) => ({
      ...prev,
      blocks: prev.blocks.map((b) =>
        b.id === blockId ? { ...b, ...updates } as ProfileBlock : b
      ),
    }));
    setIsDirty(true);
  }, []);

  const deleteBlock = useCallback((blockId: string) => {
    setProfile((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((b) => b.id !== blockId) as ProfileBlock[],
    }));
    if (selectedBlockId === blockId) {
      setSelectedBlockId(null);
    }
    setIsDirty(true);
  }, [selectedBlockId]);

  const updateTheme = useCallback((updates: Partial<Profile["theme"]>) => {
    setProfile((prev) => ({
      ...prev,
      theme: { ...prev.theme, ...updates },
    }));
    setIsDirty(true);
  }, []);

  const handlePublish = async () => {
    setIsSaving(true);
    if (profile.publishedAt) {
      await unpublishProfile(profile.id);
      setProfile((prev) => ({ ...prev, publishedAt: null }));
    } else {
      await publishProfile(profile.id);
      setProfile((prev) => ({ ...prev, publishedAt: new Date().toISOString() }));
    }
    setIsSaving(false);
  };

  const selectedBlock = profile.blocks.find((b) => b.id === selectedBlockId);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg">Editor</h1>
          {isDirty && (
            <span className="text-xs text-muted-foreground">Unsaved changes</span>
          )}
          {isSaving && (
            <span className="text-xs text-blue-500 flex items-center gap-1">
              <Save className="w-3 h-3 animate-pulse" />
              Saving...
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className={cn(
              "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium border transition-colors",
              isPreviewMode
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:bg-accent"
            )}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </button>
          <button
            onClick={handlePublish}
            disabled={isSaving}
            className={cn(
              "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
              profile.publishedAt
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-green-500 text-white hover:bg-green-600"
            )}
          >
            {profile.publishedAt ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Unpublish
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Block Palette */}
        {!isPreviewMode && (
          <aside className="w-64 border-r bg-muted/30 p-4 overflow-y-auto">
            <BlockPalette onAddBlock={addBlock} />
            <div className="mt-6 pt-6 border-t">
              <button
                onClick={() => setShowThemePicker(true)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                <Settings2 className="w-4 h-4" />
                Theme Settings
              </button>
            </div>
          </aside>
        )}

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto bg-muted/10 p-8">
          <div className="max-w-[420px] mx-auto bg-background rounded-lg shadow-lg overflow-hidden min-h-[600px]">
            {isPreviewMode ? (
              <ProfileRenderer profile={profile} />
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={profile.blocks.map((b) => b.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-1 p-2">
                    {profile.blocks.map((block) => (
                      <SortableBlock
                        key={block.id}
                        block={block}
                        profileData={{
                          name: profile.name,
                          role: profile.role,
                          description: profile.description,
                          profileImage: profile.profileImage,
                          coverImage: profile.coverImage,
                        }}
                        isSelected={selectedBlockId === block.id}
                        onSelect={() => setSelectedBlockId(block.id)}
                        onDelete={() => deleteBlock(block.id)}
                      />
                    ))}
                    {profile.blocks.length === 0 && (
                      <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
                        Add blocks from the left panel
                      </div>
                    )}
                  </div>
                </SortableContext>
              </DndContext>
            )}
          </div>
        </main>

        {/* Right Sidebar - Property Panel */}
        {!isPreviewMode && (
          <aside className="w-80 border-l bg-background p-4 overflow-y-auto">
            {showThemePicker ? (
              <ThemePicker
                theme={profile.theme}
                onUpdate={updateTheme}
                onClose={() => setShowThemePicker(false)}
              />
            ) : selectedBlock ? (
              <PropertyPanel
                block={selectedBlock}
                onUpdate={(updates) => updateBlock(selectedBlock.id, updates)}
              />
            ) : (
              <div className="text-center text-muted-foreground text-sm py-8">
                Select a block to edit its properties
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

// Helper to create default block data
function createDefaultBlock(type: BlockType): ProfileBlock {
  const id = crypto.randomUUID();

  const defaults: Record<BlockType, () => ProfileBlock> = {
    "blocks.header": () => ({
      id,
      __component: "blocks.header",
      showName: true,
      showRole: true,
      showDescription: true,
      showCoverImage: true,
    }),
    "blocks.socials": () => ({
      id,
      __component: "blocks.socials",
      links: [],
    }),
    "blocks.cta": () => ({
      id,
      __component: "blocks.cta",
      text: "Click Here",
      url: "#",
      style: "primary",
    }),
    "blocks.text": () => ({
      id,
      __component: "blocks.text",
      content: "<p>Enter your text here...</p>",
      alignment: "center",
    }),
    "blocks.image": () => ({
      id,
      __component: "blocks.image",
      image: { id: 0, url: "" },
      alt: "",
      link: null,
      aspectRatio: "auto",
    }),
    "blocks.video": () => ({
      id,
      __component: "blocks.video",
      platform: "direct",
      url: "",
      aspectRatio: "16:9",
    }),
    "blocks.youtube": () => ({
      id,
      __component: "blocks.youtube",
      url: "",
      caption: null,
    }),
    "blocks.properties": () => ({
      id,
      __component: "blocks.properties",
      title: "Available Properties",
      items: [],
    }),
    "blocks.action-card": () => ({
      id,
      __component: "blocks.action-card",
      image: { id: 0, url: "" },
      title: "Card Title",
      subtitle: null,
      ctaText: "Learn More",
      ctaUrl: "#",
    }),
    "blocks.divider": () => ({
      id,
      __component: "blocks.divider",
      height: "medium",
      style: "none",
    }),
  };

  return defaults[type]();
}
