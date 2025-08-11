import React from "react";


/**
 * Centers its children in a full-viewport layout.
 *
 * A presentational React layout component that renders `children` inside a container
 * sized to fill the viewport and horizontally/vertically center its content.
 *
 * @param children - Content to be centered within the layout
 * @returns A React element that wraps and centers the provided `children`
 */
export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            {children}
        </div>
    )
}