import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";

export const Header = () => {
  const { state } = useSidebar();
  if (state === "expanded") {
    return <SidebarHeader>INCEPTION</SidebarHeader>;
  }
  return <div className="h-9" />;
};
