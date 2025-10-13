import { CurlCard } from "./curl-card";
import { CurlTable } from "./curl-table";
import { JsonTable } from "./json-table";

const singleCurlRequest = `
  curl
  --location 'https://api.inception.id/whatsapp/notifications'
  --header 'x-client-id: xxx'
  --header 'x-api-key: xxx'
  --header 'Content-Type: application/json'
  --data '{
      "targetPhoneNumber": "812xxx",
      "message": "Hello World!",
      "environment": "DEVELOPMENT",
      "countryCode": "62",
      "mediaUrl": "https://example.com/image.jpg" (OPTIONAL: Use to send attachment)
  }'
`;

const multiCurlRequest = `
  curl
  --location 'https://api.inception.id/whatsapp/notifications/batch'
  --header 'x-client-id: xxx'
  --header 'x-api-key: xxx'
  --header 'Content-Type: application/json'
  --data '[
    {
      "targetPhoneNumber": "812xxx",
      "message": "Hello World!",
      "environment": "DEVELOPMENT",
      "countryCode": "62",
      "mediaUrl": "https://example.com/image.jpg" (OPTIONAL: Use to send attachment)
    },
    {
      "targetPhoneNumber": "817xxx",
      "message": "Hello World 2!",
      "environment": "DEVELOPMENT",
      "countryCode": "62",
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
          "created_at": "2025-09-27T01:27:10.606Z",
          "updated_at": "2025-09-27T01:27:10.606Z",
          "target_phone": "812xxx",
          "text_message": "Hello World!",
          "environment": "DEVELOPMENT",
          "country_code": "62",
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
    key: "country_code",
    value: "The country code of targetPhoneNumber (Default: 62)",
    description: "Your request's country code",
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

export const NotificationContent = () => {
  return (
    <div>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        2. Send via Inception number
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Upon obtaining the <b>x-client-id</b> and <b>x-api-key</b>, you can send
        a message/notification via REST API. Here&apos;s how to send with our
        number:
      </p>

      <h3
        id="notification-single"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        2.1 Send one message/notification
      </h3>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
        REQUEST
      </h4>
      <CurlCard code={singleCurlRequest} />
      <CurlTable
        url="https://api.inception.id/whatsapp/notifications"
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
        id="notification-multiple"
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        2.2 Send multiple messages/notifications
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
        url="https://api.inception.id/whatsapp/notifications/batch"
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
