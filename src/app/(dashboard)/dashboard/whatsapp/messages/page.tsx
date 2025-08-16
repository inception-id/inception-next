import { Suspense } from "react";
import { TableLoading } from "../_components";
import { MessagesFilter, MessagesTable } from "./_components";
import { FindWhatsappMessagesSearchParams } from "@/lib/api/whatsapp/client";

type WhatsappMessagesProps = {
  searchParams: Promise<FindWhatsappMessagesSearchParams>;
};

const WhatsappMessages = async ({ searchParams }: WhatsappMessagesProps) => {
  const pageSearchParams = await searchParams;
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-lg font-bold">Whatsapp Messages</h1>
      <MessagesFilter />
      <Suspense fallback={<TableLoading />}>
        <MessagesTable searchParams={pageSearchParams} />
      </Suspense>
    </div>
  );
};

export default WhatsappMessages;
