import Image from "next/image";
import Link from "next/link";

const CURL = `curl
  --location 'https://api.inception.id/whatsapp/messages'
  --header 'Content-Type: application/json'
  --data '{
      "whatsappPhoneId": "29c3d8b2-...", // Your phone ID from registered number list (format: UUID)
      "whatsappPhoneNumber": "821...", // Your registered phone number, do not put 0 prefix
      "targetPhoneNumber": "821...", // Your client/target phone number, do not put 0 prefix
      "message": "Hello World!", // Message you want to send
      "environment": "DEVELOPMENT" // Environment: DEVELOPMENT or PRODUCTION, must be uppercase
  }'`;

const CURL_RESPONSE = `{
    "status": 201, // HTTP Status
    "data": {
        "messageId": "e384b429-...", // Unique ID of each message (format: UUID)
        "whatsappPhoneId": "63d35f18-...", // Your phone ID from registered number list (format: UUID)
        "whatsappPhoneNumber": "821...", // Your registered phone number
        "targetPhoneNumber": "821...", // Your client/target phone number
        "message": "Hello World!", // Message you want to send
        "environment": "DEVELOPMENT" // Environment: DEVELOPMENT or PRODUCTION
    },
    "message": "" // Will show if there's any error
}`;

export const Content = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Inception Whatsapp API
      </h1>
      <p className="leading-7 [&:not(:first-child)]:my-6">
        Send Whatsapp Messages via REST API to your client&apos;s phone number.
      </p>
      <h2
        id="first"
        className="scroll-m-20 border-b pb-2 mb-4 text-3xl font-semibold tracking-tight first:mt-0"
      >
        First Step
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Login or Register
      </h3>
      <p className="leading-7 [&:not(:first-child)]:my-6">
        Click{" "}
        <Link href="/auth/login" className="text-blue-500 underline">
          Login
        </Link>{" "}
        on the navbar. Enter your credentials or create an account. You will be
        redirected to your dashboard.
      </p>
      <div className="flex flex-col">
        <Image
          src="/images/whatsapp/documentation/login-page.png"
          alt="Whatsapp Login"
          width={1024}
          height={1024}
          className="w-full h-auto sm:w-fit aspect-square object-fill"
        />
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Login Page
        </blockquote>
      </div>
      <p className="leading-7 [&:not(:first-child)]:my-6">
        Your dashboard will show the monthly rate of sent messages via Inception
        Whatsapp API. Development environment is shown by default.
      </p>
      <div className="flex flex-col">
        <Image
          src="/images/whatsapp/documentation/dashboard.png"
          alt="Whatsapp API Dashboard"
          width={2000}
          height={2000}
          className="w-full h-auto aspect-video object-fill"
        />
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Your Dashboard
        </blockquote>
      </div>

      <h2
        id="second"
        className="scroll-m-20 border-b pb-2 mt-8 mb-4 text-3xl font-semibold tracking-tight first:mt-0"
      >
        Second Step
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Add your number to send messages
      </h3>

      <p className="leading-7 [&:not(:first-child)]:my-6">
        Click{" "}
        <Link href="/auth/login" className="text-blue-500 underline">
          My Numbers
        </Link>{" "}
        on the sidebar. You will be redirected to your registered numbers list.
      </p>

      <div className="flex flex-col">
        <Image
          src="/images/whatsapp/documentation/numbers.png"
          alt="Whatsapp Numbers Dashboard"
          width={2000}
          height={2000}
          className="w-full h-auto aspect-video object-fill"
        />
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Whatsapp Numbers List
        </blockquote>
      </div>

      <p className="leading-7 [&:not(:first-child)]:my-6">
        Click on <b>Add a Number</b> button on the top right. Enter your number
        and scan the barcode with your Whatsapp to connect.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <Image
            src="/images/whatsapp/documentation/add-number.png"
            alt="Add Whatsapp Number"
            width={2000}
            height={2000}
            className="w-full h-auto aspect-video object-fill"
          />
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Add Whatsapp Number
          </blockquote>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/whatsapp/documentation/scan-number.png"
            alt="Scan Number"
            width={2000}
            height={2000}
            className="w-full h-auto aspect-video object-fill"
          />
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Scan barcode with your Whatsapp
          </blockquote>
        </div>
      </div>

      <p className="leading-7 [&:not(:first-child)]:my-6">
        As of now, you can only enter Indonesian number (+62) and the barcode
        will auto close in 30 seconds. Your number will show on the list after
        successful syncing.
      </p>

      <h2
        id="third"
        className="scroll-m-20 border-b pb-2 mt-8 mb-4 text-3xl font-semibold tracking-tight first:mt-0"
      >
        Third Step
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Send messages
      </h3>
      <p className="leading-7 [&:not(:first-child)]:my-6">
        You can now send messages via REST API with POST method. Curl example:
      </p>
      <div className="bg-muted w-fit max-w-screen overflow-x-auto">
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold whitespace-pre">
          {CURL}
        </code>
      </div>
      <p className="leading-7 [&:not(:first-child)]:my-6">Example response:</p>
      <div className="bg-muted w-fit max-w-screen overflow-x-auto">
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold whitespace-pre">
          {CURL_RESPONSE}
        </code>
      </div>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Response Status:
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>201: Created and your message is sent</li>
        <li>
          400: Something is wrong with your parameter, will show the error on
          the message.
        </li>
        <li>
          429: You reached your monthly rate limit. (Only for DEVELOPMENT
          environment)
        </li>
        <li>500: Blame the error on our side</li>
      </ul>

      <p className="leading-7 [&:not(:first-child)]:my-6">
        * As of now, you can only send messages to Indonesian number (+62)
      </p>
    </div>
  );
};
