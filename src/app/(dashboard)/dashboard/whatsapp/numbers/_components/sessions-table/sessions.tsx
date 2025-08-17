import { findWhatsappSessions } from "@/lib/api/whatsapp/client";
import { MdWhatsapp } from "react-icons/md";
import { SessionTable } from "./table";

export const Sessions = async () => {
  const sessions = await findWhatsappSessions();

  return (
    <div className="w-full h-[34rem] sm:h-[50rem] overflow-y-auto">
      <SessionTable data={sessions.data} />
    </div>
  );
};
