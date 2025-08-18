import {
  findWhatsappMessagesAllTimeCount,
  WhatsappMessageType,
} from "@/lib/api/whatsapp/client";
import { Chart } from "./chart";
import { MessageCountTable } from "./table";

type DashboardProps = {
  environment: WhatsappMessageType;
};

export const Dashboard = async ({ environment }: DashboardProps) => {
  const messageCount = await findWhatsappMessagesAllTimeCount(environment);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Chart chartData={messageCount.data} />
      <MessageCountTable data={messageCount.data} />
    </div>
  );
};
