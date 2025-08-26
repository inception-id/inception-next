import { Suspense } from "react";
import { CreateDialog, Keys } from "./_components";
import { TableLoading } from "@/components/custom-ui";

const ApiKeysPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">API Keys</h1>
        <CreateDialog />
      </div>
      <Suspense fallback={<TableLoading />}>
        <Keys />
      </Suspense>
    </div>
  );
};

export default ApiKeysPage;
