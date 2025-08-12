import { Suspense } from "react";
import { AddWhatsappDialog, TableLoading } from "./_components";
import { SessionsTable } from "./_components/sessions-table";

const DashboardWhatsappPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">My Whatsapp Numbers</h1>
        <AddWhatsappDialog />
      </div>

      <Suspense fallback={<TableLoading />}>
        <SessionsTable />
      </Suspense>
    </div>
  );
};
export default DashboardWhatsappPage;
