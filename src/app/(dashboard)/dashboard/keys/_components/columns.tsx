import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LuEye } from "react-icons/lu";
import { toast } from "sonner";
import { ApiKey } from "@/lib/api/api-keys";
import { DeleteDialog } from "./delete-dialog";

type IdColumnProps = {
  apiKey: ApiKey;
};

const IdColumn = ({ apiKey }: IdColumnProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center border rounded-md w-fit">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-r-none"
        onClick={() => setShow(!show)}
      >
        <LuEye />
      </Button>
      <Input
        className="border-none rounded-l-none w-fit"
        type={show ? "text" : "password"}
        value={apiKey.id}
        readOnly
        onClick={async () => {
          await navigator.clipboard.writeText(apiKey.id);
          toast.info("ID copied to clipboard");
        }}
      />
    </div>
  );
};

export const TABLE_COLUMNS: ColumnDef<ApiKey>[] = [
  {
    header: "Key ID",
    accessorKey: "id",
    cell: ({ row }) => {
      return <IdColumn apiKey={row.original} />;
    },
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const createdAt = row.original.created_at;
      return <span>{new Date(createdAt).toLocaleString("id-ID")}</span>;
    },
  },
  {
    header: "",
    accessorKey: "updated_at",
    cell: ({ row }) => {
      return <DeleteDialog apiKey={row.original} />;
    },
  },
];
