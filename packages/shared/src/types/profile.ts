import type { ProfileBlock, StrapiMedia } from './blocks';

// ==============================
// Theme Configuration
// ==============================

export type ThemeMode = 'light' | 'dark';
export type ThemePreset = 'default' | 'warm' | 'cool' | 'vibrant' | 'minimal';

export interface ProfileTheme {
  mode: ThemeMode;
  primaryColor: string;
  accentColor: string;
  preset: ThemePreset;
}

// ==============================
// Profile Types
// ==============================

export interface Profile {
  id: number;
  name: string;
  slug: string;
  clerkUserId: string;
  role?: string | null;
  description?: string | null;
  profileImage?: StrapiMedia | null;
  coverImage?: StrapiMedia | null;
  customDomain?: string | null;
  theme: ProfileTheme;
  blocks: ProfileBlock[];
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// ==============================
// View Log (Analytics)
// ==============================

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface ViewLog {
  id: number;
  profileId: number;
  fingerprint: string;
  referrer?: string | null;
  country?: string | null;
  device: DeviceType;
  timestamp: string;
}

// ==============================
// API Response Types
// ==============================

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
}

export interface StrapiCollectionResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// ==============================
// Editor Types
// ==============================

export interface EditorState {
  profile: Profile;
  selectedBlockId: string | null;
  isDirty: boolean;
  isSaving: boolean;
  lastSaved: Date | null;
}

export interface BlockPaletteItem {
  type: ProfileBlock['__component'];
  label: string;
  icon: string;
  defaultData: Partial<ProfileBlock>;
}
