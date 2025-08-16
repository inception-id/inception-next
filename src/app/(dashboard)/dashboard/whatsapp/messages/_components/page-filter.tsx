"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pagination } from "@/lib/api/types";
import { WhatsappMessageType } from "@/lib/api/whatsapp/client";
import { useRouter, useSearchParams } from "next/navigation";

type PageFilterProps = Pick<Pagination, "page" | "totalPages">;

export const PageFilter = ({ page, totalPages }: PageFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="page">Page:</Label>
      <Select
        defaultValue={String(page)}
        onValueChange={(val) => {
          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("page", val);
          router.replace(
            `/dashboard/whatsapp/messages?${newSearchParams.toString()}`,
          );
        }}
      >
        <SelectTrigger id="page" className="w-40">
          <SelectValue placeholder="1" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: totalPages }).map((_, i) => (
            <SelectItem key={`page_${i}`} value={String(i + 1)}>
              page {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
