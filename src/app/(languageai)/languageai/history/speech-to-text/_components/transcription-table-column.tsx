import { ColumnDef } from "@tanstack/table-core";
import { TSpeechToText } from "@/lib/api/speech-to-text/createTranscription";
import TranscriptionAudioFileColumn from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-audio-file-column";
import TranscriptionTextColumn from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-text-column";
import TranscriptionHistorySaveBtn from "@/app/(languageai)/languageai/history/speech-to-text/_components/transcription-history-save-btn";

export const TranscriptionHistoryColumn: ColumnDef<TSpeechToText>[] = [
  {
    accessorKey: "audio_url",
    header: "Audio File",
    cell: ({ row }) => <TranscriptionAudioFileColumn row={row} />,
  },
  {
    accessorKey: "transcription_text",
    header: "Transcription",
    cell: ({ row }) => <TranscriptionTextColumn row={row} />,
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => <TranscriptionHistorySaveBtn row={row} />,
  },
];
