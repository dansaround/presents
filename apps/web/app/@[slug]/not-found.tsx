import Link from "next/link";
import { Home } from "lucide-react";

export default function ProfileNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Profile Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          This profile doesn&apos;t exist or hasn&apos;t been published yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 mt-4"
        >
          <Home className="mr-2 h-4 w-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
}
