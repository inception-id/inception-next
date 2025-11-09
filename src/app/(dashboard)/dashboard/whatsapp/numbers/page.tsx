import { Suspense } from "react";
import { AddWhatsappDialog } from "./_components";
import { SessionsTable } from "./_components/sessions-table";
import { TableLoading } from "@/components/custom-ui";

const DashboardWhatsappPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 container">
      <div className="flex items-center justify-between">
        <div className="grid">
          <h1 className="text-lg font-bold">Whatsapp Numbers</h1>
          <h2 className="text-xs">Your registered numbers</h2>
        </div>
        <AddWhatsappDialog />
      </div>

      <Suspense fallback={<TableLoading />}>
        <SessionsTable />
      </Suspense>
    </div>
  );
};
export default DashboardWhatsappPage;
