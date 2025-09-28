import { Suspense } from "react";
import { FindWhatsappMessagesSearchParams } from "@/lib/api/whatsapp/client";
import { TableLoading } from "@/components/custom-ui";
import { EnvironmentFilter, Notifications, StatusFilter } from "./_components";

type WhatsappNotificationsProps = {
  searchParams: Promise<FindWhatsappMessagesSearchParams>;
};

const WhatsappNotifications = async ({
  searchParams,
}: WhatsappNotificationsProps) => {
  const pageSearchParams = await searchParams;
  return (
    <div className="p-4 flex flex-col gap-4 overflow-x-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex flex-col justify-start">
          <h1 className="text-lg font-bold">Sent Notifications</h1>
          <h2 className="text-xs">Messages sent via Inception number</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <EnvironmentFilter />
          <StatusFilter />
        </div>
      </div>
      <Suspense fallback={<TableLoading />}>
        <Notifications searchParams={pageSearchParams} />
      </Suspense>
    </div>
  );
};

export default WhatsappNotifications;
