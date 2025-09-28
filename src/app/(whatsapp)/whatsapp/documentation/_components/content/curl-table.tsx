type Header = {
  key: string;
  value: string;
  description: string;
};
type Body = {
  key: string;
  value: string;
  description: string;
};

type CurlTableProps = {
  url: string;
  method: "POST" | "GET";
  headers: Header[];
  body: Body[];
};

export const CurlTable = ({ url, method, headers, body }: CurlTableProps) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Key
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Value
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              URL
            </td>
            <td
              className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
              colSpan={2}
            >
              {url}
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Method
            </td>
            <td
              className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
              colSpan={2}
            >
              {method}
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td
              className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
              colSpan={3}
            >
              Header
            </td>
          </tr>
          {headers.map((header) => (
            <tr className="even:bg-muted m-0 border-t p-0" key={header.key}>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {header.key}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {header.value}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {header.description}
              </td>
            </tr>
          ))}
          <tr className="even:bg-muted m-0 border-t p-0">
            <td
              className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
              colSpan={3}
            >
              Body
            </td>
          </tr>
          {body.map((item) => (
            <tr className="even:bg-muted m-0 border-t p-0" key={item.key}>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {item.key}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {item.value}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
