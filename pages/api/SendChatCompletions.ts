import { ChatCompletionsMessages, OpenAIChatCompletionsPayload } from '@/constants/typings';
import StreamChatCompletions from '@/lib/StreamChatCompletions ';

export const config = {
  runtime: "edge",
};

const SendChatCompletions = async (req: Request): Promise<Response> => {
  const { messages } = (await req.json()) as {
    messages:ChatCompletionsMessages[]
  };

  if (!messages) {
    return new Response("No message in the request", { status: 400 });
  }

  // prompt 加上歷史對話
  // const historyPrompt = history

  // 新的model
  const payload: OpenAIChatCompletionsPayload = {
    model:"gpt-3.5-turbo",
    messages: [
      // { "role":"system","content":"如果需要列表或代碼，你都會用markdown格式回覆" },
      ...messages
    ],
    temperature: 0.7,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  };

  // console.log("payload",payload);
  

  const stream = await StreamChatCompletions(payload);


  return new Response(stream);
};

export default SendChatCompletions;