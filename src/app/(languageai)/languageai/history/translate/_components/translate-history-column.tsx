import { ColumnDef } from "@tanstack/table-core";
import { TTranslation } from "@/lib/api/translation/createTranslation";
import TranslateOriginalTextColumn from "@/app/(languageai)/languageai/history/translate/_components/translate-original-text-column";
import TranslateTranslatedTextColumn from "@/app/(languageai)/languageai/history/translate/_components/translate-tranlated-text-column";

export const TranslateHistoryColumn: ColumnDef<TTranslation>[] = [
  {
    accessorKey: "content",
    header: "Original Text",
    cell: ({ row }) => <TranslateOriginalTextColumn row={row} />,
  },
  {
    accessorKey: "completion",
    header: "Translated Text",
    cell: ({ row }) => <TranslateTranslatedTextColumn row={row} />,
  },
];
