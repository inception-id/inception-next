import { ColumnDef } from "@tanstack/table-core";
import { TCheckbotStorage } from "@/lib/api/checkbot/create-checkbot-storage";
import CheckbotStorageOriginalTextColumn from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-original-text-column";
import CheckbotStorageResultlColumn from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-result-column";
import CheckbotStorageActionColumn from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-action-column";

export const CheckbotStorageColumn: ColumnDef<TCheckbotStorage>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) =>
      row.original.title || <span className="opacity-50">No title</span>,
  },
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <CheckbotStorageOriginalTextColumn row={row} />,
  },
  {
    accessorKey: "updated_completion",
    header: "Result",
    cell: ({ row }) => <CheckbotStorageResultlColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <CheckbotStorageActionColumn row={row} />,
  },
];
