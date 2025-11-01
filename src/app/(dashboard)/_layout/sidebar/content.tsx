import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBook, LuDollarSign, LuHouse, LuKey } from "react-icons/lu";
import {
  MdOutlineMessage,
  MdOutlineNotifications,
  MdWhatsapp,
} from "react-icons/md";

const SIDEBAR_ITEMS = [
  {
    title: "Home",
    url: "/dashboard/whatsapp",
    icon: LuHouse,
    isBlank: false,
  },
  {
    title: "Sent Notifications",
    url: "/dashboard/whatsapp/notifications",
    icon: MdOutlineNotifications,
    isBlank: false,
  },
  {
    title: "Sent Messages",
    url: "/dashboard/whatsapp/messages",
    icon: MdOutlineMessage,
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
    title: "Payments",
    url: "/dashboard/whatsapp/payments",
    icon: LuDollarSign,
    isBlank: false,
  },
  {
    title: "Documentation",
    url: "/whatsapp/documentation",
    icon: LuBook,
    isBlank: true,
  },
];

export const Content = () => {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();
  return (
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
                className={cn(
                  "mx-auto",
                  pathname === item.url && "bg-sidebar-foreground text-sidebar",
                )}
              >
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
};
