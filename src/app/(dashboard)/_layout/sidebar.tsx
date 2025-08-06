import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import { SidebarFooterMenu } from "./sidebar-footer";

export const SIDEBAR_ITEMS = [
  {
    title: "Home",
    url: "/dashboard",
    icon: LuHouse,
  },
  {
    title: "My Whatsapp",
    url: "/dashboard/whatsapp",
    icon: MdWhatsapp,
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>INCEPTION</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} title={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterMenu />
      </SidebarFooter>
    </Sidebar>
  );
};
