"use client";

import Image from "next/image";
import type { HeaderBlock as HeaderBlockType } from "@presents/shared";
import type { BlockComponentProps } from "./registry";

export function HeaderBlock({
  block,
  profileData,
}: BlockComponentProps<HeaderBlockType>) {
  const { showName, showRole, showDescription, showCoverImage } = block;

  if (!profileData) return null;

  const { name, role, description, profileImage, coverImage } = profileData;
  const profileImageUrl = profileImage?.url;
  const coverImageUrl = coverImage?.url;

  return (
    <div className="relative w-full">
      {/* Cover Image */}
      {showCoverImage && coverImageUrl && (
        <div className="relative h-40 md:h-52 w-full overflow-hidden">
          <Image
            src={coverImageUrl}
            alt={`${name} cover`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}

      {/* Profile Content */}
      <div
        className={`flex flex-col items-center ${
          showCoverImage && coverImageUrl ? "-mt-16" : "pt-8"
        } px-4`}
      >
        {/* Profile Image */}
        {profileImageUrl && (
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <Image
              src={profileImageUrl}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Name */}
        {showName && (
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-foreground text-center">
            {name}
          </h1>
        )}

        {/* Role */}
        {showRole && role && (
          <p className="mt-1 text-base md:text-lg text-muted-foreground text-center">
            {role}
          </p>
        )}

        {/* Description */}
        {showDescription && description && (
          <p className="mt-3 text-sm md:text-base text-muted-foreground text-center max-w-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
