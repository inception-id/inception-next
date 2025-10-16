import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/custom-ui";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const DashboardNavbar = () => {
  return (
    <nav className="px-2 py-1 border-b w-full flex flex-row-reverse md:flex-row items-center justify-between">
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarTrigger />
        </TooltipTrigger>
        <TooltipContent>Toggle Sidebar</TooltipContent>
      </Tooltip>
      <ThemeToggle />
    </nav>
  );
};
