"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LANGUAGEAI_MENUS } from "@/app/(languageai)/_lib/constant";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(
  () => import("@/app/(inception)/_components/ThemeButton"),
  { ssr: false },
);

const LanguageaiSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="p-4 bg-secondary text-secondary-foreground hidden lg:flex flex-col">
      <div className="mb-4 text-center font-semibold hidden lg:block">
        LANGUAGE AI
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {LANGUAGEAI_MENUS.map((menu) => (
          <Link
            href={menu.href}
            key={menu.href}
            className={cn(
              buttonVariants({
                variant:
                  (pathname.includes("history") &&
                    menu.href.includes("history")) ||
                  pathname === menu.href
                    ? "default"
                    : "ghost",
                size: "sm",
              }),
              "justify-start",
            )}
          >
            {menu.icon}
            {menu.title}
          </Link>
        ))}
      </div>
      <ThemeButton />
    </aside>
  );
};

export default LanguageaiSidebar;
