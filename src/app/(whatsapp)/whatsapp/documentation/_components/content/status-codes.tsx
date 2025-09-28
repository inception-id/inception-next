export const StatusCodesContent = () => {
  return (
    <div id="status-codes">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors">
        4. Status Codes
      </h2>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>200: Your message is DELIVERED</li>
        <li>201: Your message is PENDING</li>
        <li>400: Your request is INVALID, check response message parameter.</li>
        <li>401: Missing x-client-id or x-api-key header.</li>
        <li>403: Invalid x-client-id or x-api-key header.</li>
        <li>500: Blame and contact the maintainer at +62-838-0727-5627.</li>
      </ul>
    </div>
  );
};
