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

export const SidebarFooterMenu = () => {
  const { data, isLoading } = useJwtDataQuery();
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
        console.error("Error removing session:", error);
      } finally {
        await deleteSessionCookies();
        router.push("/auth/login");
      }
    });
  };

  return (
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

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={isPending}
            variant={"ghost"}
            size="icon"
            onClick={handleLogout}
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
    </div>
  );
};
