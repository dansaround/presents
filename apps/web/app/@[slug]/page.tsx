import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProfileBySlug, logProfileView } from "@/lib/strapi";
import { ProfileWrapper } from "@/components/profile/ProfileWrapper";
import { headers } from "next/headers";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = await getProfileBySlug(slug);

  if (!profile) {
    return {
      title: "Profile Not Found",
    };
  }

  const title = profile.role
    ? `${profile.name} - ${profile.role}`
    : profile.name;

  return {
    title,
    description: profile.description || `Check out ${profile.name}'s profile`,
    openGraph: {
      title,
      description: profile.description || `Check out ${profile.name}'s profile`,
      type: "profile",
      images: profile.profileImage?.url
        ? [{ url: profile.profileImage.url }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.description || `Check out ${profile.name}'s profile`,
      images: profile.coverImage?.url
        ? [profile.coverImage.url]
        : profile.profileImage?.url
        ? [profile.profileImage.url]
        : [],
    },
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = await getProfileBySlug(slug);

  if (!profile || !profile.publishedAt) {
    notFound();
  }

  // Log view (fire-and-forget)
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const referer = headersList.get("referer") || "";

  // Detect device type
  const isMobile = /mobile/i.test(userAgent);
  const isTablet = /tablet|ipad/i.test(userAgent);
  const device = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

  // Log the view asynchronously
  logProfileView({
    profileId: profile.id,
    referrer: referer,
    device,
  });

  return <ProfileWrapper profile={profile} />;
}
