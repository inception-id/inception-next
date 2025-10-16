import { WhatsappStatus } from "@/lib/api/whatsapp/client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { LuInfo } from "react-icons/lu";

export const WhatsappStatusText = ({ status }: { status: WhatsappStatus }) => {
  switch (status) {
    case WhatsappStatus.Delivered:
      return "Delivered";
    case WhatsappStatus.Failed:
      return "Failed";
    case WhatsappStatus.Pending:
      return "In Queue";
    case WhatsappStatus.Disconnected:
      return (
        <div className="flex items-center gap-1">
          <span>Disconnected</span>

          <Tooltip>
            <TooltipTrigger asChild>
              <LuInfo />
            </TooltipTrigger>
            <TooltipContent>
              <div>
                <p>Connection failure to registered Whatsapp number</p>
                <p>
                  Please check on &apos;Linked Devices&apos; on your Whatsapp
                  App
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    default:
      return "Unknown";
  }
};
