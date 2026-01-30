// ==============================
// Block Types for Dynamic Zone
// ==============================

export type BlockType =
  | 'blocks.header'
  | 'blocks.socials'
  | 'blocks.cta'
  | 'blocks.text'
  | 'blocks.image'
  | 'blocks.video'
  | 'blocks.youtube'
  | 'blocks.properties'
  | 'blocks.action-card'
  | 'blocks.divider';

// Base block interface
export interface BaseBlock {
  id: string;
  __component: BlockType;
}

// Header block - profile hero section
export interface HeaderBlock extends BaseBlock {
  __component: 'blocks.header';
  showName: boolean;
  showRole: boolean;
  showDescription: boolean;
  showCoverImage: boolean;
}

// Social media links block
export interface SocialLink {
  platform: 'whatsapp' | 'instagram' | 'facebook' | 'tiktok' | 'linkedin' | 'youtube' | 'x' | 'threads';
  url: string;
}

export interface SocialsBlock extends BaseBlock {
  __component: 'blocks.socials';
  links: SocialLink[];
}

// Call to action block
export interface CTABlock extends BaseBlock {
  __component: 'blocks.cta';
  text: string;
  url: string;
  vcfFile?: string | null;
  style: 'primary' | 'secondary' | 'outline';
}

// Text/markdown block
export interface TextBlock extends BaseBlock {
  __component: 'blocks.text';
  content: string;
  alignment: 'left' | 'center' | 'right';
}

// Image block
export interface ImageBlock extends BaseBlock {
  __component: 'blocks.image';
  image: StrapiMedia;
  alt: string;
  link?: string | null;
  aspectRatio: '1:1' | '4:3' | '16:9' | 'auto';
}

// Video block (for direct video files)
export interface VideoBlock extends BaseBlock {
  __component: 'blocks.video';
  platform: 'direct' | 'vimeo';
  url: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
}

// YouTube embed block
export interface YouTubeBlock extends BaseBlock {
  __component: 'blocks.youtube';
  url: string;
  caption?: string | null;
}

// Property item for realtors
export interface Property {
  id: string;
  url: string;
  image: StrapiMedia;
  title: string;
  priceSol?: string | null;
  priceUsd?: string | null;
  location: string;
  type: 'Venta' | 'Alquiler';
}

// Properties carousel block
export interface PropertiesBlock extends BaseBlock {
  __component: 'blocks.properties';
  title?: string | null;
  items: Property[];
}

// Action card block (generic card with CTA)
export interface ActionCardBlock extends BaseBlock {
  __component: 'blocks.action-card';
  image: StrapiMedia;
  title: string;
  subtitle?: string | null;
  ctaText: string;
  ctaUrl: string;
}

// Divider block
export interface DividerBlock extends BaseBlock {
  __component: 'blocks.divider';
  height: 'small' | 'medium' | 'large';
  style: 'line' | 'dots' | 'none';
}

// Union of all block types
export type ProfileBlock =
  | HeaderBlock
  | SocialsBlock
  | CTABlock
  | TextBlock
  | ImageBlock
  | VideoBlock
  | YouTubeBlock
  | PropertiesBlock
  | ActionCardBlock
  | DividerBlock;

// ==============================
// Strapi Media Type
// ==============================

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

export interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
}
