import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const OpenAIConfig = new OpenAIApi(config);

export default OpenAIConfig;