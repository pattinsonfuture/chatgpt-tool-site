import QueryStream, { OpenAIStreamPayload } from '@/lib/QueryStream';

export const config = {
  runtime: "edge",
};

const SendChatGPT = async (req: Request): Promise<Response> => {
  const { prompt,history } = (await req.json()) as {
    prompt?: string;
    history?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  // prompt 加上歷史對話
  // const historyPrompt = history


  const payload: OpenAIStreamPayload = {
    model:"text-davinci-003",
    prompt:"以下是與AI的對話。AI樂於助人，富有創造力，聰明且非常友好。\n\n" + history + "\nAI:",
    temperature: 0.9,
    top_p: 1,
    max_tokens: 150,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stream: true,
    n: 1,
    stop: ["人類:", "AI:"],
  };

  const stream = await QueryStream(payload);
  return new Response(stream);
};

export default SendChatGPT;