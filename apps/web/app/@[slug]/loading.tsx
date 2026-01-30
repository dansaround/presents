export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[420px] mx-auto pb-8">
        {/* Cover Image Skeleton */}
        <div className="h-40 md:h-52 w-full bg-muted animate-pulse" />

        {/* Profile Content Skeleton */}
        <div className="flex flex-col items-center -mt-16 px-4">
          {/* Profile Image */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-muted animate-pulse border-4 border-background" />

          {/* Name */}
          <div className="mt-4 h-8 w-48 bg-muted animate-pulse rounded" />

          {/* Role */}
          <div className="mt-2 h-5 w-32 bg-muted animate-pulse rounded" />

          {/* Description */}
          <div className="mt-3 h-16 w-full max-w-md bg-muted animate-pulse rounded" />
        </div>

        {/* Socials Skeleton */}
        <div className="flex justify-center gap-3 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-muted animate-pulse"
            />
          ))}
        </div>

        {/* CTA Skeleton */}
        <div className="flex justify-center mt-6 px-4">
          <div className="h-12 w-[200px] bg-muted animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  );
}
