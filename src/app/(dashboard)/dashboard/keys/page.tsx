import { CreateDialog } from "./_components";

const ApiKeysPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">API Keys</h1>
        <CreateDialog />
        {/* <EnvironmentFilter /> */}
      </div>
    </div>
  );
};

export default ApiKeysPage;
