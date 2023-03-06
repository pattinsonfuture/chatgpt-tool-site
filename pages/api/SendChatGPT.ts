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
    prompt:"如果需要列表或代碼，你都會用markdown格式回覆\n"+history + "\n你:",
    temperature: 0.1,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
    stop: ["我:", "你:"],
  };

  const stream = await QueryStream(payload);
  return new Response(stream);
};

export default SendChatGPT;