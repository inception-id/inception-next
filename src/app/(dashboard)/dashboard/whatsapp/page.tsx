import { Suspense } from "react";
import { AddWhatsappDialog } from "./_components";
import { SessionsTable } from "./_components/sessions-table";

const Loading = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-accent animate-pulse rounded-md w-full h-10" />
      <div className="bg-accent animate-pulse rounded-md w-full h-10" />
      <div className="bg-accent animate-pulse rounded-md w-full h-10" />
      <div className="bg-accent animate-pulse rounded-md w-full h-10" />
      <div className="bg-accent animate-pulse rounded-md w-full h-10" />
    </div>
  );
};

const DashboardWhatsappPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">My Whatsapp Numbers</h1>
        <AddWhatsappDialog />
      </div>

      <Suspense fallback={<Loading />}>
        <SessionsTable />
      </Suspense>
    </div>
  );
};
export default DashboardWhatsappPage;
