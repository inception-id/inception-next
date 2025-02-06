import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt, system } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system,
    prompt,
  });

  return result.toDataStreamResponse({
    headers: {
      'Transfer-Encoding': 'chunked',
      Connection: 'keep-alive',
    },
  });
}
