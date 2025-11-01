import {
  FindWhatsappMessagesSearchParams,
  findWhatsappNotifications,
} from "@/lib/api/whatsapp/client";
import { PageFilter } from "./page-filter";
import { NotificationTable } from "./table";

type NotificationsProps = {
  searchParams: FindWhatsappMessagesSearchParams;
};

export const Notifications = async ({ searchParams }: NotificationsProps) => {
  const notifications = await findWhatsappNotifications(searchParams);

  return (
    <div className="w-full h-[30rem] sm:h-[48rem] overflow-y-auto flex flex-col gap-2">
      <NotificationTable data={notifications.data.notifications} />
      <PageFilter
        totalPages={notifications.data.pagination.totalPages}
        page={notifications.data.pagination.page}
      />
    </div>
  );
};
