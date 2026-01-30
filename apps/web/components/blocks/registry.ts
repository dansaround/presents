import type { ComponentType } from 'react';
import type { ProfileBlock, BlockType } from '@presents/shared';

import { HeaderBlock } from './HeaderBlock';
import { SocialsBlock } from './SocialsBlock';
import { CTABlock } from './CTABlock';
import { TextBlock } from './TextBlock';
import { ImageBlock } from './ImageBlock';
import { VideoBlock } from './VideoBlock';
import { YouTubeBlock } from './YouTubeBlock';
import { PropertiesBlock } from './PropertiesBlock';
import { ActionCardBlock } from './ActionCardBlock';
import { DividerBlock } from './DividerBlock';

// Type for block component props
export interface BlockComponentProps<T extends ProfileBlock = ProfileBlock> {
  block: T;
  profileData?: {
    name: string;
    role?: string | null;
    description?: string | null;
    profileImage?: { url: string } | null;
    coverImage?: { url: string } | null;
  };
  isEditing?: boolean;
}

// Block registry mapping component types to their renderers
export const blockRegistry: Record<BlockType, ComponentType<BlockComponentProps<any>>> = {
  'blocks.header': HeaderBlock,
  'blocks.socials': SocialsBlock,
  'blocks.cta': CTABlock,
  'blocks.text': TextBlock,
  'blocks.image': ImageBlock,
  'blocks.video': VideoBlock,
  'blocks.youtube': YouTubeBlock,
  'blocks.properties': PropertiesBlock,
  'blocks.action-card': ActionCardBlock,
  'blocks.divider': DividerBlock,
};

// Get block component by type
export function getBlockComponent(type: BlockType): ComponentType<BlockComponentProps<any>> | null {
  return blockRegistry[type] || null;
}

// Block metadata for the editor palette
export const blockPalette = [
  {
    type: 'blocks.header' as const,
    label: 'Header',
    icon: 'User',
    description: 'Profile header with name, role, and image',
  },
  {
    type: 'blocks.socials' as const,
    label: 'Social Links',
    icon: 'Share2',
    description: 'Social media icons and links',
  },
  {
    type: 'blocks.cta' as const,
    label: 'CTA Button',
    icon: 'MousePointerClick',
    description: 'Call to action button',
  },
  {
    type: 'blocks.text' as const,
    label: 'Text',
    icon: 'Type',
    description: 'Rich text content block',
  },
  {
    type: 'blocks.image' as const,
    label: 'Image',
    icon: 'Image',
    description: 'Single image with optional link',
  },
  {
    type: 'blocks.video' as const,
    label: 'Video',
    icon: 'Play',
    description: 'Video embed (direct or Vimeo)',
  },
  {
    type: 'blocks.youtube' as const,
    label: 'YouTube',
    icon: 'Youtube',
    description: 'YouTube video embed',
  },
  {
    type: 'blocks.properties' as const,
    label: 'Properties',
    icon: 'Home',
    description: 'Property listings carousel',
  },
  {
    type: 'blocks.action-card' as const,
    label: 'Action Card',
    icon: 'LayoutGrid',
    description: 'Card with image and CTA',
  },
  {
    type: 'blocks.divider' as const,
    label: 'Divider',
    icon: 'Minus',
    description: 'Visual separator',
  },
] as const;
