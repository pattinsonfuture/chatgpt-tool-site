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
    model:"text-davinci-003",
    prompt,
    temperature: 0.6,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
    top_p: 1,
    stop: ["老闆:", "你:"],
  };

  const stream = await QueryStream(payload);
  return new Response(stream);
};

export default SendChatGPT;