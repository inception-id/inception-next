import {
  findWhatsappMessages,
  FindWhatsappMessagesSearchParams,
} from "@/lib/api/whatsapp/client";
import { MessageTable } from "./table";
import { PageFilter } from "./page-filter";

type MessagesProps = {
  searchParams: FindWhatsappMessagesSearchParams;
};

export const Messages = async ({ searchParams }: MessagesProps) => {
  const messages = await findWhatsappMessages(searchParams);

  return (
    <div className="w-full h-[28rem] sm:h-[44rem] overflow-y-auto flex flex-col gap-2">
      <MessageTable data={messages.data.messages} />
      <PageFilter
        totalPages={messages.data.pagination.totalPages}
        page={messages.data.pagination.page}
      />
    </div>
  );
};
