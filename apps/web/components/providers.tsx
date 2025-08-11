"use client"

import { useAuth } from '@clerk/nextjs';
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import * as React from "react";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

/**
 * Wraps children with ConvexProviderWithClerk, wiring the app's Convex client and Clerk auth hook.
 *
 * This component provides Convex + Clerk integration to its React subtree by supplying the
 * module-level `convex` client and the `useAuth` hook to `ConvexProviderWithClerk`.
 *
 * @param children - React nodes to be rendered inside the provider.
 * @returns A JSX element that supplies Convex and Clerk auth context to `children`.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (

    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}
