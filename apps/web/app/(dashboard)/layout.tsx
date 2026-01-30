import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Sparkles, Home, Settings } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold">Presents</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">{children}</main>
    </div>
  );
}
