import { ThemeToggle } from "@/components/custom-ui";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const DashboardNavbar = () => {
  return (
    <nav className="px-2 py-1 border-b w-full flex items-center justify-between">
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarTrigger />
        </TooltipTrigger>
        <TooltipContent>Open/Close Sidebar</TooltipContent>
      </Tooltip>
      <ThemeToggle />
    </nav>
  );
};
