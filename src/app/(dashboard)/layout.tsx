import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar, DashboardNavbar } from "./_layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full h-screen flex flex-col">
        <DashboardNavbar />
        <div className="w-full flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
