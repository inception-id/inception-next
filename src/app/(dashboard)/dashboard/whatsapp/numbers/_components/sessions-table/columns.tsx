import { WhatsappSession } from "@/lib/api/whatsapp/client";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteDialog } from "./delete-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LuEye } from "react-icons/lu";
import { toast } from "sonner";

type IdColumnProps = {
  session: WhatsappSession;
};

const IdColumn = ({ session }: IdColumnProps) => {
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
        value={session.id}
        readOnly
        onClick={async () => {
          await navigator.clipboard.writeText(session.id);
          toast.info("ID copied to clipboard");
        }}
      />
    </div>
  );
};

export const TABLE_COLUMNS: ColumnDef<WhatsappSession>[] = [
  {
    header: "Whatsapp Number ID",
    accessorKey: "id",
    cell: ({ row }) => {
      return <IdColumn session={row.original} />;
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
    header: "",
    accessorKey: "is_ready",
    cell: ({ row }) => {
      return <DeleteDialog session={row.original} />;
    },
  },
];
