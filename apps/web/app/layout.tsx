import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import { Providers } from "@/components/providers";
import "@workspace/ui/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} font-sans antialiased `}
      >
        <ClerkProvider>
          <Providers>
            {children}
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
