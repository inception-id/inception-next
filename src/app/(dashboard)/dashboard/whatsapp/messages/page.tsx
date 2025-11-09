import { Suspense } from "react";
import { MessagesTable, EnvironmentFilter, StatusFilter } from "./_components";
import { FindWhatsappMessagesSearchParams } from "@/lib/api/whatsapp/client";
import { TableLoading } from "@/components/custom-ui";

type WhatsappMessagesProps = {
  searchParams: Promise<FindWhatsappMessagesSearchParams>;
};

const WhatsappMessages = async ({ searchParams }: WhatsappMessagesProps) => {
  const pageSearchParams = await searchParams;

  return (
    <div className="p-4 flex flex-col gap-4 container">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col justify-start">
          <h1 className="text-lg font-bold">Sent Messages</h1>
          <h2 className="text-xs">Messages sent via your number</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <EnvironmentFilter />
          <StatusFilter />
        </div>
      </div>
      <Suspense fallback={<TableLoading />}>
        <MessagesTable searchParams={pageSearchParams} />
      </Suspense>
    </div>
  );
};

export default WhatsappMessages;
