import { Suspense } from "react";
import { FindWhatsappMessagesSearchParams } from "@/lib/api/whatsapp/client";
import { TableLoading } from "@/components/custom-ui";
import { EnvironmentFilter, Notifications } from "./_components";

type WhatsappNotificationsProps = {
  searchParams: Promise<FindWhatsappMessagesSearchParams>;
};

const WhatsappNotifications = async ({
  searchParams,
}: WhatsappNotificationsProps) => {
  const pageSearchParams = await searchParams;
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="grid">
          <h1 className="text-lg font-bold">Whatsapp Notifications</h1>
          <h2 className="text-xs">Messages sent via Inception number</h2>
        </div>
        <EnvironmentFilter />
      </div>
      <Suspense fallback={<TableLoading />}>
        <Notifications searchParams={pageSearchParams} />
      </Suspense>
    </div>
  );
};

export default WhatsappNotifications;
