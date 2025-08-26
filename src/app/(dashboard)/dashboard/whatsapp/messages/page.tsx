import { Suspense } from "react";
import { MessagesTable, EnvironmentFilter } from "./_components";
import { FindWhatsappMessagesSearchParams } from "@/lib/api/whatsapp/client";
import { TableLoading } from "@/components/custom-ui";

type WhatsappMessagesProps = {
  searchParams: Promise<FindWhatsappMessagesSearchParams>;
};

const WhatsappMessages = async ({ searchParams }: WhatsappMessagesProps) => {
  const pageSearchParams = await searchParams;
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Whatsapp Messages</h1>
        <EnvironmentFilter />
      </div>
      <Suspense fallback={<TableLoading />}>
        <MessagesTable searchParams={pageSearchParams} />
      </Suspense>
    </div>
  );
};

export default WhatsappMessages;
