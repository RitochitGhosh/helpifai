import { AuthGaurd } from "@/modules/auth/ui/components/auth-gaurd";
import { OrganizationGaurd } from "@/modules/auth/ui/components/organization-gaurd";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";

import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies(); // "use client"; X
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <AuthGaurd>
      <OrganizationGaurd>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <main className="flex flex-1 flex-col">
            {children}
          </main>
        </SidebarProvider>
      </OrganizationGaurd>
    </AuthGaurd>
  );
};
