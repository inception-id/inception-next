import {
  findWhatsappMessagesAllTimeCount,
  WhatsappMessageType,
} from "@/lib/api/whatsapp/client";

type DashboardProps = {
  environment: WhatsappMessageType;
};

export const Dashboard = async ({ environment }: DashboardProps) => {
  const messageCount = await findWhatsappMessagesAllTimeCount(environment);
  return <div>hi</div>;
};
