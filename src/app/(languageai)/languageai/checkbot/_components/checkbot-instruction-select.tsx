import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { findAllAiSystemPrompt } from "@/lib/api/ai-system-prompt/findAllAiSystemPrompt";
import { useCheckbotStore } from "@/app/(languageai)/languageai/checkbot/_lib/useCheckbotStore";
import { useShallow } from "zustand/react/shallow";

const CheckbotInstructionSelection = () => {
  const { updateStore } = useCheckbotStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );
  const { data } = useQuery({
    queryKey: ["checkbotInstructionSelection"],
    queryFn: async () => {
      try {
        const instructions = await findAllAiSystemPrompt("checkbot");
        updateStore("instructions", instructions.data);
        return instructions.data;
      } catch (e: any) {
        console.error(e);
        return [];
      }
    },
  });

  return (
    <Select name="instruction_id">
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="Select instruction" />
      </SelectTrigger>
      <SelectContent>
        {data &&
          data?.length > 0 &&
          data?.map((instruction) => (
            <SelectItem
              key={`instruction_${instruction.id}`}
              value={String(instruction.id)}
              className="capitalize"
            >
              {instruction.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default CheckbotInstructionSelection;
