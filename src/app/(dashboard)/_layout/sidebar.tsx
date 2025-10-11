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
import { LuBook, LuDollarSign, LuHouse, LuKey } from "react-icons/lu";
import { MdMessage, MdSpeakerPhone, MdWhatsapp } from "react-icons/md";
import { SidebarFooterMenu } from "./sidebar-footer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const SIDEBAR_ITEMS = [
  {
    title: "Home",
    url: "/dashboard/whatsapp",
    icon: LuHouse,
    isBlank: false,
  },
  {
    title: "Sent Notifications",
    url: "/dashboard/whatsapp/notifications",
    icon: MdSpeakerPhone,
    isBlank: false,
  },
  {
    title: "Sent Messages",
    url: "/dashboard/whatsapp/messages",
    icon: MdMessage,
    isBlank: false,
  },
  {
    title: "My Numbers",
    url: "/dashboard/whatsapp/numbers",
    icon: MdWhatsapp,
    isBlank: false,
  },
  {
    title: "API Keys",
    url: "/dashboard/keys",
    icon: LuKey,
    isBlank: false,
  },
  {
    title: "Pricing",
    url: "/whatsapp/pricing",
    icon: LuDollarSign,
    isBlank: true,
  },
  {
    title: "Documentation",
    url: "/whatsapp/documentation",
    icon: LuBook,
    isBlank: true,
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
                  target={item.isBlank ? "_blank" : "_self"}
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
