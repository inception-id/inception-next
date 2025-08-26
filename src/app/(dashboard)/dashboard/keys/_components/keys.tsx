import { findApiKeys } from "@/lib/api/api-keys";
import { ApiKeyTable } from "./table";

export const Keys = async () => {
  const apiKeys = await findApiKeys();
  return (
    <div className="w-full h-[34rem] sm:h-[50rem] overflow-y-auto">
      <ApiKeyTable data={apiKeys.data} />
    </div>
  );
};
