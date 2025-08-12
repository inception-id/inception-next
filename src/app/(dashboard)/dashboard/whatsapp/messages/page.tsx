import { Suspense } from "react";
import { TableLoading } from "../_components";
import { MessagesTable } from "./_components";
const WhatsappMessages = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-lg font-bold">Whatsapp Messages</h1>
      message here
      <Suspense fallback={<TableLoading />}>
        <MessagesTable />
      </Suspense>
    </div>
  );
};

export default WhatsappMessages;
