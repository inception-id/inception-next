import { WhatsappSession } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteDialog } from "./delete-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LuEye } from "react-icons/lu";
import { toast } from "sonner";

export const TABLE_COLUMNS: ColumnDef<WhatsappSession>[] = [
  {
    header: "id",
    accessorKey: "id",
    cell: ({ row }) => {
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
            value={row.original.id}
            readOnly
            onClick={async () => {
              await navigator.clipboard.writeText(row.original.id);
              toast.info("ID copied to clipboard");
            }}
          />
        </div>
      );
    },
  },
  {
    header: "Phone Number",
    accessorKey: "phone",
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
    header: "Updated At",
    accessorKey: "updated_at",
    cell: ({ row }) => {
      const updatedAt = row.original.updated_at;
      return <span>{new Date(updatedAt).toLocaleString("id-ID")}</span>;
    },
  },
  {
    header: "",
    accessorKey: "is_ready",
    cell: ({ row }) => {
      return <DeleteDialog session={row.original} />;
    },
  },
];
