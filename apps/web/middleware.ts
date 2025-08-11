import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)"
]);

const isOrgFreeRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/org-selection(.*)"
])

export default clerkMiddleware(async (auth, req) => {
    const { userId, orgId } = await auth();
    // protect private routes
    if (!isPublicRoute(req)) {
        await auth.protect();
    }

    // if authenticated but no org, redirect to /org-selection
    if (userId && !orgId && !isOrgFreeRoute(req)) { // authenticated without any organization
      const searchParams = new URLSearchParams({ redirectUrl: req.url });

      const orgSelection = new URL(
        `/org-selection?${searchParams.toString()}`,
        req.url,
      );

      return NextResponse.redirect(orgSelection);
    }
});

export const config = {
  matcher: [
    '/((?!sign-in|sign-up|_next|favicon.ico).*)',
    '/(api|trpc)(.*)',
  ],
};