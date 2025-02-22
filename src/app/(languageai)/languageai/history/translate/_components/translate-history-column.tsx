import { ColumnDef } from "@tanstack/table-core";
import { TTranslation } from "@/lib/api/translation/createTranslation";
import TranslateTranslatedTextColumn from "@/app/(languageai)/languageai/history/translate/_components/translate-tranlated-text-column";
import TranslateHistorySaveBtn from "@/app/(languageai)/languageai/history/translate/_components/translate-history-save-btn";
import TranslateContentColumn from "@/app/(languageai)/languageai/translate/_components/columns/translate-content-column";

export const TranslateHistoryColumn: ColumnDef<TTranslation>[] = [
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <TranslateContentColumn row={row.original} />,
  },
  {
    accessorKey: "completion",
    header: "Translated Text",
    cell: ({ row }) => <TranslateTranslatedTextColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TranslateHistorySaveBtn row={row} />,
  },
];
