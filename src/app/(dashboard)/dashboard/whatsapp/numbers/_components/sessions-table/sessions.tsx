import { findWhatsappSessions } from "@/lib/api/whatsapp/client";
import { SessionTable } from "./table";

export const Sessions = async () => {
  const sessions = await findWhatsappSessions();

  return (
    <div className="w-full h-[30rem] sm:h-[48rem] overflow-y-auto flex flex-col gap-2">
      <SessionTable data={sessions.data} />
    </div>
  );
};
