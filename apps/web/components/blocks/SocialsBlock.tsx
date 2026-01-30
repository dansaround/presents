"use client";

import Link from "next/link";
import {
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import type { SocialsBlock as SocialsBlockType, SocialLink } from "@presents/shared";
import type { BlockComponentProps } from "./registry";

// TikTok icon (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

// X (Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Threads icon
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.003-3.523.857-6.38 2.54-8.496C5.895 1.205 8.673.024 12.287 0h.014c2.848.016 5.255.824 7.156 2.403 1.88 1.561 3.102 3.802 3.633 6.667l-2.088.381c-.411-2.252-1.378-4.006-2.874-5.215-1.482-1.198-3.39-1.81-5.673-1.823h-.01c-2.908.02-5.121.93-6.58 2.704-1.393 1.693-2.102 4.115-2.107 7.203v.045c.005 3.074.711 5.494 2.098 7.194 1.445 1.77 3.622 2.68 6.473 2.704h.023c2.439-.02 4.34-.715 5.651-2.063 1.068-1.098 1.667-2.575 1.78-4.388l2.088.073c-.14 2.362-.95 4.322-2.41 5.825-1.731 1.783-4.192 2.688-7.321 2.688zm2.36-7.043c-.203-.086-.41-.172-.62-.255-1.596-.635-3.384-1.053-5.318-.966l-.09-2.088c2.241-.1 4.354.38 6.207 1.118.238.095.47.192.697.291a5.23 5.23 0 00-.12-.985c-.33-1.727-1.359-2.772-2.814-2.857-1.158-.068-2.239.504-2.972 1.572l-1.7-1.2c1.077-1.572 2.742-2.44 4.528-2.335 2.337.138 4.003 1.74 4.528 4.287.195 1.016.227 2.08.093 3.156-.075.609-.2 1.162-.373 1.656-.172.49-.39.958-.655 1.39-.264.43-.578.838-.937 1.215-1.054 1.105-2.421 1.735-4.01 1.841l-.12-2.087c1.021-.068 1.923-.473 2.65-1.236.198-.208.374-.436.527-.68.153-.244.284-.508.39-.79.106-.281.187-.58.243-.894.056-.314.086-.644.086-.99-.004-.387-.051-.763-.139-1.124z" />
    </svg>
  );
}

const socialIcons: Record<SocialLink['platform'], React.ComponentType<{ className?: string }>> = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTokIcon,
  linkedin: Linkedin,
  youtube: Youtube,
  x: XIcon,
  threads: ThreadsIcon,
};

const socialColors: Record<SocialLink['platform'], string> = {
  whatsapp: "hover:bg-green-500 hover:text-white",
  instagram: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white",
  facebook: "hover:bg-blue-600 hover:text-white",
  tiktok: "hover:bg-black hover:text-white",
  linkedin: "hover:bg-blue-700 hover:text-white",
  youtube: "hover:bg-red-600 hover:text-white",
  x: "hover:bg-black hover:text-white",
  threads: "hover:bg-black hover:text-white",
};

export function SocialsBlock({ block }: BlockComponentProps<SocialsBlockType>) {
  const { links } = block;

  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 py-4">
      {links.map((link, index) => {
        const Icon = socialIcons[link.platform];
        const hoverColor = socialColors[link.platform];

        return (
          <Link
            key={`${link.platform}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-muted text-muted-foreground transition-all duration-200 ${hoverColor}`}
            aria-label={link.platform}
          >
            <Icon className="w-5 h-5" />
          </Link>
        );
      })}
    </div>
  );
}
