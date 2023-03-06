import { OpenAIChatCompletionsPayload } from "@/constants/typings";
import {
    createParser,
    ParsedEvent,
    ReconnectInterval,
  } from "eventsource-parser";



const StreamChatCompletions = async (payload:OpenAIChatCompletionsPayload) => {
    // console.log('QueryStream', prompt);
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    let counter = 0;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    // console.log("res",res);
     
    const stream = new ReadableStream({      
      async start(controller) {    
        
        // console.log("stream state:", controller.desiredSize);
        // callback
        function onParse(event: ParsedEvent | ReconnectInterval) {
          if (event.type === "event") {
            const data = event.data;
            // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
            if (data === "[DONE]") {
              // console.log("controller DONE");              
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              // console.log("json",json);
              const role = json.choices[0].delta?.role;
              const content = json.choices[0].delta?.content ?? "";
              // console.log("stream state in onParse:", controller.desiredSize);
                  
              // 排除content為空或undefined的情況
              if (counter < 2 && (content.match(/\n/) || []).length || !content) {
                // this is a prefix character (i.e., "\n\n"), do nothing
                return;
              }
              const queue = encoder.encode(content);
              
              controller.enqueue(queue);
              counter++;
            } catch (e) {
              // maybe parse error
              // console.log("controller error",e);
              
              controller.error(e);
            }
          }
        }
  
        // stream response (SSE) from OpenAI may be fragmented into multiple chunks
        // this ensures we properly read chunks and invoke an event for each SSE event stream
        const parser = createParser(onParse);
        // https://web.dev/streams/#asynchronous-iteration


        
        for await (const chunk of res.body as any) {
          // console.log("decode",decoder.decode(chunk));
          // controller.enqueue(decoder.decode(chunk));
          
          parser.feed(decoder.decode(chunk));
        }
      },
    });

    // console.log("stream",stream);

    return stream;
}


export default StreamChatCompletions;