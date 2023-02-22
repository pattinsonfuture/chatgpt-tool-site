import openai from "./chatgpt";

const queryQA = async (prompt: string, chatId: string) => {
    const res = await openai.createCompletion({
        model:"text-davinci-003",
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    .then((res) => {
        // console.log(res.data);        
        return res.data.choices[0].text
    })
    .catch((err) => `ChatGPT Error: ${err.message}`);

    return res;
}


export default queryQA;