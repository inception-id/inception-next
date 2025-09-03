import Image from "next/image";
import Link from "next/link";

const NOTIFICATION_CURL = `
  curl
  --location 'https://api.inception.id/whatsapp/notifications' \

  --header 'x-client-id: xxxx-...' \ // Your API Key client ID (format: UUID)
  --header 'x-api-key: xxx' \ // Your API Key
  --header 'Content-Type: application/json' \

  --data '{
      "targetPhoneNumber": "821xxx", // Your Client Phone Number, don't put 0 prefix
      "message": "Hello World!", // Your message
      "environment": "DEVELOPMENT" // Environment: PRODUCTION or DEVELOPMENT
      "countryCode": "62" // Country code of your client's phone number, do not put 0 prefix (OPTIONAL: default is 62)
  }'
`;

const NOTIFICATION_RESPONSE = `
  {
      "status": 201,
      "data": {
          "notificationId": "xxx", // Your Notification ID (format: UUID)
          "targetPhoneNumber": "821xxx", // Your client's phone number
          "message": "Hello World!", // Your message
          "environment": "DEVELOPMENT" // Environment: PRODUCTION or DEVELOPMENT
          "countryCode": "62" // Country code of your client's phone number
      },
      "message": "CREATED"
  }
  `;

const CURL = `
  curl
  --location 'https://api.inception.id/whatsapp/messages' \

  --header 'x-client-id: xxxx-...' \ // Your API Key client ID (format: UUID)
  --header 'x-api-key: xxx' \ // Your API Key
  --header 'Content-Type: application/json' \

  --data '{
      "whatsappPhoneId": "xxxx-", // Whatsapp ID of your registered number - shown on the page after scanning (format: UUID)
      "whatsappPhoneNumber": "821xxxxx", // Your registered number on Inception, don't put 0 prefix
      "targetPhoneNumber": "821xxxx", // Your client's phone number, don't put 0 prefix
      "message": "Hello World!", // Your message
      "environment": "DEVELOPMENT" // Environment: PRODUCTION or DEVELOPMENT
      "countryCode": "62" // Country code of your client's phone number, do not put 0 prefix (OPTIONAL: default is 62)
  }'
`;

const CURL_RESPONSE = `{
    "status": 201, // HTTP Status
    "data": {
        "messageId": "e384b429-...", // Unique ID of each message (format: UUID)
        "whatsappPhoneId": "63d35f18-...", // Your phone ID from registered number list (format: UUID)
        "whatsappPhoneNumber": "821...", // Your registered phone number on Inception
        "targetPhoneNumber": "821...", // Your client's phone number
        "message": "Hello World!", // Your message
        "environment": "DEVELOPMENT" // Environment: PRODUCTION or DEVELOPMENT
        "countryCode": "62" // Country code of your client's phone number
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
        Send Whatsapp message/notification via REST API to your client&apos;s
        phone number.
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
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6"
        id="wa-inception"
      >
        3. Sending message/notification via Inception number
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Upon obtaining Client ID and API Key, you can now send messages via our
        REST API. Here&apos;s how to send messages/notification with our number:
      </p>
      <p className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold whitespace-pre mt-6">
        {NOTIFICATION_CURL}
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Example Response (
        <Link
          href="#status-code"
          className="underline text-blue-700 hover:text-blue-600"
        >
          STATUS CODES
        </Link>
        ) :{" "}
      </p>
      <p className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold whitespace-pre mt-6">
        {NOTIFICATION_RESPONSE}
      </p>
      <p className="text-muted-foreground text-sm">
        * Sent messages with Inception number will also appear on{" "}
        <i>Sent Notifications</i> page on your dashboard.
      </p>
      <p className="text-muted-foreground text-sm">
        * If you see that Whatsapp showing our number rather than our brand with
        a checkmark, it&apos;s because we are still in Meta Business
        verification progress. Wish us luck!
      </p>
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6"
        id="wa-self"
      >
        4. Sending message/notification with your number
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Click <u>My Numbers</u> on the sidebar menu and you will be redirected
        to the registered numbers page. Afteward, click <u>Add New Number</u>, a
        new popup will appear for you to enter and scan your number.
      </p>
      <Image
        width={1890}
        height={800}
        alt="Inception Numbers"
        src="/images/whatsapp/documentation/numbers.png"
        className="shadow object-cover w-full h-auto rounded mt-6"
      />
      <Image
        width={1890}
        height={800}
        alt="Inception Add Number"
        src="/images/whatsapp/documentation/numbers-2.png"
        className="shadow object-cover w-full h-auto rounded mt-6"
      />
      <p className="text-muted-foreground text-sm">
        * Synced number will appear on the page once the popup closed. Try to
        reload if your number hasn&apos;t shown.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        After your number shows on the page, you can now send messages via our
        REST API. Here&apos;s how to send messages/notification with your
        number:
      </p>
      <p className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold whitespace-pre mt-6">
        {CURL}
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Example Response (
        <Link
          href="#status-code"
          className="underline text-blue-700 hover:text-blue-600"
        >
          STATUS CODES
        </Link>
        ) :{" "}
      </p>
      <p className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold whitespace-pre mt-6">
        {CURL_RESPONSE}
      </p>
      <p className="text-muted-foreground text-sm">
        * Sent messages with your number will also appear on{" "}
        <i>Sent Messages</i> page on your dashboard.
      </p>
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6"
        id="status-code"
      >
        5. Status Codes
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>201: Created and your message is sent</li>
        <li>
          400: Something is wrong with your parameter, will show the error on
          the message.
        </li>
        <li>401: Missing x-client-id or x-api-key</li>
        <li>403: Invalid x-client-id or x-api-key</li>
        <li>
          429: You reached your monthly rate limit. (Only for DEVELOPMENT
          environment)
        </li>
        <li>500: Blame the error on our side</li>
      </ul>
    </div>
  );
};
