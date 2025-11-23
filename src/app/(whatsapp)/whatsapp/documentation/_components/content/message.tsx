import { CurlCard } from "./curl-card";
import { CurlTable } from "./curl-table";
import { JsonTable } from "./json-table";
import Image from "next/image";

const singleCurlRequest = `
  curl
  --location 'https://api.inception.id/whatsapp/messages'
  --header 'x-client-id: xxx'
  --header 'x-api-key: xxx'
  --header 'Content-Type: application/json'
  --data '{
      "whatsappPhoneId": "xxx-xxx-xxx",
      "whatsappPhoneNumber": "812xxx",
      "message": "Hello World!",
      "targetPhoneNumber": "813xxx",
      "countryCode": "62",
      "environment": "PRODUCTION",
      "sendNow": true,
      "mediaUrl": "https://example.com/image.jpg" (OPTIONAL: Use to send attachment)
  }'
`;

const multiCurlRequest = `
  curl
  --location 'https://api.inception.id/whatsapp/messages/batch'
  --header 'x-client-id: xxx'
  --header 'x-api-key: xxx'
  --header 'Content-Type: application/json'
  --data '[
    {
      "whatsappPhoneId": "xxx-xxx-xxx",
      "whatsappPhoneNumber": "812xxx",
      "message": "Hello World!",
      "targetPhoneNumber": "813xxx",
      "countryCode": "62",
      "environment": "PRODUCTION",
      "sendNow": true,
      "mediaUrl": "https://example.com/image.jpg" (OPTIONAL: Use to send attachment)
    },
    {
      "whatsappPhoneId": "xxx-xxx-xxx",
      "whatsappPhoneNumber": "812xxx",
      "message": "Hello World 2!",
      "targetPhoneNumber": "814xxx",
      "countryCode": "62",
      "environment": "PRODUCTION",
      "sendNow": true,
      "mediaUrl": "https://example.com/image.jpg" (OPTIONAL: Use to send attachment)
    }
  ]'
`;

const HEADER = [
  {
    key: "x-client-id",
    value: "xxx",
    description: "Your generated API Key's Client ID",
  },
  {
    key: "x-api-key",
    value: "xxx",
    description: "Your generated API Key",
  },
];

const BODY = [
  {
    key: "whatsappPhoneId",
    value: "uuid",
    description: "whatappPhoneId of your registered phone number",
  },
  {
    key: "whatsappPhoneNumber",
    value: "phone number",
    description: "Your registered phone number",
  },
  {
    key: "message",
    value: "string",
    description: "The message to send",
  },
  {
    key: "targetPhoneNumber",
    value: "Your client/user's phone number",
    description:
      "Any phone number, don't include the country code or 0 prefix.",
  },
  {
    key: "countryCode (OPTIONAL)",
    value: "The country code of targetPhoneNumber (Default: 62)",
    description:
      "The country code of targetPhoneNumber, don't put the + prefix.",
  },
  {
    key: "environment (OPTIONAL)",
    value: "DEVELOPMENT or PRODUCTION (Default: DEVELOPMENT)",
    description:
      "Development environment is the free version of Inception. If the message count has reached the monthly limit, the default will be PRODUCTION.",
  },
  {
    key: "sendNow (OPTIONAL)",
    value: "boolean (Default: true)",
    description: "Whether to send the message immediately or not.",
  },
  {
    key: "mediaUrl (OPTIONAL)",
    value: "Url link to media file",
    description:
      "Send message with media attachment, please ensure your link is valid and accessible.",
  },
];

const singleCurlResponse = `
  {
      "status": 200,
      "data": {
          "id": "xxx-xxx-xxx-xxx",
          session_id": "xxx-xxx-xxx-xxx",
          "created_at": "2025-09-27T01:27:10.606Z",
          "updated_at": "2025-09-27T01:27:10.606Z",
          "target_phone": "812xxx",
          "text_message": "Hello World!",
          "environment": "PRODUCTION",
          "status": "DELIVERED",
          "media_url": null, // Will be string if mediaUrl is provided
      },
      "message": "DELIVERED"
  }
`;

const multiCurlResponse = `
  {
      "status": 200,
      "data": {
        "count": 2
      },
      "message": "PENDING"
  }
`;

const JSON_DATA = [
  {
    key: "id",
    value: "uuid",
    description: "Unique identifier for the message",
  },
  {
    key: "session_id",
    value: "uuid",
    description: "Your whatappPhoneId",
  },
  {
    key: "created_at",
    value: "timestamp",
    description: "Timestamp of the message creation",
  },
  {
    key: "updated_at",
    value: "timestamp",
    description: "Timestamp of the message creation",
  },
  {
    key: "target_phone",
    value: "Your client/user's phone number",
    description: "Your request's targetPhoneNumber",
  },
  {
    key: "text_message",
    value: "string",
    description: "Your request's message",
  },
  {
    key: "environment",
    value: "DEVELOPMENT or PRODUCTION (Default: DEVELOPMENT)",
    description:
      "Development environment is the free version of Inception. If the message count has reached the monthly limit, the default will be PRODUCTION.",
  },
  {
    key: "status",
    value: "DELIVERED or PENDING or FAILED",
    description:
      "DELIVERED means the message has been successfully delivered to the target phone number. PENDING means the message is in the scheduled queue still being processed and has not yet been delivered.",
  },
  {
    key: "media_url",
    value: "string or null",
    description: "Your request's media URL, will be null if no media is sent",
  },
];

export const MessageContent = () => {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        3. Send with your number
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Upon obtaining the <b>x-client-id</b> and <b>x-api-key</b>, you can send
        a message/notification via REST API. Before that, you need to register
        your number to our system and <b>does not need to be verified</b>.
      </p>

      <h3
        id="message-add"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        3.1 Add your number
      </h3>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Click <b>My Numbers</b> on the sidebar, then click <b>Add a Number</b>{" "}
        on the top right corner. A popup will appear asking for your phone
        number and showing a verification QR. After your number shows on the
        page, you can proceed to send a message/notification.
      </p>

      <Image
        src="/images/whatsapp/documentation/numbers.png"
        alt="dashboard"
        width={1024}
        height={768}
        className="mt-6 w-full h-auto object-cover"
      />

      <h3
        id="message-single"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        3.2 Send one message/notification
      </h3>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To send a message/notification, we implemented a queue system to prevent
        your number getting banned from sending too many messages. However,
        users can opt in to bypass our queue system with the <b>sendNow</b>{" "}
        parameter.
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
        REQUEST
      </h4>
      <CurlCard code={singleCurlRequest} />

      <CurlTable
        url="https://api.inception.id/whatsapp/messages"
        method="POST"
        headers={HEADER}
        body={BODY}
      />

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        RESPONSE
      </h4>
      <CurlCard code={singleCurlResponse} />
      <JsonTable json={JSON_DATA} />

      <h3
        id="message-multiple"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        3.3 Send multiple messages/notifications
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The curl data for single and multiple request is similar except for the
        body parameter. For multiple request, the body parameter is a JSON array
        containing multiple JSON objects representing multiple
        messages/notifications.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Please note that the request received via <b>/batch</b> endpoints will
        have PENDING status by default. That means the message will be queued
        and sent later. Queue runs every 10 minutes.
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        REQUEST
      </h4>
      <CurlCard code={multiCurlRequest} />
      <CurlTable
        url="https://api.inception.id/whatsapp/messages/batch"
        method="POST"
        headers={HEADER}
        body={BODY}
      />

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        RESPONSE
      </h4>
      <CurlCard code={multiCurlResponse} />
      <JsonTable
        json={[
          {
            key: "count",
            value: "number",
            description: "Number of messages in the request array",
          },
        ]}
      />
    </div>
  );
};
