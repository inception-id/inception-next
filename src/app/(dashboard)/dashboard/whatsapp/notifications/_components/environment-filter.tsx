"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsappEnvironment } from "@/lib/api/whatsapp/client";
import { useRouter, useSearchParams } from "next/navigation";

export const EnvironmentFilter = () => {
  const searchParams = useSearchParams();
  const environmentParams = searchParams.get("environment") as string;
  const environment = environmentParams ? environmentParams : "ALL";
  const router = useRouter();

  return (
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
          `/dashboard/whatsapp/notifications?${newSearchParams.toString()}`,
        );
      }}
    >
      <SelectTrigger id="environment" className="w-40">
        <SelectValue placeholder="Environment" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ALL">All Environment</SelectItem>
        <SelectItem value={WhatsappEnvironment.Development}>
          Development
        </SelectItem>
        <SelectItem value={WhatsappEnvironment.Production}>
          Production
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
