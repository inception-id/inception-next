import { findWhatsappMessages } from "@/lib/api/whatsapp/client";
import { MdMessage, MdWhatsapp } from "react-icons/md";
import { MessageTable } from "./table";

export const Messages = async () => {
  const messages = await findWhatsappMessages();

  if (messages?.data) {
    return (
      <div className="w-full h-[34rem] sm:h-[50rem] overflow-y-auto">
        <MessageTable data={messages.data} />
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
