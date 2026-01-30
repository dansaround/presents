import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/editor(.*)',
  '/settings(.*)',
]);

// Define public routes that should always be accessible
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)',
  '/@(.*)', // Profile pages
]);

// Main app domain (update in production)
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const APP_HOST = new URL(APP_DOMAIN).host;

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const host = req.headers.get('host') || '';
  const pathname = req.nextUrl.pathname;

  // Handle custom domains
  // If the request is from a custom domain (not the main app domain)
  if (host !== APP_HOST && !host.includes('localhost')) {
    // Rewrite to the profile route based on custom domain
    const url = req.nextUrl.clone();
    url.pathname = `/custom-domain/${host}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Handle /@username routes - rewrite to /username
  if (pathname.startsWith('/@')) {
    const slug = pathname.slice(2); // Remove /@
    const url = req.nextUrl.clone();
    url.pathname = `/${slug}`;
    return NextResponse.rewrite(url);
  }

  // Protect dashboard and editor routes
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
