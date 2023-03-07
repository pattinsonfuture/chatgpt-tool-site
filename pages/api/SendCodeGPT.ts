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
    max_tokens: 600,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
    stop: ["\"\"\""],
  };

  const stream = await QueryStream(payload);

  // 判斷stream狀態是否error
  // const reader = stream.getReader();
  // reader.read().catch(error => {
  //   console.log('处理错误:', error);
  // });

  // 超過 9 秒沒有回應就結束 並回應錯誤 
  // const timeout = setTimeout(() => {
  //   // stream.getReader()
  //   // stream.cancel();
  //   return new Response("Timeout", { status: 408 });
  // }, 9000);




  return new Response(stream);
};

export default SendChatGPT;