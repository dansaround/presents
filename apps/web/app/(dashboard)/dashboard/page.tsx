import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, Edit, ExternalLink, Eye, EyeOff } from "lucide-react";
import { getProfilesByClerkUserId } from "@/lib/strapi";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const profiles = await getProfilesByClerkUserId(userId);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profiles</h1>
          <p className="text-muted-foreground">
            Manage and customize your professional profiles
          </p>
        </div>
        <Link
          href="/editor/new"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Profile
        </Link>
      </div>

      {/* Profiles Grid */}
      {profiles.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Plus className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">No profiles yet</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Create your first profile to share your professional presence with the world.
          </p>
          <Link
            href="/editor/new"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Profile
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {profile.publishedAt ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600">
                    <Eye className="h-3 w-3" />
                    Published
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-600">
                    <EyeOff className="h-3 w-3" />
                    Draft
                  </span>
                )}
              </div>

              {/* Profile Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{profile.name}</h3>
                {profile.role && (
                  <p className="text-sm text-muted-foreground">{profile.role}</p>
                )}
                <p className="text-xs text-muted-foreground font-mono">
                  /@{profile.slug}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-2">
                <Link
                  href={`/editor/${profile.id}`}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
                {profile.publishedAt && (
                  <Link
                    href={`/@${profile.slug}`}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
