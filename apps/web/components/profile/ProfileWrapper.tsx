"use client";

import { useEffect } from "react";
import type { Profile } from "@presents/shared";
import { ProfileRenderer } from "./ProfileRenderer";

interface ProfileWrapperProps {
  profile: Profile;
}

// Convert hex color to CSS variable value
function applyProfileTheme(profile: Profile) {
  const { theme } = profile;
  if (!theme) return;

  const root = document.documentElement;

  // Apply theme mode
  if (theme.mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Apply custom colors
  if (theme.primaryColor) {
    root.style.setProperty("--profile-primary", theme.primaryColor);
  }
  if (theme.accentColor) {
    root.style.setProperty("--profile-accent", theme.accentColor);
  }
}

export function ProfileWrapper({ profile }: ProfileWrapperProps) {
  useEffect(() => {
    applyProfileTheme(profile);

    // Cleanup on unmount
    return () => {
      const root = document.documentElement;
      root.style.removeProperty("--profile-primary");
      root.style.removeProperty("--profile-accent");
    };
  }, [profile]);

  return (
    <div className="profile-page min-h-screen bg-background">
      <div className="max-w-[420px] mx-auto pb-8">
        <ProfileRenderer profile={profile} />
      </div>
    </div>
  );
}
