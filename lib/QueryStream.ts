// import openai from "./OpenAIConfig";
import { OpenAIStreamPayload } from "@/constants/typings";
import {
    createParser,
    ParsedEvent,
    ReconnectInterval,
  } from "eventsource-parser";


const QueryStream = async (payload:OpenAIStreamPayload) => {
    // console.log('QueryStream', prompt);
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    let counter = 0;

    const res = await fetch("https://api.openai.com/v1/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    
    console.log("payload", payload);
    

    // const res = await openai.createCompletion({
    //   model:"text-davinci-003",
    //   prompt,
    //   temperature: 0.9,
    //   top_p: 1,
    //   max_tokens: 200,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    //   stream: true,
    //   n: 1,
    // });
    
    const stream = new ReadableStream({
      async start(controller) {
        // callback
        function onParse(event: ParsedEvent | ReconnectInterval) {
          if (event.type === "event") {
            const data = event.data;
            // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const text = json.choices[0].text ?? "";
              
              if (counter < 2 && (text.match(/\n/) || []).length) {
                // this is a prefix character (i.e., "\n\n"), do nothing
                return;
              }
              const queue = encoder.encode(text);
              controller.enqueue(queue);
              counter++;
            } catch (e) {
              // maybe parse error              
              controller.error(e);
            }
          }
        }
  
        // stream response (SSE) from OpenAI may be fragmented into multiple chunks
        // this ensures we properly read chunks and invoke an event for each SSE event stream
        const parser = createParser(onParse);
        // https://web.dev/streams/#asynchronous-iteration    
        for await (const chunk of res.body as any) {
          parser.feed(decoder.decode(chunk));
        }
      },

      async cancel() {
        console.log("cancel");
        // res.body.cancel();
      },

      async pull(controller) {
        console.log("pull");
        // res.body.cancel();
      },
    });

    return stream;
}


export default QueryStream;