import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar, DashboardNavbar } from "./_layout";
import type { Viewport } from "next";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
