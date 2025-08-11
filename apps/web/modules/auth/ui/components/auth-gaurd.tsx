"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { AuthLayout } from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";
import { Loader2 } from "lucide-react";

export const AuthGaurd = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AuthLoading>
                <AuthLayout>
                     <div className="flex items-center justify-center py-8">
                      <Loader2
                        className="animate-spin h-8 w-8"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Loading</span>
                    </div>
                </AuthLayout>
            </AuthLoading>
            <Authenticated>
                <AuthLayout>
                    {children}
                </AuthLayout>
            </Authenticated>
            <Unauthenticated>
                <AuthLayout>
                    <SignInView />
                </AuthLayout>
            </Unauthenticated>
        </>
    )
}