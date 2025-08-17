import {
  findWhatsappMessagesAllTimeCount,
  WhatsappMessageType,
} from "@/lib/api/whatsapp/client";
import { MdMessage } from "react-icons/md";
import { Chart } from "./chart";

type DashboardProps = {
  environment: WhatsappMessageType;
};

export const Dashboard = async ({ environment }: DashboardProps) => {
  const messageCount = await findWhatsappMessagesAllTimeCount(environment);

  return (
    <div>
      <Chart chartData={messageCount.data} />
    </div>
  );
};
