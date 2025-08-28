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
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Inception Whatsapp API
      </h1>
      <p className="text-muted-foreground text-xl leading-7 [&:not(:first-child)]:my-6">
        Send Whatsapp message/notification via REST API to your client's phone
        number.
      </p>
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        id="login"
      >
        1. Login/Register
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Click{" "}
        <Link
          href="/auth/login"
          className="underline text-blue-700 hover:text-blue-600"
        >
          login
        </Link>{" "}
        on the navbar. Enter your credentials or register new account. You will
        be redirected to your dashboard.
      </p>

      <Image
        width={1890}
        height={800}
        alt="Inception Dashboard"
        src="/images/whatsapp/documentation/dashboard.png"
        className="shadow object-cover w-full h-auto rounded mt-6"
      />
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6"
        id="key"
      >
        2. Create API Key
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Click <u>API Keys</u> on the sidebar menu and you will be redirected to
        the API Keys page. Afteward, click <u>Create New Key</u>, a new popup
        will appear with your new API Key.
      </p>
      <Image
        width={1890}
        height={800}
        alt="Inception API Key"
        src="/images/whatsapp/documentation/api-key-1.png"
        className="shadow object-cover w-full h-auto rounded mt-6"
      />
      <Image
        width={1890}
        height={800}
        alt="Inception API Key Popup"
        src="/images/whatsapp/documentation/api-key-2.png"
        className="shadow object-cover w-full h-auto rounded mt-6"
      />

      <blockquote className="mt-6 border-l-2 pl-6 italic">
        Please copy and save the api key, you will not be able to see it again
        after the popup closed.
      </blockquote>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        API Key function
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        By default, all request sent to us via REST API should have the
        following values on the header:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>x-client-id: your API Key client ID</li>
        <li>x-api-key: your API Key value</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Any request sent without those headers will return 401 (Unauthorised),
        and invalid values will return 403 (Forbidden).
      </p>
    </div>
  );
};
