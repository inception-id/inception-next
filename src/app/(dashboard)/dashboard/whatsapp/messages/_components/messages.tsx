import {
  findWhatsappMessages,
  FindWhatsappMessagesSearchParams,
} from "@/lib/api/whatsapp/client";
import { MdMessage, MdWhatsapp } from "react-icons/md";
import { MessageTable } from "./table";
import { PageFilter } from "./page-filter";

type MessagesProps = {
  searchParams: FindWhatsappMessagesSearchParams;
};

export const Messages = async ({ searchParams }: MessagesProps) => {
  const messages = await findWhatsappMessages(searchParams);

  if (messages?.data) {
    return (
      <div className="w-full h-[28rem] sm:h-[44rem] overflow-y-auto flex flex-col gap-2">
        <MessageTable data={messages.data.messages} />
        <PageFilter
          totalPages={messages.data.pagination.totalPages}
          page={messages.data.pagination.page}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center h-96">
      <MdMessage className="text-5xl" />
      <div>An error occurred</div>
    </div>
  );
};
