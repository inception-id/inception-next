"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsappStatus } from "@/lib/api/whatsapp/client";
import { useRouter, useSearchParams } from "next/navigation";

export const StatusFilter = () => {
  const searchParams = useSearchParams();
  const statusParams = searchParams.get("status") as string;
  const status = statusParams ? statusParams : "ALL";
  const router = useRouter();

  return (
    <Select
      defaultValue={status}
      onValueChange={(val) => {
        const newSearchParams = new URLSearchParams(searchParams);
        if (val === "ALL") {
          newSearchParams.delete("status");
        } else {
          newSearchParams.set("status", val);
        }
        router.replace(
          `/dashboard/whatsapp/notifications?${newSearchParams.toString()}`,
        );
      }}
    >
      <SelectTrigger id="status" className="w-40">
        <SelectValue placeholder="status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ALL">All Status</SelectItem>
        <SelectItem value={WhatsappStatus.Delivered}>Delivered</SelectItem>
        <SelectItem value={WhatsappStatus.Pending}>Pending</SelectItem>
        <SelectItem value={WhatsappStatus.Failed}>Failed</SelectItem>
      </SelectContent>
    </Select>
  );
};
