import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar, DashboardNavbar } from "./_layout";
import { cookies } from "next/headers";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar />
      <main className="w-full h-screen flex flex-col">
        <DashboardNavbar />
        <div className="w-full flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
