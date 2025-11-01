"use client";
import { Button } from "@/components/ui/button";
import { useJwtDataQuery } from "@/lib/hooks/jwt";
import { LuLoaderCircle, LuLogOut } from "react-icons/lu";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useTransition } from "react";
import { removeSession } from "@/lib/api/sessions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteSessionCookies } from "@/lib/cookies/delete-session-cookies";
import { SidebarFooter, useSidebar } from "@/components/ui/sidebar";
import { JwtPayload } from "jsonwebtoken";
import { User } from "@/lib/api/users";
import { cn } from "@/lib/utils";

type LogoutButtonProps = {
  isCollapsed: boolean;
  data?: JwtPayload & User;
};

const LogoutButton = ({ data, isCollapsed }: LogoutButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = () => {
    startTransition(async () => {
      try {
        if (data?.id) {
          const sessionRemoval = await removeSession(data?.id);
          if (sessionRemoval) {
            toast.success("Logout successful");
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        await deleteSessionCookies();
        router.push("/auth/login");
      }
    });
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          disabled={isPending}
          variant={"ghost"}
          size="icon"
          onClick={handleLogout}
          className={cn(isCollapsed && "mx-auto")}
        >
          {isPending ? (
            <LuLoaderCircle className="animate-spin" />
          ) : (
            <LuLogOut />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Logout</TooltipContent>
    </Tooltip>
  );
};

export const Footer = () => {
  const { state } = useSidebar();
  const { data, isLoading } = useJwtDataQuery();

  if (state === "collapsed") {
    return (
      <SidebarFooter>
        <LogoutButton isCollapsed />
      </SidebarFooter>
    );
  }

  return (
    <SidebarFooter>
      <div className="flex items-center justify-between">
        {isLoading ? (
          <div className="bg-accent w-40 h-9 animate-pulse rounded" />
        ) : (
          <span className="text-xs">
            <div className="font-semibold">
              {new Date().toLocaleDateString("id-ID", { dateStyle: "long" })}
            </div>
            <div>{data?.email && data.email}</div>
          </span>
        )}

        <LogoutButton isCollapsed={false} />
      </div>
    </SidebarFooter>
  );
};
