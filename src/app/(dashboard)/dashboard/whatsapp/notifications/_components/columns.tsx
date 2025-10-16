import { buttonVariants } from "@/components/ui/button";
import { WhatsappNotification } from "@/lib/api/whatsapp/client";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { LuEye } from "react-icons/lu";
import { WhatsappStatusText } from "../../_components";

export const TABLE_COLUMNS: ColumnDef<WhatsappNotification>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue("created_at"));
      return <>{createdAt.toLocaleString("id-ID")}</>;
    },
  },
  {
    header: "Environment",
    accessorKey: "environment",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.original.status;
      return <WhatsappStatusText status={status} />;
    },
  },
  {
    header: "Country Code",
    accessorKey: "country_code",
  },
  {
    header: "To",
    accessorKey: "target_phone",
  },
  {
    header: "Text",
    accessorKey: "text_message",
  },
  {
    header: "Attachment",
    accessorKey: "media_url",
    cell: ({ row }) => {
      const mediaUrl = row.original.media_url;
      if (mediaUrl) {
        return (
          <a
            href={mediaUrl}
            target="_blank"
            className={cn(buttonVariants({ size: "icon" }))}
          >
            <LuEye />
          </a>
        );
      }
      return "-";
    },
  },
];
