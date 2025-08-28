"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { LuHouse, LuKey } from "react-icons/lu";
import { MdMessage, MdWhatsapp } from "react-icons/md";
import { SidebarFooterMenu } from "./sidebar-footer";

export const SIDEBAR_ITEMS = [
  {
    title: "Home",
    url: "/dashboard/whatsapp",
    icon: LuHouse,
  },
  {
    title: "Sent Messages",
    url: "/dashboard/whatsapp/messages",
    icon: MdMessage,
  },
  {
    title: "My Numbers",
    url: "/dashboard/whatsapp/numbers",
    icon: MdWhatsapp,
  },
  {
    title: "API Keys",
    url: "/dashboard/keys",
    icon: LuKey,
  },
];

export const DashboardSidebar = () => {
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader>INCEPTION</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  title={item.title}
                  onClick={() => setOpenMobile(false)}
                >
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
