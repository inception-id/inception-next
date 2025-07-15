import { LoginCard } from "./_components";

type LoginPageProps = {
  searchParams: Promise<{ t?: string }>;
};

const LoginPage = async ({ searchParams }: LoginPageProps) => {
  const { t } = await searchParams;
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <h1 className="mb-4 text-2xl">INCEPTION</h1>
        <LoginCard token={t} />
      </div>
    </div>
  );
};

export default LoginPage;
