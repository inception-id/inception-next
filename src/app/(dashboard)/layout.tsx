import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar, DashboardNavbar } from "./_layout";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full h-screen flex flex-col overflow-hidden">
        <DashboardNavbar />
        <div className="w-full flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
