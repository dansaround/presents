"use client";

import type { Profile, ProfileBlock } from "@presents/shared";
import { getBlockComponent } from "@/components/blocks/registry";

interface ProfileRendererProps {
  profile: Profile;
  isEditing?: boolean;
}

export function ProfileRenderer({ profile, isEditing = false }: ProfileRendererProps) {
  const { blocks, name, role, description, profileImage, coverImage } = profile;

  // Profile data to pass to header block
  const profileData = {
    name,
    role,
    description,
    profileImage,
    coverImage,
  };

  if (!blocks || blocks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-muted-foreground">
        No content blocks configured
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {blocks.map((block: ProfileBlock) => {
        const BlockComponent = getBlockComponent(block.__component);

        if (!BlockComponent) {
          console.warn(`Unknown block type: ${block.__component}`);
          return null;
        }

        return (
          <BlockComponent
            key={block.id}
            block={block}
            profileData={profileData}
            isEditing={isEditing}
          />
        );
      })}
    </div>
  );
}
