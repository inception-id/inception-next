"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsappMessageType } from "@/lib/api/whatsapp/client";
import { useRouter, useSearchParams } from "next/navigation";

export const Filter = () => {
  const searchParams = useSearchParams();
  const environmentParams = searchParams.get("environment") as string;
  const environment =
    environmentParams === WhatsappMessageType.Development.toString() ||
    environmentParams === WhatsappMessageType.Production.toString()
      ? environmentParams
      : "ALL";
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-4">
      <span className="flex flex-col gap-1">
        <Label htmlFor="environment">Environment</Label>
        <Select
          defaultValue={environment}
          onValueChange={(val) => {
            const newSearchParams = new URLSearchParams(searchParams);
            if (val === "ALL") {
              newSearchParams.delete("environment");
            } else {
              newSearchParams.set("environment", val);
            }
            router.replace(
              `/dashboard/whatsapp/messages?${newSearchParams.toString()}`,
            );
          }}
        >
          <SelectTrigger id="environment" className="w-full">
            <SelectValue placeholder="Environment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Environment</SelectItem>
            <SelectItem value={WhatsappMessageType.Development}>
              Development
            </SelectItem>
            <SelectItem value={WhatsappMessageType.Production}>
              Production
            </SelectItem>
          </SelectContent>
        </Select>
      </span>
    </div>
  );
};
