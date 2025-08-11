import { SignIn } from '@clerk/nextjs'

/**
 * Renders Clerk's sign-in UI for the route.
 *
 * This Next.js page component delegates authentication UI to Clerk by returning
 * the <SignIn /> component from @clerk/nextjs.
 *
 * @returns The SignIn React element that renders Clerk's sign-in flow.
 */
export default function Page() {
  return <SignIn />
}