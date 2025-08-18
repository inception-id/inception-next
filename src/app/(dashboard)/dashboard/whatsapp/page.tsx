import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { EnvironmentFilter } from "./_components/environment-fillter";
import { Dashboard } from "./_components";
import { WhatsappMessageType } from "@/lib/api/whatsapp/client";

const Loading = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:flex-row">
      <Skeleton className="w-full h-48 sm:h-[50rem]" />
      <Skeleton className="w-full h-96 sm:w-1/4 sm:h-[50rem]" />
    </div>
  );
};

type WhatsappDashboardProps = {
  searchParams: Promise<{ environment: WhatsappMessageType }>;
};

const WhatsappDashboard = async ({ searchParams }: WhatsappDashboardProps) => {
  const { environment = WhatsappMessageType.Development } = await searchParams;
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Home</h1>
        <EnvironmentFilter />
      </div>
      <Suspense fallback={<Loading />}>
        <Dashboard environment={environment} />
      </Suspense>
    </div>
  );
};

export default WhatsappDashboard;
