import Image from "next/image";
import Link from "next/link";

export const AuthenticationContent = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Inception Whatsapp API
      </h1>
      <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
        Send messages/notification via REST API to your client&apos;s phone
        number.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        1. Authentication
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Every API request must have two headers namely <b>x-client-id</b> and{" "}
        <b>x-api-key</b>, the following section will explain how to obtain them.
      </p>

      <h3
        id="auth-login"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        1.1 Login/Register
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Click <b>login</b> or go to{" "}
        <Link href="/auth/login" className="underline">
          this link
        </Link>{" "}
        to create new account. Once logged in, you will be redirected to your
        dashboard.
      </p>

      <Image
        src="/images/whatsapp/documentation/dashboard.png"
        alt="dashboard"
        width={1024}
        height={768}
        className="mt-6 w-full h-auto object-cover"
      />
      <h3
        id="auth-key"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        1.2 API Key
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Click <b>API Keys</b> on the sidebar, then click <b>Create New Key</b>{" "}
        on the top right corner to generate a new API key. Please copy and save
        the api key once generated, you will not be able to see it again after
        the popup closed.
      </p>
      <Image
        src="/images/whatsapp/documentation/api-key-1.png"
        alt="dashboard"
        width={1024}
        height={768}
        className="mt-6 w-full h-auto object-cover"
      />
    </div>
  );
};
