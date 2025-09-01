import { countAllTimeWhatsappMessagesAndNotifications } from "@/lib/api/whatsapp/client";
import { AllTimeCountTable } from "./table";

export const AllTimeCount = async () => {
  const allTimeCount = await countAllTimeWhatsappMessagesAndNotifications();
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:flex-1">
      <div className="flex flex-col gap-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          All Time Messages Count
        </h3>
        <AllTimeCountTable data={allTimeCount.data.messages} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          All Time Notifications Count
        </h3>

        <AllTimeCountTable data={allTimeCount.data.notifications} />
      </div>
    </div>
  );
};
