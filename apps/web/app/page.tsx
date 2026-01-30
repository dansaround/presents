import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Sparkles, Users, Palette } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold">Presents</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            {userId ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Your Professional Profile, Simplified
            </span>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Create stunning profiles that{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                convert visitors
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Build beautiful, feature-rich professional profiles with social media integration,
              property listings for realtors, CTAs, and multimedia content.
            </p>
            <div className="space-x-4">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Start Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/@demo"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to create professional profiles that stand out.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Palette className="h-12 w-12 text-blue-500" />
                <div className="space-y-2">
                  <h3 className="font-bold">Visual Editor</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop blocks to build your perfect profile layout.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Users className="h-12 w-12 text-violet-500" />
                <div className="space-y-2">
                  <h3 className="font-bold">Social Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect all your social media in one beautiful hub.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Sparkles className="h-12 w-12 text-amber-500" />
                <div className="space-y-2">
                  <h3 className="font-bold">Custom Themes</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalize colors and styles to match your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Sparkles className="h-5 w-5" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Strapi. Open source on GitHub.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
