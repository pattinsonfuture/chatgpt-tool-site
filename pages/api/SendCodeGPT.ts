import { OpenAIStreamPayload } from '@/constants/typings';
import QueryStream from '@/lib/QueryStream';

export const config = {
  runtime: "edge",
};

const SendChatGPT = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model:"code-davinci-002",
    prompt: prompt.trim(),
    temperature: 0,
    max_tokens: 256,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
    top_p: 1,
    stop: ["\"\"\"","###"],
  };

  const stream = await QueryStream(payload);

  return new Response(stream);
};

export default SendChatGPT;