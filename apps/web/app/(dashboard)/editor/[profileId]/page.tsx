import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { getProfileById, getProfileByClerkUserId, createProfile } from "@/lib/strapi";
import { EditorCanvas } from "@/components/editor/EditorCanvas";

interface EditorPageProps {
  params: Promise<{ profileId: string }>;
}

export default async function EditorPage({ params }: EditorPageProps) {
  const { userId } = await auth();
  const { profileId } = await params;

  if (!userId) {
    redirect("/sign-in");
  }

  let profile;

  if (profileId === "new") {
    // Create a new profile for this user
    const existingProfile = await getProfileByClerkUserId(userId);

    if (existingProfile) {
      // User already has a profile, redirect to it
      redirect(`/editor/${existingProfile.id}`);
    }

    // Create new profile
    const name = "My Profile";
    const slug = `profile-${Math.random().toString(36).substring(2, 9)}`;

    profile = await createProfile({
      name,
      slug,
      clerkUserId: userId,
      role: null,
      description: null,
      theme: {
        mode: "dark",
        primaryColor: "#3b82f6",
        accentColor: "#8b5cf6",
        preset: "default",
      },
      blocks: [
        {
          __component: "blocks.header",
          id: crypto.randomUUID(),
          showName: true,
          showRole: true,
          showDescription: true,
          showCoverImage: true,
        },
        {
          __component: "blocks.socials",
          id: crypto.randomUUID(),
          links: [],
        },
        {
          __component: "blocks.cta",
          id: crypto.randomUUID(),
          text: "Contact Me",
          url: "#",
          style: "primary",
        },
      ],
      publishedAt: null,
    } as any);

    if (!profile) {
      throw new Error("Failed to create profile");
    }

    redirect(`/editor/${profile.id}`);
  } else {
    // Load existing profile
    const id = parseInt(profileId, 10);
    if (isNaN(id)) {
      notFound();
    }

    profile = await getProfileById(id);

    if (!profile) {
      notFound();
    }

    // Verify ownership
    if (profile.clerkUserId !== userId) {
      redirect("/dashboard");
    }
  }

  return <EditorCanvas initialProfile={profile} />;
}
