import { SignUp } from '@clerk/nextjs'

/**
 * Renders Clerk's SignUp component for the sign-up route.
 *
 * This Next.js page component mounts Clerk's hosted sign-up UI and does not accept props or perform side effects.
 *
 * @returns The SignUp JSX element.
 */
export default function Page() {
  return <SignUp />
}